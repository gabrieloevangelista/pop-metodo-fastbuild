"use client"

import { ChevronsDownUp, ChevronsUpDown } from "lucide-react"

export const EXPAND_ALL_EVENT = "pop:expand-all"
export const COLLAPSE_ALL_EVENT = "pop:collapse-all"

const buttonClass =
  "inline-flex items-center gap-1.5 border border-border/80 bg-card px-3 py-1.5 text-xs font-medium text-foreground hover:bg-secondary hover:border-accent/40 transition-colors cursor-pointer print:hidden"

export function AccordionControls() {
  return (
    <div className="flex items-center gap-2 print:hidden" role="group" aria-label="Controle de todas as etapas">
      <button
        type="button"
        className={buttonClass}
        onClick={() => window.dispatchEvent(new Event(EXPAND_ALL_EVENT))}
      >
        <ChevronsUpDown className="h-3.5 w-3.5 text-muted-foreground" strokeWidth={1.5} aria-hidden="true" />
        <span>Expandir tudo</span>
      </button>
      <button
        type="button"
        className={buttonClass}
        onClick={() => window.dispatchEvent(new Event(COLLAPSE_ALL_EVENT))}
      >
        <ChevronsDownUp className="h-3.5 w-3.5 text-muted-foreground" strokeWidth={1.5} aria-hidden="true" />
        <span>Recolher tudo</span>
      </button>
    </div>
  )
}
