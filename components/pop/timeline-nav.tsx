import type { LucideIcon } from "lucide-react"

export type TimelineItem = {
  number: string
  title: string
  icon: LucideIcon
}

export function TimelineNav({ items }: { items: TimelineItem[] }) {
  return (
    <nav aria-label="Etapas do procedimento" className="rounded-2xl border border-border bg-card p-4 md:p-6 shadow-sm">
      <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
        Visão geral · 8 etapas
      </h2>
      <ol className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
        {items.map((item) => {
          const Icon = item.icon
          return (
            <li key={item.number}>
              <a
                href={`#modulo-${item.number}`}
                className="group flex flex-col items-center text-center gap-2 p-3 rounded-xl border border-border bg-secondary/30 hover:bg-accent/15 hover:border-accent transition-colors"
              >
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary text-primary-foreground font-display font-bold text-sm group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  {item.number}
                </div>
                <Icon className="h-4 w-4 text-muted-foreground group-hover:text-foreground" aria-hidden="true" />
                <span className="text-[11px] md:text-xs font-semibold text-foreground leading-tight text-balance">
                  {item.title}
                </span>
              </a>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
