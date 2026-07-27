import { Routes, Route, Navigate } from 'react-router'
import Home from './pages/Home'
import { DEFAULT_LANG } from './i18n/translations'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={`/${DEFAULT_LANG}`} replace />} />
      <Route path="/de" element={<Home lang="de" />} />
      <Route path="/en" element={<Home lang="en" />} />
      <Route path="*" element={<Navigate to={`/${DEFAULT_LANG}`} replace />} />
    </Routes>
  )
}
