import { Droplets, Factory, Wrench, Zap, type LucideIcon } from 'lucide-react';

export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  icon: LucideIcon;
  image: string;
  features: string[];
  highlights: string[];
};

export const serviceItems: ServiceItem[] = [
  {
    id: '01',
    title: 'Hidráulica e Saneamento',
    description:
      'Execução e manutenção de redes de água e esgoto, hidrômetros, drenagem e desobstruções com resposta operacional em campo.',
    detailedDescription:
      'Atuamos em infraestrutura hidráulica e saneamento com equipes preparadas para instalações, adequações e intervenções corretivas. O escopo contempla instalações de hidrômetros, ligações de água e esgoto, drenagem, desobstrução manual e desobstrução com equipamento para restaurar o fluxo com segurança, produtividade e menor impacto na operação do cliente.',
    icon: Droplets,
    image: '/saneamento.avif',
    features: ['Redes de Água', 'Hidrômetros', 'Drenagem', 'Desobstrução de Redes'],
    highlights: [
      'Instalação e substituição de hidrômetros com padronização de campo.',
      'Desobstrução manual para intervenções pontuais e áreas de difícil acesso.',
      'Desobstrução com equipamento para ganho de produtividade em trechos críticos.',
      'Frentes de manutenção para redes de água, esgoto e drenagem urbana.',
    ],
  },
  {
    id: '02',
    title: 'Caldeiraria Industrial',
    description:
      'Fabricação, montagem e manutenção de estruturas metálicas, tanques e tubulações industriais com controle técnico de soldagem.',
    detailedDescription:
      'Executamos soluções de caldeiraria para ambientes industriais que exigem robustez mecânica, precisão dimensional e confiabilidade operacional. Desenvolvemos estruturas metálicas, tanques e tubulações com foco em durabilidade, adequação ao processo e integração com a rotina de manutenção do cliente.',
    icon: Factory,
    image: '/caldeiraria.avif',
    features: ['Tanques Metálicos', 'Soldas Especiais', 'Tubulações'],
    highlights: [
      'Montagem e reparo de estruturas metálicas para operação contínua.',
      'Execução de soldas especiais com atenção à integridade do conjunto.',
      'Adequação de tubulações industriais para ampliar segurança e desempenho.',
      'Atuação alinhada a cronogramas de parada e manutenção programada.',
    ],
  },
  {
    id: '03',
    title: 'Manutenção',
    description:
      'Intervenções civis e estruturais para manter ativos em operação, com pequenas reformas, concreto armado e recomposição urbana.',
    detailedDescription:
      'Nossa frente de manutenção reúne equipes multidisciplinares para executar pequenas reformas de obras civis, serviços em estrutura de concreto armado, recomposição asfáltica e nivelamento ou substituição de tampão e capoeira. O objetivo é recuperar áreas degradadas, corrigir patologias e devolver funcionalidade ao espaço com padrão técnico consistente.',
    icon: Wrench,
    image: '/predial.avif',
    features: [
      'Pequenas Reformas',
      'Concreto Armado',
      'Impermeabilização'
    ],
    highlights: [
      'Pequenas reformas civis com foco em correção rápida e acabamento funcional.',
      'Recuperação e reforço em estruturas de concreto armado.',
      'Recomposição asfáltica para restabelecer segurança e trafegabilidade.',
      'Nivelamento e substituição de tampão e capoeira em áreas técnicas e urbanas.',
    ],
  },
  {
    id: '04',
    title: 'Instalações Elétricas',
    description:
      'Infraestrutura elétrica e automação aplicada com manutenção preditiva, bombas e painéis para garantir continuidade operacional.',
    detailedDescription:
      'Desenvolvemos soluções em instalações elétricas para operações que exigem disponibilidade, diagnóstico técnico e resposta eficiente. O escopo inclui automação, manutenção preditiva, manutenção de bombas e atuação em painéis elétricos, sempre com foco em confiabilidade, segurança e redução de paradas não planejadas.',
    icon: Zap,
    image: '/eletrica.avif',
    features: ['Automação', 'Manutenção Preditiva', 'Bombas Elétricas', 'Painéis Elétricos'],
    highlights: [
      'Manutenção preditiva para antecipar falhas e preservar ativos críticos.',
      'Intervenções em bombas e painéis elétricos com análise técnica em campo.',
      'Apoio à automação para ganho de eficiência e controle operacional.',
      'Execução orientada por segurança, continuidade e rastreabilidade de serviço.',
    ],
  },
];
