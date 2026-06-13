import { PARTNER_LOGOS } from '../../data/content'

export function Marquee() {
  const doubled = [...PARTNER_LOGOS, ...PARTNER_LOGOS]
  return (
    <section
      aria-label='Clientes que confían en Vitalis'
      className='relative overflow-hidden border-y border-ink/10 bg-surface-paper py-10'
    >
      <p className='mb-6 text-center text-xs font-medium uppercase tracking-[0.28em] text-ink-soft'>
        +850 farmacias y hospitales confían en Vitalis
      </p>
      <div className='relative'>
        <div
          aria-hidden='true'
          className='pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-surface-paper to-transparent'
        />
        <div
          aria-hidden='true'
          className='pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-surface-paper to-transparent'
        />
        <div className='marquee flex w-max gap-12'>
          {doubled.map((name, i) => (
            <div
              key={`${name}-${i}`}
              className='flex shrink-0 items-center gap-3 font-display text-2xl font-medium tracking-tight text-ink-muted'
            >
              <span className='inline-block size-1.5 rounded-full bg-coral-deep' />
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
