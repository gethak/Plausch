import type { ReactNode } from 'react'
import { Bookmark, Globe2, Lock, ShieldCheck, EyeOff, Scale, Mail, Bot, KeyRound, Check, X } from 'lucide-react'
import { useTranslations } from '../i18n/LanguageContext'

const phoneAnnotations = new URL('../../assets/phone-annotations.png', import.meta.url).href
const phonePrivacy = new URL('../../assets/phone-privacy.png', import.meta.url).href

const rowImages = [phoneAnnotations, phonePrivacy]
const rowFlips = [true, false]
const rowBulletIcons = [
  [<Bookmark className="h-5 w-5 text-[#e07b39]" />, <Scale className="h-5 w-5 text-[#e07b39]" />],
  [
    <Lock className="h-5 w-5 text-[#7c3aed]" />,
    <KeyRound className="h-5 w-5 text-[#059669]" />,
    <EyeOff className="h-5 w-5 text-[#d97706]" />,
    <Globe2 className="h-5 w-5 text-[#2563eb]" />,
    <ShieldCheck className="h-5 w-5 text-[#059669]" />,
  ],
]

function FeatureRow({
  id,
  eyebrow,
  title,
  accent,
  body,
  bullets,
  image,
  imageAlt,
  flip,
}: {
  id?: string
  eyebrow: string
  title: ReactNode
  accent: string
  body: string
  bullets: { icon: ReactNode; label: string }[]
  image: string
  imageAlt: string
  flip?: boolean
}) {
  return (
    <div
      id={id}
      className="mx-5 my-4 rounded-3xl bg-[#fdf7ef] p-6 shadow-sm ring-1 ring-[#17130e]/10 md:mx-0 md:my-0 md:rounded-none md:bg-transparent md:p-0 md:shadow-none md:ring-0"
    >
      <div className="mx-auto grid items-center gap-8 md:max-w-6xl md:gap-12 md:px-5 md:py-16 lg:grid-cols-2 lg:gap-20 lg:px-8 lg:py-24">
        <div className={flip ? 'lg:order-2' : ''}>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#e07b39]">{eyebrow}</p>
          <h2 className="font-display mt-3 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            {title} <em className="font-light italic text-[#17130e]/50">{accent}</em>
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-[#17130e]/70 md:mt-5 md:text-lg">{body}</p>
          <ul className="mt-6 space-y-4 md:mt-8">
            {bullets.map((b, i) => (
              <li key={i} className="flex items-center gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-[#17130e]/10">
                  {b.icon}
                </span>
                <span className="font-medium text-[#17130e]/85">{b.label}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className={`relative mx-auto w-full max-w-[340px] ${flip ? 'lg:order-1' : ''}`}>
          <div
            aria-hidden
            className="absolute inset-x-10 bottom-4 h-20 rounded-full bg-[#17130e]/20 blur-2xl"
          />
          <div className="relative overflow-hidden rounded-[2.5rem] drop-shadow-2xl [transform:translateZ(0)]">
            <img
              src={image}
              alt={imageAlt}
              className="relative w-full block object-cover rounded-[2.5rem] [transform:translateZ(0)]"
              loading="lazy"
              style={{ background: 'transparent' }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Features() {
  const t = useTranslations()

  return (
    <section id="features" className="relative">
      <div className="md:bg-white/50">
        <FeatureRow
          id={t.features.rows[0].id}
          eyebrow={t.features.rows[0].eyebrow}
          title={t.features.rows[0].title}
          accent={t.features.rows[0].accent}
          body={t.features.rows[0].body}
          bullets={t.features.rows[0].bullets.map((label, i) => ({ icon: rowBulletIcons[0][i], label }))}
          image={rowImages[0]}
          imageAlt={t.features.rows[0].imageAlt}
          flip={rowFlips[0]}
        />
      </div>

      <FeatureRow
        id={t.features.rows[1].id}
        eyebrow={t.features.rows[1].eyebrow}
        title={t.features.rows[1].title}
        accent={t.features.rows[1].accent}
        body={t.features.rows[1].body}
        bullets={t.features.rows[1].bullets.map((label, i) => ({ icon: rowBulletIcons[1][i], label }))}
        image={rowImages[1]}
        imageAlt={t.features.rows[1].imageAlt}
        flip={rowFlips[1]}
      />

      {/* What we collect */}
      <div className="border-y border-[#17130e]/10 bg-[#f5ebdb]">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#e07b39]">
              {t.features.collect.eyebrow}
            </p>
            <h2 className="font-display mt-3 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              {t.features.collect.titlePrefix}{' '}
              <em className="font-light italic text-[#17130e]/50">{t.features.collect.titleAccent}</em>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[#17130e]/70">{t.features.collect.intro}</p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <div className="rounded-2xl bg-white/70 p-7 shadow-sm ring-1 ring-[#17130e]/10">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e07b39]/10">
                <Mail className="h-5 w-5 text-[#e07b39]" />
              </span>
              <h3 className="font-display mt-4 text-2xl font-semibold">{t.features.collect.cards[0].title}</h3>
              <p className="mt-2 leading-relaxed text-[#17130e]/70">{t.features.collect.cards[0].body}</p>
            </div>

            <div className="rounded-2xl bg-white/70 p-7 shadow-sm ring-1 ring-[#17130e]/10">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e07b39]/10">
                <Bot className="h-5 w-5 text-[#e07b39]" />
              </span>
              <h3 className="font-display mt-4 text-2xl font-semibold">{t.features.collect.cards[1].title}</h3>
              <p className="mt-2 leading-relaxed text-[#17130e]/70">{t.features.collect.cards[1].body}</p>
            </div>

            <div className="rounded-2xl bg-white/70 p-7 shadow-sm ring-1 ring-[#17130e]/10">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e07b39]/10">
                <KeyRound className="h-5 w-5 text-[#e07b39]" />
              </span>
              <h3 className="font-display mt-4 text-2xl font-semibold">{t.features.collect.cards[2].title}</h3>
              <p className="mt-2 leading-relaxed text-[#17130e]/70">{t.features.collect.cards[2].body}</p>
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-[#17130e] p-6 text-[#faf5ec]">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#faf5ec]/60">{t.features.collect.weCollectLabel}</p>
              <ul className="mt-3 space-y-2">
                <li className="flex items-center gap-2.5 font-medium">
                  <Check className="h-4 w-4 shrink-0 text-[#7bc47f]" />
                  {t.features.collect.weCollectItem}
                </li>
              </ul>
            </div>
            <div className="rounded-2xl bg-white/70 p-6 ring-1 ring-[#17130e]/10">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#17130e]/60">{t.features.collect.weNeverSeeLabel}</p>
              <ul className="mt-3 space-y-2 text-[#17130e]/80">
                {t.features.collect.weNeverSeeItems.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 font-medium">
                    <X className="h-4 w-4 shrink-0 text-[#c0392b]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
