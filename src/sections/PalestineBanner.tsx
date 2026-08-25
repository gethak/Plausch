import { ArrowRight, Heart } from 'lucide-react'
import { useTranslations } from '../i18n/LanguageContext'

const keffiyeh = new URL('../../assets/keffiyeh.png', import.meta.url).href

export default function PalestineBanner() {
  const t = useTranslations()

  return (
    <div className="relative overflow-hidden rounded-[2rem] bg-[#f5efe3] shadow-sm ring-1 ring-[#17130e]/10">
      <img
        src={keffiyeh}
        alt={t.palestine.imageAlt}
        loading="lazy"
        className="pointer-events-none absolute right-0 top-0 hidden h-full w-auto select-none md:block"
      />
      <div
        aria-hidden
        className="absolute inset-y-8 left-8 hidden w-px flex-col items-center gap-3 sm:flex"
      >
        <span className="w-px flex-1 bg-[#e07b39]/40" />
        <Heart className="h-4 w-4 shrink-0 -translate-x-1/2 text-[#e07b39]" strokeWidth={1.5} />
        <span className="w-px flex-1 bg-[#e07b39]/40" />
      </div>
      <div className="relative px-7 py-12 sm:px-20 sm:py-16">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-[#17130e] sm:text-6xl">
          {t.palestine.heading}
        </h2>
        <p className="mt-4 max-w-md text-xl text-[#17130e]/70 sm:text-2xl">
          {t.palestine.subPrefix}
          <em className="font-display font-medium italic text-[#e07b39]">{t.palestine.subEmphasis}</em>
          {t.palestine.subSuffix}
        </p>
        <a
          href="https://www.pcrf.net/"
          target="_blank"
          rel="noreferrer"
          className="z-10 mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#17130e] shadow-sm ring-1 ring-[#17130e]/5 transition-transform hover:scale-[1.04] active:scale-95 sm:absolute sm:bottom-8 sm:right-8 sm:mt-0"
        >
          {t.palestine.cta}
          <ArrowRight className="h-4 w-4 text-[#e07b39]" />
        </a>
      </div>
    </div>
  )
}
