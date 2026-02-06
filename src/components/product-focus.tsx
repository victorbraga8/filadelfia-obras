import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gauge, Scale, Activity, Clock, ShieldCheck, Zap } from "lucide-react";
import { Button } from "./ui/button";

const fleetImages = [
  {
    id: 0,
    url: "/caminhao-2.png",
    alt: "Caminhão Combinado Principal"
  },
  {
    id: 1,
    url: "/caminhao-4.png",
    alt: "Detalhe Mecânico"
  },
  {
    id: 2,
    url: "/caminhao-1.png",
    alt: "Operação em Campo"
  },
  {
    id: 3,
    url: "/caminhao-5.png",
    alt: "Manutenção Industrial"
  }
];

export default function Fleet() {
  const [activeImg, setActiveImg] = useState(0);

  const specs = [
    {
      label: "Capacidade do Tanque",
      value: "12.000 L",
      sub: "Detritos e Água Limpa",
      icon: <Scale strokeWidth={1.5} />
    },
    {
      label: "Potência da Bomba",
      value: "2.800 PSI",
      sub: "Alta Pressão Regulável",
      icon: <Gauge strokeWidth={1.5} />
    },
    {
      label: "Sucção a Vácuo",
      value: "Alto Vácuo",
      sub: "Compressor de Anel Líquido",
      icon: <Activity strokeWidth={1.5} />
    }
  ];

  const quickStats = [
    { icon: <Clock size={20} />, label: "Disponibilidade", value: "24h/7" },
    { icon: <Zap size={20} />, label: "Potência", value: "350cv" },
    { icon: <ShieldCheck size={20} />, label: "Certificação", value: "INMETRO" },
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start lg:items-center min-w-0">

          <div className="w-full lg:w-5/12 min-w-0 order-2 lg:order-1">
            <span className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-3 block">
              Frota Própria
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight wrap-break-words">
              Combinado Hidrojato <br />
              <span className="text-slate-400">& Vácuo Industrial.</span>
            </h2>

            <p className="text-slate-600 mb-10 text-base md:text-lg leading-relaxed wrap-break-words">
              Nossa operação conta com caminhões combinados de última geração.
              Um sistema duplo que permite realizar a desobstrução por hidrojateamento e a sucção de resíduos simultaneamente.
            </p>

            <div className="space-y-4">
              {specs.map((spec, i) => (
                <div
                  key={i}
                  className="group relative bg-white border border-slate-100 rounded-xl p-5 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600 rounded-l-xl"></div>
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shrink-0">
                      {spec.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1 truncate">
                        {spec.label}
                      </p>
                      <p className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight truncate">
                        {spec.value}
                      </p>
                      <p className="text-xs text-slate-500 font-medium truncate">
                        {spec.sub}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-7/12 min-w-0 order-1 lg:order-2">

            <div className="flex flex-col md:flex-row gap-4 h-auto md:h-125 w-full max-w-full">

              <div className="w-full md:flex-1 relative h-64 sm:h-80 md:h-full rounded-2xl overflow-hidden shadow-2xl bg-slate-100 group order-1 md:order-1 shrink-0">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeImg}
                    src={fleetImages[activeImg].url}
                    alt={fleetImages[activeImg].alt}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </AnimatePresence>

              </div>

              <div className="w-full md:w-auto flex flex-row md:flex-col gap-3 justify-center md:justify-center py-2 md:py-0 order-2 shrink-0">
                {fleetImages.map((img, index) => (
                  <Button
                    key={img.id}
                    onClick={() => setActiveImg(index)}
                    className={`p-0! relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 shrink-0 rounded-xl overflow-hidden transition-all duration-300 border-2 outline-none focus:outline-none ${activeImg === index
                      ? "border-blue-600 ring-2 ring-blue-600/20 opacity-100 grayscale-0"
                      : "border-transparent opacity-60 grayscale hover:opacity-100 hover:grayscale-0"
                      }`}
                  >
                    <img
                      src={img.url}
                      alt="Thumbnail"
                      className="w-full h-full object-cover"
                    />
                  </Button>
                ))}
              </div>

            </div>

            <div className="mt-6 md:mt-8 bg-slate-900 rounded-lg shadow-2xl shadow-slate-900/20 overflow-hidden w-full">
              <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-800">
                {quickStats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="p-4 flex flex-row sm:flex-col items-center justify-between sm:justify-center text-center gap-3 hover:bg-slate-800/50 transition-colors group"
                  >
                    <div className="text-blue-500 bg-blue-500/10 p-2 rounded-full group-hover:text-blue-400 transition-colors shrink-0">
                      {stat.icon}
                    </div>
                    <div className="text-right sm:text-center min-w-0">
                      <p className="text-slate-400 text-[10px] uppercase tracking-wider font-bold mb-0.5 truncate">
                        {stat.label}
                      </p>
                      <p className="text-white font-bold text-lg leading-none truncate">
                        {stat.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}