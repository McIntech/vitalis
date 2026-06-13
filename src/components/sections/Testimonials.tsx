import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { TESTIMONIALS } from '../../data/content'

export function Testimonials() {
  return (
    <section id='testimonios' className='bg-surface-cream py-24 sm:py-32'>
      <Container>
        <div className='mx-auto max-w-2xl text-center'>
          <Reveal>
            <p className='font-display text-sm font-semibold uppercase tracking-[0.22em] text-primary-deep'>
              Voces de farmacias reales
            </p>
          </Reveal>
          <Reveal delay={1}>
            <h2 className='mt-4 font-display text-4xl font-medium leading-tight tracking-tightest text-ink sm:text-5xl text-balance'>
              Lo que dicen quienes ya cambiaron.
            </h2>
          </Reveal>
        </div>

        <ul className='mt-16 grid gap-6 md:grid-cols-3'>
          {TESTIMONIALS.map((t, idx) => (
            <Reveal key={t.name} delay={((idx % 3) + 1) as 1 | 2 | 3} as='li' className='h-full'>
              <article className='flex h-full flex-col justify-between rounded-3xl border border-ink/8 bg-surface-paper p-8 hover-lift'>
                <div>
                  <svg viewBox='0 0 32 24' aria-hidden='true' className='size-7 text-coral-deep' fill='currentColor'>
                    <path d='M0 24V14C0 6.3 4.6 1 12 0v5C8.4 6 6 8.4 6 13h6v11H0Zm20 0V14c0-7.7 4.6-13 12-14v5c-3.6 1-6 3.4-6 8h6v11H20Z' />
                  </svg>
                  <p className='mt-5 font-display text-xl font-medium leading-snug tracking-tight text-ink text-pretty'>
                    «{t.quote}»
                  </p>
                </div>
                <footer className='mt-8 border-t border-ink/10 pt-5'>
                  <p className='font-semibold text-ink'>{t.name}</p>
                  <p className='text-sm text-ink-muted'>{t.role}</p>
                  <p className='mt-1 text-xs font-medium uppercase tracking-[0.18em] text-coral-deep'>{t.location}</p>
                </footer>
              </article>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  )
}
