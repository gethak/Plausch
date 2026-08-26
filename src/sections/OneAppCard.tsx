import { Plus } from 'lucide-react'
import { useTranslations } from '../i18n/LanguageContext'

const phoneModels = new URL('../../assets/phone-models.png', import.meta.url).href

const modelTiles = [
  { name: 'GPT-4o', src: new URL('../../assets/models/gpt4o.png', import.meta.url).href },
  { name: 'Claude 3', src: new URL('../../assets/models/claude.png', import.meta.url).href },
  { name: 'Gemini', src: new URL('../../assets/models/gemini.png', import.meta.url).href },
  { name: 'Mistral', src: new URL('../../assets/models/mistral.png', import.meta.url).href },
  { name: 'Llama', src: new URL('../../assets/models/llama.png', import.meta.url).href },
  { name: 'DeepSeek', src: new URL('../../assets/models/deepseek.png', import.meta.url).href },
  { name: 'Qwen', src: new URL('../../assets/models/qwen.png', import.meta.url).href },
]

export default function OneAppCard() {
  const t = useTranslations()

  return (
    <div className="relative overflow-hidden rounded-[2rem] bg-[#fdf7ef] px-6 pb-7 pt-8 shadow-sm ring-1 ring-[#17130e]/10">
      <img
        src={phoneModels}
        alt={t.oneApp.phoneAlt}
        loading="lazy"
        className="pointer-events-none absolute -right-2 top-8 w-[54%] max-w-[250px] select-none drop-shadow-xl"
      />
      <div className="relative max-w-[48%]">
        <h2 className="font-display text-[26px] font-semibold leading-tight tracking-tight text-[#17130e]">
          {t.oneApp.heading1}
          <br />
          {t.oneApp.heading2}
        </h2>
        <p className="mt-3 text-[13px] leading-relaxed text-[#17130e]/70">{t.oneApp.body}</p>
        <div className="mt-4 grid grid-cols-3 gap-2">
          {modelTiles.map((m) => (
            <div key={m.name} className="flex flex-col items-center gap-1">
              <span className="flex h-11 w-full items-center justify-center overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-[#17130e]/5">
                <img src={m.src} alt="" className="h-7 w-7 object-contain" />
              </span>
              <span className="text-[9.5px] font-medium text-[#17130e]/60">{m.name}</span>
            </div>
          ))}
          <div className="col-span-2 flex flex-col gap-1">
            <span className="flex h-11 w-full items-center justify-center gap-1.5 rounded-xl bg-white shadow-sm ring-1 ring-[#17130e]/5">
              <Plus className="h-3.5 w-3.5 text-[#17130e]/50" />
              <span className="text-[11px] font-medium text-[#17130e]/70">{t.oneApp.moreLabel}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
