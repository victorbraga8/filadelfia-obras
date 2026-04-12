import { Users, Building2, CheckCircle2, Clock } from "lucide-react";

const stats = [
  {
    value: "+10",
    label: "Anos de Atuação",
    desc: "Experiência sólida",
    icon: <Clock className="w-5 h-5 md:w-6 md:h-6" />
  },
  {
    value: "+1000",
    label: "Obras Entregues",
    desc: "Em todo estado do RJ",
    icon: <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6" />
  },
  {
    value: "100%",
    label: "Equipamento Próprio",
    desc: "Frota e maquinário",
    icon: <Building2 className="w-5 h-5 md:w-6 md:h-6" />
  },
  {
    value: "+50",
    label: "Colaboradores",
    desc: "Técnicos certificados com NR's",
    icon: <Users className="w-5 h-5 md:w-6 md:h-6" />
  }
];

export default function Stats() {
  return (
    <section className="bg-slate-950 py-12 relative z-20 border-b border-slate-800/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-slate-800 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="group bg-slate-900 p-6 md:p-10 flex flex-col items-center text-center hover:bg-slate-800/80 transition-all duration-300 relative "
            >
              <div className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="mb-4 p-3 rounded-xl bg-slate-800/50 text-blue-500 group-hover:text-blue-400 group-hover:bg-blue-500/10 group-hover:scale-110 transition-all duration-300 ring-1 ring-white/5">
                {stat.icon}
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight group-hover:text-blue-100 transition-colors">
                {stat.value}
              </h3>

              <p className="text-[10px] sm:text-xs md:text-lg font-bold text-blue-600 uppercase tracking-widest mb-1.5">
                {stat.label}
              </p>

              <span className="text-md text-slate-200 hidden sm:block">
                {stat.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}