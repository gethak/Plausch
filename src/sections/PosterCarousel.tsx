import { useEffect, useRef, useState } from 'react'

const posters = [
  { key: 'hallucinate', src: new URL('../../assets/posters/hallucinate.jpg', import.meta.url).href, alt: 'AIs hallucinate. Great for surrealism, less great for answers — we compare answers from multiple AIs and find the best one for you.' },
  { key: 'noclutter', src: new URL('../../assets/posters/noclutter.jpg', import.meta.url).href, alt: 'No clutter — a universe of AI models from just one app. Download once, use ChatGPT, Claude, Gemini, Mistral, Kimi, Qwen and more in one place.' },
  { key: 'private', src: new URL('../../assets/posters/private.jpg', import.meta.url).href, alt: 'Strictly private chats — only you can see your chats. Chats encrypted with your password; we never collect or sell any data.' },
  { key: 'notes', src: new URL('../../assets/posters/notes.jpg', import.meta.url).href, alt: 'All-in-one AI notes — one place for notes from all AIs. Make annotations and notes directly from your conversations.' },
  { key: 'humanitarian', src: new URL('../../assets/posters/humanitarian.jpg', import.meta.url).href, alt: 'Humanitarian AI — we stand with Palestine. Ethical, socialist, pro-humanitarian: we donate profits to humanitarian aid.' },
]

export default function PosterCarousel() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

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
        {posters.map((p) => (
          <div key={p.key} data-poster-card className="w-[84%] shrink-0 snap-center sm:w-[420px]">
            <img
              src={p.src}
              alt={p.alt}
              loading="lazy"
              className="h-auto w-full select-none rounded-3xl shadow-sm ring-1 ring-[#17130e]/10"
            />
          </div>
        ))}
        <div aria-hidden className="w-2 shrink-0 sm:w-[9vw]" />
      </div>

      <div className="mt-4 flex items-center justify-center gap-2">
        {posters.map((p, i) => (
          <button
            key={p.key}
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
