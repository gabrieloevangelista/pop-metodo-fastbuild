"use client"

import * as React from "react"
import { ChevronsDownUp, ChevronsUpDown } from "lucide-react"

export const EXPAND_ALL_EVENT = "pop:expand-all"
export const COLLAPSE_ALL_EVENT = "pop:collapse-all"
export const MODULE_STATE_EVENT = "pop:module-state"

export type ModuleStateDetail = { id: string; anyOpen: boolean }

export function AccordionControls() {
  const openModules = React.useRef(new Set<string>())
  const [anyOpen, setAnyOpen] = React.useState(false)

  React.useEffect(() => {
    const handleModuleState = (event: Event) => {
      const { id, anyOpen: moduleOpen } = (event as CustomEvent<ModuleStateDetail>).detail
      if (moduleOpen) openModules.current.add(id)
      else openModules.current.delete(id)
      setAnyOpen(openModules.current.size > 0)
    }
    window.addEventListener(MODULE_STATE_EVENT, handleModuleState)
    return () => window.removeEventListener(MODULE_STATE_EVENT, handleModuleState)
  }, [])

  const label = anyOpen ? "Recolher tudo" : "Expandir tudo"
  const Icon = anyOpen ? ChevronsDownUp : ChevronsUpDown

  return (
    <button
      type="button"
      aria-label={label}
      aria-expanded={anyOpen}
      onClick={() => window.dispatchEvent(new Event(anyOpen ? COLLAPSE_ALL_EVENT : EXPAND_ALL_EVENT))}
      className="inline-flex items-center justify-center gap-1.5 h-9 min-w-9 border border-border/80 bg-card px-2 sm:px-3 text-xs font-medium text-foreground hover:bg-secondary hover:border-accent/40 transition-colors cursor-pointer print:hidden"
    >
      <Icon className="h-4 w-4 text-muted-foreground" strokeWidth={1.5} aria-hidden="true" />
      <span className="hidden sm:inline">{label}</span>
    </button>
  )
}
