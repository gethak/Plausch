import { Sparkles } from 'lucide-react'

const models = [
  { flag: '🇫🇷', name: 'Mistral 8×7B', country: 'France', note: 'Fast, precise and powerful.' },
  { flag: '🇨🇳', name: 'DeepSeek Chat', country: 'China', note: 'Strong in logic and complex reasoning.' },
  { flag: '🇺🇸', name: 'ChatGPT 4o', country: 'USA', note: 'Versatile, creative and reliable.' },
  { flag: '🇺🇸', name: 'Claude 3.5', country: 'USA', note: 'Thoughtful, nuanced writing.' },
  { flag: '🇺🇸', name: 'Gemini', country: 'USA', note: 'Multimodal and deeply connected.' },
  { flag: '🇺🇸', name: 'Llama', country: 'USA', note: 'The open-weight workhorse.' },
  { flag: '🇨🇳', name: 'Qwen 2.5', country: 'China', note: 'Balanced knowledge and clarity.' },
  { flag: '🇦🇪', name: 'Falcon 180B', country: 'UAE', note: 'Advanced AI from the Middle East.' },
  { flag: '🇮🇳', name: 'Sarvam 2.0', country: 'India', note: "India's own high-performance model." },
  { flag: '🇩🇪', name: 'Luminous 2', country: 'Germany', note: 'German engineering, strong performance.' },
  { flag: '🇨🇭', name: 'Apertus', country: 'Switzerland', note: 'Fully open, Swiss precision.' },
  { flag: '🇧🇷', name: 'Latam GPT', country: 'Latin America', note: 'Optimised for Latin America & Brazil.' },
]

export default function Models() {
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
            Weltklasse KI-Modelle
          </p>
          <h2 className="font-display mt-3 text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            World-class models, <em className="font-light italic text-[#faf5ec]/60">one conversation.</em>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#faf5ec]/65">
            Choose from leading models worldwide — each with its own strengths. The future of AI
            is being written in Paris, Beijing, Bangalore, Abu Dhabi and São Paulo. Plausch puts
            all of it in your pocket.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {models.map((m) => (
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
              <p className="mt-1 text-sm text-[#faf5ec]/55">{m.note}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-[#faf5ec]/45">
          + BLOOM, OLMo, Kimi, GLM, Yi, Gemma and hundreds more — one ecosystem, zero gatekeepers.
        </p>
      </div>
    </section>
  )
}
