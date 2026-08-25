import { ShieldCheck } from 'lucide-react'
import { useTranslations } from '../i18n/LanguageContext'

const icon = new URL('../../assets/icon.png', import.meta.url).href

export default function PrivacyBand() {
  const t = useTranslations()

  return (
    <div className="rounded-[2rem] bg-[#17130e] px-6 py-6 text-[#faf5ec] shadow-sm">
      <div className="flex items-center gap-4">
        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#faf5ec]/10 ring-1 ring-[#faf5ec]/15">
          <img src={icon} alt="" className="h-9 w-9 rounded-lg object-contain" />
        </span>
        <div>
          <p className="font-display text-lg font-semibold leading-snug">{t.privacyBand.heading}</p>
          <p className="mt-1 text-xs leading-relaxed text-[#faf5ec]/65">{t.privacyBand.body}</p>
        </div>
      </div>
      <a
        href="#privacy"
        className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-[#faf5ec]/10 px-5 py-3 text-sm font-semibold ring-1 ring-[#faf5ec]/20 transition-colors active:bg-[#faf5ec]/20"
      >
        <ShieldCheck className="h-4 w-4" />
        {t.privacyBand.cta}
      </a>
    </div>
  )
}
