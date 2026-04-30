import {
  HardHat,
  Ruler,
  Droplets,
  Square,
  LayoutGrid,
  Zap,
  PaintRoller,
  Layers,
  Sparkles,
  Target,
  Camera,
} from "lucide-react"
import { ModuleCard, type StepItem } from "@/components/pop/module-card"
import { TimelineNav } from "@/components/pop/timeline-nav"
import { MortarRecipe } from "@/components/pop/mortar-recipe"
import { PrintButton } from "@/components/pop/print-button"

const modules: Array<{
  number: string
  title: string
  icon: typeof HardHat
  duration?: string
  team?: string
  tools?: string[]
  steps: StepItem[]
  warning?: string
  extra?: React.ReactNode
}> = [
  {
    number: "1",
    title: "Instalação de Câmeras",
    icon: Camera,
    team: "Mestre de Obras",
    steps: [
      { text: "Posicionar e instalar câmeras de monitoramento da obra antes do início dos trabalhos." },
    ],
  },
  {
    number: "2",
    title: "Demarcação",
    icon: Ruler,
    duration: "5 h gabaritagem + 2 h arranques",
    team: "Mestre de Obras + 2 auxiliares",
    tools: ["Martelete", "Linha de marcação"],
    steps: [
      { text: "Conferir se a fundação e o radier estão prontos antes de iniciar." },
      {
        text: "Demarcar as paredes com linhas e desenhos: o mestre de obras faz a gabaritagem; os auxiliares desenham e demarcam.",
      },
      {
        text: "Fazer os furos de arranques e encaixá-los a cada 30 cm, usando o martelete sob supervisão do mestre de obras.",
        highlight: true,
      },
    ],
  },
  {
    number: "3",
    title: "Impermeabilização",
    icon: Droplets,
    duration: "≈ 1 hora",
    team: "Auxiliares técnicos",
    tools: ["Smart Resina", "Cimento Elástico"],
    steps: [
      {
        text: "Aplicar a impermeabilização no caminho das paredes: 2 mãos de Smart Resina + 1 mão de Cimento Elástico.",
        highlight: true,
      },
      { text: "Encaixar os arranques nos furos somente após aplicar a camada de produtos." },
    ],
  },
  {
    number: "4",
    title: "Esquadros",
    icon: Square,
    duration: "≈ 2 h prumagem + 10 min linhas-guia",
    team: "Auxiliares técnicos",
    tools: ["Parafusadeira", "Arame", "Metalon"],
    steps: [
      {
        text: "Prumagem: posicionar as chapas de metal das escoras no prumo (alinham as paredes). Colocar uma escora em cada extremidade do radier.",
      },
      { text: "Posicionar os esquadros no prumo e fixá-los no chão com a parafusadeira." },
      {
        text: "Passar duas linhas-guia entre as escoras das extremidades: uma na parte de cima (altura da laje) e outra na parte de baixo (rodapé).",
      },
      {
        text: "Colocar os demais esquadros no centro (um a cada distância padrão) e fixá-los no chão com parafusadeira.",
      },
      {
        text: "Instalar 2 metalons na horizontal entre as escoras, amarrados com arame, mantendo distância equivalente do chão.",
      },
    ],
  },
  {
    number: "5",
    title: "Montagem dos Painéis",
    icon: LayoutGrid,
    team: "Auxiliares técnicos",
    tools: ["Torquês", "Arame"],
    steps: [
      {
        text: "Levantar o painel e apoiá-lo nos esquadros e arranques, seguindo a numeração do projeto do fornecedor.",
      },
      {
        text: "Amarrar os painéis com arame usando a torquês: a cada 2 quadradinhos da malha, uma amarração.",
        highlight: true,
      },
      {
        text: "Painéis acima e abaixo da janela vão na posição HORIZONTAL (paredes ficam na vertical).",
        highlight: true,
      },
      {
        text: "Vergas e contra-vergas (malha U) nas janelas: 4 unidades por janela, presas com arame e torquês.",
      },
      {
        text: "Vergas (malha U) nas portas: 1 unidade por porta, na parte de cima, presa com arame e torquês.",
      },
      {
        text: "Malha “band-ai” a 45° em todas as quinas das janelas (dentro e fora): 8 unidades por janela.",
      },
      {
        text: "Malha “band-ai” a 45° em todas as quinas das portas (dentro e fora): 4 unidades por porta.",
      },
    ],
  },
  {
    number: "6",
    title: "Instalações Elétrica e Hidráulica",
    icon: Zap,
    duration: "≈ 4 h marcação + 2 dias execução",
    team: "Equipe de elétrica e hidráulica",
    tools: ["Tinta spray", "Soprador térmico"],
    steps: [
      {
        text: "Com o projeto em mãos, marcar com TINTA SPRAY (somente spray) os dutos elétricos, hidráulicos e caixinhas de interruptor.",
        highlight: true,
      },
      { text: "Auxiliar abre os dutos marcados utilizando o soprador térmico, seguindo o projeto." },
      { text: "Passagem de conduítes e canos pela equipe de elétrica e hidráulica (≈ 2 dias)." },
      { text: "Instalar os registros." },
    ],
  },
  {
    number: "7",
    title: "Reboco Estrutural",
    icon: PaintRoller,
    duration: "50–60 min entre camadas · 48 h cura",
    team: "Auxiliares técnicos",
    tools: ["Projetora", "Régua de alumínio", "Mestras / taliscas"],
    steps: [
      {
        text: "Emboço (1ª camada): projetar argamassa para cobrir a malha. Aguardar 50 a 60 min antes da 2ª camada.",
      },
      {
        text: "2ª camada: projetar com o mesmo traço; outro auxiliar nivela com régua de alumínio após 30 min da projeção.",
      },
      {
        text: "Usar mestras de metal ou taliscas para guiar a espessura — recomenda-se 3,5 cm de cada lado.",
        highlight: true,
      },
      { text: "Aguardar 48 horas de cura da projeção antes de seguir." },
    ],
    warning:
      "EVITE PROJETAR GRANDE QUANTIDADE DE UMA SÓ VEZ — a massa pode “desplacar” da parede.",
  },
  {
    number: "8",
    title: "Laje Convencional",
    icon: Layers,
    team: "Equipe completa",
    steps: [
      { text: "Instalação das vigotas nos vãos." },
      { text: "Colocar as escoras de metal da laje." },
      { text: "Instalação do EPS e das malhas." },
      { text: "Amarração de toda a estrutura." },
      { text: "Instalação das formas de sarrafo nos beirais da laje." },
      { text: "Concretagem." },
      { text: "No dia seguinte: cura molhada por 7 dias.", highlight: true },
      { text: "Instalação da platibanda (com bloco)." },
      { text: "Montar a casa da caixa d'água." },
      { text: "Reboco da platibanda e da casa da caixa d'água." },
    ],
  },
  {
    number: "9",
    title: "Limpeza e Entrega",
    icon: Sparkles,
    team: "Equipe completa",
    steps: [
      { text: "Limpeza geral da obra e remoção de resíduos." },
      { text: "Verificação final dos itens do POP e entrega ao cliente." },
    ],
  },
]

