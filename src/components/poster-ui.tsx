import type { ReactNode } from 'react'

// Real ink/photo cutouts extracted from the original poster artwork (see
// assets/posters/cutouts) — used instead of generic icons so the rebuilt
// HTML posters keep the hand-drawn marks and photographed details of the
// originals while the surrounding copy stays fully translatable.
const xMark = new URL('../../assets/posters/cutouts/x-mark.png', import.meta.url).href
const questionMark = new URL('../../assets/posters/cutouts/question-mark.png', import.meta.url).href
const checkmarkTick = new URL('../../assets/posters/cutouts/checkmark-tick.png', import.meta.url).href
const arrowDown = new URL('../../assets/posters/cutouts/arrow-down.png', import.meta.url).href

/** Small tilted "sticky note" tile, the recurring building block across all posters. */
export function PosterNote({
  rotate = 0,
  mark,
  className = '',
  children,
}: {
  rotate?: number
  mark?: 'x' | 'question'
  className?: string
  children: ReactNode
}) {
  return (
    <div
      className={`relative rounded-lg bg-white px-3 py-2.5 text-[11px] font-medium leading-snug text-[#17130e] shadow-md ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {children}
      {mark && (
        <img
          src={mark === 'x' ? xMark : questionMark}
          aria-hidden
          className="pointer-events-none absolute -right-1.5 -top-1.5 h-5 w-5 select-none object-contain"
        />
      )}
    </div>
  )
}

/** The hand-drawn red down-arrow connecting notes to the outcome, cut from the original poster art. */
export function PosterArrow() {
  return (
    <div aria-hidden className="flex justify-center py-1">
      <img src={arrowDown} className="h-6 w-auto select-none object-contain" />
    </div>
  )
}

/** The green hand-drawn checkmark every poster converges on — a genuine ink cutout, not a generic icon. */
export function PosterOutcome({ children, extra }: { children: ReactNode; extra?: ReactNode }) {
  return (
    <div className="relative mx-auto w-fit max-w-full rounded-lg border-2 border-[#2f8f4e]/70 bg-white px-4 py-3 text-center text-[12px] font-semibold leading-snug text-[#17130e] shadow-md">
      {children}
      {extra}
      <img
        src={checkmarkTick}
        aria-hidden
        className="pointer-events-none absolute -right-3 -top-3 h-8 w-auto select-none object-contain"
      />
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
