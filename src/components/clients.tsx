import { motion } from "framer-motion";

const clients = [
  { name: "Águas do Brasil", logo: "/logos/aguas-do-brasil.png" },
  { name: "Zona Oeste Mais", logo: "/logos/zona-oeste.png" },
  { name: "Iguá", logo: "/logos/logo-1.png" },
  { name: "Rio Saneamento", logo: "/logos/Imagem7.png" },
  { name: "Águas do Rio", logo: "/logos/Imagem6.png" }
];

const carouselItems = [...clients, ...clients, ...clients, ...clients];

export default function ClientsSection() {
  return (
    <section className="py-18 md:py-24 bg-slate-950 border-y border-slate-800 relative overflow-hidden w-full">
      <style>{`
        @keyframes client-marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .client-marquee-track {
          animation: client-marquee 48s linear infinite;
        }
        .client-marquee-track:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .client-marquee-track {
            animation: none;
            flex-wrap: wrap;
            justify-content: center;
          }
        }
      `}</style>

      <div className="absolute inset-0 pointer-events-none z-0 bg-[linear-gradient(135deg,#020617_0%,#0f172a_52%,#082f49_100%)]"></div>
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(125, 211, 252, 0.18) 1px, transparent 1px), linear-gradient(0deg, rgba(255, 255, 255, 0.12) 1px, transparent 1px)",
          backgroundSize: "72px 72px"
        }}
      ></div>
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-blue-400/70 to-transparent pointer-events-none z-0"></div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-blue-900 to-transparent pointer-events-none z-0"></div>
      <div className="absolute inset-0 pointer-events-none z-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(2,6,23,0.12)_42%,rgba(2,6,23,0.78)_100%)]"></div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-6 mb-12 md:mb-14 text-center relative z-10"
      >
        <div className="flex items-center justify-center gap-4 mb-5">
          <div className="h-px w-8 md:w-12 bg-linear-to-r from-transparent to-blue-500"></div>
          <span className="text-blue-400 font-bold text-xs md:text-sm uppercase tracking-[0.22em]">
            Confiabilidade Comprovada
          </span>
          <div className="h-px w-8 md:w-12 bg-linear-to-l from-transparent to-blue-500"></div>
        </div>

        <div className="mb-6">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-medium text-white/80 tracking-tight mb-2">
            Parceiros que constroem
          </h3>
          <h2 className="text-4xl md:text-6xl lg:text-5xlxl font-black text-white tracking-tighter leading-none">
            o Rio conosco
          </h2>
        </div>

        <p className="max-w-2xl mx-auto text-md md:text-lg font-medium leading-relaxed text-blue-400">
          Atuamos em conjunto com as principais concessionárias e indústrias do estado.
        </p>
      </motion.div>

      <div className="relative w-full max-w-[100vw] overflow-hidden py-5 md:py-7 z-10">
        <div className="absolute inset-y-0 left-0 w-20 md:w-56 bg-linear-to-r from-slate-950 via-slate-950/90 to-transparent z-20 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-20 md:w-56 bg-linear-to-l from-slate-950 via-slate-950/90 to-transparent z-20 pointer-events-none"></div>
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-linear-to-r from-transparent via-blue-500/30 to-transparent pointer-events-none"></div>

        <div
          className="client-marquee-track flex items-center relative z-10"
          style={{ width: "max-content" }}
        >
          {carouselItems.map((client, index) => (
            <div
              key={index}
              className="w-46 md:w-64 h-24 md:h-28 shrink-0 flex justify-center items-center mx-3 md:mx-5 group relative bg-white px-5 md:px-7 rounded-lg border border-slate-200 shadow-[0_12px_36px_-24px_rgba(2,6,23,0.65)] transition-all duration-500 hover:-translate-y-1 hover:border-blue-300 hover:shadow-[0_22px_50px_-26px_rgba(37,99,235,0.65)]"
            >
              <div className="absolute inset-x-4 top-0 h-0.5 bg-linear-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 rounded-lg bg-linear-to-b from-blue-50/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img
                src={client.logo}
                alt={client.name}
                className="relative z-10 max-h-14 md:max-h-16 max-w-full w-auto object-contain transition-all duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
