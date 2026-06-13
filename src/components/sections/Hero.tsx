import { Container } from '../ui/Container'
import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'
import { IconSparkle } from '../ui/Icons'

export function Hero() {
  return (
    <section id='inicio' className='relative isolate overflow-hidden'>
      <div aria-hidden='true' className='pointer-events-none absolute inset-0 -z-10'>
        <div className='absolute -top-32 left-1/2 size-[42rem] -translate-x-1/2 rounded-full bg-sage-light/60 blur-3xl' />
        <div className='absolute right-0 top-1/3 size-72 rounded-full bg-accent-light/30 blur-3xl' />
        <div className='grain absolute inset-0 opacity-50' />
      </div>

      <Container className='pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-40'>
        <div className='mx-auto max-w-3xl text-center'>
          <span className='reveal inline-block'>
            <Badge>Farmacéutica premium · Hecho en México</Badge>
          </span>

          <h1 className='reveal reveal-delay-1 mt-8 font-display text-5xl font-medium leading-[1.05] tracking-tightest text-ink sm:text-6xl md:text-7xl text-balance'>
            Medicina del más alto{' '}
            <span className='relative inline-block'>
              <span className='relative z-10 text-primary'>estándar</span>
              <span aria-hidden='true' className='absolute inset-x-0 bottom-1 -z-0 h-3 rounded-full bg-accent/40' />
            </span>
            , diseñada para quienes no improvisan.
          </h1>

          <p className='reveal reveal-delay-2 mx-auto mt-8 max-w-xl text-lg leading-relaxed text-ink-muted text-pretty'>
            Vitalis suministra medicamentos premium con trazabilidad clínica, certificación GMP y acompañamiento
            farmacéutico personalizado.
          </p>

          <div className='reveal reveal-delay-3 mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row'>
            <Button href='#contacto' variant='primary'>
              Solicitar acceso
            </Button>
            <Button href='#ciencia' variant='secondary'>
              Conoce la ciencia
            </Button>
          </div>

          <ul className='reveal reveal-delay-4 mx-auto mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs uppercase tracking-[0.2em] text-ink-soft'>
            <li className='flex items-center gap-2'>
              <IconSparkle className='size-3.5 text-accent-deep' />
              Certificado GMP
            </li>
            <li className='flex items-center gap-2'>
              <IconSparkle className='size-3.5 text-accent-deep' />
              COFEPRIS
            </li>
            <li className='flex items-center gap-2'>
              <IconSparkle className='size-3.5 text-accent-deep' />
              ISO 9001:2026
            </li>
          </ul>
        </div>
      </Container>
    </section>
  )
}
