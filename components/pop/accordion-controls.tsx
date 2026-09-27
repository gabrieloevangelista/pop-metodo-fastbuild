"use client"

import { ChevronsDownUp, ChevronsUpDown } from "lucide-react"

export const EXPAND_ALL_EVENT = "pop:expand-all"
export const COLLAPSE_ALL_EVENT = "pop:collapse-all"

const buttonClass =
  "inline-flex items-center justify-center gap-1.5 h-9 min-w-9 border border-border/80 bg-card px-2 sm:px-3 text-xs font-medium text-foreground hover:bg-secondary hover:border-accent/40 transition-colors cursor-pointer print:hidden"

export function AccordionControls() {
  return (
    <div className="flex items-center gap-2 print:hidden" role="group" aria-label="Controle de todas as etapas">
      <button
        type="button"
        className={buttonClass}
        aria-label="Expandir tudo"
        onClick={() => window.dispatchEvent(new Event(EXPAND_ALL_EVENT))}
      >
        <ChevronsUpDown className="h-4 w-4 text-muted-foreground" strokeWidth={1.5} aria-hidden="true" />
        <span className="hidden sm:inline">Expandir tudo</span>
      </button>
      <button
        type="button"
        className={buttonClass}
        aria-label="Recolher tudo"
        onClick={() => window.dispatchEvent(new Event(COLLAPSE_ALL_EVENT))}
      >
        <ChevronsDownUp className="h-4 w-4 text-muted-foreground" strokeWidth={1.5} aria-hidden="true" />
        <span className="hidden sm:inline">Recolher tudo</span>
      </button>
    </div>
  )
}
