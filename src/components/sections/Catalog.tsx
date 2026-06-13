import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { CATALOG } from '../../data/content'

const COLOR_STYLES = {
  primary: {
    bg: 'bg-primary/8 hover:bg-primary',
    border: 'border-primary/15',
    tag: 'text-primary-deep',
    title: 'group-hover:text-surface-cream',
    body: 'group-hover:text-sage-light',
  },
  teal: {
    bg: 'bg-teal/8 hover:bg-teal',
    border: 'border-teal/15',
    tag: 'text-teal-deep',
    title: 'group-hover:text-surface-cream',
    body: 'group-hover:text-teal-light',
  },
  coral: {
    bg: 'bg-coral/8 hover:bg-coral',
    border: 'border-coral/15',
    tag: 'text-coral-deep',
    title: 'group-hover:text-surface-cream',
    body: 'group-hover:text-coral-light',
  },
  violet: {
    bg: 'bg-violet/8 hover:bg-violet',
    border: 'border-violet/15',
    tag: 'text-violet',
    title: 'group-hover:text-surface-cream',
    body: 'group-hover:text-violet-light',
  },
  accent: {
    bg: 'bg-accent/15 hover:bg-accent-deep',
    border: 'border-accent/20',
    tag: 'text-accent-deep',
    title: 'group-hover:text-surface-cream',
    body: 'group-hover:text-accent-light',
  },
} as const

type ColorKey = keyof typeof COLOR_STYLES

export function Catalog() {
  return (
    <section id='catalogo' className='bg-surface-cream py-20 sm:py-28'>
      <Container>
        <div className='flex flex-col items-start justify-between gap-6 md:flex-row md:items-end'>
          <div className='max-w-2xl'>
            <Reveal>
              <p className='font-display text-sm font-semibold uppercase tracking-[0.22em] text-primary-deep'>
                Catálogo mayorista
              </p>
            </Reveal>
            <Reveal delay={1}>
              <h2 className='mt-4 font-display text-4xl font-medium leading-tight tracking-tightest text-ink sm:text-5xl text-balance'>
                +12,000 SKUs, organizados como tú piensas.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={2}>
            <p className='max-w-sm text-base text-ink-muted text-pretty'>
              Patente, genéricos intercambiables, controlados, especializados y OTC. Disponibilidad en línea, precios
              netos, sin sorpresas en factura.
            </p>
          </Reveal>
        </div>

        <ul className='mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
          {CATALOG.map((item, idx) => {
            const style = COLOR_STYLES[item.color as ColorKey]
            return (
              <Reveal key={item.name} delay={((idx % 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6} as='li'>
                <article
                  className={`group relative h-full overflow-hidden rounded-3xl border ${style.border} ${style.bg} p-8 transition-all duration-500 ease-out hover-lift`}
                >
                  <div className='flex items-start justify-between gap-4'>
                    <span
                      className={`font-display text-xs font-semibold uppercase tracking-[0.22em] ${style.tag} transition-colors duration-500 group-hover:text-surface-cream`}
                    >
                      0{idx + 1} · {item.tag}
                    </span>
                    <span
                      aria-hidden='true'
                      className='inline-flex size-9 items-center justify-center rounded-full border border-ink/15 text-ink-muted transition-all duration-500 group-hover:border-surface-cream group-hover:text-surface-cream'
                    >
                      <svg
                        width='14'
                        height='14'
                        viewBox='0 0 14 14'
                        fill='none'
                        className='transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:rotate-[-12deg]'
                      >
                        <path
                          d='M3 11 11 3M5 3h6v6'
                          stroke='currentColor'
                          strokeWidth='1.5'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </span>
                  </div>
                  <h3
                    className={`mt-6 font-display text-3xl font-medium tracking-tight text-ink transition-colors duration-500 ${style.title}`}
                  >
                    {item.name}
                  </h3>
                  <p
                    className={`mt-3 text-base leading-relaxed text-ink-muted text-pretty transition-colors duration-500 ${style.body}`}
                  >
                    {item.description}
                  </p>
                </article>
              </Reveal>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}
