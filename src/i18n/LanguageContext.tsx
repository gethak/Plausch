import { createContext, useContext, useMemo, type ReactNode } from 'react'
import { translations, type Lang, type Translations } from './translations'

const LanguageContext = createContext<Lang>('de')

export function LanguageProvider({ lang, children }: { lang: Lang; children: ReactNode }) {
  return <LanguageContext.Provider value={lang}>{children}</LanguageContext.Provider>
}

export function useLang(): Lang {
  return useContext(LanguageContext)
}

export function useTranslations(): Translations {
  const lang = useLang()
  return useMemo(() => translations[lang], [lang])
}
