import { Bookmark, Globe2, Lock, MessagesSquare, ShieldCheck, EyeOff, Scale, Mail, Bot, KeyRound, Check, X } from 'lucide-react'

const phoneSmart = new URL('../../assets/phone-smart.png', import.meta.url).href
const phoneAnnotations = new URL('../../assets/phone-annotations.png', import.meta.url).href
const phonePrivacy = new URL('../../assets/phone-privacy.png', import.meta.url).href

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
  title: React.ReactNode
  accent: string
  body: string
  bullets: { icon: React.ReactNode; label: string }[]
  image: string
  imageAlt: string
  flip?: boolean
}) {
  return (
    <div
      id={id}
      className={`mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:py-24 ${
        flip ? '' : ''
      }`}
    >
      <div className={flip ? 'lg:order-2' : ''}>
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#e07b39]">{eyebrow}</p>
        <h2 className="font-display mt-3 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          {title} <em className="font-light italic text-[#17130e]/50">{accent}</em>
        </h2>
        <p className="mt-5 max-w-lg text-lg leading-relaxed text-[#17130e]/70">{body}</p>
        <ul className="mt-8 space-y-4">
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
  )
}

export default function Features() {
  return (
    <section id="features" className="relative">
      <FeatureRow
        eyebrow="Smarte Gespräche"
        title="Natural, deep —"
        accent="always at your side."
        body="Chat the way you think. Plausch keeps every conversation fluid and thoughtful, whether you're dreaming with Van Gogh or untangling the three-body problem. Switch models mid-conversation and feel the difference."
        bullets={[
          { icon: <MessagesSquare className="h-5 w-5 text-[#e07b39]" />, label: 'One continuous thread, many minds' },
          { icon: <Globe2 className="h-5 w-5 text-[#e07b39]" />, label: 'Voice, attachments and live model switching' },
        ]}
        image={phoneSmart}
        imageAlt="Plausch smart conversation screen"
      />

      <div className="bg-white/50">
        <FeatureRow
          flip
          eyebrow="Intelligente Anmerkungen"
          title="Highlight, save,"
          accent="organise."
          body="Every answer becomes your knowledge base. Mark the passages that matter, keep them in your private annotations drawer, and come back to them anytime — your excerpts, only for you."
          bullets={[
            { icon: <Bookmark className="h-5 w-5 text-[#e07b39]" />, label: 'Colour-coded excerpts, saved in one tap' },
            { icon: <Scale className="h-5 w-5 text-[#e07b39]" />, label: 'Compare answers across models side by side' },
          ]}
          image={phoneAnnotations}
          imageAlt="Plausch intelligent annotations screen"
        />
      </div>

      <FeatureRow
        id="privacy"
        eyebrow="Sicher & privat"
        title="Your data"
        accent="belongs to you."
        body="Protected to the highest standards — no compromises. Plausch processes your data securely and confidentially, fully in line with GDPR and regularly audited independently."
        bullets={[
          { icon: <Lock className="h-5 w-5 text-[#7c3aed]" />, label: 'End-to-end encryption of every request' },
          { icon: <KeyRound className="h-5 w-5 text-[#059669]" />, label: 'Chat history encrypted — only your device holds the key' },
          { icon: <EyeOff className="h-5 w-5 text-[#d97706]" />, label: 'No tracking, no data sharing with third parties' },
          { icon: <Globe2 className="h-5 w-5 text-[#2563eb]" />, label: 'All data hosted securely in the European Union' },
          { icon: <ShieldCheck className="h-5 w-5 text-[#059669]" />, label: 'Full transparency & control over your settings' },
        ]}
        image={phonePrivacy}
        imageAlt="Plausch privacy and security screen"
      />

      {/* What we collect */}
      <div className="border-y border-[#17130e]/10 bg-[#f5ebdb]">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#e07b39]">
              Radical data minimalism
            </p>
            <h2 className="font-display mt-3 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              What we collect — <em className="font-light italic text-[#17130e]/50">and what we never will.</em>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[#17130e]/70">
              Plausch asks for exactly one piece of personal data: your email address.
              Not even your name. Here is the full story — nothing hidden, no fine print.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <div className="rounded-2xl bg-white/70 p-7 shadow-sm ring-1 ring-[#17130e]/10">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e07b39]/10">
                <Mail className="h-5 w-5 text-[#e07b39]" />
              </span>
              <h3 className="font-display mt-4 text-2xl font-semibold">Just your email. That's it.</h3>
              <p className="mt-2 leading-relaxed text-[#17130e]/70">
                No name, no phone number, no contacts, no location, no date of birth. Your email
                address is the single piece of personal information we ever store — the minimum
                needed to run your account.
              </p>
            </div>

            <div className="rounded-2xl bg-white/70 p-7 shadow-sm ring-1 ring-[#17130e]/10">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e07b39]/10">
                <Bot className="h-5 w-5 text-[#e07b39]" />
              </span>
              <h3 className="font-display mt-4 text-2xl font-semibold">Why even that? To keep bots out.</h3>
              <p className="mt-2 leading-relaxed text-[#17130e]/70">
                A verified email is our only line of defence against bots, spam and abuse. It keeps
                Plausch fast, fair and affordable for real people — and it is never used for
                advertising, profiling or sold to anyone.
              </p>
            </div>

            <div className="rounded-2xl bg-white/70 p-7 shadow-sm ring-1 ring-[#17130e]/10">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e07b39]/10">
                <KeyRound className="h-5 w-5 text-[#e07b39]" />
              </span>
              <h3 className="font-display mt-4 text-2xl font-semibold">Your chats are sealed with your key.</h3>
              <p className="mt-2 leading-relaxed text-[#17130e]/70">
                Your chat history is stored fully encrypted. Even our own staff cannot read a single
                word without your key — and that key is generated and stored on your device,
                never on our servers. Lose the device, and the conversations stay sealed forever.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-[#17130e] p-6 text-[#faf5ec]">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#faf5ec]/60">We collect</p>
              <ul className="mt-3 space-y-2">
                <li className="flex items-center gap-2.5 font-medium">
                  <Check className="h-4 w-4 shrink-0 text-[#7bc47f]" />
                  Your email address — nothing else
                </li>
              </ul>
            </div>
            <div className="rounded-2xl bg-white/70 p-6 ring-1 ring-[#17130e]/10">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#17130e]/60">We never see</p>
              <ul className="mt-3 space-y-2 text-[#17130e]/80">
                {['Your name, contacts or location', 'Readable chat contents — encrypted with your key', 'Trackers, advertising profiles or analytics on you'].map((item) => (
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
