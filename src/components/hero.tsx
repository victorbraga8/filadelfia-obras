import { useState, useEffect, useCallback } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { motion, AnimatePresence, type PanInfo } from "framer-motion";
import { Button } from "./ui/button";

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
    secondaryBtn: "A Empresa"
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
    description: "Operamos com caminhões de sucção a vácuo e hidrojateamento de alta performance. Equipamentos modernos para limpeza de fossas.",
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
    description: "Equipes certificadas em solda, montagem eletromecânica e manutenção preventiva. Garantia de continuidade operacional.",
    primaryBtn: "Falar com Engenheiro",
    secondaryBtn: "Projetos"
  }
];

export default function Hero({ scrollToSection }: any) {
  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, []);

  const goToSlide = (index: number) => setCurrent(index);

  const handleDragEnd = (_: any, info: PanInfo) => {
    if (info.offset.x > 50) {
      prevSlide();
    } else if (info.offset.x < -50) {
      nextSlide();
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 8000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section
      id="início"
      className="relative h-[100dvh] w-screen max-w-none min-w-[100vw] flex items-center overflow-hidden bg-slate-900"
    >
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
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-950 via-slate-900/80 to-slate-900/20"></div>
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-90 md:hidden"></div>

      <div className="container mx-auto px-6 relative z-20 h-full flex flex-col justify-center pt-12 md:pt-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[current].id}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.5 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.05}
            onDragEnd={handleDragEnd}
            className="max-w-4xl cursor-grab active:cursor-grabbing pb-32 md:pb-0"
          >
            <div className="flex items-center gap-4 mb-4 md:mb-6 min-h-[28px]">
              <div className="h-1 w-8 md:w-12 bg-blue-500"></div>
              <span className="text-blue-400 font-bold tracking-widest uppercase text-[11px] leading-none md:text-sm">
                {slides[current].subtitle}
              </span>
            </div>

            <div className="min-h-[140px] sm:min-h-[150px] md:min-h-0">
              <h1 className="text-[34px] leading-[1.06] sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-5 md:mb-6 drop-shadow-lg">
                {slides[current].title}
              </h1>
            </div>

            <p className="text-[13.5px] leading-relaxed sm:text-base md:text-xl text-gray-300 mb-7 md:mb-10 max-w-xl md:max-w-2xl border-l-4 border-blue-600 pl-4 md:pl-6 bg-slate-900/30 backdrop-blur-sm py-2.5 pr-4 rounded-r-lg min-h-[92px] sm:min-h-[88px] md:min-h-0">
              {slides[current].description}
            </p>

            <div className="flex flex-row gap-3 w-full sm:w-auto">
              <Button
                onClick={() => scrollToSection("serviços")}
                className="flex-1 sm:flex-none h-11! md:h-14! px-4! md:px-8! bg-blue-600! hover:bg-blue-500! text-white! rounded-lg! font-bold! text-[12px] sm:text-xs md:text-base border-0! outline-none! ring-0! focus:ring-0! shadow-[0_0_20px_rgba(37,99,235,0.3)]! transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                {slides[current].primaryBtn}
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                variant="outline"
                onClick={() => scrollToSection("contato")}
                className="flex-1 sm:flex-none h-11! md:h-14! px-4! md:px-8! bg-white/5! backdrop-blur-md! border! border-white/20! hover:bg-white/10! hover:border-white/40! text-white! rounded-lg! font-bold! text-[12px] sm:text-xs md:text-base transition-all active:scale-95 hover:text-white! outline-none! focus:ring-0!"
              >
                {slides[current].secondaryBtn}
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-0 left-0 w-full z-30 pb-8 pt-12 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent">
        <div className="container mx-auto px-6 flex flex-col items-center gap-5">
          <div className="flex items-center gap-3">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className="relative group p-2! outline-none! border-none! bg-transparent! focus:outline-none! focus:ring-0!"
                aria-label={`Ir para slide ${idx + 1}`}
              >
                <div
                  className={`transition-all duration-500 rounded-full! ${current === idx
                      ? "w-8! h-1.5! bg-blue-500! shadow-[0_0_10px_rgba(59,130,246,0.8)]!"
                      : "w-2! h-2! bg-white/30! group-hover:bg-white/80!"
                    }`}
                />
              </button>
            ))}
          </div>

          <div className="flex gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevSlide}
              className="rounded-full! w-12! h-12! p-0! border! border-white/20! bg-white/5! backdrop-blur-md text-white! hover:bg-white/20! hover:border-white/40! transition-all duration-300 active:scale-95 shadow-lg! shadow-black/20! outline-none! focus:ring-0!"
            >
              <ChevronLeft size={24} />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={nextSlide}
              className="rounded-full! w-12! h-12! p-0! border! border-white/20! bg-white/5! backdrop-blur-md text-white! hover:bg-white/20! hover:border-white/40! transition-all duration-300 active:scale-95 shadow-lg! shadow-black/20! outline-none! focus:ring-0!"
            >
              <ChevronRight size={24} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
