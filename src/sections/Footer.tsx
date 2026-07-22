import { Apple, ArrowUpRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="paper-grain bg-[#faf5ec]">
      {/* CTA band */}
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="flex flex-col items-center text-center">
          <img src="/assets/icon.png" alt="Plausch app icon" className="h-24 w-24 drop-shadow-lg" />
          <h2 className="font-display mt-8 text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
            Ready for a <em className="font-light italic text-[#e07b39]">Plausch?</em>
          </h2>
          <p className="mt-4 max-w-md text-lg text-[#17130e]/65">
            A chat with the smartest AI — no matter which one. Free to start, private by design.
          </p>
          <a
            href="https://www.apple.com/us/search/plausch?src=globalnav"
            target="_blank"
            rel="noreferrer"
            className="mt-8 flex items-center gap-3 rounded-2xl bg-[#17130e] px-7 py-4 text-[#faf5ec] transition-transform hover:scale-[1.04] active:scale-95"
          >
            <Apple className="h-8 w-8" />
            <span className="text-left leading-tight">
              <span className="block text-[10px] uppercase tracking-wider opacity-70">Download on the</span>
              <span className="block text-xl font-semibold">App Store</span>
            </span>
          </a>
          <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-medium text-[#17130e]/50">
            <span>18+ Years</span>
            <span>Productivity</span>
            <span>English</span>
            <span>52.6 MB</span>
            <span>iPhone</span>
          </div>
        </div>
      </div>

      {/* bottom bar */}
      <div className="border-t border-[#17130e]/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 sm:px-8 md:flex-row">
          <div className="flex items-center gap-3">
            <img src="/assets/icon.png" alt="" className="h-8 w-8" />
            <div className="leading-tight">
              <p className="font-display font-semibold">Plausch</p>
              <p className="text-xs text-[#17130e]/50">by Hakkim Akbarali Alavudeen</p>
            </div>
          </div>

          <p className="max-w-sm text-center text-xs leading-relaxed text-[#17130e]/50 md:text-left">
            From each model according to its weights, to each person according to their needs.
          </p>

          <div className="flex items-center gap-5 text-sm font-medium text-[#17130e]/70">
            <a href="#features" className="hover:text-[#17130e]">Features</a>
            <a href="#models" className="hover:text-[#17130e]">Models</a>
            <a href="#privacy" className="hover:text-[#17130e]">Privacy</a>
            <a
              href="https://socialist-tech.org/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-[#8f1d1d] hover:underline"
            >
              Socialist AI
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
        <div className="mx-auto max-w-6xl px-5 pb-8 sm:px-8">
          <p className="text-center text-xs text-[#17130e]/40 md:text-left">
            © 2026 Plausch · A Socialist AI project — making artificial intelligence a public good. Developed in Europe. 🇪🇺
          </p>
        </div>
      </div>
    </footer>
  )
}
