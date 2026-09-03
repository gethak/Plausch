import { ArrowRight, Heart } from 'lucide-react'
import { useTranslations } from '../i18n/LanguageContext'

const keffiyeh = new URL('../../assets/keffiyeh.webp', import.meta.url).href
const flag = new URL('../../assets/flag.webp', import.meta.url).href

/**
 * Compact solidarity card for mobile.
 *
 * The desktop band below is built around a 6xl heading, px-20 padding and a
 * bottom-right pinned button, none of which survive a phone-width column, so
 * mobile gets its own shorter copy (already translated) rather than a squeezed
 * version of the same markup.
 */
export function PalestineBannerMobile() {
  const t = useTranslations()

  return (
    <div className="relative overflow-hidden rounded-3xl bg-[#f5efe3] shadow-sm ring-1 ring-[#17130e]/10">
      <img
        src={flag}
        alt={t.palestine.flagAlt}
        loading="lazy"
        className="pointer-events-none absolute inset-y-0 right-0 h-full w-[38%] select-none object-cover"
      />
      <div className="relative max-w-[64%] px-5 py-6">
        <h2 className="font-display text-2xl font-semibold leading-tight tracking-tight">
          {t.palestine.standWithPrefix}
          <em className="font-display font-medium italic text-[#e07b39]">{t.palestine.standWithEmphasis}</em>.
        </h2>
        <p className="mt-2.5 text-sm leading-relaxed text-[#17130e]/70">{t.palestine.mobileBody}</p>
        <a
          href="https://www.pcrf.net/"
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-[#17130e] shadow-sm ring-1 ring-[#17130e]/5 transition-transform active:scale-95"
        >
          {t.palestine.mobileCta}
          <ArrowRight className="h-4 w-4 text-[#e07b39]" />
        </a>
      </div>
    </div>
  )
}

// Desktop band: text left with vertical ornament, scarf draping from the right.
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
