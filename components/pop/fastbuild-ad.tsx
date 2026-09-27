import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react"

const CHECKOUT_URL = "https://pay.kiwify.com.br/OQfdq7A"
const VIDEO_ID = "80ilBNjGKk0"

const benefits = [
  "Passo a passo gravado em obras reais",
  "Da fundação ao reboco projetado",
  "Acesso imediato após a compra",
]

type FastbuildAdProps = {
  variant?: "top" | "bottom"
}

export function FastbuildAd({ variant = "top" }: FastbuildAdProps) {
  const headline =
    variant === "top" ? "Aulas em vídeo com obras reais" : "Pronto para construir com o Método Fastbuild?"

  return (
    <section
      aria-label="Publicidade do Método FASTBUILD"
      className="relative overflow-hidden border border-foreground bg-foreground text-background print:hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-5">
        <div className="flex flex-col gap-4 p-5 md:col-span-3 md:p-8">
          <div className="flex items-center gap-2">
            <span className="bg-accent px-2 py-0.5 font-mono text-[11px] font-bold uppercase tracking-widest text-accent-foreground">
              Curso online
            </span>
            <span className="font-mono text-[11px] font-semibold uppercase tracking-widest text-background/70">
              Método FASTBUILD
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold leading-tight tracking-tight text-balance md:text-3xl">
              {headline}
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-background/75 text-pretty md:text-base">
              Aprenda na prática com Ronildo Queiroz, especialista com mais de 30 anos de canteiro, a
              montar paredes em Painel Monolítico com prumo, esquadro e sem retrabalho.
            </p>
          </div>

          <ul className="flex flex-col gap-2">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-2 text-sm text-background/90">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                {benefit}
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-2 pt-1 sm:flex-row sm:items-center sm:gap-4">
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 bg-accent px-6 py-3 text-base font-bold text-accent-foreground shadow-lg transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-foreground"
            >
              Quero comprar agora
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-background/60">
              <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-background/60" aria-hidden="true" />
              Pagamento seguro
            </span>
          </div>
        </div>

        <div className="relative aspect-video bg-foreground md:col-span-2 md:aspect-auto md:min-h-full">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?rel=0&controls=0&modestbranding=1&iv_load_policy=3&playsinline=1`}
            title="Método Fastbuild: aulas em vídeo com obras reais"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="absolute inset-0 h-full w-full border-0"
          />
        </div>
      </div>
    </section>
  )
}
