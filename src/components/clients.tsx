import { motion } from "framer-motion";

const clients = [
  { name: "Águas de Niterói", logo: "https://placehold.co/200x80/020617/cbd5e1?text=Aguas+Niteroi" },
  { name: "Zona Oeste Mais", logo: "https://placehold.co/200x80/020617/cbd5e1?text=Zona+Oeste" },
  { name: "Águas da Condessa", logo: "https://placehold.co/200x80/020617/cbd5e1?text=Condessa" },
  { name: "Águas de Juturnaíba", logo: "https://placehold.co/200x80/020617/cbd5e1?text=Juturnaiba" },
  { name: "Águas do Imperador", logo: "https://placehold.co/200x80/020617/cbd5e1?text=Imperador" },
  { name: "Nova Friburgo", logo: "https://placehold.co/200x80/020617/cbd5e1?text=Friburgo" }
];

export default function ClientsSection() {
  return (
    <section className="py-20 bg-slate-950 border-y border-slate-900 overflow-hidden w-full">
      <div className="container mx-auto px-6 mb-12 text-center">
        <p className="text-blue-500 font-bold text-xs uppercase tracking-[0.2em] mb-3">
          Confiabilidade Comprovada
        </p>
        <h3 className="text-2xl md:text-3xl font-bold text-white">
          Parceiros que constroem o Rio com a gente
        </h3>
      </div>

      <div className="relative w-full max-w-[100vw] overflow-hidden">

        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none"></div>

        <motion.div
          className="flex items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30,
          }}
          style={{ width: "fit-content" }}
        >
          {[...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="w-[200px] md:w-[250px] flex-shrink-0 flex justify-center items-center mx-8"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-16 w-auto object-contain opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}