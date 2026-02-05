import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, Plus } from "lucide-react";

// Imagens de Placeholders Industriais (Sem 404)
const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop",
    category: "Solda Industrial",
    span: "col-span-1 md:col-span-2 md:row-span-2" // Destaque Grande
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop",
    category: "Manutenção",
    span: "col-span-1 md:col-span-1 md:row-span-1"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop",
    category: "Infraestrutura",
    span: "col-span-1 md:col-span-1 md:row-span-1"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1590644365607-1c5a38fc43e0?q=80&w=800&auto=format&fit=crop",
    category: "Construção Civil",
    span: "col-span-1 md:col-span-1 md:row-span-1"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1535154376363-24151a665974?q=80&w=800&auto=format&fit=crop",
    category: "Tubulações",
    span: "col-span-1 md:col-span-1 md:row-span-1"
  }
];

export default function Gallery() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">

        {/* Cabeçalho Minimalista */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <span className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-2 block">
              Galeria de Projetos
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
              Execução e <span className="text-slate-400">Acabamento.</span>
            </h2>
          </div>

          {/* Botão decorativo "Ver mais" (opcional) */}
          <button className="hidden md:flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors">
            <Plus size={16} /> Ver portfólio completo
          </button>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 h-[500px] md:h-[600px]">
          {galleryImages.map((item) => (
            <motion.div
              key={item.id}
              layoutId={`card-${item.id}`}
              onClick={() => setSelectedId(item.id)}
              className={`relative group rounded-2xl overflow-hidden cursor-pointer ${item.span}`}
              whileHover={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={item.url}
                alt={item.category}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay Hover */}
              <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/40 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 text-white flex flex-col items-center gap-2">
                  <ZoomIn size={32} className="text-blue-400" />
                  <span className="text-sm font-bold tracking-wider uppercase">{item.category}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-slate-950/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedId(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
              onClick={() => setSelectedId(null)}
            >
              <X size={40} />
            </button>

            {/* Imagem Expandida */}
            {galleryImages.map((item) => {
              if (item.id === selectedId) {
                return (
                  <motion.div
                    key={item.id}
                    layoutId={`card-${item.id}`}
                    className="relative w-full max-w-5xl max-h-[90vh] rounded-lg overflow-hidden shadow-2xl"
                    onClick={(e) => e.stopPropagation()} // Evita fechar ao clicar na imagem
                  >
                    <img
                      src={item.url}
                      alt={item.category}
                      className="w-full h-full object-contain bg-black"
                    />
                    <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
                      <p className="text-white font-bold text-lg">{item.category}</p>
                    </div>
                  </motion.div>
                );
              }
              return null;
            })}
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}