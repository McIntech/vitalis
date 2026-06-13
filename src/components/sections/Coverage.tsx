import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { IconPin } from '../ui/Icons'
import { COVERAGE_HUBS } from '../../data/content'

export function Coverage() {
  return (
    <section id='cobertura' className='bg-surface-bone py-20 sm:py-28'>
      <Container>
        <div className='grid items-end gap-12 lg:grid-cols-12'>
          <div className='lg:col-span-5'>
            <Reveal>
              <p className='font-display text-sm font-semibold uppercase tracking-[0.22em] text-coral-deep'>
                Cobertura nacional
              </p>
            </Reveal>
            <Reveal delay={1}>
              <h2 className='mt-4 font-display text-4xl font-medium leading-tight tracking-tightest text-ink sm:text-5xl text-balance'>
                7 CEDIS, 32 estados, 24-48 horas.
              </h2>
            </Reveal>
            <Reveal delay={2}>
              <p className='mt-5 max-w-md text-base text-ink-muted text-pretty'>
                Operamos desde 7 centros de distribución estratégicos para alcanzar cualquier farmacia en México con
                tiempos de respuesta de clase mundial.
              </p>
            </Reveal>
            <Reveal delay={3}>
              <div className='mt-8 flex items-center gap-8'>
                <div>
                  <p className='font-display text-4xl font-medium tracking-tightest text-primary'>32</p>
                  <p className='text-xs uppercase tracking-[0.2em] text-ink-soft'>Estados cubiertos</p>
                </div>
                <div>
                  <p className='font-display text-4xl font-medium tracking-tightest text-coral-deep'>24h</p>
                  <p className='text-xs uppercase tracking-[0.2em] text-ink-soft'>Entrega promedio</p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className='lg:col-span-7'>
            <ul className='grid gap-3 sm:grid-cols-2'>
              {COVERAGE_HUBS.map((hub, idx) => (
                <Reveal key={hub.city} delay={((idx % 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6} as='li'>
                  <div className='group flex items-start gap-4 rounded-2xl border border-ink/8 bg-surface-paper p-5 hover-lift'>
                    <span className='inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-surface-cream'>
                      <IconPin className='size-5' />
                    </span>
                    <div>
                      <p className='font-display text-xl font-medium tracking-tight text-ink'>{hub.city}</p>
                      <p className='mt-0.5 text-xs font-medium uppercase tracking-[0.18em] text-coral-deep'>
                        {hub.tag}
                      </p>
                      <p className='mt-2 text-sm text-ink-muted'>{hub.zone}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}
