export default function Footer() {
  return (
    <footer className="bg-industrial-950 text-slate-400 py-12 text-center md:text-left border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-2xl font-bold text-white tracking-tighter">FILADÉLFIA</span>
            <p className="text-sm mt-2">© 2025 Filadélfia Obras. Todos os direitos reservados.</p>
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  )
}