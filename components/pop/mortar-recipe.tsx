import { FlaskConical, Info, ExternalLink, PiggyBank, Ban } from "lucide-react"

const PRODUCTS_URL = "https://beacons.ai/ronildoeps/produtos"

const baseIngredients = [
  { label: "Cimento CP II 32", value: "1 saco", sub: "50 kg · 36 L" },
  { label: "Areia média ou pó de pedra", value: "3 medidas", sub: "108 L" },
  { label: "Água limpa", value: "18 L", sub: "Aprox. metade do cimento" },
]

const economicOptions = [
  { brand: "Vedacit", description: "Plastificantes para argamassa" },
  { brand: "Monomassa Quartzolit / Weber", description: "Linha própria de revestimentos monomassa" },
]

function Row({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <li className="flex items-center justify-between gap-4 px-4 py-2.5 text-xs md:text-sm">
      <div className="min-w-0">
        <div className="font-medium text-foreground">{label}</div>
        {sub && <div className="font-mono text-[11px] text-muted-foreground">{sub}</div>}
      </div>
      <div className="font-mono font-bold text-xs md:text-sm text-foreground tabular-nums shrink-0 text-right">
        {value}
      </div>
    </li>
  )
}

export function MortarRecipe() {
  return (
    <div className="flex flex-col gap-3 my-1">
      <div className="border border-border/80 bg-secondary/30 overflow-hidden">
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-border/70 bg-card">
          <div className="flex items-center gap-2">
            <FlaskConical className="h-4 w-4 text-accent" strokeWidth={1.25} aria-hidden="true" />
            <span className="font-semibold text-foreground text-xs md:text-sm">Traço de Argamassa Estrutural</span>
          </div>
          <span className="font-mono text-[11px] font-semibold text-accent px-2 py-0.5 bg-accent/10 border border-accent/20">
            Proporção 1 : 3
          </span>
        </div>
        <ul className="divide-y divide-border/60">
          {baseIngredients.map((item) => (
            <Row key={item.label} {...item} />
          ))}
        </ul>
      </div>

      <div className="border border-border/80 bg-card overflow-hidden">
        <div className="px-4 py-2.5 border-b border-border/70 bg-secondary/40">
          <span className="font-semibold text-foreground text-xs md:text-sm">1. Aditivo</span>
        </div>
        <ul className="divide-y divide-border/60">
          <Row label="Smart Additive Drylevis" value="42 g" sub="Aditivo recomendado · já contém fibra" />
        </ul>
      </div>

      <div className="border border-border/80 bg-card overflow-hidden">
        <div className="px-4 py-2.5 border-b border-border/70 bg-secondary/40">
          <span className="font-semibold text-foreground text-xs md:text-sm">2. Fibra de Polipropileno</span>
        </div>
        <ul className="divide-y divide-border/60">
          <Row
            label="Fibra de Polipropileno"
            value="Conforme fabricante"
            sub="Anti-fissuras · somente com aditivo de outra marca"
          />
        </ul>
        <div
          role="alert"
          className="flex items-center gap-3 border-t-2 border-destructive bg-destructive px-4 py-3 text-destructive-foreground"
        >
          <Ban className="h-5 w-5 shrink-0" strokeWidth={2} aria-hidden="true" />
          <p className="font-display text-sm md:text-base font-bold uppercase tracking-wide">
            Jamais fibra de vidro!
          </p>
        </div>
      </div>

      <div className="flex items-start gap-3 border border-accent/40 bg-accent/10 px-4 py-3 text-xs md:text-sm leading-relaxed text-foreground">
        <Info className="h-4 w-4 text-accent shrink-0 mt-0.5" strokeWidth={1.5} aria-hidden="true" />
        <p>
          <strong>Usando o Smart Additive Drylevis?</strong> Não é necessário adicionar a fibra de polipropileno, pois ele
          já vem com fibra. Adicione a fibra <strong>somente se usar aditivo de outra marca</strong>.
        </p>
      </div>

      <div className="border border-border/80 bg-card overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border/70 bg-secondary/40">
          <PiggyBank className="h-4 w-4 text-accent" strokeWidth={1.25} aria-hidden="true" />
          <span className="font-semibold text-foreground text-xs md:text-sm">Opções mais econômicas de aditivo</span>
        </div>
        <ul className="divide-y divide-border/60">
          {economicOptions.map((opt) => (
            <li key={opt.brand} className="flex flex-col gap-0.5 px-4 py-2.5 text-xs md:text-sm">
              <span className="font-medium text-foreground">{opt.brand}</span>
              <span className="text-muted-foreground">{opt.description}</span>
            </li>
          ))}
        </ul>
        <p className="px-4 py-2.5 border-t border-border/60 text-[11px] md:text-xs text-muted-foreground leading-relaxed">
          Com essas opções, lembre-se de adicionar a fibra de polipropileno.{" "}
          <strong className="text-destructive">Jamais fibra de vidro.</strong>
        </p>
      </div>

      <a
        href={PRODUCTS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 self-start border border-primary bg-primary px-4 py-2 text-xs md:text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
      >
        Ver todos os produtos
        <ExternalLink className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />
      </a>
    </div>
  )
}
