import { ArrowRight, Heart } from 'lucide-react'
import { useTranslations } from '../i18n/LanguageContext'

const keffiyeh = new URL('../../assets/keffiyeh.png', import.meta.url).href

export default function PalestineBanner() {
  const t = useTranslations()

  return (
    <div className="relative overflow-hidden rounded-[2rem] bg-[#f5efe3] shadow-sm ring-1 ring-[#17130e]/10">
      {/* Mobile: centered stack, scarf texture strip along the bottom */}
      <div className="md:hidden">
        <div className="px-7 pt-10 text-center">
          <div aria-hidden className="flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#e07b39]/40" />
            <Heart className="h-4 w-4 text-[#e07b39]" strokeWidth={1.5} />
            <span className="h-px w-10 bg-[#e07b39]/40" />
          </div>
          <h2 className="font-display mt-5 text-4xl font-semibold tracking-tight text-[#17130e]">
            {t.palestine.heading}
          </h2>
          <p className="mx-auto mt-3 max-w-sm text-lg text-[#17130e]/70">
            {t.palestine.subPrefix}
            <em className="font-display font-medium italic text-[#e07b39]">{t.palestine.subEmphasis}</em>
            {t.palestine.subSuffix}
          </p>
          <a
            href="https://www.pcrf.net/"
            target="_blank"
            rel="noreferrer"
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#17130e] shadow-sm ring-1 ring-[#17130e]/5 transition-transform active:scale-95"
          >
            {t.palestine.cta}
            <ArrowRight className="h-4 w-4 text-[#e07b39]" />
          </a>
        </div>
        <div className="mt-8 h-28 w-full">
          <img
            src={keffiyeh}
            alt={t.palestine.imageAlt}
            loading="lazy"
            className="pointer-events-none h-full w-full select-none object-cover object-[80%_30%] [mask-image:linear-gradient(to_bottom,transparent,black_55%)]"
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
