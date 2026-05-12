import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

import type { ServiceItem } from './services-content';

type ServiceCardProps = {
  service: ServiceItem;
  index: number;
  onOpen: () => void;
};

export function ServiceCard({ service, index, onOpen }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative flex h-112.5 cursor-pointer flex-col overflow-hidden rounded-xl bg-slate-900 text-left shadow-lg transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/20 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-600/30"
      onClick={onOpen}
    >
      <div className="absolute inset-0 h-full w-full">
        <img
          src={service.image}
          alt={service.title}
          className="h-full w-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-40"
        />
      </div>

      <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/60 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative z-10 flex h-full flex-col items-start py-6 pr-5 pl-3 md:py-8 md:pr-6 md:pl-4">
        <div className="mb-auto flex w-full items-start justify-between">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-white/20 bg-white/10 text-blue-400 shadow-lg backdrop-blur-md transition-all duration-500 group-hover:border-blue-500 group-hover:bg-blue-600 group-hover:text-white">
            <Icon className="h-6 w-6" strokeWidth={1.5} />
          </div>
          <span className="font-mono text-4xl font-bold text-white/10 transition-colors group-hover:text-white/20">
            {service.id}
          </span>
        </div>

        <div className="max-w-full translate-y-4 transition-transform duration-500 ease-out group-hover:translate-y-0">
          <h3 className="mb-3 text-lg leading-none font-bold whitespace-nowrap text-white transition-colors group-hover:text-blue-200 md:text-[1.6rem]">
            {service.title}
          </h3>

          <p className="mb-6 h-0 overflow-hidden text-sm leading-relaxed text-slate-300 opacity-0 transition-all duration-500 delay-75 group-hover:h-auto group-hover:opacity-100">
            {service.description}
          </p>
        </div>

        <div className="mt-4 flex w-full flex-col gap-4 border-t border-white/10 pt-6">
          <div className="flex flex-wrap gap-2">
            {service.features.map((feature) => (
              <span
                key={feature}
                className="rounded border border-blue-500/30 bg-blue-950/50 px-2 py-1 text-[10px] font-bold tracking-wider text-blue-200 uppercase"
              >
                {feature}
              </span>
            ))}
          </div>

          <div className="mt-2 flex items-center gap-2 text-xs font-bold tracking-widest text-white/50 uppercase transition-colors group-hover:text-blue-400">
            <span>Ver Detalhes</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-1.5 w-full origin-left scale-x-0 bg-blue-600 transition-transform duration-500 group-hover:scale-x-100" />
    </motion.button>
  );
}
