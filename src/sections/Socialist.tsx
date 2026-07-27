import { BookOpen, Globe2, KeyRound, Users, ArrowUpRight } from 'lucide-react'
import { useTranslations } from '../i18n/LanguageContext'

const principleIcons = [
  <BookOpen className="h-5 w-5" />,
  <KeyRound className="h-5 w-5" />,
  <Globe2 className="h-5 w-5" />,
  <Users className="h-5 w-5" />,
]

export default function Socialist() {
  const t = useTranslations()

  return (
    <section id="socialist-ai" className="relative overflow-hidden bg-[#8f1d1d] py-20 text-[#fdf3e3] lg:py-28">
      {/* subtle star pattern */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: 'radial-gradient(#fdf3e3 1.2px, transparent 1.2px)',
          backgroundSize: '26px 26px',
        }}
      />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#fdf3e3]/70">{t.socialist.tagline}</p>
          <h2 className="font-display mt-4 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
            {t.socialist.titlePrefix} <em className="font-light italic text-[#f5b73f]">{t.socialist.titleAccent}</em>
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#fdf3e3]/75">{t.socialist.body}</p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {t.socialist.principles.map((p, i) => (
            <div
              key={p.title}
              className="rounded-2xl border border-[#fdf3e3]/15 bg-[#fdf3e3]/[0.05] p-7 backdrop-blur-sm transition-colors hover:bg-[#fdf3e3]/[0.09]"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#fdf3e3]/10 text-[#f5b73f]">
                  {principleIcons[i]}
                </span>
                <span className="font-display text-3xl font-light text-[#fdf3e3]/30">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="font-display mt-4 text-2xl font-semibold">{p.title}</h3>
              <p className="mt-2 leading-relaxed text-[#fdf3e3]/70">{p.body}</p>
            </div>
          ))}
        </div>

        <blockquote className="mx-auto mt-16 max-w-3xl text-center">
          <p className="font-display text-balance text-2xl font-medium leading-snug sm:text-3xl">
            “{t.socialist.quotePrefix}
            <em className="italic text-[#f5b73f]">{t.socialist.quoteEmphasis}</em>
            {t.socialist.quoteSuffix}”
          </p>
          <cite className="mt-4 block text-sm font-semibold uppercase tracking-[0.16em] text-[#fdf3e3]/60 not-italic">
            {t.socialist.cite}
          </cite>
        </blockquote>

        <div className="mt-16 grid grid-cols-2 gap-6 border-t border-[#fdf3e3]/15 pt-12 sm:grid-cols-4">
          {t.socialist.stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-4xl font-semibold text-[#f5b73f] sm:text-5xl">{s.value}</p>
              <p className="mt-2 text-sm text-[#fdf3e3]/65">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href="https://socialist-tech.org/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#fdf3e3] px-8 py-4 text-sm font-bold text-[#8f1d1d] transition-transform hover:scale-[1.04] active:scale-95"
          >
            {t.socialist.cta}
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <p className="mt-4 text-sm text-[#fdf3e3]/55">{t.socialist.ctaFootnote}</p>
        </div>
      </div>
    </section>
  )
}
