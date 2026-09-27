import Image from "next/image"
import { ArrowRight, CheckCircle2, Play } from "lucide-react"

const CHECKOUT_URL = "https://pay.kiwify.com.br/OQfdq7A"

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
            <span className="font-mono text-[11px] uppercase tracking-wider text-background/60">
              Pagamento seguro via Kiwify
            </span>
          </div>
        </div>

        <a
          href={CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Assistir às aulas do Método Fastbuild"
          className="group relative min-h-56 md:col-span-2 md:min-h-full"
        >
          <Image
            src="/images/casa-pronta.png"
            alt=""
            fill
            sizes="(min-width: 768px) 40vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-foreground/35" aria-hidden="true" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-xl ring-8 ring-accent/30 transition-transform group-hover:scale-110">
              <Play className="ml-1 h-7 w-7 fill-current" aria-hidden="true" />
            </span>
          </div>
          <span className="absolute bottom-3 left-3 bg-foreground/80 px-2 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-background">
            Obras reais · Vídeo-aulas
          </span>
        </a>
      </div>
    </section>
  )
}
