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
  icon: React.ReactNode
  duration?: string
  team?: string
  tools?: string[]
  steps: StepItem[]
  warning?: string
}> = [
  {
    number: "1",
    title: "Instalação de Câmeras",
    icon: <Camera className="h-4 w-4" aria-hidden="true" />,
    team: "Técnico de Instalação",
    steps: [
      {
        title: "Posicionar e instalar as câmeras de monitoramento",
        details:
          "Antes de iniciar qualquer trabalho na obra, o Técnico de Instalação deve posicionar e fixar as câmeras de monitoramento em pontos estratégicos do canteiro. Essas câmeras servem para registrar a execução de cada etapa e garantir o acompanhamento remoto da obra.",
      },
    ],
  },
  {
    number: "2",
    title: "Demarcação",
    icon: <Ruler className="h-4 w-4" aria-hidden="true" />,
    duration: "5 h gabaritagem + 2 h arranques",
    team: "Técnico de Instalação + 2 Assistentes de Instalação",
    tools: ["Martelete", "Linha de marcação", "Giz / tinta"],
    steps: [
      {
        title: "Conferir fundação e radier",
        details:
          "Verifique se a fundação e o radier estão totalmente prontos, nivelados e curados antes de iniciar a demarcação. Não comece nenhuma marcação sobre superfície ainda úmida ou irregular.",
      },
      {
        title: "Demarcar as paredes com linhas e desenhos",
        details:
          "O Técnico de Instalação faz a gabaritagem (referência mestre) e os Assistentes de Instalação desenham e demarcam o caminho das paredes sobre o radier seguindo o projeto. Tempo médio dessa etapa: aproximadamente 5 horas.",
      },
      {
        title: "Furar e encaixar os arranques a cada 30 cm",
        highlight: true,
        details:
          "Os Assistentes de Instalação, sob supervisão do Técnico de Instalação, executam os furos e encaixam os arranques a cada 30 cm com o uso do martelete. Tempo médio: 2 horas. Mantenha o espaçamento padrão para garantir o travamento correto dos painéis.",
      },
    ],
  },
  {
    number: "3",
    title: "Impermeabilização",
    icon: <Droplets className="h-4 w-4" aria-hidden="true" />,
    duration: "≈ 1 hora",
    team: "Assistentes de Instalação",
    tools: ["Smart Resina", "Cimento Elástico"],
    steps: [
      {
        title: "Aplicar a impermeabilização no caminho das paredes",
        highlight: true,
        details:
          "Misturar e aplicar 2 mãos de Smart Resina + 1 mão de Cimento Elástico em todo o caminho das paredes demarcadas. Aguarde o tempo de secagem entre as mãos conforme a indicação do fabricante.",
      },
      {
        title: "Encaixar os arranques nos furos",
        details:
          "Somente após a aplicação completa da camada de impermeabilizante, os Assistentes de Instalação devem encaixar os arranques nos furos previamente abertos no módulo de demarcação.",
      },
    ],
  },
  {
    number: "4",
    title: "Esquadros",
    icon: <Square className="h-4 w-4" aria-hidden="true" />,
    duration: "≈ 2 h prumagem + 10 min linhas-guia",
    team: "Assistentes de Instalação",
    tools: ["Parafusadeira", "Arame", "Metalon"],
    steps: [
      {
        title: "Prumagem das chapas de metal das escoras",
        details:
          "Coloque as chapas de metal das escoras no prumo. Essas escoras alinham as paredes. Posicione uma escora em cada extremidade do radier. Tempo médio: 2 horas.",
      },
      {
        title: "Posicionar e fixar os esquadros no chão",
        details:
          "Posicione cada esquadro no prumo e fixe-o no chão usando a parafusadeira, garantindo firmeza para suportar os painéis na sequência.",
      },
      {
        title: "Passar duas linhas-guia entre as escoras",
        details:
          "Passe duas linhas-guia entre as escoras das extremidades: uma na parte de cima (altura da laje) e outra na parte de baixo (rodapé). Essas linhas servem como referência de alinhamento durante todo o trabalho. Tempo médio: 10 minutos.",
      },
      {
        title: "Instalar os esquadros do centro",
        details:
          "Coloque os demais esquadros entre as extremidades, distribuindo um esquadro a cada distância padrão de projeto, e fixe-os no chão com a parafusadeira.",
      },
      {
        title: "Instalar os metalons na horizontal",
        details:
          "Instale 2 metalons na horizontal entre uma escora e outra, mantendo distância equivalente entre eles e o chão. Os metalons são amarrados com arame.",
      },
    ],
  },
  {
    number: "5",
    title: "Montagem dos Painéis",
    icon: <LayoutGrid className="h-4 w-4" aria-hidden="true" />,
    team: "Assistentes de Instalação",
    tools: ["Torquês", "Arame"],
    steps: [
      {
        title: "Levantar e posicionar os painéis",
        details:
          "Levante o painel e apoie-o nos esquadros e arranques, seguindo a numeração do projeto fornecida pelo fabricante. Cada painel tem uma posição específica — não troque a ordem.",
      },
      {
        title: "Amarrar os painéis com arame e torquês",
        highlight: true,
        details:
          "Amarre os painéis com arame utilizando a torquês. Regra: a cada 2 quadradinhos da malha, faça uma amarração. Isso garante que o painel fique firme e bem travado.",
      },
      {
        title: "Painéis acima e abaixo da janela: posição HORIZONTAL",
        highlight: true,
        details:
          "Atenção à orientação: as paredes ficam na vertical, mas os painéis que formam a parte de cima e de baixo da janela são colocados na posição HORIZONTAL. Conferir o projeto antes de fixar.",
      },
      {
        title: "Vergas e contra-vergas (malha U) nas janelas",
        details:
          "Coloque vergas e contra-vergas com malha U nas 4 extremidades de cada janela — total de 4 unidades por janela. Prenda com arame usando a torquês.",
      },
      {
        title: "Vergas (malha U) nas portas",
        details:
          "Coloque verga em malha U na parte de cima de cada porta — 1 unidade por porta. Prenda com arame e torquês.",
      },
      {
        title: "Malha “band-ai” a 45° nas quinas das janelas",
        details:
          "Aplique a malha “band-ai” a 45° em relação à quina, em todas as quinas das janelas, dentro e fora — 8 unidades por janela. Prenda com arame e torquês.",
      },
      {
        title: "Malha “band-ai” a 45° nas quinas das portas",
        details:
          "Aplique a malha “band-ai” a 45° em todas as quinas das portas, dentro e fora — 4 unidades por porta. Prenda com arame e torquês.",
      },
    ],
  },
  {
    number: "6",
    title: "Instalações Elétrica e Hidráulica",
    icon: <Zap className="h-4 w-4" aria-hidden="true" />,
    duration: "≈ 4 h marcação + 2 dias execução",
    team: "Equipe de elétrica e hidráulica",
    tools: ["Tinta spray", "Soprador térmico"],
    steps: [
      {
        title: "Marcar dutos e caixinhas com tinta spray",
        highlight: true,
        details:
          "Com o projeto em mãos, o Técnico de Instalação marca a posição dos dutos elétricos, hidráulicos e das caixinhas de interruptor utilizando exclusivamente TINTA SPRAY. Não use outro tipo de marcador. Tempo médio: 4 horas para marcar e iniciar a execução.",
      },
      {
        title: "Abrir os dutos com soprador térmico",
        details:
          "O Assistente de Instalação utiliza o soprador térmico para abrir, no painel EPS, os dutos previamente marcados, seguindo rigorosamente o projeto.",
      },
      {
        title: "Passagem de conduítes e canos",
        details:
          "A equipe de elétrica e hidráulica realiza a passagem de conduítes e canos pelos dutos abertos. Tempo estimado: 2 dias.",
      },
      {
        title: "Instalar os registros",
        details:
          "Após a passagem dos canos, instale os registros nos pontos previstos pelo projeto hidráulico.",
      },
    ],
  },
  {
    number: "7",
    title: "Reboco Estrutural",
    icon: <PaintRoller className="h-4 w-4" aria-hidden="true" />,
    duration: "50–60 min entre camadas · 48 h cura",
    team: "Assistentes de Instalação",
    tools: ["Projetora", "Régua de alumínio", "Mestras / taliscas"],
    warning:
      "EVITE PROJETAR GRANDE QUANTIDADE DE UMA SÓ VEZ — a massa pode “desplacar” da parede.",
    steps: [
      {
        title: "1ª camada — Emboço (cobrir a malha)",
        details:
          "Projete a argamassa para cobrir totalmente a malha. Essa primeira camada chama-se emboço. Trabalhe em pequenas áreas por vez para evitar desplacamento. Após projetar, aguarde de 50 a 60 minutos antes de iniciar a 2ª camada.",
      },
      {
        title: "2ª camada — Projeção e nivelamento",
        details:
          "Use o mesmo traço de argamassa. Enquanto um Assistente de Instalação projeta a 2ª camada, o segundo segue logo atrás (após 30 minutos da projeção) nivelando com uma régua de alumínio.",
      },
      {
        title: "OBRIGATÓRIO: usar mestras ou taliscas",
        highlight: true,
        details:
          "É obrigatório usar mestras de metal ou taliscas para guiar a espessura do reboco na 2ª camada. Espessura recomendada: 3,5 cm de cada lado da parede.",
      },
      {
        title: "Aguardar 48 h de cura",
        details:
          "Aguarde 48 horas de cura completa da projeção antes de seguir para a próxima etapa. Não acelere o processo.",
      },
      {
        title: "Traço da argamassa (proporção 1:3)",
        details: <MortarRecipe />,
      },
    ],
  },
  {
    number: "8",
    title: "Laje Convencional",
    icon: <Layers className="h-4 w-4" aria-hidden="true" />,
    team: "Equipe completa",
    steps: [
      {
        title: "Instalar as vigotas nos vãos",
        details:
          "Posicione as vigotas em todos os vãos da laje seguindo o espaçamento previsto no projeto estrutural.",
      },
      {
        title: "Colocar as escoras de metal da laje",
        details:
          "Instale as escoras de metal de apoio da laje, garantindo nivelamento e firmeza para suportar a concretagem.",
      },
      {
        title: "Instalar EPS e malhas",
        details:
          "Posicione as placas de EPS entre as vigotas e instale a malha de aço por cima, conforme o projeto.",
      },
      {
        title: "Amarração da estrutura",
        details:
          "Amarre toda a estrutura (vigotas, EPS e malhas) com arame, garantindo que nada se mova durante a concretagem.",
      },
      {
        title: "Instalar formas de sarrafo nos beirais",
        details:
          "Coloque as formas de sarrafo em todos os beirais da laje para conter o concreto durante a concretagem.",
      },
      {
        title: "Concretagem da laje",
        details:
          "Realize a concretagem da laje seguindo o traço definido pelo projeto estrutural. Espalhe e nivele uniformemente.",
      },
      {
        title: "Cura molhada por 7 dias",
        highlight: true,
        details:
          "No dia seguinte à concretagem, inicie a cura molhada e mantenha-a por 7 dias consecutivos. Isso garante a resistência final da laje.",
      },
      {
        title: "Instalar a platibanda (com bloco)",
        details:
          "Após a cura inicial, execute a platibanda utilizando blocos, seguindo a altura prevista no projeto.",
      },
      {
        title: "Montar a casa da caixa d’água",
        details:
          "Construa a estrutura da casa da caixa d’água sobre a laje, conforme dimensões e localização do projeto.",
      },
      {
        title: "Reboco da platibanda e da casa da caixa d’água",
        details:
          "Aplique reboco na platibanda e na casa da caixa d’água, finalizando a estrutura da cobertura.",
      },
    ],
  },
  {
    number: "9",
    title: "Limpeza e Entrega",
    icon: <Sparkles className="h-4 w-4" aria-hidden="true" />,
    team: "Equipe completa",
    steps: [
      {
        title: "Limpeza geral da obra",
        details:
          "Realize a limpeza completa do canteiro e o descarte adequado de todos os resíduos gerados durante a execução.",
      },
      {
        title: "Verificação final e entrega ao cliente",
        details:
          "Confira todos os itens do POP, faça uma vistoria final junto ao Engenheiro Responsável e realize a entrega oficial da obra ao cliente.",
      },
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
      {/* Cabeçalho fixo */}
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
              Guia visual passo a passo para a equipe de obra. Toque em cada passo
              para ver a explicação completa.
            </p>
          </div>
        </section>

        {/* Informações rápidas */}
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
                Técnico de Instalação
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
                1 Técnico de Instalação
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                2 Assistentes de Instalação
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                Projeto das placas
              </li>
            </ul>
          </div>
        </section>

        {/* Índice navegável */}
        <TimelineNav items={timelineItems} />

        {/* Módulos */}
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
            />
          ))}
        </section>

        {/* Rodapé */}
        <footer className="border-t border-border pt-6 pb-2 text-center">
          <p className="text-xs text-muted-foreground">
            FastBuild · POP 6 — Montagem de Painéis EPS · Documento de consulta interna
          </p>
        </footer>
      </div>
    </main>
  )
}
