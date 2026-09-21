import { FlaskConical, Scale } from "lucide-react"

const ingredients = [
  { label: "Cimento CP II 32", value: "1 saco", sub: "50 kg · 36 L", emphasis: true },
  { label: "Areia média ou pó de pedra", value: "3 medidas", sub: "108 L", emphasis: false },
  { label: "Aditivo Fibra de Polipropileno", value: "42 g", sub: "Anti-fissuras", emphasis: false },
  { label: "Água limpa", value: "18 L", sub: "Aprox. metade do cimento", emphasis: false },
]

export function MortarRecipe() {
  return (
    <div className="rounded-none-none border border-border/80 bg-secondary/30 overflow-hidden my-1">
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-border/70 bg-card">
        <div className="flex items-center gap-2">
          <FlaskConical className="h-4 w-4 text-accent" strokeWidth={1.25} aria-hidden="true" />
          <span className="font-semibold text-foreground text-xs md:text-sm">Traço de Argamassa Estrutural</span>
        </div>
        <span className="font-mono text-[11px] font-semibold text-accent px-2 py-0.5 rounded-none bg-accent/10 border border-accent/20">
          Proporção 1 : 3
        </span>
      </div>
      <ul className="divide-y divide-border/60">
        {ingredients.map((item) => (
          <li key={item.label} className="flex items-center justify-between gap-4 px-4 py-2.5 text-xs md:text-sm">
            <div className="min-w-0">
              <div className="font-medium text-foreground">{item.label}</div>
              {item.sub && (
                <div className="font-mono text-[11px] text-muted-foreground">{item.sub}</div>
              )}
            </div>
            <div className="font-mono font-bold text-xs md:text-sm text-foreground tabular-nums shrink-0">
              {item.value}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
