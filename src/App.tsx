import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { ValueProps } from './components/sections/ValueProps'
import { Products } from './components/sections/Products'
import { Science } from './components/sections/Science'
import { Testimonials } from './components/sections/Testimonials'
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
        <ValueProps />
        <Products />
        <Science />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
