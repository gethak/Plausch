import { useEffect, useRef, useState } from 'react'
import { useLang, useTranslations } from '../i18n/LanguageContext'
import type { Lang } from '../i18n/translations'
import PosterCard, { type PosterKey } from './PosterCard'

const posterKeys = ['hallucinate', 'noclutter', 'private', 'notes', 'humanitarian'] as const

type Artwork = { ratio: string; src: Record<PosterKey, string>; alt: Record<PosterKey, string> }

// Aspect ratio travels with each artwork set rather than being shared across
// the carousel: the German posters are 2:3 and the Spanish ones 4:5, so a
// single shared ratio would crop ~17% off the sides of one set and cut text
// off the posters. Each set gets a card shaped to its own artwork, which
// still leaves all five cards identical within any one language. These must
// stay whole literal class strings so Tailwind's scanner emits them.
const FALLBACK_RATIO = 'aspect-[2/3]'

// Real poster artwork, per language. A language listed here renders the
// designed posters; any language without artwork falls back to the HTML
// PosterCard recreation, so the carousel always has all five slides.
//
// To add English: drop the five images into assets/posters/en/ and add one
// block below with their ratio — nothing else changes.
const posterArtwork: Partial<Record<Lang, Artwork>> = {
  de: {
    ratio: 'aspect-[2/3]',
    src: {
      hallucinate: new URL('../../assets/posters/de/hallucinate.jpg', import.meta.url).href,
      noclutter: new URL('../../assets/posters/de/noclutter.jpg', import.meta.url).href,
      private: new URL('../../assets/posters/de/private.jpg', import.meta.url).href,
      notes: new URL('../../assets/posters/de/notes.jpg', import.meta.url).href,
      humanitarian: new URL('../../assets/posters/de/humanitarian.jpg', import.meta.url).href,
    },
    alt: {
      hallucinate:
        'KIs halluzinieren. Gut für Surrealismus, weniger gut für Antworten. Vier KI-Antworten zur Frage, ob Leitungswasser in Spanien trinkbar ist — drei falsch, eine richtig. Einmal fragen: Wir vergleichen Antworten von mehreren KIs und finden die beste für dich.',
      noclutter:
        'Kein App-Chaos. Ein Universum an KI-Modellen in nur einer App. ChatGPT, Claude, Gemini, Mistral, Kimi, Qwen und mehr an einem Ort. Einmal downloaden.',
      private:
        'Streng private Chats. Nur du kannst deine Chats sehen. Deine Frage wird mit deinem Passwort verschlüsselt gespeichert. Wir sammeln oder verkaufen niemals Daten und sind streng DSGVO-konform.',
      notes:
        'All-in-One-KI-Notizen. Ein Ort für Notizen aus allen KIs. Erstelle Anmerkungen und Notizen direkt aus deinen Gesprächen, während du chattest.',
      humanitarian:
        'Humanitäre KI. Wir stehen an der Seite Palästinas. Wir spenden Gewinne für humanitäre Hilfe an UNRWA, Ärzte ohne Grenzen, Medical Aid for Palestinians, den Palestine Children’s Relief Fund, den Palästinensischen Roten Halbmond und Islamic Relief Palestine. Ethisch. Sozial. Pro-humanitär.',
    },
  },
  es: {
    ratio: 'aspect-[4/5]',
    src: {
      hallucinate: new URL('../../assets/posters/es/hallucinate.jpg', import.meta.url).href,
      noclutter: new URL('../../assets/posters/es/noclutter.jpg', import.meta.url).href,
      private: new URL('../../assets/posters/es/private.jpg', import.meta.url).href,
      notes: new URL('../../assets/posters/es/notes.jpg', import.meta.url).href,
      humanitarian: new URL('../../assets/posters/es/humanitarian.jpg', import.meta.url).href,
    },
    alt: {
      hallucinate:
        'Las IA alucinan. Genial para el surrealismo, menos genial para las respuestas. Cuatro respuestas de IA sobre si el casero puede subir el alquiler — tres incorrectas, una correcta. Pregunta una vez: comparamos respuestas de varias IA y encontramos la mejor para ti.',
      noclutter:
        'Sin caos de apps. Un universo de modelos de IA en una sola app. ChatGPT, Claude, Gemini, Mistral, Kimi, Qwen y más en un solo lugar. Descárgala una vez.',
      private:
        'Chats estrictamente privados. Solo tú puedes ver tus chats. Tu pregunta se guarda cifrada con tu contraseña. Nunca recopilamos ni vendemos ningún dato, cumplimos estrictamente el RGPD y estamos auditados.',
      notes:
        'Notas de IA todo-en-uno. Un lugar para notas de todas las IA. Crea anotaciones y notas directamente desde tus conversaciones mientras chateas.',
      humanitarian:
        'IA humanitaria. Estamos con Palestina. Donamos beneficios a la ayuda humanitaria para Palestina: UNRWA, Médicos Sin Fronteras, Ayuda Médica para Palestina (MAP), Fondo de Ayuda para la Infancia Palestina (PCRF), Media Luna Roja Palestina e Islamic Relief Palestina. Ética. Social. Prohumanitaria.',
    },
  },
}

export default function PosterCarousel() {
  const lang = useLang()
  const t = useTranslations()
  const trackRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  const artwork = posterArtwork[lang]

  // Switching languages swaps every poster in place; reset to the first card
  // rather than leaving the track scrolled to a position mid-transition.
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
          <div
            key={key}
            data-poster-card
            className={`${artwork?.ratio ?? FALLBACK_RATIO} w-[84%] shrink-0 snap-center overflow-hidden rounded-3xl bg-[#f3ede2] shadow-sm ring-1 ring-[#17130e]/10 sm:w-[420px]`}
          >
            {artwork ? (
              <img
                src={artwork.src[key]}
                alt={artwork.alt[key]}
                loading={i === 0 ? 'eager' : 'lazy'}
                fetchPriority={i === 0 ? 'high' : 'auto'}
                decoding="async"
                className="h-full w-full select-none object-cover"
              />
            ) : (
              <PosterCard posterKey={key} content={t.posters[key]} />
            )}
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
