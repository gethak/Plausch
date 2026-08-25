import { ArrowRight, Heart } from 'lucide-react'
import { useTranslations } from '../i18n/LanguageContext'

const keffiyeh = new URL('../../assets/keffiyeh.png', import.meta.url).href
const flag = new URL('../../assets/flag.png', import.meta.url).href

export default function PalestineBanner() {
  const t = useTranslations()

  return (
    <div className="relative overflow-hidden rounded-[2rem] bg-[#faf4ed] shadow-sm ring-1 ring-[#17130e]/10 md:bg-[#f5efe3]">
      {/* Mobile: heading and mission on top, keffiyeh + Palestinian flag band along the bottom */}
      <div className="md:hidden">
        <div className="relative px-6 pt-8">
          <h2 className="font-display text-[27px] font-semibold leading-snug tracking-tight text-[#17130e]">
            {t.palestine.subPrefix}
            <em className="font-medium italic text-[#e07b39]">{t.palestine.subEmphasis}</em>
            {t.palestine.subSuffix}
          </h2>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-[#17130e]/70">{t.palestine.mobileBody}</p>
          <a
            href="https://www.pcrf.net/"
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#17130e] shadow-sm ring-1 ring-[#17130e]/5 transition-transform active:scale-95"
          >
            <Heart className="h-4 w-4 text-[#e07b39]" strokeWidth={2} />
            {t.palestine.mobileCta}
          </a>
        </div>
        <div className="mt-6 h-36 w-full">
          <img
            src={flag}
            alt={t.palestine.flagAlt}
            loading="lazy"
            className="pointer-events-none h-full w-full select-none object-cover object-[30%_25%] [mask-image:linear-gradient(to_bottom,transparent,black_45%)]"
          />
        </div>
      </div>

      {/* Desktop: text left with vertical ornament, scarf draping from the right */}
      <div className="hidden md:block">
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
    </div>
  )
}
