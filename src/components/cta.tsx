const clients = ["Águas de Niterói", "Zona Oeste Mais", "Águas do Imperador", "Águas de Nova Friburgo"];
export default function Cta() {
  return (
    <div className="bg-slate-100 py-8 border-b border-slate-200">
      <div className="container mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
        {clients.map((client, idx) => (
          <h3 key={idx} className="text-xl font-bold text-slate-400 uppercase tracking-widest">{client}</h3>
        ))}
      </div>
    </div>
  )
}