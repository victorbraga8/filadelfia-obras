import { motion } from "framer-motion";

const clients = [
  { name: "Águas de Niterói", logo: "https://placehold.co/200x80/020617/cbd5e1?text=Aguas+Niteroi" },
  { name: "Zona Oeste Mais", logo: "https://placehold.co/200x80/020617/cbd5e1?text=Zona+Oeste" },
  { name: "Águas da Condessa", logo: "https://placehold.co/200x80/020617/cbd5e1?text=Condessa" },
  { name: "Águas de Juturnaíba", logo: "https://placehold.co/200x80/020617/cbd5e1?text=Juturnaiba" },
  { name: "Águas do Imperador", logo: "https://placehold.co/200x80/020617/cbd5e1?text=Imperador" },
  { name: "Nova Friburgo", logo: "https://placehold.co/200x80/020617/cbd5e1?text=Friburgo" }
];

// Segurança: 4 repetições garantem que o loop -50% funcione liso até em telas 4k
const carouselItems = [...clients, ...clients, ...clients, ...clients];

export default function ClientsSection() {
  return (
    <section className="py-24 bg-slate-950 border-y border-slate-900 relative overflow-hidden w-full">

      {/* Background Decorativo (Textura Sutil) */}
      <div className="absolute inset-0 opacity-[0.1] pointer-events-none" style={{
        backgroundImage: 'radial-gradient(#1e293b 1px, transparent 1px)',
        backgroundSize: '24px 24px'
      }}>
      </div>

      <div className="container mx-auto px-6 mb-16 text-center relative z-10">

        {/* Label com Linhas (Visual Industrial) */}
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="h-[1px] w-8 md:w-12 bg-gradient-to-r from-transparent to-blue-600"></div>
          <span className="text-blue-500 font-bold text-xs md:text-sm uppercase tracking-[0.2em]">
            Confiabilidade Comprovada
          </span>
          <div className="h-[1px] w-8 md:w-12 bg-gradient-to-l from-transparent to-blue-600"></div>
        </div>

        {/* Título Melhorado (Hierarquia) */}
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
          Parceiros que constroem <br className="hidden sm:block" />
          o Rio com a gente
        </h3>

        <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base font-medium">
          Atuamos em conjunto com as principais concessionárias e indústrias do estado.
        </p>
      </div>

      {/* Lógica Estável + 4x Repetições */}
      <div className="relative w-full max-w-[100vw] overflow-hidden">

        <div className="absolute top-0 left-0 w-24 md:w-40 h-full bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-24 md:w-40 h-full bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none"></div>

        <motion.div
          className="flex items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 50, // Ajustado para ser fluido
          }}
          style={{ width: "max-content" }} // max-content é mais seguro que fit-content aqui
        >
          {carouselItems.map((client, index) => (
            <div
              key={index}
              className="w-[180px] md:w-[250px] flex-shrink-0 flex justify-center items-center mx-4 md:mx-8 group"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-14 md:h-16 w-auto object-contain opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 hover:scale-110"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}