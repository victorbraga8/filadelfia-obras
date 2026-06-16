import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, X } from "lucide-react";

import { Button } from "../ui/button";
import type { ServiceItem } from "./services-content";

type ServiceDetailsModalProps = {
  service: ServiceItem;
  onClose: () => void;
};

export function ServiceDetailsModal({
  service,
  onClose,
}: ServiceDetailsModalProps) {
  const Icon = service.icon;

  useEffect(() => {
    const scrollY = window.scrollY;
    const previousBodyOverflow = document.body.style.overflow;
    const previousBodyPosition = document.body.style.position;
    const previousBodyTop = document.body.style.top;
    const previousBodyWidth = document.body.style.width;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    const previousBodyScrollLocked = document.body.dataset.scrollLocked;
    const previousHtmlScrollLocked =
      document.documentElement.dataset.scrollLocked;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
    document.documentElement.style.overflow = "hidden";
    document.body.dataset.scrollLocked = "true";
    document.documentElement.dataset.scrollLocked = "true";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.body.style.position = previousBodyPosition;
      document.body.style.top = previousBodyTop;
      document.body.style.width = previousBodyWidth;
      document.documentElement.style.overflow = previousHtmlOverflow;
      if (previousBodyScrollLocked) {
        document.body.dataset.scrollLocked = previousBodyScrollLocked;
      } else {
        delete document.body.dataset.scrollLocked;
      }
      if (previousHtmlScrollLocked) {
        document.documentElement.dataset.scrollLocked =
          previousHtmlScrollLocked;
      } else {
        delete document.documentElement.dataset.scrollLocked;
      }
      window.removeEventListener("keydown", handleKeyDown);
      window.scrollTo(0, scrollY);
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto overscroll-contain bg-slate-950/90 p-4 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.98 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="relative w-full max-w-5xl overflow-hidden rounded-[28px] border border-white/10 bg-slate-950 text-white shadow-2xl"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`service-modal-title-${service.id}`}
      >
        <button
          type="button"
          className="absolute top-5 right-5 z-20 rounded-full border border-white/10 bg-white/10 p-2 text-white/70 transition-colors hover:text-white"
          onClick={onClose}
          aria-label={`Fechar detalhes de ${service.title}`}
        >
          <X className="h-5 w-5" />
        </button>

        <div className="grid max-h-[90vh] grid-cols-1 overflow-y-auto lg:grid-cols-[1.2fr_0.8fr]">
          <div className="relative min-h-[360px] overflow-hidden lg:min-h-full">
            <img
              src={service.image}
              alt={service.title}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-br from-slate-950/92 via-slate-950/68 to-blue-950/72" />

            <div className="relative flex h-full flex-col justify-start gap-6 p-6 md:p-10 lg:justify-end">
              <div className="inline-flex w-fit items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold tracking-[0.24em] text-blue-100 uppercase backdrop-blur-md">
                <Icon className="h-4 w-4" strokeWidth={1.8} />
                Escopo técnico
              </div>

              <div className="max-w-2xl">
                <span className="mb-3 block font-mono text-sm text-white/45">
                  {service.id}
                </span>
                <h3
                  id={`service-modal-title-${service.id}`}
                  className="text-3xl leading-tight font-bold md:text-5xl"
                >
                  {service.title}
                </h3>
                <p className="mt-5 max-w-xl text-sm leading-7 text-slate-200 md:text-base">
                  {service.detailedDescription}
                </p>
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                {service.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-300" />
                      <p className="text-sm leading-6 text-slate-100">
                        {highlight}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-center w-full">
                <Button className="bg-blue-600! text-white hover:bg-blue-500! transition-colors! rounded-xl!">
                  Catálogo de Serviços
                </Button>
              </div>
            </div>
          </div>

          <div className="grid bg-linear-to-b from-blue-950 to-slate-950 lg:grid-rows-[auto_1fr_auto]">
            <div className="flex min-h-[124px] items-end border-b border-white/10 px-8 pb-8 pt-12 pr-24">
              <span className="block max-w-[240px] text-xs font-bold leading-6 tracking-[0.24em] text-blue-300 uppercase">
                {service.contactEyebrow}
              </span>
            </div>

            <div className="p-8">
              <div className="grid h-full content-start auto-rows-fr gap-4">
                {service.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex min-h-[50px] items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-300" />
                    <p className="text-sm leading-6 text-slate-100">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-white/10 p-8">
              <div className="rounded-2xl border border-blue-400/20 bg-slate-950/45 p-5 backdrop-blur-md">
                <p className="text-sm leading-6 text-slate-200">
                  {service.contactCardCopy}
                </p>
                <Button
                  asChild
                  size="lg"
                  className="mt-5 w-full rounded-xl !bg-blue-600 !text-white hover:!bg-blue-500"
                >
                  <a href="#contato" onClick={onClose} className="!text-white">
                    Mais informações
                    <ArrowUpRight className="h-4 w-4 !text-white" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
