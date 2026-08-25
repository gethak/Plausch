import { ShieldCheck } from 'lucide-react'
import { useTranslations } from '../i18n/LanguageContext'

const icon = new URL('../../assets/icon.png', import.meta.url).href

export default function PrivacyBand() {
  const t = useTranslations()

  return (
    <div className="rounded-3xl bg-[#17130e] px-5 py-4 text-[#faf5ec] shadow-sm">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#faf5ec]/10 ring-1 ring-[#faf5ec]/15">
          <img src={icon} alt="" className="h-7 w-7 rounded-md object-contain" />
        </span>
        <div>
          <p className="font-display text-[15px] font-semibold leading-snug">{t.privacyBand.heading}</p>
          <p className="mt-0.5 text-[11px] leading-relaxed text-[#faf5ec]/65">{t.privacyBand.body}</p>
        </div>
      </div>
      <a
        href="#privacy"
        className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-full bg-[#faf5ec]/10 px-4 py-2 text-xs font-semibold ring-1 ring-[#faf5ec]/20 transition-colors active:bg-[#faf5ec]/20"
      >
        <ShieldCheck className="h-3.5 w-3.5" />
        {t.privacyBand.cta}
      </a>
    </div>
  )
}
