import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { Menu, X } from 'lucide-react'
import { useLang, useTranslations } from '../i18n/LanguageContext'
import { LANGS } from '../i18n/translations'
import { AppleLogo } from '../components/brand-icons'

const icon = new URL('../../assets/icon.png', import.meta.url).href

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const lang = useLang()
  const t = useTranslations()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const switcher = (className: string) => (
    <div className={className} role="group" aria-label={t.languageSwitch.label}>
      {LANGS.map((l) => (
        <Link
          key={l}
          to={`/${l}${typeof window !== 'undefined' ? window.location.hash : ''}`}
          className={`rounded-full px-2.5 py-1 text-xs font-semibold uppercase tracking-wide transition-colors ${
            l === lang ? 'bg-[#17130e] text-[#faf5ec]' : 'text-[#17130e]/60 hover:text-[#17130e]'
          }`}
          aria-current={l === lang ? 'true' : undefined}
        >
          {t.languageSwitch[l]}
        </Link>
      ))}
    </div>
  )

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#faf5ec]/85 shadow-[0_1px_0_rgba(23,19,14,0.08)] backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-2.5 sm:px-8 md:py-4">
        <a href="#top" className="flex items-center gap-3">
          <img src={icon} alt={t.nav.iconAlt} className="h-10 w-10 object-contain drop-shadow-sm" style={{ background: 'transparent' }} />
          {/* Inter bold, matching the Plausch wordmark on the posters, rather
              than the Fraunces serif used for editorial headings */}
          <span translate="no" className="text-2xl font-bold tracking-tight">Plausch</span>
        </a>

        <div className="hidden flex-1 items-center justify-between md:ml-12 md:flex">
          <nav className="flex items-center gap-8">
            {t.nav.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-[#17130e]/70 transition-colors hover:text-[#17130e]"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {switcher('flex items-center gap-1 rounded-full border border-[#17130e]/15 bg-white/60 p-1')}
            <a
              href="https://sidekick-llm.fly.dev/l/website?a=home&s=nav&p=ios"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2 rounded-full bg-[#17130e] px-5 py-2.5 text-sm font-semibold text-[#faf5ec] transition-transform hover:scale-[1.03] active:scale-95"
            >
              <AppleLogo className="h-4 w-4" />
              {t.nav.getApp}
            </a>
          </div>
        </div>

        <button
          className="rounded-lg p-2 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={t.nav.toggleMenu}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-[#17130e]/10 bg-[#faf5ec]/95 px-5 py-4 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-4">
            {t.nav.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-[#17130e]/80"
              >
                {l.label}
              </a>
            ))}
            {switcher('flex w-fit items-center gap-1 rounded-full border border-[#17130e]/15 bg-white/60 p-1')}
            <a
              href="https://sidekick-llm.fly.dev/l/website?a=home&s=nav&p=ios"
              target="_blank"
              rel="noreferrer"
              className="mt-2 flex w-fit items-center gap-2 rounded-full bg-[#17130e] px-5 py-2.5 text-sm font-semibold text-[#faf5ec]"
            >
              <AppleLogo className="h-4 w-4" />
              {t.nav.getApp}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
