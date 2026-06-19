import { Droplets, Factory, Wrench, Zap, type LucideIcon } from "lucide-react";

export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  contactEyebrow: string;
  contactCardCopy: string;
  icon: LucideIcon;
  image: string;
  features: string[];
  highlights: string[];
};

export const serviceItems: ServiceItem[] = [
  {
    id: "01",
    title: "Hidráulica e Saneamento",
    description:
      "Instalação, manutenção e desobstrução rápida de redes de água, esgoto e drenagem.",
    detailedDescription:
      "Através da nossa atuação em infraestrutura hidráulica e saneamento, cuidamos da sua rede de água, esgoto e drenagem para garantir que sua operação não pare. Usamos tecnologia avançada para desobstruções e reparos precisos, com o mínimo de impacto na sua rotina.",
    contactEyebrow: "Soluções Eficientes e Modernas",
    contactCardCopy:
      "Fale com nossos especialistas e agende uma vistoria para definirmos os próximos passos.",
    icon: Droplets,
    image: "/saneamento.avif",
    features: [
      "Redes de Água",
      "Hidrômetros",
      "Drenagem",
      "Desobstrução de Redes",
    ],
    highlights: [
      "Instalação e troca padronizada de hidrômetros.",
      "Desobstrução manual para áreas de difícil acesso.",
      "Desobstrução mecanizada para máxima eficiência e rapidez.",
      "Soluções para redes de água, esgoto e drenagem urbana.",
    ],
  },
  {
    id: "02",
    title: "Caldeiraria Industrial",
    description:
      "Soluções sob medida em estruturas metálicas, tanques e tubulações com soldagem de alta precisão.",
    detailedDescription:
      "Fabricação, montagem e manutenção de estruturas metálicas feitas para durar. Entregamos soluções em caldeiraria com precisão dimensional e alta resistência, adaptando nossos serviços ao seu cronograma para garantir a continuidade da sua produção.",
    contactEyebrow: "Robustez e precisão industrial",
    contactCardCopy:
      "Envie seu projeto ou necessidade e receba nossa análise e plano de execução personalizado.",
    icon: Factory,
    image: "/caldeiraria.avif",
    features: ["Tanques Metálicos", "Soldas Especiais", "Tubulações"],
    highlights: [
      "Montagem e reparo rápido de estruturas metálicas.",
      "Soldagem especial com foco em segurança e integridade.",
      "Adequação de tubulações para melhoria de desempenho.",
      "Serviços perfeitamente alinhados ao seu cronograma.",
    ],
  },
  {
    id: "03",
    title: "Manutenção",
    description:
      "Pequenas reformas, recuperação estrutural e manutenção civil para manter seus espaços seguros.",
    detailedDescription:
      "Equipe pronta para resolver problemas estruturais com agilidade. Realizamos desde pequenas reformas até a recuperação de concreto armado e pavimentos. Nosso foco é devolver a funcionalidade e a segurança ao seu ambiente de forma prática e definitiva.",
    contactEyebrow: "Manutenção civil ágil e eficiente",
    contactCardCopy:
      "Solicite um orçamento rápido e saiba como nossa equipe pode ajudar na sua obra.",
    icon: Wrench,
    image: "/predial.jpg",
    features: ["Pequenas Reformas", "Concreto Armado", "Impermeabilização"],
    highlights: [
      "Reformas civis rápidas com alto controle de qualidade.",
      "Recuperação e reforço em estruturas de concreto armado.",
      "Recomposição asfáltica e de pavimentos para garantir segurança.",
      "Nivelamento e troca de tampões em vias urbanas e áreas técnicas.",
    ],
  },
  {
    id: "04",
    title: "Instalações Elétricas",
    description:
      "Manutenção preditiva, automação e infraestrutura elétrica focada em evitar paradas.",
    detailedDescription:
      "Garantimos que a energia não seja um problema para a sua empresa. Atuamos com manutenção preditiva, reparo de bombas, automação e montagem de painéis elétricos. Trabalhamos para aumentar a vida útil dos seus equipamentos e eliminar paradas inesperadas.",
    contactEyebrow: "Energia segura e sem interrupções",
    contactCardCopy:
      "Fale conosco agora e garanta a estabilidade e segurança da sua operação elétrica.",
    icon: Zap,
    image: "/eletrica.avif",
    features: [
      "Automação",
      "Manutenção Preditiva",
      "Bombas Elétricas",
      "Painéis Elétricos",
    ],
    highlights: [
      "Manutenção preditiva para evitar falhas e problemas.",
      "Diagnóstico e reparo preciso em painéis e bombas elétricas.",
      "Automação inteligente para maior controle e eficiência da operação.",
      "Serviços executados com foco absoluto em segurança e continuidade.",
    ],
  },
];
