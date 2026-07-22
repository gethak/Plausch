import { Apple, ArrowUpRight } from 'lucide-react'
import { useTranslations } from '../i18n/LanguageContext'

const icon = new URL('../../assets/icon.png', import.meta.url).href

export default function Footer() {
  const t = useTranslations()

  return (
    <footer className="paper-grain bg-[#faf5ec]">
      {/* CTA band */}
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="flex flex-col items-center text-center">
          <div className="h-24 w-24 overflow-hidden rounded-full drop-shadow-lg">
            <img src={icon} alt={t.footer.iconAlt} className="h-24 w-24 object-cover rounded-full" style={{ background: 'transparent' }} />
          </div>
          <h2 className="font-display mt-8 text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
            {t.footer.readyPrefix} <em className="font-light italic text-[#e07b39]">{t.footer.readyAccent}</em>
          </h2>
          <p className="mt-4 max-w-md text-lg text-[#17130e]/65">{t.footer.body}</p>
          <a
            href="https://www.apple.com/us/search/plausch?src=globalnav"
            target="_blank"
            rel="noreferrer"
            className="mt-8 flex items-center gap-3 rounded-2xl bg-[#17130e] px-7 py-4 text-[#faf5ec] transition-transform hover:scale-[1.04] active:scale-95"
          >
            <Apple className="h-8 w-8" />
            <span className="text-left leading-tight">
              <span className="block text-[10px] uppercase tracking-wider opacity-70">{t.footer.downloadEyebrow}</span>
              <span className="block text-xl font-semibold">{t.footer.downloadTitle}</span>
            </span>
          </a>
          <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-medium text-[#17130e]/50">
            {t.footer.badges.map((b) => (
              <span key={b}>{b}</span>
            ))}
          </div>
        </div>
      </div>

      {/* bottom bar */}
      <div className="border-t border-[#17130e]/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 sm:px-8 md:flex-row">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 overflow-hidden rounded-full drop-shadow-sm">
              <img src={icon} alt="" className="h-8 w-8 object-cover rounded-full" style={{ background: 'transparent' }} />
            </div>
            <div className="leading-tight">
              <p className="font-display font-semibold">{t.footer.brand}</p>
              <p className="text-xs text-[#17130e]/50">{t.footer.byLine}</p>
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
