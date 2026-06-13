import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { Marquee } from './components/sections/Marquee'
import { ValueProps } from './components/sections/ValueProps'
import { Process } from './components/sections/Process'
import { Catalog } from './components/sections/Catalog'
import { Stats } from './components/sections/Stats'
import { Coverage } from './components/sections/Coverage'
import { Testimonials } from './components/sections/Testimonials'
import { FAQ } from './components/sections/FAQ'
import { Social } from './components/sections/Social'
import { CTA } from './components/sections/CTA'

function App() {
  return (
    <div className='min-h-screen bg-surface-cream font-sans text-ink antialiased'>
      <a
        href='#inicio'
        className='sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-surface-cream'
      >
        Saltar al contenido
      </a>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <ValueProps />
        <Process />
        <Catalog />
        <Stats />
        <Coverage />
        <Testimonials />
        <FAQ />
        <Social />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
