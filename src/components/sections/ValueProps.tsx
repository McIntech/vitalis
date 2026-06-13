import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { IconChart, IconCredit, IconPackage, IconTruck } from '../ui/Icons'
import { VALUE_PROPS } from '../../data/content'

const ICONS = {
  chart: IconChart,
  package: IconPackage,
  truck: IconTruck,
  credit: IconCredit,
} as const

const ACCENT_RING = {
  coral: 'bg-coral/15 text-coral-deep group-hover:bg-coral group-hover:text-surface-cream',
  teal: 'bg-teal/15 text-teal-deep group-hover:bg-teal group-hover:text-surface-cream',
  primary: 'bg-primary/12 text-primary group-hover:bg-primary group-hover:text-surface-cream',
  accent: 'bg-accent/20 text-accent-deep group-hover:bg-accent-deep group-hover:text-surface-cream',
} as const

type IconKey = keyof typeof ICONS
type AccentKey = keyof typeof ACCENT_RING

export function ValueProps() {
  return (
    <section id='porque' className='bg-surface-cream py-20 sm:py-28'>
      <Container>
        <div className='max-w-2xl'>
          <Reveal>
            <p className='font-display text-sm font-semibold uppercase tracking-[0.22em] text-primary-deep'>
              Por qué Vitalis
            </p>
          </Reveal>
          <Reveal delay={1}>
            <h2 className='mt-4 font-display text-4xl font-medium leading-tight tracking-tightest text-ink sm:text-5xl text-balance'>
              Cuatro razones por las que cambias de distribuidor.
            </h2>
          </Reveal>
        </div>

        <ul className='mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
          {VALUE_PROPS.map((prop, idx) => {
            const Icon = ICONS[prop.icon as IconKey]
            const accent = ACCENT_RING[prop.accent as AccentKey]
            return (
              <Reveal key={prop.title} delay={(idx + 1) as 1 | 2 | 3 | 4} as='li'>
                <div className='group relative flex h-full flex-col rounded-3xl border border-ink/8 bg-surface-paper p-7 hover-lift'>
                  <span
                    className={`inline-flex size-12 items-center justify-center rounded-2xl transition-all duration-300 ${accent}`}
                  >
                    <Icon className='size-6' />
                  </span>
                  <h3 className='mt-6 font-display text-2xl font-medium tracking-tight text-ink'>{prop.title}</h3>
                  <p className='mt-3 text-base leading-relaxed text-ink-muted text-pretty'>{prop.body}</p>
                </div>
              </Reveal>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}
