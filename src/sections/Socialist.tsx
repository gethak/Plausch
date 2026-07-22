import { BookOpen, Globe2, KeyRound, Users, ArrowUpRight } from 'lucide-react'

const principles = [
  {
    n: '01',
    icon: <BookOpen className="h-5 w-5" />,
    title: 'Open weights, open books',
    body: 'If a model shapes public life, the public should be able to read it. We champion models that publish their weights, training methods and limitations.',
  },
  {
    n: '02',
    icon: <KeyRound className="h-5 w-5" />,
    title: 'No gatekeepers',
    body: "Access to intelligence should never depend on your income, your passport or your postcode. Free tiers aren't charity — access is a right.",
  },
  {
    n: '03',
    icon: <Globe2 className="h-5 w-5" />,
    title: 'Global by design',
    body: 'No single nation or company should own the future. We spotlight open models from every continent, in every language, for every community.',
  },
  {
    n: '04',
    icon: <Users className="h-5 w-5" />,
    title: 'Governed by community',
    body: 'The direction of AI should be decided by the many, not the few — through open research, public debate and democratic oversight.',
  },
]

const stats = [
  { value: '40+', label: 'open-source models championed' },
  { value: '30+', label: 'countries represented' },
  { value: '100%', label: 'free to use, study & share' },
  { value: '$0', label: 'barrier to getting started' },
]

export default function Socialist() {
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
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#fdf3e3]/70">
            A Socialist AI project — socialist-tech.org
          </p>
          <h2 className="font-display mt-4 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
            Intelligence is a commons — <em className="font-light italic text-[#f5b73f]">it belongs to everyone.</em>
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#fdf3e3]/75">
            Plausch is built on a simple conviction: the most powerful technology in history
            should stay in the hands of all of us. That is why one app brings together open and
            leading models from every corner of the world — community owned in spirit, open by
            default, for everyone.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {principles.map((p) => (
            <div
              key={p.n}
              className="rounded-2xl border border-[#fdf3e3]/15 bg-[#fdf3e3]/[0.05] p-7 backdrop-blur-sm transition-colors hover:bg-[#fdf3e3]/[0.09]"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#fdf3e3]/10 text-[#f5b73f]">
                  {p.icon}
                </span>
                <span className="font-display text-3xl font-light text-[#fdf3e3]/30">{p.n}</span>
              </div>
              <h3 className="font-display mt-4 text-2xl font-semibold">{p.title}</h3>
              <p className="mt-2 leading-relaxed text-[#fdf3e3]/70">{p.body}</p>
            </div>
          ))}
        </div>

        <blockquote className="mx-auto mt-16 max-w-3xl text-center">
          <p className="font-display text-balance text-2xl font-medium leading-snug sm:text-3xl">
            “The means of prediction belong in the hands of the{' '}
            <em className="italic text-[#f5b73f]">many</em> — not locked in the data centers of
            the few.”
          </p>
          <cite className="mt-4 block text-sm font-semibold uppercase tracking-[0.16em] text-[#fdf3e3]/60 not-italic">
            — The Socialist AI Manifesto, Article One
          </cite>
        </blockquote>

        <div className="mt-16 grid grid-cols-2 gap-6 border-t border-[#fdf3e3]/15 pt-12 sm:grid-cols-4">
          {stats.map((s) => (
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
            Join the movement at socialist-tech.org
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <p className="mt-4 text-sm text-[#fdf3e3]/55">
            The revolution is open source. One email a month — zero paywalls, forever.
          </p>
        </div>
      </div>
    </section>
  )
}
