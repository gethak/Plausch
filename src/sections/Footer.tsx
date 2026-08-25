import { ArrowRight, ArrowUpRight, Heart } from 'lucide-react'
import { useTranslations } from '../i18n/LanguageContext'
import { AppleLogo, GooglePlayLogo } from '../components/brand-icons'

const icon = new URL('../../assets/icon.png', import.meta.url).href
const keffiyeh = new URL('../../assets/keffiyeh.png', import.meta.url).href

export default function Footer() {
  const t = useTranslations()

  return (
    <footer className="paper-grain bg-[#faf5ec]">
      {/* CTA band */}
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="flex flex-col items-center text-center">
          <img src={icon} alt={t.footer.iconAlt} className="h-24 w-24 object-contain drop-shadow-lg" style={{ background: 'transparent' }} />
          <h2 className="font-display mt-8 text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
            {t.footer.readyPrefix} <em className="font-light italic text-[#e07b39]">{t.footer.readyAccent}</em>
          </h2>
          <p className="mt-4 max-w-md text-lg text-[#17130e]/65">{t.footer.body}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://sidekick-llm.fly.dev/l/website?a=home&s=footer&p=ios"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-2xl bg-[#17130e] px-7 py-4 text-[#faf5ec] transition-transform hover:scale-[1.04] active:scale-95"
            >
              <AppleLogo className="h-8 w-8" />
              <span className="text-left leading-tight">
                <span className="block text-[10px] uppercase tracking-wider opacity-70">{t.footer.downloadEyebrow}</span>
                <span className="block text-xl font-semibold">{t.footer.downloadTitle}</span>
              </span>
            </a>
            <a
              href="https://sidekick-llm.fly.dev/l/website?a=home&s=footer&p=android"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-2xl bg-[#17130e] px-7 py-4 text-[#faf5ec] transition-transform hover:scale-[1.04] active:scale-95"
            >
              <GooglePlayLogo className="h-8 w-8" />
              <span className="text-left leading-tight">
                <span className="block text-[10px] uppercase tracking-wider opacity-70">{t.footer.playStoreEyebrow}</span>
                <span className="block text-xl font-semibold">{t.footer.playStoreTitle}</span>
              </span>
            </a>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-medium text-[#17130e]/50">
            {t.footer.badges.map((b) => (
              <span key={b}>{b}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Palestine solidarity banner */}
      <div className="mx-auto max-w-6xl px-5 pb-16 sm:px-8 lg:pb-20">
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
      </div>

      {/* bottom bar */}
      <div className="border-t border-[#17130e]/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 sm:px-8 md:flex-row">
          <div className="flex items-center gap-3">
            <img src={icon} alt="" className="h-8 w-8 object-contain drop-shadow-sm" style={{ background: 'transparent' }} />
            <div className="leading-tight">
              <p className="font-display font-semibold">Plausch</p>
              <p className="text-xs text-[#17130e]/50">by Socalist AI</p>
            </div>
          </div>

          <p className="max-w-sm text-center text-xs leading-relaxed text-[#17130e]/50 md:text-left">{t.footer.tagline}</p>

          <div className="flex items-center gap-5 text-sm font-medium text-[#17130e]/70">
            {t.footer.links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-[#17130e]">
                {l.label}
              </a>
            ))}
            <a
              href="https://socialist-tech.org/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-[#8f1d1d] hover:underline"
            >
              {t.footer.socialistAiLabel}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
        <div className="mx-auto max-w-6xl px-5 pb-8 sm:px-8">
          <p className="text-center text-xs text-[#17130e]/40 md:text-left">{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
