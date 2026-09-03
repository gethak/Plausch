import { Sparkles } from 'lucide-react'
import { useTranslations } from '../i18n/LanguageContext'
import { brandSafe } from '../i18n/brand'

export default function Models() {
  const t = useTranslations()

  return (
    <section id="models" className="relative overflow-hidden bg-[#17130e] py-20 text-[#faf5ec] lg:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-0 h-[480px] w-[480px] rounded-full opacity-40 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(224,123,57,0.35), transparent 65%)' }}
      />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#e07b39]">
            <Sparkles className="h-4 w-4" />
            {t.models.eyebrow}
          </p>
          <h2 className="font-display mt-3 text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            {t.models.titlePrefix} <em className="font-light italic text-[#faf5ec]/60">{t.models.titleAccent}</em>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#faf5ec]/65">{brandSafe(t.models.body)}</p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.models.cards.map((m) => (
            <div
              key={m.name}
              className="group rounded-2xl border border-[#faf5ec]/12 bg-[#faf5ec]/[0.04] p-5 transition-all hover:border-[#e07b39]/50 hover:bg-[#faf5ec]/[0.08]"
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl">{m.flag}</span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#faf5ec]/40 transition-colors group-hover:text-[#e07b39]">
                  {m.country}
                </span>
              </div>
              <h3 className="font-display mt-3 text-xl font-semibold">{m.name}</h3>
              <p className="mt-1 text-sm text-[#faf5ec]/55">{brandSafe(m.note)}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-[#faf5ec]/45">{t.models.footnote}</p>
      </div>
    </section>
  )
}
