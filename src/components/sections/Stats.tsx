import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { useCountUp } from '../../hooks/useCountUp'
import { STATS } from '../../data/content'

interface StatItemProps {
  value: number
  suffix: string
  label: string
  sub: string
}

function StatItem({ value, suffix, label, sub }: StatItemProps) {
  const decimals = Number.isInteger(value) ? 0 : 1
  const { value: current, ref } = useCountUp(value, { decimals })
  const display =
    decimals === 0
      ? Math.round(current).toLocaleString('es-MX')
      : current.toLocaleString('es-MX', { minimumFractionDigits: 1, maximumFractionDigits: 1 })

  return (
    <div className='border-t border-surface-cream/15 pt-6'>
      <span
        ref={ref}
        className='block font-display text-5xl font-medium leading-none tracking-tightest text-surface-cream sm:text-6xl'
      >
        {display}
        <span className='text-coral-light'>{suffix}</span>
      </span>
      <p className='mt-4 text-xs font-medium uppercase tracking-[0.22em] text-sage-light'>{label}</p>
      <p className='mt-1 text-sm text-sage'>{sub}</p>
    </div>
  )
}

export function Stats() {
  return (
    <section id='numeros' className='relative overflow-hidden bg-primary-deep text-surface-cream'>
      <div aria-hidden='true' className='pointer-events-none absolute inset-0 opacity-50'>
        <div className='blob absolute -left-32 top-0 size-[28rem] bg-teal/30' />
        <div className='blob blob-delay-1 absolute -right-20 bottom-0 size-[24rem] bg-coral/25' />
        <div className='blob blob-delay-2 absolute left-1/2 top-1/2 size-[20rem] -translate-x-1/2 -translate-y-1/2 bg-accent/20' />
        <div className='grain absolute inset-0 opacity-30' />
      </div>

      <Container className='relative py-24 sm:py-32'>
        <div className='max-w-2xl'>
          <Reveal>
            <p className='font-display text-sm font-semibold uppercase tracking-[0.22em] text-coral-light'>
              Vitalis en números
            </p>
          </Reveal>
          <Reveal delay={1}>
            <h2 className='mt-4 font-display text-4xl font-medium leading-tight tracking-tightest text-balance sm:text-5xl'>
              La operación detrás de cada pedido.
            </h2>
          </Reveal>
        </div>

        <dl className='mt-16 grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-3'>
          {STATS.map((s, idx) => (
            <Reveal key={s.label} delay={((idx % 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6} as='div'>
              <StatItem value={s.value} suffix={s.suffix} label={s.label} sub={s.sub} />
            </Reveal>
          ))}
        </dl>
      </Container>
    </section>
  )
}
