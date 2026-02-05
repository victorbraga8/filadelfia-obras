import { Factory, Droplets, Zap, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';
import React from 'react';
const services = [
  {
    title: "Hidráulica e Saneamento",
    desc: "Infraestrutura completa para redes de água e esgoto com tecnologia de ponta.",
    icon: <Droplets className="w-8 h-8 text-industrial-600" />
  },
  {
    title: "Caldeiraria Industrial",
    desc: "Fabricação e manutenção de estruturas metálicas e tubulações de alta pressão.",
    icon: <Factory className="w-8 h-8 text-industrial-600" />
  },
  {
    title: "Usinagem de Precisão",
    desc: "Desenvolvimento de peças técnicas com rigoroso controle de qualidade.",
    icon: <Wrench className="w-8 h-8 text-industrial-600" />
  },
  {
    title: "Instalações Elétricas",
    desc: "Projetos elétricos industriais focados em eficiência e segurança normativa.",
    icon: <Zap className="w-8 h-8 text-industrial-600" />
  }
];


export default function Services() {
  return (
    <section id="serviços" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-industrial-900 mb-4">Nossas Especialidades</h2>
          <div className="w-20 h-1 bg-industrial-600 mx-auto rounded"></div>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">Atuamos nas frentes mais complexas da engenharia civil e industrial com equipe própria e certificada.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-slate-50 p-8 rounded-xl border border-slate-100 shadow-lg hover:shadow-xl transition-all group"
            >
              <div className="mb-6 p-4 bg-white rounded-lg inline-block shadow-sm group-hover:bg-industrial-600 group-hover:text-white transition-colors duration-300">
                {React.cloneElement(service.icon as React.ReactElement, { className: "w-8 h-8 group-hover:text-white" })}
              </div>
              <h3 className="text-xl font-bold text-industrial-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}