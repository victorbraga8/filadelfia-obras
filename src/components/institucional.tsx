import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function Institucional() {
  const values = [
    'Comprometimento rigoroso com prazos',
    'Responsabilidade Socioambiental',
    'Equipe técnica certificada (NR-33/NR-35)',
    'Maquinário de alta performance'
  ];

  return (
    <section id="a-empresa" className="py-24 bg-slate-950 relative overflow-hidden">

      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '32px 32px',
            maskImage: 'radial-gradient(circle at center, black 40%, transparent 85%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 85%)'
          }}
        ></div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-2/3 bg-linear-to-t from-slate-900/10 to-transparent z-0 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-0.5 bg-blue-600"></div>
              <span className="text-blue-500 font-bold tracking-widest uppercase text-xs">
                Sobre a Filadélfia
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Valores Sólidos, <br />
              <span className="text-slate-600">Resultados Concretos.</span>
            </h2>

            <p className="text-slate-400 mb-8 text-lg leading-relaxed font-light">
              Fundada em 2014 em Maricá, nascemos com a missão de elevar o padrão da engenharia industrial no Rio de Janeiro.
              Não entregamos apenas obras, entregamos <strong className="text-white font-semibold">segurança operacional</strong>.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((item, i) => (
                <div key={i} className="flex items-start gap-3 group">
                  <CheckCircle2 className="w-5 h-5 text-blue-600/60 group-hover:text-blue-500 mt-0.5 shrink-0 transition-colors" />
                  <span className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-slate-900 flex items-center gap-8">
              <div>
                <p className="text-3xl font-bold text-white">10+</p>
                <p className="text-xs text-slate-600 uppercase tracking-wider">Anos de História</p>
              </div>
              <div className="w-px h-10 bg-slate-900"></div>
              <div>
                <p className="text-3xl font-bold text-white">100%</p>
                <p className="text-xs text-slate-600 uppercase tracking-wider">Capital Próprio</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full order-1 lg:order-2 relative">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 rounded-lg overflow-hidden shadow-2xl border border-slate-800/50"
              >
                <img
                  src="/caminhao-3.png"
                  alt="Industrial Welding"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-1000"
                />

                <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent"></div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute -bottom-10 -left-10 w-1/2 rounded-lg overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.6)] border border-slate-800 z-20 hidden md:block"
              >
                <img
                  src="/equipe-1.png"
                  alt="Engenharia Civil"
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}