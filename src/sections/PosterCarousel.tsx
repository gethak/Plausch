import { useEffect, useRef, useState } from 'react'
import { useLang } from '../i18n/LanguageContext'

const posterKeys = ['hallucinate', 'noclutter', 'private', 'notes', 'humanitarian'] as const

// One URL per (language, poster) pair. Only the active language's five URLs are
// ever referenced by an <img src>, so switching languages never fetches the
// other two languages' images — the browser only requests what's rendered.
const posterSrc = {
  de: Object.fromEntries(posterKeys.map((k) => [k, new URL(`../../assets/posters/de/${k}.jpg`, import.meta.url).href])),
  en: Object.fromEntries(posterKeys.map((k) => [k, new URL(`../../assets/posters/en/${k}.jpg`, import.meta.url).href])),
  es: Object.fromEntries(posterKeys.map((k) => [k, new URL(`../../assets/posters/es/${k}.jpg`, import.meta.url).href])),
} as const

const alts = {
  de: {
    hallucinate: 'KIs halluzinieren. Gut für den Surrealismus, weniger gut für Antworten — wir vergleichen Antworten mehrerer KIs und finden die beste für dich.',
    noclutter: 'Kein Durcheinander — ein Universum von KI-Modellen in nur einer App. Einmal herunterladen, ChatGPT, Claude, Gemini, Mistral, Kimi, Qwen und mehr an einem Ort nutzen.',
    private: 'Streng private Chats — nur du kannst deine Chats sehen. Chats mit deinem Passwort verschlüsselt; wir sammeln oder verkaufen niemals Daten.',
    notes: 'All-in-One-KI-Notizen — ein Ort für Notizen aus allen KIs. Erstelle Anmerkungen und Notizen direkt aus deinen Gesprächen.',
    humanitarian: 'Humanitäre KI — wir stehen an der Seite Palästinas. Ethisch, sozialistisch, pro-humanitär: wir spenden Gewinne für humanitäre Hilfe.',
  },
  en: {
    hallucinate: 'AIs hallucinate. Great for surrealism, less great for answers — we compare answers from multiple AIs and find the best one for you.',
    noclutter: 'No clutter — a universe of AI models from just one app. Download once, use ChatGPT, Claude, Gemini, Mistral, Kimi, Qwen and more in one place.',
    private: 'Strictly private chats — only you can see your chats. Chats encrypted with your password; we never collect or sell any data.',
    notes: 'All-in-one AI notes — one place for notes from all AIs. Make annotations and notes directly from your conversations.',
    humanitarian: 'Humanitarian AI — we stand with Palestine. Ethical, socialist, pro-humanitarian: we donate profits to humanitarian aid.',
  },
  es: {
    hallucinate: 'Las IAs alucinan. Genial para el surrealismo, no tanto para las respuestas — comparamos respuestas de múltiples IAs y encontramos la mejor para ti.',
    noclutter: 'Sin desorden — un universo de modelos de IA en una sola app. Descarga una vez, usa ChatGPT, Claude, Gemini, Mistral, Kimi, Qwen y más en un solo lugar.',
    private: 'Chats estrictamente privados — solo tú puedes ver tus chats. Chats cifrados con tu contraseña; nunca recopilamos ni vendemos ningún dato.',
    notes: 'Notas de IA todo en uno — un solo lugar para notas de todas las IAs. Haz anotaciones y notas directamente desde tus conversaciones.',
    humanitarian: 'IA humanitaria — estamos con Palestina. Ética, socialista, prohumanitaria: donamos beneficios a la ayuda humanitaria.',
  },
} as const

export default function PosterCarousel() {
  const lang = useLang()
  const trackRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  // Switching languages shows a different set of five images; reset to the first card
  // rather than leaving the track scrolled into a position that no longer matches.
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
        {posterKeys.map((key, i) => (
          <div key={key} data-poster-card className="w-[84%] shrink-0 snap-center sm:w-[420px]">
            <img
              src={posterSrc[lang][key]}
              alt={alts[lang][key]}
              loading={i === 0 ? 'eager' : 'lazy'}
              fetchPriority={i === 0 ? 'high' : 'auto'}
              decoding="async"
              className="h-auto w-full select-none rounded-3xl shadow-sm ring-1 ring-[#17130e]/10"
            />
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
