import { Container } from '../ui/Container'
import { IconLeaf, IconMolecule, IconShield } from '../ui/Icons'
import { VALUE_PROPS } from '../../data/content'

const ICONS = {
  shield: IconShield,
  molecule: IconMolecule,
  leaf: IconLeaf,
} as const

type IconKey = keyof typeof ICONS

export function ValueProps() {
  return (
    <section id='producto' className='bg-surface-cream py-20 sm:py-28'>
      <Container>
        <div className='max-w-2xl'>
          <p className='font-display text-sm font-semibold uppercase tracking-[0.22em] text-primary-deep'>
            Promesa Vitalis
          </p>
          <h2 className='mt-4 font-display text-4xl font-medium leading-tight tracking-tightest text-ink sm:text-5xl text-balance'>
            Tres principios que no negociamos.
          </h2>
        </div>

        <ul className='mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {VALUE_PROPS.map(prop => {
            const Icon = ICONS[prop.icon as IconKey]
            return (
              <li
                key={prop.title}
                className='group relative flex h-full flex-col rounded-3xl border border-ink/8 bg-surface-bone/40 p-8 hover-lift'
              >
                <span className='inline-flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-surface-cream'>
                  <Icon className='size-6' />
                </span>
                <h3 className='mt-6 font-display text-2xl font-medium tracking-tight text-ink'>{prop.title}</h3>
                <p className='mt-3 text-base leading-relaxed text-ink-muted text-pretty'>{prop.body}</p>
              </li>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}
