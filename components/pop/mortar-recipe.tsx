import { FlaskConical } from "lucide-react"

const ingredients = [
  { label: "Cimento CP1132", value: "1 saco", sub: "50 kg · 36 L", emphasis: true },
  { label: "Areia média ou pó de pedra", value: "3 medidas", sub: "108 L" },
  { label: "Aditivo Fibra de Polipropileno", value: "42 g", sub: "" },
  { label: "Água", value: "18 L", sub: "metade do cimento" },
]

export function MortarRecipe() {
  return (
    <div className="rounded-xl border border-border bg-secondary/40 overflow-hidden">
      <div className="flex items-center gap-3 px-5 py-3 border-b border-border bg-card">
        <div className="flex items-center justify-center h-9 w-9 rounded-lg bg-accent text-accent-foreground">
          <FlaskConical className="h-4 w-4" aria-hidden="true" />
        </div>
        <div>
          <div className="font-display font-bold text-foreground">Traço da argamassa</div>
          <div className="text-xs text-muted-foreground">Proporção 1 : 3</div>
        </div>
      </div>
      <ul className="divide-y divide-border">
        {ingredients.map((item) => (
          <li key={item.label} className="flex items-center justify-between gap-4 px-5 py-3">
            <div className="min-w-0">
              <div className="font-medium text-foreground text-sm md:text-base">{item.label}</div>
              {item.sub && (
                <div className="text-xs text-muted-foreground">{item.sub}</div>
              )}
            </div>
            <div className="font-display font-bold text-base md:text-lg text-foreground tabular-nums shrink-0">
              {item.value}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
