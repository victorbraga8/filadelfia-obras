import { Instagram, Mail, MapPin, Phone, MessageCircle, Send, ArrowRight } from "lucide-react";

export default function Contato() {
  return (
    <section id="contato" className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">

          <div className="lg:w-5/12 bg-slate-900 p-10 md:p-14 text-white flex flex-col justify-between relative overflow-hidden">

            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            <div className="relative z-10">
              <span className="text-blue-500 font-bold tracking-widest uppercase text-xs mb-3 block">
                Fale Conosco
              </span>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Vamos tirar seu projeto do papel?
              </h3>
              <p className="text-slate-400 mb-10 leading-relaxed">
                Nossa equipe de engenharia está pronta para realizar a visita técnica e orçamento. Entre em contato pelos canais abaixo.
              </p>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 uppercase font-bold tracking-wider mb-1">Base Operacional</p>
                    <p className="font-medium text-lg">Maricá, Rio de Janeiro</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 uppercase font-bold tracking-wider mb-1">Telefone / Comercial</p>
                    <p className="font-medium text-lg">(21) 9999-9999</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 uppercase font-bold tracking-wider mb-1">Email Corporativo</p>
                    <p className="font-medium text-lg">contato@filadelfiaobras.com.br</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a
                  href="#"
                  className="flex-1 bg-green-600 hover:bg-green-500 text-white py-3 px-6 rounded-lg font-bold flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-green-900/20"
                >
                  <MessageCircle size={20} />
                  WhatsApp
                </a>
                <a
                  href="#"
                  className="flex-1 bg-slate-800 hover:bg-slate-700 text-white py-3 px-6 rounded-lg font-bold flex items-center justify-center gap-2 transition-all border border-slate-700 hover:border-slate-600"
                >
                  <Instagram size={20} />
                  Instagram
                </a>
              </div>
            </div>

            <div className="relative z-10 w-full h-48 rounded-xl overflow-hidden border border-slate-700 shadow-inner">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117585.64654897046!2d-42.89066660273437!3d-22.920059999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99f7f9c2d7655d%3A0x6648714150868a28!2sMaric%C3%A1%2C%20RJ!5e0!3m2!1spt-BR!2sbr!4v1709666000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(100%) contrast(1.2) opacity(0.8)' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="hover:filter-none transition-all duration-500"
              ></iframe>
            </div>

          </div>

          <div className="lg:w-7/12 p-10 md:p-14 bg-white">
            <h4 className="text-2xl font-bold text-slate-900 mb-8">Envie uma mensagem</h4>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 group-focus-within:text-blue-600 transition-colors">Nome Completo</label>
                  <input type="text" className="w-full px-4 py-4 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-600/10 outline-none transition-all font-medium text-slate-900" placeholder="Digite seu nome" />
                </div>
                <div className="group">
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 group-focus-within:text-blue-600 transition-colors">Telefone / WhatsApp</label>
                  <input type="tel" className="w-full px-4 py-4 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-600/10 outline-none transition-all font-medium text-slate-900" placeholder="(21) 00000-0000" />
                </div>
              </div>

              <div className="group">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 group-focus-within:text-blue-600 transition-colors">Email Corporativo</label>
                <input type="email" className="w-full px-4 py-4 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-600/10 outline-none transition-all font-medium text-slate-900" placeholder="seu@email.com" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 group-focus-within:text-blue-600 transition-colors">Empresa</label>
                  <input type="text" className="w-full px-4 py-4 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-600/10 outline-none transition-all font-medium text-slate-900" placeholder="Nome da empresa" />
                </div>
                <div className="group">
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 group-focus-within:text-blue-600 transition-colors">Assunto</label>
                  <select className="w-full px-4 py-4 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-600/10 outline-none transition-all font-medium text-slate-900 appearance-none">
                    <option>Orçamento de Obra</option>
                    <option>Limpeza Industrial</option>
                    <option>Aluguel de Caminhão</option>
                    <option>Trabalhe Conosco</option>
                    <option>Outros</option>
                  </select>
                </div>
              </div>

              <div className="group">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 group-focus-within:text-blue-600 transition-colors">Detalhes do Projeto</label>
                <textarea rows={4} className="w-full px-4 py-4 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-600/10 outline-none transition-all font-medium text-slate-900 resize-none" placeholder="Descreva sua necessidade com o máximo de detalhes possível..."></textarea>
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-lg transition-all shadow-lg hover:shadow-blue-600/30 flex items-center justify-center gap-2 group">
                Enviar Solicitação
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-center text-xs text-slate-400 mt-4">
                Seus dados estão protegidos. Responderemos em até 24h úteis.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}