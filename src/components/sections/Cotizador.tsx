import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { Badge } from '../ui/Badge'
import { ProductCard } from '../cotizador/ProductCard'
import { CartSummary } from '../cotizador/CartSummary'
import { PRODUCTS } from '../../data/products'

export function Cotizador() {
  return (
    <section id='cotizador' className='relative overflow-hidden bg-surface-cream py-20 sm:py-28'>
      <div aria-hidden='true' className='pointer-events-none absolute inset-0 -z-10'>
        <div className='blob absolute -top-32 -left-20 size-[26rem] bg-teal/20' />
        <div className='blob blob-delay-1 absolute -top-10 right-0 size-[24rem] bg-coral/15' />
        <div className='blob blob-delay-2 absolute bottom-0 left-1/2 size-[28rem] -translate-x-1/2 bg-accent/15' />
        <div className='grain absolute inset-0 opacity-50' />
      </div>

      <Container className='relative'>
        <div className='mx-auto max-w-3xl text-center'>
          <Reveal>
            <Badge>Demo interactiva · Cotizador mayorista</Badge>
          </Reveal>
          <Reveal delay={1}>
            <h2 className='mt-6 font-display text-4xl font-medium leading-tight tracking-tightest text-ink sm:text-5xl md:text-6xl text-balance'>
              Arma tu pedido y ve tu <span className='gradient-text'>margen en vivo</span>.
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className='mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink-muted text-pretty sm:text-lg'>
              Selecciona medicamentos, ajusta cantidades, observa cómo crecen tu subtotal y tu margen estimado. Cuando
              termines, envía la cotización por WhatsApp con un solo clic.
            </p>
          </Reveal>
        </div>

        <div className='mt-16 grid gap-8 lg:grid-cols-12'>
          <div className='lg:col-span-8'>
            <ul className='grid gap-6 sm:grid-cols-2'>
              {PRODUCTS.map((product, idx) => (
                <Reveal key={product.sku} delay={((idx % 5) + 1) as 1 | 2 | 3 | 4 | 5} as='li'>
                  <ProductCard product={product} />
                </Reveal>
              ))}
            </ul>
          </div>
          <div className='lg:col-span-4'>
            <CartSummary />
          </div>
        </div>
      </Container>
    </section>
  )
}
