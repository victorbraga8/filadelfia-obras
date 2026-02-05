import { Users, Building2, CheckCircle2, Clock } from "lucide-react";

const stats = [
  {
    value: "+10",
    label: "Anos de Mercado",
    desc: "Experiência sólida",
    icon: <Clock className="w-6 h-6 text-blue-500" />
  },
  {
    value: "+500",
    label: "Obras Entregues",
    desc: "Em todo estado do RJ",
    icon: <CheckCircle2 className="w-6 h-6 text-blue-500" />
  },
  {
    value: "100%",
    label: "Equipamento Próprio",
    desc: "Frota e maquinário",
    icon: <Building2 className="w-6 h-6 text-blue-500" />
  },
  {
    value: "+50",
    label: "Colaboradores",
    desc: "Técnicos certificados",
    icon: <Users className="w-6 h-6 text-blue-500" />
  }
];

export default function Stats() {
  return (
    <div className="bg-slate-900 border-b border-slate-800 relative z-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-800 border-x border-slate-800">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="group p-8 flex flex-col items-center text-center hover:bg-slate-800/50 transition-colors duration-300 relative overflow-hidden"
            >
              <div className="mb-4 p-3 bg-slate-800 rounded-full group-hover:bg-blue-500/10 group-hover:scale-110 transition-all duration-300">
                {stat.icon}
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
                {stat.value}
              </h3>

              <p className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-1">
                {stat.label}
              </p>

              <span className="text-xs text-slate-500 hidden md:block">
                {stat.desc}
              </span>

              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}