import { useEffect, useRef, useState } from 'react'
import { useLang, useTranslations } from '../i18n/LanguageContext'
import PosterCard from './PosterCard'

const posterKeys = ['hallucinate', 'noclutter', 'private', 'notes', 'humanitarian'] as const

export default function PosterCarousel() {
  const lang = useLang()
  const t = useTranslations()
  const trackRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  // Switching languages swaps every poster's copy in place; reset to the first
  // card rather than leaving the track scrolled to a position mid-transition.
  useEffect(() => {
    trackRef.current?.scrollTo({ left: 0 })
    setActive(0)
  }, [lang])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const onScroll = () => {
      const cards = Array.from(track.querySelectorAll<HTMLElement>('[data-poster-card]'))
      const trackCenter = track.scrollLeft + track.clientWidth / 2
      let closest = 0
      let closestDist = Infinity
      cards.forEach((card, i) => {
        const dist = Math.abs(card.offsetLeft + card.clientWidth / 2 - trackCenter)
        if (dist < closestDist) {
          closestDist = dist
          closest = i
        }
      })
      setActive(closest)
    }
    track.addEventListener('scroll', onScroll, { passive: true })
    return () => track.removeEventListener('scroll', onScroll)
  }, [])

  const goTo = (i: number) => {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelectorAll<HTMLElement>('[data-poster-card]')[i]
    card?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
  }

  return (
    <div>
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        <div aria-hidden className="w-2 shrink-0 sm:w-[9vw]" />
        {posterKeys.map((key) => (
          <div
            key={key}
            data-poster-card
            className="aspect-[900/1260] w-[84%] shrink-0 snap-center overflow-hidden rounded-3xl bg-[#f3ede2] shadow-sm ring-1 ring-[#17130e]/10 sm:w-[420px]"
          >
            <PosterCard posterKey={key} content={t.posters[key]} />
          </div>
        ))}
        <div aria-hidden className="w-2 shrink-0 sm:w-[9vw]" />
      </div>

      <div className="mt-4 flex items-center justify-center gap-2">
        {posterKeys.map((key, i) => (
          <button
            key={key}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goTo(i)}
            className={`h-2 rounded-full transition-all ${
              active === i ? 'w-6 bg-[#e07b39]' : 'w-2 bg-[#17130e]/20'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
