import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 py-4 border-t border-slate-900 relative z-50 overflow-hidden">

      {/* Background de segurança para evitar vazamentos visuais */}
      <div className="absolute inset-0 bg-slate-950 -z-10"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Lado Esquerdo: Redes Sociais */}
          <div className="flex gap-4 order-2 md:order-1">
            <a href="#" className="p-2 rounded-full bg-slate-900 text-slate-400 hover:bg-blue-600 hover:text-white transition-all duration-300 border border-slate-800 hover:border-blue-500">
              <Instagram size={18} className=" text-white!" />
            </a>
            <a href="#" className="p-2 rounded-full bg-slate-900 text-slate-400 hover:bg-blue-600 hover:text-white transition-all duration-300 border border-slate-800 hover:border-blue-500">
              <Linkedin size={18} className=" text-white!" />
            </a>
            <a href="#" className="p-2 rounded-full bg-slate-900 text-slate-400 hover:bg-blue-600 hover:text-white transition-all duration-300 border border-slate-800 hover:border-blue-500">
              <Facebook size={18} className=" text-white!" />
            </a>
          </div>

          <div className="text-slate-500 text-xs md:text-sm order-3 text-center md:text-right">
            <p>© {currentYear} Filadélfia Obras. <span className="hidden md:inline">|</span> <br className="md:hidden" /> Todos os direitos reservados.</p>
          </div>

        </div>
      </div>
    </footer>
  )
}