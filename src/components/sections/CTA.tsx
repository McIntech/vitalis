import { Container } from '../ui/Container'
import { Button } from '../ui/Button'
import { Reveal } from '../ui/Reveal'

export function CTA() {
  return (
    <section id='contacto' className='relative overflow-hidden py-20 sm:py-28'>
      <Container>
        <div className='relative overflow-hidden rounded-[2.5rem] bg-ink px-8 py-16 text-surface-cream shadow-glow sm:px-16 sm:py-24'>
          <div aria-hidden='true' className='pointer-events-none absolute inset-0'>
            <div className='blob absolute -right-32 -top-32 size-[28rem] bg-coral/40' />
            <div className='blob blob-delay-1 absolute -bottom-40 -left-20 size-[26rem] bg-teal/30' />
            <div className='blob blob-delay-2 absolute right-1/3 bottom-0 size-[22rem] bg-accent/25' />
            <div className='grain absolute inset-0 opacity-50' />
          </div>

          <div className='relative mx-auto max-w-3xl text-center'>
            <Reveal>
              <p className='font-display text-sm font-semibold uppercase tracking-[0.22em] text-coral-light'>
                Lista de precios mayorista
              </p>
            </Reveal>
            <Reveal delay={1}>
              <h2 className='mt-5 font-display text-4xl font-medium leading-tight tracking-tightest sm:text-5xl md:text-6xl text-balance'>
                Empieza a comprar con el <span className='gradient-text'>mejor margen</span> del mercado.
              </h2>
            </Reveal>
            <Reveal delay={2}>
              <p className='mt-6 text-base leading-relaxed text-sage-light text-pretty'>
                Solicita tu lista personalizada en menos de 5 minutos. Sin compromiso, sin formularios eternos. Un
                asesor te llama hoy mismo.
              </p>
            </Reveal>
            <Reveal delay={3}>
              <div className='mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row'>
                <Button href='mailto:ventas@vitalis.mx' variant='primary'>
                  Solicita tu lista
                </Button>
                <Button href='https://wa.me/528100000000' variant='ghost' className='text-surface-cream'>
                  Hablar por WhatsApp
                </Button>
              </div>
            </Reveal>
            <Reveal delay={4}>
              <p className='mt-8 text-xs font-medium uppercase tracking-[0.22em] text-sage'>
                Sin pedido mínimo el primer mes · Crédito a 30 días
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}
