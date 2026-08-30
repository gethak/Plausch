import { Routes, Route, Navigate } from 'react-router'
import Home from './pages/Home'
import { DEFAULT_LANG, type Lang } from './i18n/translations'

// charlaia.net is the Spanish-language domain for this site — visitors who
// land there without an explicit /de, /en or /es path should default to
// Spanish instead of the site-wide DEFAULT_LANG (German).
const HOST_DEFAULT_LANG: Record<string, Lang> = {
  'charlaia.net': 'es',
  'www.charlaia.net': 'es',
}

function defaultLangForHost(): Lang {
  if (typeof window === 'undefined') return DEFAULT_LANG
  return HOST_DEFAULT_LANG[window.location.hostname] ?? DEFAULT_LANG
}

export default function App() {
  const fallbackLang = defaultLangForHost()
  return (
    <Routes>
      <Route path="/" element={<Navigate to={`/${fallbackLang}`} replace />} />
      <Route path="/de" element={<Home lang="de" />} />
      <Route path="/en" element={<Home lang="en" />} />
      <Route path="/es" element={<Home lang="es" />} />
      <Route path="*" element={<Navigate to={`/${fallbackLang}`} replace />} />
    </Routes>
  )
}
