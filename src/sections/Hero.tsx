import { ChevronDown } from 'lucide-react'
import { useTranslations } from '../i18n/LanguageContext'
import { AppleLogo, GooglePlayLogo } from '../components/brand-icons'
import PalestineBanner from './PalestineBanner'

const phoneSmart = new URL('../../assets/phone-smart.png', import.meta.url).href

export default function Hero() {
  const t = useTranslations()

  return (
    <section id="top" className="paper-grain relative overflow-hidden pt-32 sm:pt-40">
      {/* soft warm glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-15%] h-[560px] w-[560px] rounded-full opacity-60 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(224,123,57,0.28), transparent 65%)' }}
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 pb-16 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:pb-24">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#17130e]/15 bg-white/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#17130e]/70">
            <span className="h-1.5 w-1.5 rounded-full bg-[#e07b39]" />
            {t.hero.eyebrow}
          </p>
          <h1 className="font-display text-balance text-6xl font-semibold leading-[0.95] tracking-tight sm:text-7xl lg:text-[6.5rem]">
            {t.hero.h1Line1}
            <br />
            <em className="font-light italic text-[#e07b39]">{t.hero.h1Line2}</em>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-[#17130e]/70">{t.hero.body}</p>
          <p className="mt-4 max-w-xl text-sm font-medium text-[#17130e]/55">
            {t.hero.builtByPrefix}{' '}
            <a href="#socialist-ai" className="underline decoration-[#e07b39] decoration-2 underline-offset-4 hover:text-[#17130e]">
              {t.hero.socialistAiLabel}
            </a>{' '}
            {t.hero.builtBySuffix}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="https://sidekick-llm.fly.dev/l/website?a=home&s=hero&p=ios"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-2xl bg-[#17130e] px-6 py-3.5 text-[#faf5ec] transition-transform hover:scale-[1.03] active:scale-95"
            >
              <AppleLogo className="h-7 w-7" />
              <span className="text-left leading-tight">
                <span className="block text-[10px] uppercase tracking-wider opacity-70">{t.hero.downloadEyebrow}</span>
                <span className="block text-lg font-semibold">{t.hero.downloadTitle}</span>
              </span>
            </a>
            <a
              href="https://sidekick-llm.fly.dev/l/website?a=home&s=hero&p=android"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-2xl bg-[#17130e] px-6 py-3.5 text-[#faf5ec] transition-transform hover:scale-[1.03] active:scale-95"
            >
              <GooglePlayLogo className="h-7 w-7" />
              <span className="text-left leading-tight">
                <span className="block text-[10px] uppercase tracking-wider opacity-70">{t.hero.playStoreEyebrow}</span>
                <span className="block text-lg font-semibold">{t.hero.playStoreTitle}</span>
              </span>
            </a>
            <a
              href="#features"
              className="flex items-center gap-2 rounded-2xl border border-[#17130e]/20 bg-white/60 px-6 py-4 text-sm font-semibold transition-colors hover:bg-white"
            >
              {t.hero.seeWhatItDoes}
              <ChevronDown className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-9 flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium text-[#17130e]/50">
            {t.hero.badges.map((b) => (
              <span key={b}>{b}</span>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[320px] lg:max-w-[360px]">
          <div
            aria-hidden
            className="absolute inset-x-8 bottom-6 h-24 rounded-full bg-[#17130e]/20 blur-2xl"
          />
          <div className="animate-float relative" style={{ '--tilt': '0deg' } as React.CSSProperties}>
            <div className="relative aspect-[881/1420] overflow-hidden rounded-[2.5rem] drop-shadow-2xl [transform:translateZ(0)]">
              <img
                src={phoneSmart}
                alt={t.hero.imageAlt}
                className="absolute inset-0 h-full w-full rounded-[2.5rem] object-cover [transform:translateZ(0)]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Palestine solidarity banner */}
      <div className="relative mx-auto max-w-6xl px-5 pb-16 sm:px-8 lg:pb-20">
        <PalestineBanner />
      </div>

      {/* model marquee */}
      <div className="relative border-y border-[#17130e]/10 bg-[#17130e] py-4">
        <div className="marquee-mask overflow-hidden">
          <div className="animate-marquee flex w-max items-center gap-10 pr-10">
            {[...t.hero.marqueeModels, ...t.hero.marqueeModels].map((m, i) => (
              <span key={i} className="flex items-center gap-2.5 whitespace-nowrap text-sm font-medium text-[#faf5ec]/85">
                <span className="text-lg">{m.flag}</span>
                {m.name}
                <span className="text-[#faf5ec]/40">· {m.country}</span>
                <span className="text-[#e07b39]">★</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
