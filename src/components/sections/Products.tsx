import { Container } from '../ui/Container'
import { PRODUCTS } from '../../data/content'

export function Products() {
  return (
    <section id='catalogo' className='bg-surface-bone py-20 sm:py-28'>
      <Container>
        <div className='flex flex-col items-start justify-between gap-6 md:flex-row md:items-end'>
          <div className='max-w-2xl'>
            <p className='font-display text-sm font-semibold uppercase tracking-[0.22em] text-primary-deep'>Catálogo</p>
            <h2 className='mt-4 font-display text-4xl font-medium leading-tight tracking-tightest text-ink sm:text-5xl text-balance'>
              Líneas terapéuticas, formuladas con criterio.
            </h2>
          </div>
          <p className='max-w-sm text-base text-ink-muted text-pretty'>
            Catálogo curado, no enciclopédico. Solo formulaciones con evidencia, disponibilidad garantizada y rotación
            inteligente.
          </p>
        </div>

        <ol className='mt-14 grid gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10 sm:grid-cols-2'>
          {PRODUCTS.map((product, index) => (
            <li
              key={product.name}
              className='group relative bg-surface-cream p-8 transition-colors duration-300 hover:bg-sage-light/50'
            >
              <div className='flex items-start justify-between gap-4'>
                <span className='font-display text-xs font-semibold uppercase tracking-[0.22em] text-accent-deep'>
                  0{index + 1} · {product.tag}
                </span>
                <span
                  className='inline-flex size-8 items-center justify-center rounded-full border border-ink/15 text-ink-muted transition-all duration-300 group-hover:border-primary group-hover:text-primary'
                  aria-hidden='true'
                >
                  <svg
                    width='14'
                    height='14'
                    viewBox='0 0 14 14'
                    fill='none'
                    className='transition-transform duration-300 group-hover:translate-x-0.5'
                  >
                    <path
                      d='M2 7h10M8 3l4 4-4 4'
                      stroke='currentColor'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </span>
              </div>
              <h3 className='mt-6 font-display text-3xl font-medium tracking-tight text-ink'>{product.name}</h3>
              <p className='mt-3 max-w-sm text-base leading-relaxed text-ink-muted text-pretty'>
                {product.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
