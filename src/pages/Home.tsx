import { useEffect } from 'react'
import Nav from '../sections/Nav'
import Hero from '../sections/Hero'
import Features from '../sections/Features'
import Models from '../sections/Models'
// import Socialist from '../sections/Socialist' // temporarily removed, see Home()
import Footer from '../sections/Footer'
import { LanguageProvider } from '../i18n/LanguageContext'
import { translations, type Lang } from '../i18n/translations'

export default function Home({ lang }: { lang: Lang }) {
  useEffect(() => {
    document.documentElement.lang = lang
    document.title = translations[lang].meta.title
    const description = document.querySelector('meta[name="description"]')
    if (description) description.setAttribute('content', translations[lang].meta.description)
  }, [lang])

  return (
    <LanguageProvider lang={lang}>
      <div className="min-h-screen bg-[#faf5ec] text-[#17130e]">
        <Nav />
        <main>
          <Hero />
          <Features />
          <Models />
          {/* <Socialist /> temporarily removed — re-add along with the Nav/Footer/Hero references below */}
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}
