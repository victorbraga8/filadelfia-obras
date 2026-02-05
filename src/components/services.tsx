import { Factory, Droplets, Zap, Wrench, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import React from 'react';

const services = [
  {
    id: "01",
    title: "Hidráulica e Saneamento",
    desc: "Infraestrutura completa para redes de água e esgoto. Instalação de tubulações de grande porte e estações de tratamento.",
    icon: <Droplets strokeWidth={1.5} />
  },
  {
    id: "02",
    title: "Caldeiraria Industrial",
    desc: "Fabricação e manutenção de estruturas metálicas, tanques e tubulações de alta pressão com soldas especiais.",
    icon: <Factory strokeWidth={1.5} />
  },
  {
    id: "03",
    title: "Manutenção Predial",
    desc: "Revitalização de fachadas, impermeabilização e reformas estruturais em ambientes corporativos e industriais.",
    icon: <Wrench strokeWidth={1.5} />
  },
  {
    id: "04",
    title: "Instalações Elétricas",
    desc: "Projetos de alta tensão, subestações e automação industrial focados em eficiência energética e segurança.",
    icon: <Zap strokeWidth={1.5} />
  }
];

export default function Services() {
  return (
    <section id="serviços" className="py-24 bg-slate-50 relative overflow-hidden">

      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-100/50 skew-x-12 translate-x-20 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-2 block">
              Áreas de Atuação
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
              Soluções integradas para <br />
              desafios complexos.
            </h2>
          </div>
          <div className="hidden md:block w-32 h-1 bg-slate-200 mb-2">
            <div className="w-1/2 h-full bg-blue-600"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 group relative overflow-hidden border border-slate-200 hover:border-blue-500 transition-colors duration-300 shadow-sm hover:shadow-xl"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowUpRight className="w-6 h-6 text-blue-600" />
              </div>

              <span className="text-5xl font-bold text-slate-100 group-hover:text-blue-50 transition-colors duration-300 absolute -bottom-4 -right-4 select-none">
                {service.id}
              </span>

              <div className="w-14 h-14 bg-slate-50 border border-slate-100 rounded-lg flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                {React.cloneElement(service.icon as React.ReactElement, { className: "w-7 h-7" })}
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                {service.title}
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed mb-6 relative z-10">
                {service.desc}
              </p>

              <div className="w-full h-0.5 bg-slate-100 mt-auto group-hover:bg-blue-500/30 transition-colors"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}