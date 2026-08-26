import { useState } from 'react'
import { ChevronDown, Heart, Lock, Plus, ShieldCheck } from 'lucide-react'
import { useTranslations } from '../i18n/LanguageContext'

const phoneModels = new URL('../../assets/phone-models.png', import.meta.url).href
const flag = new URL('../../assets/flag.png', import.meta.url).href

const modelTiles = [
  { name: 'GPT-4o', src: new URL('../../assets/models/gpt4o.png', import.meta.url).href },
  { name: 'Claude 3', src: new URL('../../assets/models/claude.png', import.meta.url).href },
  { name: 'Gemini', src: new URL('../../assets/models/gemini.png', import.meta.url).href },
  { name: 'Mistral', src: new URL('../../assets/models/mistral.png', import.meta.url).href },
  { name: 'Llama', src: new URL('../../assets/models/llama.png', import.meta.url).href },
  { name: 'DeepSeek', src: new URL('../../assets/models/deepseek.png', import.meta.url).href },
  { name: 'Qwen', src: new URL('../../assets/models/qwen.png', import.meta.url).href },
]

export default function MobileValues() {
  const t = useTranslations()
  const [open, setOpen] = useState(0)

  const [privacyLead, privacyRest] = t.privacyBand.heading.split(/\.\s+/)

  const items = [
    {
      title: (
        <>
          {t.oneApp.heading1} <span className="text-[#e07b39]">{t.oneApp.heading2}</span>
        </>
      ),
      content: (
        <div className="relative">
          <img
            src={phoneModels}
            alt={t.oneApp.phoneAlt}
            loading="lazy"
            className="pointer-events-none absolute -right-1 top-0 w-[52%] max-w-[230px] select-none drop-shadow-xl"
          />
          <p className="max-w-[46%] text-[13px] leading-relaxed text-[#17130e]/70">{t.oneApp.body}</p>
          <div className="mt-4 grid max-w-[48%] grid-cols-3 gap-2">
            {modelTiles.map((m) => (
              <div key={m.name} className="flex flex-col items-center gap-1">
                <span className="flex h-11 w-full items-center justify-center overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-[#17130e]/5">
                  <img src={m.src} alt="" className="h-7 w-7 object-contain" />
                </span>
                <span className="text-[9.5px] font-medium text-[#17130e]/60">{m.name}</span>
              </div>
            ))}
            <div className="col-span-2">
              <span className="flex h-11 w-full items-center justify-center gap-1.5 rounded-xl bg-white shadow-sm ring-1 ring-[#17130e]/5">
                <Plus className="h-3.5 w-3.5 text-[#17130e]/50" />
                <span className="text-[11px] font-medium text-[#17130e]/70">{t.oneApp.moreLabel}</span>
              </span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: (
        <>
          {privacyLead}. <span className="text-[#e07b39]">{privacyRest}</span>
        </>
      ),
      content: (
        <div>
          <div className="flex items-start gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#17130e]">
              <Lock className="h-4 w-4 text-[#faf5ec]" />
            </span>
            <p className="text-[13px] leading-relaxed text-[#17130e]/70">{t.privacyBand.body}</p>
          </div>
          <a
            href="#privacy"
            className="mt-4 flex w-full items-center justify-center gap-1.5 rounded-full bg-[#17130e] px-4 py-2.5 text-xs font-semibold text-[#faf5ec] transition-transform active:scale-95"
          >
            <ShieldCheck className="h-3.5 w-3.5" />
            {t.privacyBand.cta}
          </a>
        </div>
      ),
    },
    {
      title: (
        <>
          {t.palestine.subPrefix}
          <em className="font-medium italic text-[#e07b39]">{t.palestine.subEmphasis}</em>
          {t.palestine.subSuffix}
        </>
      ),
      content: (
        <div className="relative min-h-[130px]">
          <img
            src={flag}
            alt={t.palestine.flagAlt}
            loading="lazy"
            className="pointer-events-none absolute -right-5 -top-3 w-[46%] select-none"
          />
          <p className="max-w-[55%] text-[13px] leading-relaxed text-[#17130e]/70">{t.palestine.mobileBody}</p>
          <a
            href="https://www.pcrf.net/"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-[#17130e] shadow-sm ring-1 ring-[#17130e]/5 transition-transform active:scale-95"
          >
            <Heart className="h-4 w-4 text-[#e07b39]" strokeWidth={2} />
            {t.palestine.mobileCta}
          </a>
        </div>
      ),
    },
  ]

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="overflow-hidden rounded-3xl bg-[#fdf7ef] shadow-sm ring-1 ring-[#17130e]/10">
          <button
            type="button"
            onClick={() => setOpen(open === i ? -1 : i)}
            aria-expanded={open === i}
            className="flex w-full items-center gap-3 px-5 py-4 text-left"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#e07b39] text-sm font-bold text-white">
              {i + 1}
            </span>
            <span className="font-display flex-1 text-[17px] font-semibold leading-snug text-[#17130e]">{item.title}</span>
            <ChevronDown
              className={`h-4 w-4 shrink-0 text-[#17130e]/50 transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`}
            />
          </button>
          {open === i && <div className="px-5 pb-5">{item.content}</div>}
        </div>
      ))}
    </div>
  )
}
