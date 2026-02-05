import { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
    subtitle: "Excelência em Infraestrutura",
    title: (
      <>
        Engenharia que <br />
        constrói o <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">futuro.</span>
      </>
    ),
    description: "Especialistas em hidráulica, caldeiraria e serviços urbanos. A união perfeita entre força bruta e precisão técnica.",
    primaryBtn: "Nossos Serviços",
    secondaryBtn: "Conheça a Filadélfia"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop",
    subtitle: "Frota Própria e Especializada",
    title: (
      <>
        Tecnologia de Ponta em <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">Saneamento.</span>
      </>
    ),
    description: "Operamos com caminhões de sucção a vácuo e hidrojateamento de alta performance. Equipamentos modernos para limpeza de fossas e desobstrução de redes industriais.",
    primaryBtn: "Solicitar Caminhão",
    secondaryBtn: "Ver Frota"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop",
    subtitle: "Manutenção Industrial",
    title: (
      <>
        Soluções Críticas para <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">Grandes Plantas.</span>
      </>
    ),
    description: "Equipes certificadas em solda, montagem eletromecânica e manutenção preventiva. Garantia de continuidade operacional para sua indústria.",
    primaryBtn: "Falar com Engenheiro",
    secondaryBtn: "Projetos Recentes"
  }
];

export default function Hero({ scrollToSection }: any) {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const goToSlide = (index: number) => setCurrent(index);

  return (
    <section id="início" className="relative h-screen w-full flex items-center overflow-hidden bg-slate-900">

      <AnimatePresence mode="wait">
        <motion.div
          key={slides[current].id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          <img
            src={slides[current].image}
            alt="Background Slide"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-950 via-slate-900/80 to-slate-900/20"></div>

      <div className="container mx-auto px-6 relative z-20 pt-20 h-full flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[current].id}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-1 w-12 bg-blue-500"></div>
              <span className="text-blue-400 font-bold tracking-widest uppercase text-sm">
                {slides[current].subtitle}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 drop-shadow-lg">
              {slides[current].title}
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed border-l-4 border-blue-600 pl-6 bg-slate-900/30 backdrop-blur-sm py-2 pr-4 rounded-r-lg">
              {slides[current].description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('serviços')}
                className="group bg-blue-600 text-white px-8 py-4 rounded font-bold hover:bg-blue-500 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]"
              >
                {slides[current].primaryBtn}
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className="px-8 py-4 rounded font-bold text-white border border-white/20 hover:bg-white/10 backdrop-blur-sm transition-all"
              >
                {slides[current].secondaryBtn}
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-0 left-0 w-full z-30 bg-gradient-to-t from-slate-900 to-transparent pb-8 pt-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">

            <div className="flex items-center gap-3">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className="relative group py-4 px-1"
                >
                  <div className={`transition-all duration-300 rounded-full ${current === idx
                    ? "w-3 h-3 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"
                    : "w-2 h-2 bg-white/30 hover:bg-white/60"
                    }`} />
                </button>
              ))}
            </div>

            <div className="hidden md:block w-full md:max-w-xs h-1 bg-white/10 rounded-full overflow-hidden relative">
              <motion.div
                key={current}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 6, ease: "linear" }}
                onAnimationComplete={nextSlide}
                className="absolute top-0 left-0 h-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
              />
            </div>

            <div className="flex gap-2 hidden md:flex">
              <button onClick={prevSlide} className="p-3 rounded-full border border-white/10 hover:bg-white/10 text-white transition-colors active:scale-95">
                <ChevronLeft size={20} />
              </button>
              <button onClick={nextSlide} className="p-3 rounded-full border border-white/10 hover:bg-white/10 text-white transition-colors active:scale-95">
                <ChevronRight size={20} />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}