import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)

// register service worker for precaching (autoUpdate)
;(async () => {
  try {
    const { registerSW } = await import('virtual:pwa-register')
    registerSW({ onRegistered() {}, onRegisterError(e) { console.warn('SW registration failed:', e) } })
  } catch (err) {
    // noop: plugin not available in some environments
  }
})()
