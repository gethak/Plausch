import { ChevronDown } from 'lucide-react'
import { useLang, useTranslations } from '../i18n/LanguageContext'
import { AppleLogo, GooglePlayLogo } from '../components/brand-icons'
import PalestineBanner, { PalestineBannerMobile } from './PalestineBanner'
import PosterCarousel, { posterWidth } from './PosterCarousel'

const phoneSmart = new URL('../../assets/phone-smart.png', import.meta.url).href

export default function Hero() {
  const t = useTranslations()
  const lang = useLang()

  return (
    <>
    {/* On mobile the hero is exactly one viewport tall and lays its three rows
        out as a column, so the marquee finishes at the bottom edge of the screen
        instead of leaving a stray band of paper below it. --poster-w is read by
        the store buttons, the carousel cards and the track spacers alike. */}
    <section
      id="top"
      style={{ '--poster-w': posterWidth(lang) } as React.CSSProperties}
      className="paper-grain relative flex min-h-[100svh] flex-col overflow-hidden pt-14 sm:pt-40 md:block md:min-h-0"
    >
      {/* soft warm glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-15%] h-[560px] w-[560px] rounded-full opacity-60 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(224,123,57,0.28), transparent 65%)' }}
      />
      {/* desktop hero */}
      <div className="relative mx-auto hidden max-w-6xl grid-cols-1 items-center gap-14 px-5 pb-16 sm:px-8 md:grid lg:grid-cols-[1.15fr_0.85fr] lg:pb-24">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#17130e]/15 bg-white/60 px-4 py-1.5 text-sm font-semibold text-[#17130e]/70">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#e07b39]" />
            <span>{t.hero.eyebrow}</span>
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

      {/* mobile hero: store buttons, then the swipeable poster carousel leads the page */}
      <div className="relative w-[var(--poster-w)] shrink-0 self-center pb-2 md:hidden">
        <div className="flex items-center gap-2">
          <a
            href="https://sidekick-llm.fly.dev/l/website?a=home&s=hero&p=ios"
            target="_blank"
            rel="noreferrer"
            className="flex flex-auto items-center justify-center gap-2 rounded-full bg-[#17130e] px-3 py-2.5 text-[#faf5ec] transition-transform active:scale-95"
          >
            <AppleLogo className="h-6 w-6" />
            <span className="text-left leading-tight">
              <span className="block text-[8px] uppercase tracking-wider opacity-70">{t.hero.downloadEyebrow}</span>
              <span className="block whitespace-nowrap text-sm font-semibold">{t.hero.downloadTitle}</span>
            </span>
          </a>
          <a
            href="https://sidekick-llm.fly.dev/l/website?a=home&s=hero&p=android"
            target="_blank"
            rel="noreferrer"
            className="flex flex-auto items-center justify-center gap-2 rounded-full bg-[#17130e] px-3 py-2.5 text-[#faf5ec] transition-transform active:scale-95"
          >
            <GooglePlayLogo className="h-6 w-6" />
            <span className="text-left leading-tight">
              <span className="block text-[8px] uppercase tracking-wider opacity-70">{t.hero.playStoreEyebrow}</span>
              <span className="block whitespace-nowrap text-sm font-semibold">{t.hero.playStoreTitle}</span>
            </span>
          </a>
        </div>
      </div>

      {/* full-bleed so the next card peeks past the viewport edge. justify-start,
          not centre: a language whose poster is held by its width cap cannot
          use all the height, and centring split that leftover evenly, opening a
          gap above the poster. Starting at the top keeps the poster tight under
          the buttons and drops the leftover below the dots instead. */}
      <div className="relative flex min-h-0 flex-1 flex-col justify-start py-1 md:hidden">
        <PosterCarousel />
      </div>

      {/* Palestine solidarity banner (desktop only; on mobile the "Humanitarian AI" poster in the carousel covers this) */}
      <div className="relative mx-auto hidden max-w-6xl px-5 pb-14 sm:px-8 md:block lg:pb-20">
        <PalestineBanner />
      </div>

      {/* model marquee */}
      <div className="relative border-y border-[#17130e]/10 bg-[#17130e] py-2.5 md:py-4">
        <div className="marquee-mask overflow-hidden">
          <div className="animate-marquee flex w-max items-center gap-10 pr-10">
            {[...t.hero.marqueeModels, ...t.hero.marqueeModels].map((m, i) => (
              <span key={i} className="flex items-center gap-2.5 whitespace-nowrap text-sm font-medium text-[#faf5ec]/85">
                <span className="text-base md:text-lg">{m.flag}</span>
                {m.name}
                <span className="text-[#faf5ec]/40">· {m.country}</span>
                <span className="text-[#e07b39]">★</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Solidarity band on mobile. It sits outside the hero rather than in it:
        the hero is pinned to exactly one viewport, so a fourth row inside would
        push the marquee back off the bottom of the screen. Here it is the first
        thing revealed on scrolling past the poster. Desktop keeps its own band
        inside the hero, above the marquee. */}
    <div className="px-5 pb-2 pt-8 md:hidden">
      <PalestineBannerMobile />
    </div>
    </>
  )
}
