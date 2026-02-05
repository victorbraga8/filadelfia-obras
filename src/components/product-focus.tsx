import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gauge, Scale, Activity, Clock, ShieldCheck, Zap } from "lucide-react";

const fleetImages = [
  {
    id: 0,
    url: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1200&auto=format&fit=crop",
    alt: "Caminhão Combinado Principal"
  },
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1200&auto=format&fit=crop",
    alt: "Detalhe Mecânico"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1574359411659-15573a27fd0c?q=80&w=1200&auto=format&fit=crop",
    alt: "Operação em Campo"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1200&auto=format&fit=crop",
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
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">

        <div className="flex flex-col lg:flex-row gap-16 items-center">

          <div className="lg:w-5/12">
            <span className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-2 block">
              Frota Própria
            </span>
            <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Combinado Hidrojato <br />
              <span className="text-slate-400">& Vácuo Industrial.</span>
            </h2>

            <p className="text-slate-600 mb-10 text-lg leading-relaxed">
              Nossa operação conta com caminhões combinados de última geração.
              Um sistema duplo que permite realizar a desobstrução por hidrojateamento e a sucção de resíduos simultaneamente.
            </p>

            <div className="space-y-4">
              {specs.map((spec, i) => (
                <div key={i} className="group relative bg-white border border-slate-100 rounded-xl p-5 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600 rounded-l-xl"></div>
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      {spec.icon}
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">{spec.label}</p>
                      <p className="text-2xl font-bold text-slate-900 tracking-tight">{spec.value}</p>
                      <p className="text-xs text-slate-500 font-medium">{spec.sub}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>



          </div>

          <div className="lg:w-7/12 w-full">
            <div className="flex flex-col md:flex-row gap-4 h-125">
              <div className="flex-1 relative rounded-2xl overflow-hidden shadow-2xl bg-slate-100 group">
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

                <div className="absolute bottom-0 left-0 w-full bg-linear-to-t from-black/90 via-black/50 to-transparent p-8 pt-24">
                  <p className="text-white font-bold text-xl tracking-tight">{fleetImages[activeImg].alt}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="w-8 h-0.5 bg-blue-500"></div>
                    <p className="text-blue-400 text-xs uppercase tracking-wider font-bold">Visualização Técnica</p>
                  </div>
                </div>

              </div>

              <div className="flex justify-center md:flex-col gap-3 overflow-x-auto md:overflow-visible py-2 md:py-0">
                {fleetImages.map((img, index) => (
                  <button
                    key={img.id}
                    onClick={() => setActiveImg(index)}
                    className={`p-0! relative w-20 h-20 md:w-24 md:h-24 shrink-0 rounded-xl overflow-hidden transition-all duration-300 ${activeImg === index
                      ? "ring-2 ring-blue-600 ring-offset-2 scale-95 opacity-100 grayscale-0"
                      : "opacity-60 grayscale hover:opacity-100 hover:grayscale-0"
                      }`}
                  >
                    <img
                      src={img.url}
                      alt="Thumbnail"
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
            <div className="mt-8 bg-slate-900 rounded-lg shadow-2xl shadow-slate-900/20 overflow-hidden">
              <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-slate-800">
                {quickStats.map((stat, idx) => (
                  <div key={idx} className="flex-1 p-4 flex flex-row md:flex-col items-center justify-between md:justify-center text-center gap-3 hover:bg-slate-800/50 transition-colors">
                    <div className="text-blue-500 bg-blue-500/10 p-2 rounded-full mb-0 md:mb-1">
                      {stat.icon}
                    </div>
                    <div className="text-left md:text-center">
                      <p className="text-slate-400 text-[10px] uppercase tracking-wider font-bold mb-0.5">{stat.label}</p>
                      <p className="text-white font-bold text-lg leading-none">{stat.value}</p>
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