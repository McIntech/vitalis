import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { FAQ_ITEMS } from '../../data/content'

export function FAQ() {
  return (
    <section id='faq' className='bg-surface-bone py-20 sm:py-28'>
      <Container>
        <div className='grid gap-12 lg:grid-cols-12'>
          <div className='lg:col-span-5'>
            <Reveal>
              <p className='font-display text-sm font-semibold uppercase tracking-[0.22em] text-teal-deep'>
                Preguntas frecuentes
              </p>
            </Reveal>
            <Reveal delay={1}>
              <h2 className='mt-4 font-display text-4xl font-medium leading-tight tracking-tightest text-ink sm:text-5xl text-balance'>
                Lo que toda farmacia pregunta antes de mover su volumen.
              </h2>
            </Reveal>
            <Reveal delay={2}>
              <p className='mt-5 max-w-md text-base text-ink-muted text-pretty'>
                Si no encuentras tu respuesta, un asesor humano te llama el mismo día.
              </p>
            </Reveal>
          </div>

          <ul className='lg:col-span-7 lg:border-l lg:border-ink/10 lg:pl-12'>
            {FAQ_ITEMS.map((item, idx) => (
              <Reveal
                key={item.q}
                delay={((idx % 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6}
                as='li'
                className='border-b border-ink/10 last:border-none'
              >
                <details className='group py-6'>
                  <summary className='flex items-center justify-between gap-6'>
                    <span className='font-display text-lg font-medium tracking-tight text-ink sm:text-xl'>
                      {item.q}
                    </span>
                    <span
                      aria-hidden='true'
                      className='inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-ink/15 text-ink-muted transition-all duration-300 group-open:rotate-45 group-open:border-coral group-open:bg-coral group-open:text-surface-cream'
                    >
                      <svg width='14' height='14' viewBox='0 0 14 14' fill='none'>
                        <path d='M7 2v10M2 7h10' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' />
                      </svg>
                    </span>
                  </summary>
                  <div className='accordion-content'>
                    <div>
                      <p className='mt-4 max-w-2xl text-base leading-relaxed text-ink-muted text-pretty'>{item.a}</p>
                    </div>
                  </div>
                </details>
              </Reveal>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
