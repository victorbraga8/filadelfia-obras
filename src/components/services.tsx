import { Factory, Droplets, Zap, Wrench, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    id: "01",
    title: "Hidráulica e Saneamento",
    desc: "Infraestrutura completa para redes de água e esgoto. Instalação de tubulações de grande porte e estações de tratamento.",
    icon: Droplets,
    image: "/saneamento.avif",
    features: ["Redes de Água", "Estações de Tratamento", "Drenagem"]
  },
  {
    id: "02",
    title: "Caldeiraria Industrial",
    desc: "Fabricação e manutenção de estruturas metálicas, tanques e tubulações de alta pressão com soldas especiais.",
    icon: Factory,
    image: "/caldeiraria.avif",
    features: ["Tanques Metálicos", "Soldas Especiais", "Tubulações"]
  },
  {
    id: "03",
    title: "Manutenção Predial",
    desc: "Revitalização de fachadas, impermeabilização e reformas estruturais em ambientes corporativos e industriais.",
    icon: Wrench,
    image: "/predial.avif",
    features: ["Fachadas", "Impermeabilização", "Reformas"]
  },
  {
    id: "04",
    title: "Instalações Elétricas",
    desc: "Projetos de alta tensão, subestações e automação industrial focados em eficiência energética e segurança.",
    icon: Zap,
    image: "/eletrica.avif",
    features: ["Alta Tensão", "Subestações", "Manutenção Preventiva"]
  }
];

export default function Services() {
  return (
    <section id="serviços" className="py-20 md:py-32 bg-slate-100 relative overflow-hidden">

      <div className="absolute inset-0 opacity-[0.05]" style={{
        backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
        backgroundSize: '32px 32px'
      }}>
      </div>

      <div className="container mx-auto px-6 relative z-10">

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <div className="max-w-3xl relative">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[3px] w-12 bg-blue-600"></div>
              <span className="text-blue-700 font-bold tracking-widest uppercase text-xs md:text-sm">
                Nossas Especialidades
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
              Soluções integradas para <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-800 to-blue-600">
                desafios complexos.
              </span>
            </h2>
          </div>

          <div className="w-full lg:max-w-sm bg-white p-6 border-l-4 border-blue-600 shadow-sm rounded-r-lg">
            <p className="text-slate-700 text-sm md:text-base font-medium leading-relaxed">
              Excelência técnica e conformidade normativa em cada projeto entregue, garantindo segurança e eficiência operacional.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative h-112.5 rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-blue-900/20 transition-all duration-500 bg-slate-900"
              >
                <div className="absolute inset-0 w-full h-full">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
                  />
                </div>

                <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/60 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 h-full p-6 md:p-8 flex flex-col">

                  <div className="flex justify-between items-start mb-auto">
                    <div className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:border-blue-500 group-hover:text-white transition-all duration-500 shadow-lg">
                      <Icon className="w-6 h-6" strokeWidth={1.5} />
                    </div>
                    <span className="text-4xl font-bold text-white/10 group-hover:text-white/20 transition-colors font-mono">
                      {service.id}
                    </span>
                  </div>

                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors leading-tight">
                      {service.title}
                    </h3>

                    <p className="text-slate-300 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-75 h-0 group-hover:h-auto overflow-hidden">
                      {service.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-6 border-t border-white/10 flex flex-col gap-4">
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, i) => (
                        <span key={i} className="text-[10px] font-bold uppercase tracking-wider text-blue-200 bg-blue-950/50 px-2 py-1 rounded border border-blue-500/30">
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 text-white/50 group-hover:text-blue-400 transition-colors text-xs font-bold uppercase tracking-widest mt-2">
                      <span>Ver Projetos</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-1.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  )
}