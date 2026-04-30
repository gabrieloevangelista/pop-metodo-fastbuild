import type { LucideIcon } from "lucide-react"
import { Clock, Users, Wrench } from "lucide-react"
import { cn } from "@/lib/utils"

export type StepItem = {
  text: string
  highlight?: boolean
}

export type ModuleCardProps = {
  number: string
  title: string
  icon: LucideIcon
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
  icon: Icon,
  duration,
  team,
  tools,
  steps,
  warning,
  children,
  accentClass = "bg-accent text-accent-foreground",
}: ModuleCardProps) {
  return (
    <article
      id={`modulo-${number}`}
      className="scroll-mt-24 rounded-2xl border border-border bg-card shadow-sm overflow-hidden"
    >
      {/* Header */}
      <header className="flex items-start gap-4 p-5 md:p-6 border-b border-border bg-secondary/40">
        <div
          className={cn(
            "flex shrink-0 items-center justify-center rounded-xl h-14 w-14 md:h-16 md:w-16 font-display font-bold text-2xl md:text-3xl",
            accentClass,
          )}
          aria-hidden="true"
        >
          {number}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1">
            <Icon className="h-4 w-4" aria-hidden="true" />
            <span>Módulo {number}</span>
          </div>
          <h3 className="font-display text-xl md:text-2xl font-bold text-foreground text-balance leading-tight">
            {title}
          </h3>
        </div>
      </header>

      {/* Meta info */}
      {(duration || team || tools) && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-5 md:px-6 md:py-4 bg-muted/30 border-b border-border">
          {duration && (
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center h-9 w-9 rounded-lg bg-accent/15 text-foreground shrink-0">
                <Clock className="h-4 w-4" aria-hidden="true" />
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground font-medium">
                  Tempo
                </div>
                <div className="text-sm font-semibold text-foreground">{duration}</div>
              </div>
            </div>
          )}
          {team && (
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center h-9 w-9 rounded-lg bg-accent/15 text-foreground shrink-0">
                <Users className="h-4 w-4" aria-hidden="true" />
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground font-medium">
                  Equipe
                </div>
                <div className="text-sm font-semibold text-foreground">{team}</div>
              </div>
            </div>
          )}
          {tools && tools.length > 0 && (
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center h-9 w-9 rounded-lg bg-accent/15 text-foreground shrink-0">
                <Wrench className="h-4 w-4" aria-hidden="true" />
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground font-medium">
                  Ferramentas
                </div>
                <div className="text-sm font-semibold text-foreground">{tools.join(" · ")}</div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Steps */}
      <ol className="divide-y divide-border">
        {steps.map((step, idx) => (
          <li
            key={idx}
            className={cn(
              "flex gap-4 p-5 md:px-6 md:py-5",
              step.highlight && "bg-accent/10",
            )}
          >
            <div
              className={cn(
                "flex shrink-0 items-center justify-center h-8 w-8 rounded-full font-display font-bold text-sm",
                step.highlight
                  ? "bg-accent text-accent-foreground"
                  : "bg-primary text-primary-foreground",
              )}
              aria-hidden="true"
            >
              {idx + 1}
            </div>
            <p className="text-base md:text-[17px] leading-relaxed text-foreground pt-1">
              {step.text}
            </p>
          </li>
        ))}
      </ol>

      {warning && (
        <div className="m-5 md:m-6 rounded-xl border-l-4 border-destructive bg-destructive/10 p-4">
          <div className="flex items-start gap-3">
            <span
              className="font-display text-xs font-bold uppercase tracking-wider text-destructive bg-destructive/15 px-2 py-1 rounded"
              aria-label="Atenção"
            >
              Atenção
            </span>
            <p className="text-sm md:text-base text-foreground leading-relaxed font-medium">
              {warning}
            </p>
          </div>
        </div>
      )}

      {children}
    </article>
  )
}
