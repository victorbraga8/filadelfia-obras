import { Menu, X } from "lucide-react";

export default function NavBar({ isScrolled, scrollToSection, setIsMobileMenuOpen, isMobileMenuOpen }: any) {
  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900 shadow-lg py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-white tracking-tighter flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center text-white font-black text-xl shadow-lg shadow-blue-900/50">
            F
          </div>
          <span className="text-shadow-sm">FILADÉLFIA</span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {['Início', 'Serviços', 'A Empresa', 'Contato'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
              className="text-gray-300 hover:text-white text-sm font-medium uppercase tracking-widest transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
            </button>
          ))}

          <button
            onClick={() => scrollToSection('contato')}
            className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded font-bold transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)] border border-blue-500/50"
          >
            Orçamento
          </button>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  )
}