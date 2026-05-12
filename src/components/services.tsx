import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import { ServiceCard } from './services/service-card';
import { ServiceDetailsModal } from './services/service-details-modal';
import { serviceItems, type ServiceItem } from './services/services-content';

export default function Services() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="serviços" className="relative overflow-hidden bg-slate-100 py-20 md:py-32">
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="container relative z-10 mx-auto px-6">
        <div className="mb-16 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div className="relative max-w-3xl">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-[3px] w-12 bg-blue-600" />
              <span className="text-xs font-bold uppercase tracking-widest text-blue-700 md:text-sm">
                Nossas Especialidades
              </span>
            </div>
            <h2 className="text-3xl leading-tight font-bold text-slate-900 md:text-5xl">
              Soluções integradas para <br className="hidden md:block" />
              <span className="bg-linear-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">
                desafios complexos.
              </span>
            </h2>
          </div>

          <div className="w-full rounded-r-lg border-l-4 border-blue-600 bg-white p-6 shadow-sm lg:max-w-sm">
            <p className="text-sm leading-relaxed font-medium text-slate-700 md:text-base">
              Excelência técnica e conformidade normativa em cada frente operacional, com atuação
              coordenada em saneamento, caldeiraria, manutenção civil e instalações elétricas.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {serviceItems.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              onOpen={() => setSelectedService(service)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedService ? (
          <ServiceDetailsModal
            service={selectedService}
            onClose={() => setSelectedService(null)}
          />
        ) : null}
      </AnimatePresence>
    </section>
  );
}
