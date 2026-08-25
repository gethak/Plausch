import { Plus } from 'lucide-react'
import { useTranslations } from '../i18n/LanguageContext'

const icon = new URL('../../assets/icon.png', import.meta.url).href
const phoneModels = new URL('../../assets/phone-models.png', import.meta.url).href

const modelTiles = [
  { name: 'GPT-4o', src: new URL('../../assets/models/gpt4o.png', import.meta.url).href },
  { name: 'Claude', src: new URL('../../assets/models/claude.png', import.meta.url).href },
  { name: 'Gemini', src: new URL('../../assets/models/gemini.png', import.meta.url).href },
  { name: 'Mistral', src: new URL('../../assets/models/mistral.png', import.meta.url).href },
  { name: 'Llama', src: new URL('../../assets/models/llama.png', import.meta.url).href },
  { name: 'DeepSeek', src: new URL('../../assets/models/deepseek.png', import.meta.url).href },
  { name: 'Qwen', src: new URL('../../assets/models/qwen.png', import.meta.url).href },
]

export default function OneAppCard() {
  const t = useTranslations()

  return (
    <div className="relative overflow-hidden rounded-[2rem] bg-[#fdf7ef] shadow-sm ring-1 ring-[#17130e]/10 px-6 pb-8 pt-8">
      <div className="flex items-start gap-3">
        <img src={icon} alt="" className="h-12 w-12 shrink-0 object-contain" />
        <h2 className="font-display text-[27px] font-semibold leading-tight tracking-tight text-[#17130e]">
          {t.oneApp.heading1}
          <br />
          {t.oneApp.heading2}
        </h2>
      </div>
      <p className="mt-4 max-w-[95%] text-[15px] leading-relaxed text-[#17130e]/70">{t.oneApp.body}</p>

      <div className="mt-4 rounded-2xl bg-[#e07b39]/10 p-3.5">
        <p className="text-[13px] font-medium leading-relaxed text-[#17130e]/75">
          {t.hero.builtByPrefix}{' '}
          <a href="#socialist-ai" className="font-semibold text-[#e07b39] underline decoration-[#e07b39]/60 underline-offset-2">
            {t.hero.socialistAiLabel}
          </a>{' '}
          {t.hero.builtBySuffix}
        </p>
      </div>

      <div className="relative mt-6">
        <div className="grid w-[52%] grid-cols-2 gap-x-3 gap-y-4">
          {modelTiles.map((m) => (
            <div key={m.name} className="flex flex-col items-center gap-1.5">
              <span className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-[#17130e]/5">
                <img src={m.src} alt="" className="h-9 w-9 object-contain" />
              </span>
              <span className="text-[11px] font-medium text-[#17130e]/60">{m.name}</span>
            </div>
          ))}
          <div className="flex flex-col items-center gap-1.5">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-[#17130e]/5">
              <Plus className="h-5 w-5 text-[#17130e]/50" />
            </span>
            <span className="text-[11px] font-medium text-[#17130e]/60">{t.oneApp.moreLabel}</span>
          </div>
        </div>
        <img
          src={phoneModels}
          alt={t.oneApp.phoneAlt}
          loading="lazy"
          className="pointer-events-none absolute -right-3 top-1/2 w-[52%] max-w-[250px] -translate-y-1/2 select-none drop-shadow-xl"
        />
      </div>
    </div>
  )
}
