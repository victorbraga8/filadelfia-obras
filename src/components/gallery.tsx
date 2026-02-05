import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, Plus, ArrowRight } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop",
    category: "Projetos Estruturais",
    span: "md:col-span-2 md:row-span-2"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop",
    category: "Solda & Montagem",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1581094794329-cd1096d7a43f?q=80&w=800&auto=format&fit=crop",
    category: "Engenharia Civil",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1590644365607-1c5a38fc43e0?q=80&w=800&auto=format&fit=crop",
    category: "Infraestrutura",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1535154376363-24151a665974?q=80&w=800&auto=format&fit=crop",
    category: "Tubulações",
    span: "md:col-span-1 md:row-span-1"
  }
];

export default function Gallery() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-28 bg-white relative">
      <div className="container mx-auto px-6">

        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-3 block">
              Galeria de Projetos
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
              Execução e <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Acabamento.</span>
            </h2>
          </div>

          <button className="hidden md:flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors group">
            <span>Ver portfólio completo</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[250px] md:auto-rows-[280px] gap-4">
          {galleryImages.map((item) => (
            <motion.div
              key={item.id}
              layoutId={`card-${item.id}`}
              onClick={() => setSelectedId(item.id)}
              className={`relative group rounded-2xl overflow-hidden cursor-pointer bg-slate-100 ${item.span}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={item.url}
                alt={item.category}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/50 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 text-white flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                    <ZoomIn size={20} />
                  </div>
                  <span className="text-sm font-bold tracking-wider uppercase drop-shadow-md">{item.category}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 flex md:hidden justify-center">
          <button className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors">
            <Plus size={16} /> Ver portfólio completo
          </button>
        </div>

      </div>

      <AnimatePresence>
        {selectedId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedId(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-50 bg-white/10 p-2 rounded-full backdrop-blur-sm"
              onClick={() => setSelectedId(null)}
            >
              <X size={24} />
            </button>

            {galleryImages.map((item) => {
              if (item.id === selectedId) {
                return (
                  <motion.div
                    key={item.id}
                    layoutId={`card-${item.id}`}
                    className="relative w-full max-w-6xl h-auto max-h-[90vh] rounded-xl overflow-hidden shadow-2xl bg-black"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <img
                      src={item.url}
                      alt={item.category}
                      className="w-full h-full object-contain max-h-[85vh]"
                    />
                    <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                      <p className="text-white font-bold text-xl">{item.category}</p>
                      <p className="text-slate-300 text-sm mt-1">Visualização detalhada do projeto</p>
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