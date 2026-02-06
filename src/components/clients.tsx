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
    <section className="py-10 bg-slate-950 border-y border-slate-900 relative overflow-hidden w-full">

      <div className="absolute inset-0 opacity-[0.1] pointer-events-none" style={{
        backgroundImage: 'radial-gradient(#1e293b 1px, transparent 1px)',
        backgroundSize: '24px 24px'
      }}>
      </div>

      <div className="container mx-auto px-6 mb-16 text-center relative z-10">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="h-px w-8 md:w-12 bg-linear-to-r from-transparent to-blue-600"></div>
          <span className="text-blue-500 font-bold text-xs md:text-sm uppercase tracking-[0.2em]">
            Confiabilidade Comprovada
          </span>
          <div className="h-px w-8 md:w-12 bg-linear-to-l from-transparent to-blue-600"></div>
        </div>

        <h3 className="text-2xl md:text-2xl lg:text-3xl text-white tracking-tight mb-4">
          Parceiros que constroem <br className="" />
          <span className="text-4xl! md:text-5xl font-bold">o Rio conosco</span>
        </h3>

        <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base font-medium">
          Atuamos em conjunto com as principais concessionárias e indústrias do estado.
        </p>
      </div>

      <div className="relative w-full max-w-[100vw] overflow-hidden">

        <div className="absolute top-0 left-0 w-24 md:w-40 h-full bg-linear-to-r from-slate-950 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-24 md:w-40 h-full bg-linear-to-l from-slate-950 to-transparent z-10 pointer-events-none"></div>

        <motion.div
          className="flex items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 50,
          }}
          style={{ width: "max-content" }}
        >
          {carouselItems.map((client, index) => (
            <div
              key={index}
              className="w-45 md:w-62.5 shrink-0 flex justify-center items-center mx-4 md:mx-8 group"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-14 md:h-16 w-auto object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 hover:scale-110"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}