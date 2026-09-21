"use client"

import { Printer } from "lucide-react"

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="hidden md:inline-flex items-center gap-2 border border-border/80 bg-card px-3 py-1.5 text-xs font-medium text-foreground hover:bg-secondary hover:border-accent/40 transition-colors print:hidden cursor-pointer"
      title="Imprimir documento de canteiro"
    >
      <Printer className="h-3.5 w-3.5 text-muted-foreground" strokeWidth={1.25} aria-hidden="true" />
      <span>Imprimir</span>
    </button>
  )
}
