import { Instagram, Mail, MapPin, Phone } from "lucide-react";

export default function Contato() {
  return (
    <section id="contato" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-5/12 bg-industrial-600 p-12 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-6">Fale Conosco</h3>
              <p className="text-industrial-100 mb-8">Estamos prontos para analisar seu projeto. Entre em contato para cotações ou visitas técnicas.</p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <MapPin className="opacity-80" />
                  <span>Maricá, Rio de Janeiro</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="opacity-80" />
                  <span>(21) 9999-9999</span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="opacity-80" />
                  <span>contato@filadelfiaobras.com.br</span>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <a href="#" className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Form */}
          <div className="md:w-7/12 p-12">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Nome</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-industrial-600 focus:ring-0 outline-none transition-colors" placeholder="Seu nome" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Telefone</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-industrial-600 focus:ring-0 outline-none transition-colors" placeholder="(21) 00000-0000" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email Corporativo</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-industrial-600 focus:ring-0 outline-none transition-colors" placeholder="voce@empresa.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Mensagem</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-industrial-600 focus:ring-0 outline-none transition-colors" placeholder="Descreva sua necessidade..." />
              </div>
              <button className="w-full bg-industrial-900 text-white font-bold py-4 rounded-lg hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl">
                Enviar Solicitação
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}