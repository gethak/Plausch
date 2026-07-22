import { Apple, ArrowDown } from 'lucide-react'

const models = [
  { flag: '🇫🇷', name: 'Mistral', country: 'France' },
  { flag: '🇨🇳', name: 'DeepSeek', country: 'China' },
  { flag: '🇺🇸', name: 'ChatGPT', country: 'USA' },
  { flag: '🇺🇸', name: 'Claude', country: 'USA' },
  { flag: '🇺🇸', name: 'Gemini', country: 'USA' },
  { flag: '🇺🇸', name: 'Llama', country: 'USA' },
  { flag: '🇨🇳', name: 'Qwen', country: 'China' },
  { flag: '🇦🇪', name: 'Falcon', country: 'UAE' },
  { flag: '🇮🇳', name: 'Sarvam', country: 'India' },
  { flag: '🇨🇭', name: 'Apertus', country: 'Switzerland' },
  { flag: '🌎', name: 'Latam-GPT', country: 'Latin America' },
  { flag: '🌍', name: 'BLOOM', country: 'Global' },
]

export default function Hero() {
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
            Ein Plausch mit der schlauesten KI — egal welcher
          </p>
          <h1 className="font-display text-balance text-6xl font-semibold leading-[0.95] tracking-tight sm:text-7xl lg:text-[6.5rem]">
            Deine KI.
            <br />
            <em className="font-light italic text-[#e07b39]">Weltweit.</em>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-[#17130e]/70">
            One app. Every world-class AI model — GPT-4o, Claude, Gemini, Mistral, DeepSeek,
            Llama, Qwen, Falcon and more. Ask one question, compare the answers, and find the
            model that truly fits you.
          </p>
          <p className="mt-4 max-w-xl text-sm font-medium text-[#17130e]/55">
            Built by <a href="#socialist-ai" className="underline decoration-[#e07b39] decoration-2 underline-offset-4 hover:text-[#17130e]">Socialist&nbsp;AI</a> — because intelligence is a commons, and it belongs to everyone.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="https://www.apple.com/us/search/plausch?src=globalnav"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-2xl bg-[#17130e] px-6 py-3.5 text-[#faf5ec] transition-transform hover:scale-[1.03] active:scale-95"
            >
              <Apple className="h-7 w-7" />
              <span className="text-left leading-tight">
                <span className="block text-[10px] uppercase tracking-wider opacity-70">Download on the</span>
                <span className="block text-lg font-semibold">App Store</span>
              </span>
            </a>
            <a
              href="#features"
              className="flex items-center gap-2 rounded-2xl border border-[#17130e]/20 bg-white/60 px-6 py-4 text-sm font-semibold transition-colors hover:bg-white"
            >
              See what it does
              <ArrowDown className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-9 flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium text-[#17130e]/50">
            <span>18+ · Productivity</span>
            <span>52.6 MB</span>
            <span>🇪🇺 Developed in Europe</span>
            <span>DSGVO-konform</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[320px] lg:max-w-[360px]">
          <div
            aria-hidden
            className="absolute inset-x-8 bottom-6 h-24 rounded-full bg-[#17130e]/20 blur-2xl"
          />
          <div className="animate-float relative" style={{ '--tilt': '0deg' } as React.CSSProperties}>
            <img
              src="/assets/phone-smart.png"
              alt="Plausch app — smart conversation about Van Gogh's Starry Night"
              className="relative w-full rounded-[2.5rem] drop-shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* model marquee */}
      <div className="relative border-y border-[#17130e]/10 bg-[#17130e] py-4">
        <div className="marquee-mask overflow-hidden">
          <div className="animate-marquee flex w-max items-center gap-10 pr-10">
            {[...models, ...models].map((m, i) => (
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
