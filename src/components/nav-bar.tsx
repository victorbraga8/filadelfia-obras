import { useState, useEffect } from "react";
import { Menu, X, ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";

export default function NavBar({ isScrolled, scrollToSection, setIsMobileMenuOpen, isMobileMenuOpen }: any) {
  const [activeSection, setActiveSection] = useState('início');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['início', 'serviços', 'a-empresa', 'contato'];

      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -100 && rect.top <= 300;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 border-b ${isScrolled
          ? 'bg-slate-950/90 backdrop-blur-md shadow-lg border-slate-800 py-3'
          : 'bg-transparent border-transparent py-6'
          }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">

          <div
            className="flex items-center gap-2 cursor-pointer select-none group"
            onClick={() => scrollToSection('início')}
          >
            <img
              src="/logo.webp"
              alt="Filadélfia Obras"
              className="h-16 md:h-24 w-auto object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-lg"
            />
          </div>

          <ul className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {[
              { label: 'Início', id: 'início' },
              { label: 'Serviços', id: 'serviços' },
              { label: 'A Empresa', id: 'a-empresa' },
              { label: 'Contato', id: 'contato' },
            ].map((item) => (
              <li key={item.id}>
                <Button
                  variant="ghost"
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium uppercase tracking-widest transition-none! relative group py-2 h-auto px-2 bg-transparent! hover:bg-transparent! border-0! outline-none! ring-0! focus:ring-0! shadow-none! ${activeSection === item.id ? 'text-white' : 'text-gray-400 hover:text-white'
                    }`}
                >
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                </Button>
              </li>
            ))}

            <li>
              <Button
                onClick={() => scrollToSection('contato')}
                className="ml-4 bg-blue-600! hover:bg-blue-500! text-white! border-0! px-8 py-6 rounded-lg font-bold transition-all shadow-lg shadow-blue-900/20 hover:shadow-blue-600/40 active:scale-95 text-sm tracking-wide uppercase outline-none! focus:ring-0!"
              >
                Orçamento
              </Button>
            </li>
          </ul>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:bg-transparent! hover:text-blue-500 outline-none! focus:outline-none! border-none! ring-0! focus:ring-0! shadow-none!"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </Button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-slate-950/98 backdrop-blur-xl md:hidden flex flex-col justify-center items-center"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent -z-10 pointer-events-none"></div>

            <ul className="flex flex-col items-center gap-8 w-full px-8">
              {[
                { label: 'Início', id: 'início' },
                { label: 'Serviços', id: 'serviços' },
                { label: 'A Empresa', id: 'a-empresa' },
                { label: 'Contato', id: 'contato' },
              ].map((item) => (
                <li key={item.id} className="w-full text-center">
                  <button
                    onClick={() => {
                      scrollToSection(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`text-2xl font-bold uppercase tracking-widest transition-colors outline-none! border-none! focus:outline-none! bg-transparent! hover:bg-transparent! shadow-none! ${activeSection === item.id ? 'text-blue-500' : 'text-slate-300 hover:text-white'
                      }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li className="w-full mt-8 max-w-xs">
                <Button
                  onClick={() => {
                    scrollToSection('contato');
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full bg-blue-600! hover:bg-blue-500! text-white! py-6 rounded-xl font-bold text-lg uppercase tracking-wider shadow-xl shadow-blue-900/20 outline-none! border-none! focus:ring-0!"
                >
                  Solicitar Orçamento
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isScrolled && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 50 }}
            whileHover={{ y: -5, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            onClick={() => scrollToSection('início')}
            className="fixed bottom-8 right-6 md:right-10 z-50 p-4 rounded-full! bg-blue-600! text-white! border-none! outline-none! focus:outline-none! focus:ring-0! shadow-[0_10px_30px_rgba(37,99,235,0.5)]! hover:shadow-[0_10px_40px_rgba(37,99,235,0.7)]! cursor-pointer!"
            aria-label="Voltar ao topo"
          >
            <ArrowUp size={24} strokeWidth={3} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}