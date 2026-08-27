import type { ReactNode } from 'react'
import { ArrowDown, Check } from 'lucide-react'

/** Small tilted "sticky note" tile, the recurring building block across all posters. */
export function PosterNote({
  rotate = 0,
  className = '',
  children,
}: {
  rotate?: number
  className?: string
  children: ReactNode
}) {
  return (
    <div
      className={`rounded-lg bg-white px-3 py-2.5 text-[11px] font-medium leading-snug text-[#17130e] shadow-md ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {children}
    </div>
  )
}

/** A small red down-arrow connecting notes to the outcome, matching the posters' hand-marked arrows. */
export function PosterArrow() {
  return (
    <div aria-hidden className="flex justify-center py-1">
      <ArrowDown className="h-4 w-4 text-[#c0392b]" strokeWidth={2.5} />
    </div>
  )
}

/** The green-circled "correct answer" / outcome tile every poster converges on. */
export function PosterOutcome({ children }: { children: ReactNode }) {
  return (
    <div className="relative mx-auto w-fit max-w-full rounded-lg border-2 border-[#2f8f4e] bg-white px-4 py-3 text-center text-[12px] font-semibold leading-snug text-[#17130e] shadow-md">
      {children}
      <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#2f8f4e]">
        <Check className="h-3 w-3 text-white" strokeWidth={3} />
      </span>
    </div>
  )
}

/** Underlined highlight matching the posters' red (caution) / green (reassurance) marker-underlines. */
export function Highlight({ color, children }: { color: 'red' | 'green'; children: ReactNode }) {
  return (
    <span className={`font-semibold ${color === 'red' ? 'text-[#c0392b]' : 'text-[#2f8f4e]'} underline decoration-2 underline-offset-4`}>
      {children}
    </span>
  )
}
