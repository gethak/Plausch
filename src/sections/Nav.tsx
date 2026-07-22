import { useEffect, useState } from 'react'
import { Apple, Menu, X } from 'lucide-react'

const icon = new URL('../../assets/icon.png', import.meta.url).href

const links = [
  { label: 'Features', href: '#features' },
  { label: 'Models', href: '#models' },
  { label: 'Privacy', href: '#privacy' },
  { label: 'Socialist AI', href: '#socialist-ai' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#faf5ec]/85 shadow-[0_1px_0_rgba(23,19,14,0.08)] backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="flex items-center gap-3">
          <div className="h-10 w-10 overflow-hidden rounded-full drop-shadow-sm">
            <img src={icon} alt="Plausch app icon" className="h-10 w-10 object-cover rounded-full" style={{ background: 'transparent' }} />
          </div>
          <span className="font-display text-2xl font-semibold tracking-tight">Plausch</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-[#17130e]/70 transition-colors hover:text-[#17130e]"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://www.apple.com/us/search/plausch?src=globalnav"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-2 rounded-full bg-[#17130e] px-5 py-2.5 text-sm font-semibold text-[#faf5ec] transition-transform hover:scale-[1.03] active:scale-95"
          >
            <Apple className="h-4 w-4" />
            Get the App
          </a>
        </nav>

        <button
          className="rounded-lg p-2 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-[#17130e]/10 bg-[#faf5ec]/95 px-5 py-4 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-[#17130e]/80"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://www.apple.com/us/search/plausch?src=globalnav"
              target="_blank"
              rel="noreferrer"
              className="mt-2 flex w-fit items-center gap-2 rounded-full bg-[#17130e] px-5 py-2.5 text-sm font-semibold text-[#faf5ec]"
            >
              <Apple className="h-4 w-4" />
              Get the App
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
