"use client"

import * as React from "react"
import {
  Clock,
  Users,
  Wrench,
  AlertTriangle,
  AlertCircle
} from "lucide-react"
import { cn } from "@/lib/utils"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export type StepItem = {
  title: string
  details: React.ReactNode
  highlight?: boolean
}

export type ModuleCardProps = {
  number: string
  title: string
  icon: React.ReactNode
  duration?: string
  team?: string
  tools?: string[]
  steps: StepItem[]
  warning?: string
  children?: React.ReactNode
  accentClass?: string
}

export function ModuleCard({
  number,
  title,
  icon,
  duration,
  team,
  tools,
  steps,
  warning,
  children,
}: ModuleCardProps) {
  const allItemValues = React.useMemo(
    () => steps.map((_, idx) => `modulo-${number}-passo-${idx}`),
    [steps, number]
  )

  const [activeItems, setActiveItems] = React.useState<string[]>([])

  // Abre todas as abas automaticamente antes de disparar o diálogo de impressão
  React.useEffect(() => {
    const handleBeforePrint = () => {
      setActiveItems(allItemValues)
    }
    window.addEventListener("beforeprint", handleBeforePrint)
    return () => window.removeEventListener("beforeprint", handleBeforePrint)
  }, [allItemValues])

  return (
    <article
      id={`modulo-${number}`}
      className="scroll-mt-20 border border-border bg-card overflow-hidden transition-all print:border-black print:mb-3"
    >
      {/* Cabeçalho Técnico do Módulo */}
      <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 md:p-5 border-b border-border bg-card print:p-2 print:border-black">
        <div className="flex items-start sm:items-center gap-3.5">
          <div className="flex shrink-0 items-center justify-center h-10 w-10 md:h-11 md:w-11 border border-border bg-secondary/50 text-foreground font-mono font-bold text-base md:text-lg print:border-black print:h-8 print:w-8 print:text-sm">
            {number.padStart(2, "0")}
          </div>
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-0.5 print:text-black">
              <span className="inline-flex h-4 w-4 items-center justify-center text-accent print:text-black" aria-hidden="true">
                {icon}
              </span>
              <span className="font-mono">Módulo {number} · {steps.length} Etapas</span>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-foreground leading-tight print:text-base print:text-black">
              {title}
            </h3>
          </div>
        </div>
      </header>

      {/* Faixa de Parâmetros Técnicos (Tempo, Equipe, Ferramentas) */}
      {(duration || team || (tools && tools.length > 0)) && (
        <div className="flex flex-wrap items-center gap-y-2.5 gap-x-6 px-4 md:px-6 py-3 bg-secondary/20 border-b border-border text-xs print:p-2 print:border-black print:bg-white">
          {duration && (
            <div className="flex items-center gap-2">
              <Clock className="h-3.5 w-3.5 text-muted-foreground shrink-0 print:text-black" strokeWidth={1.25} />
              <span className="text-muted-foreground font-mono uppercase tracking-wider text-[11px] print:text-black">Tempo:</span>
              <span className="font-semibold text-foreground print:text-black">{duration}</span>
            </div>
          )}
          {team && (
            <div className="flex items-center gap-2">
              <Users className="h-3.5 w-3.5 text-muted-foreground shrink-0 print:text-black" strokeWidth={1.25} />
              <span className="text-muted-foreground font-mono uppercase tracking-wider text-[11px] print:text-black">Equipe:</span>
              <span className="font-semibold text-foreground print:text-black">{team}</span>
            </div>
          )}
          {tools && tools.length > 0 && (
            <div className="flex items-center gap-2">
              <Wrench className="h-3.5 w-3.5 text-muted-foreground shrink-0 print:text-black" strokeWidth={1.25} />
              <span className="text-muted-foreground font-mono uppercase tracking-wider text-[11px] print:text-black">Ferramentas:</span>
              <span className="font-semibold text-foreground print:text-black">{tools.join(" · ")}</span>
            </div>
          )}
        </div>
      )}

      {/* MODO ACORDEOM */}
      <Accordion
        type="multiple"
        value={activeItems}
        onValueChange={setActiveItems}
        className="divide-y divide-border print:divide-black"
      >
        {steps.map((step, idx) => {
          const itemValue = `modulo-${number}-passo-${idx}`
          return (
            <AccordionItem
              key={itemValue}
              value={itemValue}
              className={cn(
                "border-0 print:break-inside-avoid print:page-break-inside-avoid",
                step.highlight && "bg-emerald-500/[0.02] print:bg-white",
              )}
            >
              <AccordionTrigger
                className="px-4 md:px-6 py-3.5 md:py-4 hover:no-underline gap-4 items-center text-left group print:p-2 print:border-b print:border-black/40"
              >
                <div className="flex items-center gap-3.5 flex-1 min-w-0">
                  <div
                    className={cn(
                      "flex shrink-0 items-center justify-center h-7 w-7 font-mono font-bold text-xs border transition-colors print:border-black print:text-black",
                      step.highlight
                        ? "border-emerald-600/40 bg-emerald-500/10 text-emerald-800 dark:text-emerald-300"
                        : "border-border bg-secondary/70 text-muted-foreground",
                    )}
                    aria-hidden="true"
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 flex-1 min-w-0">
                    <span className="text-sm md:text-base font-semibold text-foreground group-hover:text-accent transition-colors leading-snug print:text-black print:text-xs">
                      {step.title}
                    </span>
                    {step.highlight && (
                      <span className="inline-flex items-center gap-1 w-fit px-1.5 py-0.5 text-[10px] font-mono font-medium bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-600/30 print:border-black print:text-black print:bg-white">
                        <AlertCircle className="h-3 w-3 print:hidden" strokeWidth={1.25} />
                        [CRÍTICO]
                      </span>
                    )}
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent
                forceMount
                className="px-4 md:px-6 pb-4 md:pb-5 pt-0 print:p-2 print:block! print:h-auto!"
              >
                <div className="ml-10.5 border border-border bg-secondary/15 p-3.5 md:p-4 text-xs md:text-sm leading-relaxed text-foreground/90 print:ml-0 print:border-black print:bg-white print:p-2 print:text-xs">
                  {step.details}
                </div>
              </AccordionContent>
            </AccordionItem>
          )
        })}
      </Accordion>

      {/* Aviso Técnico */}
      {warning && (
        <div className="m-4 md:m-5 border border-border bg-secondary/30 p-3.5 md:p-4 print:m-2 print:border-black print:border-l-4 print:bg-white">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-4 w-4 text-accent shrink-0 mt-0.5 print:text-black" strokeWidth={1.25} />
            <div>
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-accent block mb-0.5 print:text-black">
                Aviso Técnico de Segurança e Desempenho
              </span>
              <p className="text-xs md:text-sm text-foreground/90 leading-relaxed font-medium print:text-black print:text-xs">
                {warning}
              </p>
            </div>
          </div>
        </div>
      )}

      {children}
    </article>
  )
}
