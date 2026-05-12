import { useCallback, useEffect, useState } from 'react';
import { Menu, X, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import { Button } from './ui/button';
import type { ScrollToSection } from '../lib/types/navigation';

const NAV_ITEMS = [
  { label: 'Início', id: 'início' },
  { label: 'Serviços', id: 'serviços' },
  { label: 'A Empresa', id: 'a-empresa' },
  { label: 'Contato', id: 'contato' },
] as const;

type NavBarProps = {
  scrollToSection: ScrollToSection;
};

export default function NavBar({ scrollToSection }: NavBarProps) {
  const [activeSection, setActiveSection] = useState('início');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (document.body.dataset.scrollLocked === 'true') {
        return;
      }

      const nextIsScrolled = window.scrollY > 50;
      setIsScrolled((previousValue) =>
        previousValue === nextIsScrolled ? previousValue : nextIsScrolled,
      );

      const currentSection = NAV_ITEMS.find((section) => {
        const element = document.getElementById(section.id);
        if (!element) {
          return false;
        }

        const rect = element.getBoundingClientRect();
        return rect.top >= -100 && rect.top <= 300;
      });

      if (currentSection) {
        setActiveSection((previousValue) =>
          previousValue === currentSection.id ? previousValue : currentSection.id,
        );
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSectionNavigation = useCallback(
    (sectionId: string) => {
      scrollToSection(sectionId);
      setIsMobileMenuOpen(false);
    },
    [scrollToSection],
  );

  const handleToggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((previousValue) => !previousValue);
  }, []);

  return (
    <>
      <nav
        className={`fixed z-50 w-full border-b transition-all duration-300 ${
          isScrolled
            ? 'border-slate-800 bg-slate-950/90 py-3 shadow-lg backdrop-blur-md'
            : 'border-transparent bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-6">
          <div
            className="group flex cursor-pointer items-center gap-2 select-none"
            onClick={() => handleSectionNavigation('início')}
          >
            <img
              src="/logo.webp"
              alt="Filadélfia Obras"
              className="h-32 w-auto object-contain drop-shadow-lg transition-transform duration-300 group-hover:scale-105 md:h-32"
            />
          </div>

          <ul className="hidden items-center space-x-6 md:flex lg:space-x-8">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <Button
                  variant="ghost"
                  onClick={() => handleSectionNavigation(item.id)}
                  className={`group relative h-auto bg-transparent px-2 py-2 text-sm font-medium tracking-widest uppercase transition-none! hover:bg-transparent! border-0! outline-none! ring-0! focus:ring-0! shadow-none! ${
                    activeSection === item.id
                      ? 'text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                      activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Button>
              </li>
            ))}

            <li>
              <Button
                onClick={() => handleSectionNavigation('contato')}
                className="ml-4 rounded-lg bg-blue-600! px-8 py-6 text-sm font-bold tracking-wide text-white! uppercase shadow-lg shadow-blue-900/20 transition-all hover:bg-blue-500! hover:shadow-blue-600/40 active:scale-95 border-0! outline-none! focus:ring-0!"
              >
                Orçamento
              </Button>
            </li>
          </ul>

          <Button
            variant="ghost"
            size="icon"
            className="text-white shadow-none! ring-0! border-none! outline-none! hover:bg-transparent! hover:text-blue-500 focus:outline-none! focus:ring-0! md:hidden"
            onClick={handleToggleMobileMenu}
            aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </Button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-slate-950/98 backdrop-blur-xl md:hidden"
          >
            <div className="pointer-events-none absolute top-0 left-0 -z-10 h-full w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent" />

            <ul className="flex w-full flex-col items-center gap-8 px-8">
              {NAV_ITEMS.map((item) => (
                <li key={item.id} className="w-full text-center">
                  <button
                    onClick={() => handleSectionNavigation(item.id)}
                    className={`bg-transparent! text-2xl font-bold tracking-widest uppercase transition-colors shadow-none! border-none! outline-none! hover:bg-transparent! focus:outline-none! ${
                      activeSection === item.id
                        ? 'text-blue-500'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}

              <li className="mt-8 w-full max-w-xs">
                <Button
                  onClick={() => handleSectionNavigation('contato')}
                  className="w-full rounded-xl bg-blue-600! py-6 text-lg font-bold tracking-wider text-white! uppercase shadow-xl shadow-blue-900/20 hover:bg-blue-500! border-none! outline-none! focus:ring-0!"
                >
                  Solicitar Orçamento
                </Button>
              </li>
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {isScrolled ? (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 50 }}
            whileHover={{ y: -5, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            onClick={() => handleSectionNavigation('início')}
            className="fixed right-6 bottom-8 z-60 cursor-pointer rounded-full! bg-blue-600! p-4 text-white! shadow-[0_10px_30px_rgba(37,99,235,0.5)]! outline-none! border-none! hover:shadow-[0_10px_40px_rgba(37,99,235,0.7)]! focus:outline-none! focus:ring-0! md:right-10"
            aria-label="Voltar ao topo"
          >
            <ArrowUp size={24} strokeWidth={3} />
          </motion.button>
        ) : null}
      </AnimatePresence>
    </>
  );
}
