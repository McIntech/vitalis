import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { PROCESS_STEPS } from '../../data/content'

export function Process() {
  return (
    <section id='proceso' className='relative overflow-hidden bg-surface-bone py-20 sm:py-28'>
      <div
        aria-hidden='true'
        className='pointer-events-none absolute right-[-10%] top-1/2 -translate-y-1/2 text-teal/15 lg:block hidden'
      >
        <svg width='380' height='380' viewBox='0 0 100 100' className='rotate-slow'>
          <circle cx='50' cy='50' r='40' fill='none' stroke='currentColor' strokeWidth='0.5' strokeDasharray='2 3' />
          <circle cx='50' cy='50' r='30' fill='none' stroke='currentColor' strokeWidth='0.5' strokeDasharray='1 4' />
        </svg>
      </div>

      <Container className='relative'>
        <div className='max-w-2xl'>
          <Reveal>
            <p className='font-display text-sm font-semibold uppercase tracking-[0.22em] text-teal-deep'>
              Cómo funciona
            </p>
          </Reveal>
          <Reveal delay={1}>
            <h2 className='mt-4 font-display text-4xl font-medium leading-tight tracking-tightest text-ink sm:text-5xl text-balance'>
              Cuatro pasos, cero papeleo, mismo día.
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className='mt-5 max-w-xl text-base text-ink-muted text-pretty'>
              Diseñamos el proceso para que tu farmacia esté operando con Vitalis en menos de 24 horas desde el primer
              contacto.
            </p>
          </Reveal>
        </div>

        <ol className='relative mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
          <div
            aria-hidden='true'
            className='absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-teal/40 to-transparent lg:block'
          />
          {PROCESS_STEPS.map((step, idx) => (
            <Reveal key={step.step} delay={((idx % 4) + 1) as 1 | 2 | 3 | 4} as='li' className='relative'>
              <div className='relative'>
                <div className='relative z-10 flex size-16 items-center justify-center rounded-full bg-surface-paper text-2xl font-display font-semibold text-teal-deep ring-1 ring-teal/30 shadow-soft'>
                  <span>{step.step}</span>
                </div>
                <span
                  aria-hidden='true'
                  className='absolute left-8 top-8 -z-0 size-16 rounded-full bg-teal/20 blur-xl'
                />
              </div>
              <h3 className='mt-6 font-display text-2xl font-medium tracking-tight text-ink'>{step.title}</h3>
              <p className='mt-3 text-base leading-relaxed text-ink-muted text-pretty'>{step.body}</p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  )
}