const timelineItems = modules.slice(0, 8).map((m) => ({
  number: m.number,
  title: m.title,
  icon: m.icon,
}))

export default function Page() {
  return (
    <main className="min-h-svh bg-background">
      {/* Top header */}
      <header className="border-b border-border bg-card">
        <div className="max-w-5xl mx-auto px-4 md:px-6 py-5 md:py-6">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center h-10 w-10 md:h-12 md:w-12 rounded-xl bg-primary text-primary-foreground">
                <HardHat className="h-5 w-5 md:h-6 md:w-6" aria-hidden="true" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  FastBuild
                </div>
                <div className="font-display text-base md:text-lg font-bold text-foreground leading-tight">
                  POP 6 — Montagem de Painéis EPS
                </div>
              </div>
            </div>
            <PrintButton />
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 md:px-6 py-8 md:py-12 space-y-8 md:space-y-10">
        {/* Hero */}
        <section className="rounded-2xl bg-primary text-primary-foreground p-6 md:p-10 overflow-hidden relative">
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              Procedimento Operacional Padrão
            </div>
            <h1 className="font-display text-3xl md:text-5xl font-bold leading-[1.05] text-balance mb-4">
              Montagem de Painéis EPS na Obra
            </h1>
            <p className="text-base md:text-lg text-primary-foreground/80 leading-relaxed text-pretty">
              Guia visual passo a passo para a equipe de obra. Consulte cada módulo,
              ferramentas e tempos de execução de forma rápida e clara.
            </p>
          </div>
        </section>

        {/* Quick info */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-border bg-card p-5">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
              <Target className="h-4 w-4" aria-hidden="true" />
              Objetivo
            </div>
            <p className="text-sm md:text-base text-foreground leading-relaxed">
              Estabelecer o passo a passo da montagem de painéis em EPS na obra.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-5">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
              <HardHat className="h-4 w-4" aria-hidden="true" />
              Responsáveis
            </div>
            <ul className="space-y-1.5 text-sm md:text-base text-foreground">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                Engenheiro Responsável
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                Mestre de Obras
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-card p-5">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
              <LayoutGrid className="h-4 w-4" aria-hidden="true" />
              Mão de obra
            </div>
            <ul className="space-y-1.5 text-sm md:text-base text-foreground">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                1 Técnico de instalação
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                2 Auxiliares técnicos
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                Projeto das placas
              </li>
            </ul>
          </div>
        </section>

        {/* Timeline / index */}
        <TimelineNav items={timelineItems} />

        {/* Modules */}
        <section className="space-y-6 md:space-y-8">
          {modules.map((m) => (
            <ModuleCard
              key={m.number}
              number={m.number}
              title={m.title}
              icon={m.icon}
              duration={m.duration}
              team={m.team}
              tools={m.tools}
              steps={m.steps}
              warning={m.warning}
            >
              {m.number === "7" && (
                <div className="px-5 md:px-6 pb-6">
                  <MortarRecipe />
                </div>
              )}
            </ModuleCard>
          ))}
        </section>

        {/* Footer */}
        <footer className="border-t border-border pt-6 pb-2 text-center">
          <p className="text-xs text-muted-foreground">
            FastBuild · POP 6 — Montagem de Painéis EPS · Documento de consulta interna
          </p>
        </footer>
      </div>
    </main>
  )
}
