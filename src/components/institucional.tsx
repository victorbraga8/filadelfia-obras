import { CheckCircle2 } from "lucide-react";

export default function Institucional() {
  return (
    <section id="a-empresa" className="py-24 bg-industrial-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-industrial-800/50 skew-x-12 translate-x-20"></div>
      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Valores Sólidos,<br />Resultados Concretos.</h2>
          <p className="text-gray-400 mb-6 text-lg leading-relaxed">
            Fundada em 2014 em Maricá, a Filadélfia Obras nasceu com a missão de elevar o padrão da prestação de serviços industriais.
            Não entregamos apenas obras, entregamos <strong className="text-white">confiabilidade operacional</strong>.
          </p>
          <ul className="space-y-4">
            {['Comprometimento com prazos', 'Responsabilidade Socioambiental', 'Equipe técnica certificada', 'Tecnologia de ponta'].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-300">
                <CheckCircle2 className="text-industrial-600" size={20} /> {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:w-1/2 relative">
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1581094794329-cd2c2cef4572?q=80&w=600&auto=format&fit=crop" className="rounded-lg opacity-80 hover:opacity-100 transition-opacity translate-y-8" alt="Soldador" />
            <img src="https://images.unsplash.com/photo-1590644365607-1c5a38fc43e0?q=80&w=600&auto=format&fit=crop" className="rounded-lg opacity-80 hover:opacity-100 transition-opacity" alt="Obra Civil" />
          </div>
        </div>
      </div>
    </section>
  )
}