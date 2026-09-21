import type * as React from "react"

export type TimelineItem = {
  number: string
  title: string
  /** Ícone já renderizado com strokeWidth={1.25} */
  icon: React.ReactNode
}

export function TimelineNav({ items }: { items: TimelineItem[] }) {
  return (
    <nav aria-label="Etapas do procedimento" className="rounded-none border border-border/80 bg-card p-4 md:p-5 ">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 mb-3 border-b border-border/60">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
          <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground font-mono">
            Roteiro Técnico Sequencial · {items.length} Módulos
          </h2>
        </div>
        <span className="text-[11px] text-muted-foreground hidden sm:inline-block font-mono">
          Navegação rápida por módulo executivo
        </span>
      </div>
      <ol className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
        {items.map((item) => (
          <li key={item.number}>
            <a
              href={`#modulo-${item.number}`}
              className="group flex flex-col justify-between p-2.5 rounded-none border border-border/70 bg-secondary/30 hover:bg-card hover:border-accent/60 hover: transition-all h-full"
            >
              <div className="flex items-center justify-between w-full mb-2">
                <span className="font-mono text-[11px] font-semibold text-muted-foreground group-hover:text-accent transition-colors">
                  {item.number.padStart(2, "0")}
                </span>
                <span className="inline-flex h-5 w-5 items-center justify-center text-muted-foreground group-hover:text-foreground transition-colors" aria-hidden="true">
                  {item.icon}
                </span>
              </div>
              <span className="text-xs font-medium text-foreground leading-snug group-hover:text-accent transition-colors text-left line-clamp-2">
                {item.title}
              </span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
