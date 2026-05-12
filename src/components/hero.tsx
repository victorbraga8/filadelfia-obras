import { useState, useEffect, useCallback } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { motion, AnimatePresence, type PanInfo } from 'framer-motion';

import { Button } from './ui/button';
import type { ScrollToSection } from '../lib/types/navigation';

const slides = [
  {
    id: 1,
    image: '/caminhao-2.png',
    subtitle: 'Excelência em Infraestrutura',
    title: (
      <>
        Credibilidade <br />
        e{' '}
        <span className="bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text font-black text-transparent uppercase">
          Segurança.
        </span>
      </>
    ),
    description:
      'Especialistas em hidráulica, caldeiraria e serviços urbanos.\nA união perfeita entre força bruta e precisão técnica.',
    primaryBtn: 'Nossos Serviços',
    secondaryBtn: 'A Empresa',
  },
];

type HeroProps = {
  scrollToSection: ScrollToSection;
};

export default function Hero({ scrollToSection }: HeroProps) {
  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, []);

  const goToSlide = (index: number) => setCurrent(index);

  const handleDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    if (info.offset.x > 50) {
      prevSlide();
    } else if (info.offset.x < -50) {
      nextSlide();
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 10000);

    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section
      id="início"
      className="relative flex h-dvh min-w-screen w-screen max-w-none items-center overflow-hidden bg-slate-900"
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
            className="h-full w-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 z-10 bg-linear-to-r from-slate-950 via-slate-900/80 to-slate-900/20" />
      <div className="absolute inset-0 z-10 opacity-90 bg-linear-to-t from-slate-950 via-transparent to-transparent md:hidden" />

      <div className="container relative z-20 mx-auto flex h-full flex-col justify-center px-6 pt-12 md:pt-10">
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
            className="max-w-4xl cursor-grab pb-32 active:cursor-grabbing md:pb-0"
          >
            <div className="mb-4 flex min-h-7 items-center gap-4 md:mb-6">
              <div className="h-1 w-8 bg-blue-500 md:w-12" />
              <span className="text-[11px] leading-none font-bold tracking-widest text-blue-400 uppercase md:text-sm">
                {slides[current].subtitle}
              </span>
            </div>

            <div className="flex min-h-35 flex-col justify-center sm:min-h-37.5 md:min-h-0">
              <h1 className="mb-5 text-4xl! leading-[1.06] font-bold text-white drop-shadow-lg sm:text-5xl md:text-6xl! lg:text-7xl! md:mb-6">
                {slides[current].title}
              </h1>
            </div>

            <p className="mb-7 max-w-xl min-h-23 rounded-r-lg border-l-4 border-blue-600 bg-slate-900/30 py-2.5 pr-4 pl-4 text-[13.5px] leading-relaxed whitespace-pre-line text-gray-300 backdrop-blur-sm sm:min-h-22 sm:text-base md:mb-10 md:max-w-2xl md:min-h-0 md:pl-6 md:text-xl">
              {slides[current].description}
            </p>

            <div className="flex w-full flex-row gap-3 sm:w-auto">
              <Button
                onClick={() => scrollToSection('serviços')}
                className="flex flex-1 items-center justify-center gap-2 rounded-lg! bg-blue-600! px-4! text-[12px] font-bold text-white! shadow-[0_0_20px_rgba(37,99,235,0.3)]! transition-all ring-0! border-0! outline-none! hover:bg-blue-500! focus:ring-0! active:scale-95 sm:flex-none sm:text-xs md:h-12! md:px-4! md:text-base h-11!"
              >
                {slides[current].primaryBtn}
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                variant="outline"
                onClick={() => scrollToSection('contato')}
                className="flex flex-1 rounded-lg! bg-white/5! px-4! text-[12px] font-bold text-white! transition-all border! border-white/20! outline-none! backdrop-blur-md! hover:bg-white/10! hover:text-white! hover:border-white/40! focus:ring-0! active:scale-95 sm:flex-none sm:text-xs md:h-12! md:px-4! md:text-base h-11!"
              >
                {slides[current].secondaryBtn}
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-0 left-0 z-30 w-full bg-linear-to-t from-slate-950 via-slate-950/90 to-transparent pt-12 pb-8">
        <div className="container mx-auto flex flex-col items-center gap-5 px-6">
          <div className="flex items-center gap-3">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className="group bg-transparent! p-2! outline-none! border-none! focus:outline-none! focus:ring-0!"
                aria-label={`Ir para slide ${idx + 1}`}
              >
                <div
                  className={`rounded-full! transition-all duration-500 ${
                    current === idx
                      ? 'h-1.5! w-8! bg-blue-500! shadow-[0_0_10px_rgba(59,130,246,0.8)]!'
                      : 'h-2! w-2! bg-white/30! group-hover:bg-white/80!'
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
              className="h-12! w-12! rounded-full! bg-white/5! p-0! text-white! shadow-lg! shadow-black/20! transition-all duration-300 border! border-white/20! outline-none! backdrop-blur-md hover:bg-white/20! hover:border-white/40! focus:ring-0! active:scale-95"
            >
              <ChevronLeft size={24} />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={nextSlide}
              className="h-12! w-12! rounded-full! bg-white/5! p-0! text-white! shadow-lg! shadow-black/20! transition-all duration-300 border! border-white/20! outline-none! backdrop-blur-md hover:bg-white/20! hover:border-white/40! focus:ring-0! active:scale-95"
            >
              <ChevronRight size={24} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
