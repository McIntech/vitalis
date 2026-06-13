import { Container } from '../ui/Container'
import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'
import { Reveal } from '../ui/Reveal'
import { IconPill, IconPlus, IconSparkle } from '../ui/Icons'

export function Hero() {
  return (
    <section id='inicio' className='relative isolate overflow-hidden pt-12 pb-24 sm:pt-20 sm:pb-32 md:pt-28 md:pb-40'>
      <div aria-hidden='true' className='pointer-events-none absolute inset-0 -z-10 gradient-mesh'>
        <div className='blob absolute -top-32 -left-20 size-[28rem] bg-teal/60' />
        <div className='blob blob-delay-1 absolute -top-10 right-0 size-[26rem] bg-coral/40' />
        <div className='blob blob-delay-2 absolute bottom-0 left-1/2 size-[30rem] -translate-x-1/2 bg-accent/40' />
        <div className='grain absolute inset-0 opacity-60' />
      </div>

      <div
        aria-hidden='true'
        className='pointer-events-none absolute left-[8%] top-[24%] hidden text-primary/40 md:block'
      >
        <div className='floaty'>
          <IconPill className='size-12' />
        </div>
      </div>
      <div
        aria-hidden='true'
        className='pointer-events-none absolute right-[10%] top-[18%] hidden text-coral/60 md:block'
      >
        <div className='floaty floaty-delay-1'>
          <IconPlus className='size-10' />
        </div>
      </div>
      <div
        aria-hidden='true'
        className='pointer-events-none absolute left-[14%] bottom-[18%] hidden text-teal/60 lg:block'
      >
        <div className='floaty floaty-delay-2'>
          <IconSparkle className='size-8' />
        </div>
      </div>

      <Container className='relative'>
        <div className='mx-auto max-w-4xl text-center'>
          <Reveal>
            <Badge>Distribuidora mayorista · Certificada COFEPRIS</Badge>
          </Reveal>

          <Reveal delay={1}>
            <h1 className='mt-8 font-display text-5xl font-medium leading-[1.02] tracking-tightest text-ink sm:text-6xl md:text-7xl lg:text-[88px] text-balance'>
              Surte tu farmacia con el{' '}
              <span className='relative inline-block'>
                <span className='gradient-text relative z-10'>mejor margen</span>
                <span
                  aria-hidden='true'
                  className='absolute inset-x-0 bottom-2 -z-0 h-3 rounded-full bg-coral-light/70'
                />
              </span>{' '}
              del mercado.
            </h1>
          </Reveal>

          <Reveal delay={2}>
            <p className='mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-ink-muted text-pretty'>
              Vitalis es la distribuidora mayorista de medicamentos más ágil de México. Catálogo profundo, logística
              confiable y precios netos que cuidan tu negocio.
            </p>
          </Reveal>

          <Reveal delay={3}>
            <div className='mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row'>
              <Button href='#contacto' variant='primary'>
                Solicita tu lista de precios
              </Button>
              <Button href='#catalogo' variant='secondary'>
                Conoce el catálogo
              </Button>
            </div>
          </Reveal>

          <Reveal delay={4}>
            <ul className='mx-auto mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs font-medium uppercase tracking-[0.2em] text-ink-soft'>
              <li className='flex items-center gap-2'>
                <span className='inline-block size-2 rounded-full bg-primary pulse-ring' />
                +850 farmacias activas
              </li>
              <li className='flex items-center gap-2'>
                <span className='inline-block size-2 rounded-full bg-teal-deep' />
                32 estados
              </li>
              <li className='flex items-center gap-2'>
                <span className='inline-block size-2 rounded-full bg-coral-deep' />
                Entrega 24-48h
              </li>
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
