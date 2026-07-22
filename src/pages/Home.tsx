import Nav from '../sections/Nav'
import Hero from '../sections/Hero'
import Features from '../sections/Features'
import Models from '../sections/Models'
import Socialist from '../sections/Socialist'
import Footer from '../sections/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#faf5ec] text-[#17130e]">
      <Nav />
      <main>
        <Hero />
        <Features />
        <Models />
        <Socialist />
      </main>
      <Footer />
    </div>
  )
}
