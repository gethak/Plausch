import { ArrowRight, Heart } from 'lucide-react'
import { useTranslations } from '../i18n/LanguageContext'

const keffiyeh = new URL('../../assets/keffiyeh.png', import.meta.url).href

// Desktop-only band: text left with vertical ornament, scarf draping from the right.
// On mobile this content is covered by the "Humanitarian AI" poster in the swipeable carousel instead.
export default function PalestineBanner() {
  const t = useTranslations()

  return (
    <div className="relative overflow-hidden rounded-[2rem] bg-[#f5efe3] shadow-sm ring-1 ring-[#17130e]/10">
      <img
        src={keffiyeh}
        alt={t.palestine.imageAlt}
        loading="lazy"
        className="pointer-events-none absolute right-0 top-0 h-full w-auto select-none"
      />
      <div aria-hidden className="absolute inset-y-8 left-8 flex w-px flex-col items-center gap-3">
        <span className="w-px flex-1 bg-[#e07b39]/40" />
        <Heart className="h-4 w-4 shrink-0 -translate-x-1/2 text-[#e07b39]" strokeWidth={1.5} />
        <span className="w-px flex-1 bg-[#e07b39]/40" />
      </div>
      <div className="relative px-20 py-16">
        <h2 className="font-display text-6xl font-semibold tracking-tight text-[#17130e]">
          {t.palestine.heading}
        </h2>
        <p className="mt-4 max-w-md text-2xl text-[#17130e]/70">
          {t.palestine.subPrefix}
          <em className="font-display font-medium italic text-[#e07b39]">{t.palestine.subEmphasis}</em>
          {t.palestine.subSuffix}
        </p>
        <a
          href="https://www.pcrf.net/"
          target="_blank"
          rel="noreferrer"
          className="absolute bottom-8 right-8 z-10 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#17130e] shadow-sm ring-1 ring-[#17130e]/5 transition-transform hover:scale-[1.04] active:scale-95"
        >
          {t.palestine.cta}
          <ArrowRight className="h-4 w-4 text-[#e07b39]" />
        </a>
      </div>
    </div>
  )
}
