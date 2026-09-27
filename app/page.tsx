"use client"

import * as React from "react"
import Image from "next/image"
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
 Users,
 
 Search,
 CheckCircle2,
 FileSpreadsheet,
 Building2,
 Package,
 MessageCircle,
 Wrench,
 ShieldCheck,
 ExternalLink,
} from "lucide-react"
import { ModuleCard, type StepItem } from "@/components/pop/module-card"

const supplyLinks = [
  {
    title: "Produtos",
    description: "Aditivos, fibra e materiais",
    href: "https://beacons.ai/ronildoeps/produtos",
    icon: <Package className="h-5 w-5" aria-hidden="true" />,
  },
  {
    title: "Painel Monolítico",
    description: "Comprar pelo WhatsApp",
    href: "https://wa.me/5511977308919?text=comprar%20painel",
    icon: <MessageCircle className="h-5 w-5" aria-hidden="true" />,
  },
  {
    title: "Ferramentas",
    description: "Equipamentos para montagem",
    href: "https://beacons.ai/ronildoeps/ferramentas",
    icon: <Wrench className="h-5 w-5" aria-hidden="true" />,
  },
  {
    title: "EPI",
    description: "Proteção obrigatória da equipe",
    href: "https://beacons.ai/ronildoeps/epi",
    icon: <ShieldCheck className="h-5 w-5" aria-hidden="true" />,
  },
]
import { TimelineNav } from "@/components/pop/timeline-nav"
import { MortarRecipe } from "@/components/pop/mortar-recipe"
import { PrintButton } from "@/components/pop/print-button"
import { AccordionControls } from "@/components/pop/accordion-controls"
import { cn } from "@/lib/utils"

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
 number: "1", title: "Demarcação",
 icon: <Ruler className="h-4 w-4" strokeWidth={1.25} aria-hidden="true" />,
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
 number: "2", title: "Impermeabilização",
 icon: <Droplets className="h-4 w-4" strokeWidth={1.25} aria-hidden="true" />,
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
 number: "3", title: "Esquadros",
 icon: <Square className="h-4 w-4" strokeWidth={1.25} aria-hidden="true" />,
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
 number: "4", title: "Montagem do Painel Monolítico",
 icon: <LayoutGrid className="h-4 w-4" strokeWidth={1.25} aria-hidden="true" />,
 team: "Assistentes de Instalação",
 tools: ["Torquês", "Arame"],
 steps: [
 {
 title: "Levantar e posicionar os painéis",
 details:
 "Levante o painel e apoie-o nos esquadros e arranques, seguindo a numeração do projeto fornecida pelo fabricante. Cada painel tem uma posição específica. Não troque a ordem.",
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
 title: "Malha U nas portas e janelas",
 highlight: true,
 details:
 "Coloque a malha U (vergas e contra-vergas) em todas as aberturas. Janelas: nas 4 extremidades, total de 4 unidades por janela. Portas: na parte de cima, 1 unidade por porta. Prenda com arame usando a torquês.",
 },
 {
 title: "Malha L em todos os cantos da casa (interno e externo)",
 highlight: true,
 details:
 "Coloque a malha L em TODOS os cantos da casa, tanto na face interna quanto na face externa das paredes. Ela reforça o encontro entre os painéis e evita fissuras nas quinas. Prenda com arame usando a torquês.",
 },
 {
 title: "Malha “band-ai” a 45° nas quinas das janelas",
 details:
 "Aplique a malha “band-ai” a 45° em relação à quina, em todas as quinas das janelas, dentro e fora, 8 unidades por janela. Prenda com arame e torquês.",
 },
 {
 title: "Malha “band-ai” a 45° nas quinas das portas",
 details:
 "Aplique a malha “band-ai” a 45° em todas as quinas das portas, dentro e fora, 4 unidades por porta. Prenda com arame e torquês.",
 },
 ],
 },
 {
 number: "5", title: "Instalações Elétrica e Hidráulica",
 icon: <Zap className="h-4 w-4" strokeWidth={1.25} aria-hidden="true" />,
 duration: "≈ 4 h marcação + 2 dias execução",
 team: "Equipe de elétrica e hidráulica",
 tools: ["Tinta spray", "Soprador térmico"],
 steps: [
 {
 title: "Marcar dutos e caixinhas com tinta spray",
 highlight: true,
 details:
 "Com o projeto em mãos, o Técnico de Instalação marca a posição dos dutos elétricos, hidr������ulicos e das caixinhas de interruptor utilizando exclusivamente TINTA SPRAY. Não use outro tipo de marcador. Tempo médio: 4 horas para marcar e iniciar a execução.",
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
 number: "6", title: "Reboco Estrutural",
 icon: <PaintRoller className="h-4 w-4" strokeWidth={1.25} aria-hidden="true" />,
 duration: "50 a 60 min entre camadas · 48 h cura",
 team: "Assistentes de Instalação",
 tools: ["Projetora", "Régua de alumínio", "Mestras / taliscas"],
 warning:
 "EVITE PROJETAR GRANDE QUANTIDADE DE UMA SÓ VEZ. A massa pode “desplacar” da parede.",
 steps: [
 {
 title: "1ª camada: Emboço (cobrir a malha)",
 details:
 "Projete a argamassa para cobrir totalmente a malha. Essa primeira camada chama-se emboço. Trabalhe em pequenas áreas por vez para evitar desplacamento. Após projetar, aguarde de 50 a 60 minutos antes de iniciar a 2ª camada.",
 },
 {
 title: "2ª camada: Projeção e nivelamento",
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
 title: "Traço da argamassa, aditivo e fibra",
 details: <MortarRecipe />,
 },
 ],
 },
 {
 number: "7", title: "Laje Convencional",
 icon: <Layers className="h-4 w-4" strokeWidth={1.25} aria-hidden="true" />,
 duration: "28 dias de cura técnica",
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
 title: "Cura da laje por 28 dias",
 highlight: true,
 details:
 "No dia seguinte à concretagem, inicie o processo de cura e mantenha a hidratação rigorosa da laje por 28 dias consecutivos até atingir a resistência de projeto (fck). O escoramento estrutural deve ser mantido conforme norma técnica durante o período de cura.",
 },
 {
 title: "Instalar a platibanda com painel monolítico",
 details:
 "Execute a platibanda utilizando os próprios painéis monolíticos do sistema (sem utilização de blocos), garantindo continuidade estrutural, leveza e alinhamento conforme as cotas do projeto.",
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
 number: "8", title: "Limpeza e Entrega",
 icon: <Sparkles className="h-4 w-4" strokeWidth={1.25} aria-hidden="true" />,
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

const timelineItems = modules.map((m) => ({
 number: m.number,
 title: m.title,
 icon: m.icon,
}))

export default function Page() {
 
 const [searchQuery, setSearchQuery] = React.useState<string>("")

 const filteredModules = React.useMemo(() => {
 if (!searchQuery.trim()) return modules
 const query = searchQuery.toLowerCase()
 return modules.filter((mod) => {
 const matchMod =
 mod.title.toLowerCase().includes(query) ||
 (mod.tools && mod.tools.some((t) => t.toLowerCase().includes(query))) ||
 (mod.team && mod.team.toLowerCase().includes(query))
 const matchStep = mod.steps.some(
 (st) =>
 st.title.toLowerCase().includes(query) ||
 (typeof st.details === "string" && st.details.toLowerCase().includes(query))
 )
 return matchMod || matchStep
 })
 }, [searchQuery])

 return (
 <main className="min-h-svh bg-background text-foreground">
 {/* Cabeçalho Técnico Fixo / Barra de Governança */}
 <header className="border-b border-border/80 bg-card/95 backdrop-blur-md sticky top-0 z-30 ">
 <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-6 py-2">
 <div className="flex items-center justify-between gap-2">
 <div className="flex items-center gap-2.5 min-w-0">
 <div className="flex items-center justify-center h-9 w-9 border border-border bg-card p-1 shrink-0">
 <img
 src="/logo-mfb.png"
 alt="Logo Método FASTBUILD"
 className="h-full w-full object-contain"
 />
 </div>
 <div className="min-w-0">
 <div className="flex items-center gap-2">
 <span className="text-[10px] font-bold uppercase tracking-widest text-accent font-mono">
 Método FASTBUILD
 </span>
 <span className="hidden sm:inline text-muted-foreground/40 text-xs">|</span>
 <span className="hidden sm:inline text-[10px] uppercase tracking-wider text-muted-foreground font-mono">
 POP-06
 </span>
 </div>
 <div className="text-sm font-bold text-foreground leading-tight truncate">
 Montagem de Painel Monolítico
 </div>
 <div className="flex items-center gap-1.5 mt-0.5 text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
 <span>
 Versão <strong className="font-semibold text-foreground">R04</strong>
 </span>
 <span className="text-muted-foreground/40" aria-hidden="true">·</span>
 <span>
 Data <time dateTime="2026-09-27" className="font-semibold text-foreground">27/09/2026</time>
 </span>
 </div>
 </div>
 </div>

 {/* Ações Globais: Seletor de Modo (Cards vs Lista) & Botão Imprimir */}
 <div className="flex items-center gap-1.5 shrink-0">
 <AccordionControls />
 <PrintButton />
 </div>
 </div>
 </div>
 </header>

 <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-6 py-3 md:py-5 flex flex-col gap-3 md:gap-4">
 {/* Banner Técnico da Norma / Documentação */}
 <section className="rounded-none border border-border/80 bg-card relative overflow-hidden">
 <div className="p-4 md:p-6 flex flex-col md:flex-row md:items-start justify-between gap-4 md:gap-6">
 <div className="flex flex-col gap-4 max-w-2xl">
 <div>
 <div className="flex flex-wrap items-center gap-2 mb-3">
 <span className="px-2 py-0.5 rounded-none text-[11px] font-mono font-semibold uppercase tracking-wider bg-accent/10 text-accent border border-accent/20">
 Procedimento Operacional Padrão
 </span>
 <span className="px-2 py-0.5 rounded-none text-[11px] font-mono text-muted-foreground bg-secondary border border-border">
 Diretriz Técnica Método FASTBUILD
 </span>
 </div>
 <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-foreground mb-1.5 text-balance">
 Manual Prático Método FASTBUILD
 </h1>
 <p className="text-base md:text-lg font-semibold text-foreground/80 mb-2.5">
 Etapas da montagem
 </p>
 <p className="text-xs md:text-sm text-muted-foreground leading-relaxed max-w-xl">
 Manual prático de execução para canteiro de obras. Orientação de gabaritagem, ancoragem em radier, alinhamento de esquadros, passagens técnicas e reboco estrutural com argamassa projetada.
 </p>
 </div>

 {/* Painel de Indicadores Técnicos de Obra */}
 <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
 <div className="p-3 rounded-none border border-border/70 bg-secondary/30">
 <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-mono">Módulos</div>
 <div className="text-lg font-bold font-mono text-foreground mt-0.5">08</div>
 <div className="text-[10px] text-muted-foreground font-mono">Sequenciais</div>
 </div>
 <div className="p-3 rounded-none border border-border/70 bg-secondary/30">
 <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-mono">Etapas</div>
 <div className="text-lg font-bold font-mono text-foreground mt-0.5">27</div>
 <div className="text-[10px] text-muted-foreground font-mono">Ações de campo</div>
 </div>
 <div className="p-3 rounded-none border border-border/70 bg-secondary/30">
 <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-mono">Argamassa</div>
 <div className="text-lg font-bold font-mono text-foreground mt-0.5">1 : 3</div>
 <div className="text-[10px] text-muted-foreground font-mono">Traço volumétrico</div>
 </div>
 <div className="p-3 rounded-none border border-border/70 bg-secondary/30">
 <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-mono">Cura Mín.</div>
 <div className="text-lg font-bold font-mono text-foreground mt-0.5">48h / 28d</div>
 <div className="text-[10px] text-muted-foreground font-mono">Reboco / Laje</div>
 </div>
 </div>
 </div>

 <figure className="shrink-0 w-full sm:w-72 md:w-64 lg:w-72 self-center md:self-start flex flex-col gap-1.5 border border-border/80 bg-secondary/30 p-2">
 <Image
 src="/images/casa-pronta.png"
 alt="Sobrado pronto construído com o Método FASTBUILD em Painel Monolítico"
 width={1080}
 height={846}
 priority
 sizes="(min-width: 768px) 288px, 100vw"
 className="w-full h-auto object-contain"
 />
 <figcaption className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground text-center">
 Casa pronta · Painel Monolítico
 </figcaption>
 </figure>
 </div>
 </section>

        {/* Sobre o autor */}
        <section
          aria-labelledby="sobre-autor-titulo"
          className="rounded-none border border-border/80 bg-card p-4 md:p-5"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="px-2 py-0.5 rounded-none text-[11px] font-mono font-semibold uppercase tracking-wider bg-secondary text-foreground border border-border">
              Sobre o autor
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-start gap-3 md:gap-4">
            <div className="relative shrink-0 h-28 w-24 md:h-32 md:w-28 overflow-hidden border border-border bg-secondary">
              <Image
                src="/images/ronildo-queiroz.jpg"
                alt="Ronildo Queiroz de capacete e colete de segurança segurando um projeto arquitetônico"
                fill
                sizes="112px"
                className="object-cover object-top"
              />
            </div>
            <div className="flex flex-col gap-1.5 min-w-0">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h2
                  id="sobre-autor-titulo"
                  className="text-base md:text-lg font-bold tracking-tight text-foreground"
                >
                  Ronildo Queiroz
                </h2>
                <a
                  href="https://www.instagram.com/ronildoeps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-mono font-semibold text-primary hover:underline print:text-foreground"
                >
                  @ronildoeps
                  <ExternalLink className="h-3.5 w-3.5 print:hidden" aria-hidden="true" />
                </a>
              </div>
              <p className="text-sm md:text-[15px] leading-relaxed text-foreground/90 text-pretty">
                Especialista em construção civil há mais de 30 anos e, nos últimos 6 anos, dedicado ao Sistema Monolite em EPS. Com vasta experiência prática em canteiro de obras, Ronildo compartilha seu conhecimento para capacitar engenheiros, construtores e empreiteiros a dominarem a tecnologia de painéis monolíticos de EPS.
              </p>
            </div>
          </div>
        </section>

        {/* Sobre o sistema: origem e normas */}
        <section
          aria-labelledby="sobre-sistema-titulo"
          className="rounded-none border border-border/80 bg-card p-4 md:p-5"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="px-2 py-0.5 rounded-none text-[11px] font-mono font-semibold uppercase tracking-wider bg-secondary text-foreground border border-border">
              Sobre o sistema
            </span>
            <h2
              id="sobre-sistema-titulo"
              className="text-base md:text-lg font-bold tracking-tight text-foreground text-balance"
            >
              O que é o Painel Monolítico
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 md:gap-5">
            <div className="md:col-span-3 flex flex-col sm:flex-row gap-3 md:gap-4">
              <figure className="shrink-0 flex flex-col items-center gap-1.5 border border-border/80 bg-secondary/30 p-2 sm:w-36 md:w-40">
                <Image
                  src="/images/painel-monolitico.png"
                  alt="Painel Monolítico: núcleo de EPS entre duas telas de aço soldadas"
                  width={270}
                  height={360}
                  className="h-44 sm:h-auto w-auto object-contain"
                />
                <figcaption className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground text-center">
                  Painel Monolítico
                </figcaption>
              </figure>
            <div className="flex flex-col gap-3 text-sm text-foreground/85 leading-relaxed">
              <p className="text-pretty">
                O Painel Monolítico é formado por um núcleo de EPS (isopor) entre duas telas de aço
                soldadas e unidas por conectores. Depois de montado na obra, recebe argamassa projetada
                nos dois lados e vira uma parede estrutural única, leve, resistente e com ótimo
                isolamento térmico e acústico.
              </p>
              <p className="text-pretty">
                <strong className="font-semibold text-foreground">Origem:</strong> o sistema foi
                desenvolvido na Itália, na década de 1970, e se espalhou pela Europa e América Latina.{" "}
                <strong className="font-semibold text-foreground">No Brasil:</strong> chegou no início
                dos anos 1990 e hoje é usado em casas, sobrados e obras comerciais.
              </p>
            </div>
            </div>

            <div className="md:col-span-2 flex flex-col gap-2">
              <div className="rounded-none border-2 border-primary bg-primary/5 p-3">
                <div className="text-[10px] uppercase tracking-wider font-mono font-bold text-primary">
                  Norma que regulamenta
                </div>
                <div className="text-base font-bold text-foreground mt-0.5">Diretriz SINAT nº 011</div>
                <p className="text-xs text-muted-foreground leading-relaxed mt-1">
                  Diretriz do PBQP-H / Ministério das Cidades para paredes de painéis de EPS com telas
                  de aço e revestimento de argamassa. Base para o DATec do sistema.
                </p>
              </div>

              <div className="rounded-none border border-border/80 bg-secondary/30 p-3">
                <div className="text-[10px] uppercase tracking-wider font-mono font-semibold text-muted-foreground mb-1.5">
                  Normas ABNT aplicadas
                </div>
                <ul className="flex flex-col gap-1 text-xs text-foreground/85">
                  <li><strong className="font-mono">NBR 15575</strong> · Desempenho de edificações</li>
                  <li><strong className="font-mono">NBR 11752</strong> · EPS para construção (Classe F, antichama)</li>
                  <li><strong className="font-mono">NBR 7481</strong> · Tela de aço soldada</li>
                  <li><strong className="font-mono">NBR 13281</strong> · Argamassa de revestimento</li>
                  <li><strong className="font-mono">NBR 13749</strong> · Revestimento de paredes</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pré-requisitos obrigatórios antes de iniciar a obra */}
        <section
          aria-labelledby="pre-requisitos-titulo"
          className="rounded-none border-2 border-accent bg-accent/5 p-4 md:p-5"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="px-2 py-0.5 rounded-none text-[11px] font-mono font-bold uppercase tracking-wider bg-accent text-accent-foreground">
              Importante
            </span>
            <h2
              id="pre-requisitos-titulo"
              className="text-base md:text-lg font-bold tracking-tight text-foreground text-balance"
            >
              Antes de começar a obra
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex items-start gap-3 rounded-none border border-border/80 bg-card p-3 md:p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-none bg-primary text-primary-foreground">
                <FileSpreadsheet className="h-5 w-5" aria-hidden="true" />
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-sm md:text-base font-bold text-foreground">
                  Todos os projetos em mãos
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Nunca inicie a montagem sem os projetos aprovados e impressos no canteiro. Eles definem a posição exata de cada painel, vão e passagem.
                </p>
                <ul className="flex flex-wrap gap-1.5 pt-1">
                  {["Arquitetônico", "Estrutural", "Elétrico", "Hidráulico", "Paginação dos painéis"].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-1 px-2 py-0.5 rounded-none text-xs font-medium bg-secondary border border-border text-foreground"
                    >
                      <CheckCircle2 className="h-3 w-3 text-accent" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-none border border-border/80 bg-card p-3 md:p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-none bg-primary text-primary-foreground">
                <Building2 className="h-5 w-5" aria-hidden="true" />
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-sm md:text-base font-bold text-foreground">
                  Acompanhamento técnico
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A obra deve ter acompanhamento de <strong className="text-foreground">engenheiro</strong> e <strong className="text-foreground">arquiteto</strong> responsáveis. Qualquer dúvida ou divergência no projeto deve ser consultada com eles antes de executar.
                </p>
                <ul className="flex flex-wrap gap-1.5 pt-1">
                  {["Engenheiro civil", "Arquiteto", "ART / RRT emitida"].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-1 px-2 py-0.5 rounded-none text-xs font-medium bg-secondary border border-border text-foreground"
                    >
                      <HardHat className="h-3 w-3 text-accent" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Onde encontrar produtos, painéis, ferramentas e EPI */}
        <section
          aria-labelledby="onde-encontrar-titulo"
          className="rounded-none border-2 border-primary bg-card p-4 md:p-5"
        >
          <div className="flex flex-col gap-1 mb-3">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded-none text-[11px] font-mono font-bold uppercase tracking-wider bg-primary text-primary-foreground">
                Onde comprar
              </span>
              <h2
                id="onde-encontrar-titulo"
                className="text-base md:text-lg font-bold tracking-tight text-foreground text-balance"
              >
                Produtos, ferramentas e EPI
              </h2>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Tenha tudo separado antes de iniciar. Use somente os itens indicados para garantir o resultado do método.
            </p>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3">
            {supplyLinks.map((link) => (
              <li key={link.title}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full items-center gap-3 rounded-none border border-border/80 bg-secondary p-3 transition-colors hover:border-accent hover:bg-accent/10 focus-visible:outline-2 focus-visible:outline-ring"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-none bg-primary text-primary-foreground">
                    {link.icon}
                  </span>
                  <span className="flex min-w-0 flex-1 flex-col">
                    <span className="text-sm font-bold text-foreground">{link.title}</span>
                    <span className="text-xs text-muted-foreground leading-snug">{link.description}</span>
                  </span>
                  <ExternalLink
                    className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground"
                    aria-hidden="true"
                  />
                  <span className="sr-only">(abre em nova aba)</span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Informações Técnicas Gerais (Objetivo, Responsáveis, Recursos) */}
 <section className="grid grid-cols-1 md:grid-cols-3 gap-3">
 <div className="rounded-none border border-border/80 bg-card p-4 md:p-5 flex flex-col justify-between">
 <div>
 <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2.5 font-mono">
 <Target className="h-3.5 w-3.5 text-accent" strokeWidth={1.25} aria-hidden="true" />
 <span>Objetivo do POP</span>
 </div>
 <p className="text-xs md:text-sm text-foreground/90 leading-relaxed">
 Padronizar os processos construtivos do Método FASTBUILD, reduzindo retrabalho e garantindo prumo, esquadro e resistência estrutural.
 </p>
 </div>
 </div>

 <div className="rounded-none border border-border/80 bg-card p-4 md:p-5 flex flex-col justify-between">
 <div>
 <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2.5 font-mono">
 <HardHat className="h-3.5 w-3.5 text-accent" strokeWidth={1.25} aria-hidden="true" />
 <span>Responsabilidade Técnica</span>
 </div>
 <ul className="space-y-1.5 text-xs md:text-sm text-foreground/90">
 <li className="flex items-center gap-2">
 <span className="h-1.5 w-1.5 rounded-none bg-accent shrink-0" aria-hidden="true" />
 <span><strong>Engenheiro Responsável:</strong> Liberação de fases</span>
 </li>
 <li className="flex items-center gap-2">
 <span className="h-1.5 w-1.5 rounded-none bg-accent shrink-0" aria-hidden="true" />
 <span><strong>Técnico de Instalação:</strong> Gabaritagem & supervisão</span>
 </li>
 </ul>
 </div>
 </div>

 <div className="rounded-none border border-border/80 bg-card p-4 md:p-5 flex flex-col justify-between">
 <div>
 <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2.5 font-mono">
 <Users className="h-3.5 w-3.5 text-accent" strokeWidth={1.25} aria-hidden="true" />
 <span>Mão de Obra Recomendada</span>
 </div>
 <ul className="space-y-1.5 text-xs md:text-sm text-foreground/90">
 <li className="flex items-center gap-2">
 <span className="h-1.5 w-1.5 rounded-none bg-accent shrink-0" aria-hidden="true" />
 <span><strong>1 Técnico de Instalação</strong> (Mestre montador)</span>
 </li>
 <li className="flex items-center gap-2">
 <span className="h-1.5 w-1.5 rounded-none bg-accent shrink-0" aria-hidden="true" />
 <span><strong>2 Assistentes de Instalação</strong> (Montagem)</span>
 </li>
 <li className="flex items-center gap-2">
 <span className="h-1.5 w-1.5 rounded-none bg-accent shrink-0" aria-hidden="true" />
 <span><strong>Equipe Especializada:</strong> Elétrica & Hidráulica</span>
 </li>
 </ul>
 </div>
 </div>
 </section>

 {/* Filtro / Busca de Termos de Canteiro */}
 <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
 <div className="relative flex-1">
 <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" strokeWidth={1.25} aria-hidden="true" />
 <input
 type="search"
 aria-label="Buscar no manual"
 value={searchQuery}
 onChange={(e) => setSearchQuery(e.target.value)}
 placeholder="Buscar etapa, ferramenta ou material (ex: verga, martelete, argamassa)..."
 className="w-full pl-9 pr-3 py-2.5 rounded-none border border-border/80 bg-card text-sm text-foreground placeholder:text-muted-foreground focus:outline-hidden focus:border-accent/60 transition-colors "
 />
 </div>

 
 </div>

 {/* Índice Sequencial Interativo */}
 <TimelineNav items={timelineItems} />

 {/* Módulos do Procedimento com Modo Cards / Acordeom */}
 <section className="flex flex-col gap-3 md:gap-4">
 {filteredModules.length > 0 ? (
 filteredModules.map((m) => (
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
 ))
 ) : (
 <div className="p-8 text-center rounded-none border border-dashed border-border bg-card">
 <p className="text-sm text-muted-foreground">
 Nenhuma etapa ou módulo encontrado para o termo "{searchQuery}".
 </p>
 <button
 type="button"
 onClick={() => setSearchQuery("")}
 className="mt-2 text-xs font-semibold text-accent hover:underline"
 >
 Limpar busca
 </button>
 </div>
 )}
 </section>

 {/* Rodapé Técnico de Engenharia */}
 <footer className="border-t border-border/80 pt-4 pb-2 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
 <div className="flex items-center gap-2.5">
 <img src="/logo-mfb.png" alt="Logo Método FASTBUILD" className="h-5 w-5 object-contain" />
 <span className="font-bold text-foreground font-mono">Método FASTBUILD</span>
 <span>·</span>
 <span>POP-06 · Versão R04 · 27/09/2026</span>
 </div>
 <p className="font-mono text-[11px]">
 Método Construtivo Monolítico EPS · Uso exclusivo de canteiro
 </p>
 </footer>
 </div>
 </main>
 )
}
