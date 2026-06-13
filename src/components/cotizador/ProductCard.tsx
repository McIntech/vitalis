import { useState } from 'react'
import type { Product, ProductColor } from '../../data/products'
import { useCart } from '../../hooks/useCart'
import { QuantityStepper } from './QuantityStepper'
import { ProductIcon } from './ProductIcon'

const COLOR_STYLES: Record<ProductColor, { halo: string; tint: string; chip: string; ring: string }> = {
  primary: {
    halo: 'from-primary/30 to-primary/0',
    tint: 'text-primary',
    chip: 'bg-primary/10 text-primary-deep',
    ring: 'ring-primary/20',
  },
  teal: {
    halo: 'from-teal/35 to-teal/0',
    tint: 'text-teal-deep',
    chip: 'bg-teal/12 text-teal-deep',
    ring: 'ring-teal/25',
  },
  coral: {
    halo: 'from-coral/35 to-coral/0',
    tint: 'text-coral-deep',
    chip: 'bg-coral/12 text-coral-deep',
    ring: 'ring-coral/25',
  },
  violet: {
    halo: 'from-violet/35 to-violet/0',
    tint: 'text-violet',
    chip: 'bg-violet/10 text-violet',
    ring: 'ring-violet/25',
  },
  accent: {
    halo: 'from-accent/40 to-accent/0',
    tint: 'text-accent-deep',
    chip: 'bg-accent/15 text-accent-deep',
    ring: 'ring-accent/30',
  },
}

const peso = (n: number): string =>
  new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
    maximumFractionDigits: 2,
  }).format(n)

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { lines, add, setQty } = useCart()
  const qty = lines[product.sku] ?? 0
  const inCart = qty > 0
  const styles = COLOR_STYLES[product.color]
  const marginPct = Math.round(((product.retailPrice - product.wholesalePrice) / product.retailPrice) * 100)
  const [draftQty, setDraftQty] = useState<number>(product.minQty)
  const [justAdded, setJustAdded] = useState<boolean>(false)

  const handleAdd = () => {
    add(product.sku, draftQty)
    setJustAdded(true)
    window.setTimeout(() => setJustAdded(false), 1100)
  }

  return (
    <article
      className={`group relative overflow-hidden rounded-3xl border border-ink/10 bg-surface-paper p-6 transition-all duration-500 hover-lift ${
        justAdded ? 'ring-2 ring-coral/60 shadow-coral' : ''
      }`}
    >
      <div
        aria-hidden='true'
        className={`pointer-events-none absolute -top-16 -right-10 size-44 rounded-full bg-gradient-radial blur-2xl bg-gradient-to-br ${styles.halo}`}
      />

      <header className='relative flex items-start justify-between gap-4'>
        <span
          className={`inline-flex size-14 items-center justify-center rounded-2xl ring-1 ${styles.ring} ${styles.tint} bg-surface-cream`}
        >
          <ProductIcon kind={product.icon} className='size-9' />
        </span>
        <div className='flex flex-col items-end gap-2'>
          <span
            className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] ${styles.chip}`}
          >
            <span className='inline-block size-1.5 rounded-full bg-current' />
            {product.stock === 'in' ? 'Disponible' : 'Inventario limitado'}
          </span>
          <span className='font-mono text-[10px] uppercase tracking-[0.2em] text-ink-soft'>SKU · {product.sku}</span>
        </div>
      </header>

      <div className='relative mt-5'>
        <p className={`font-display text-2xl font-medium tracking-tight text-ink`}>{product.name}</p>
        <p className={`mt-1 text-sm font-medium ${styles.tint}`}>{product.brand}</p>
        <p className='mt-3 text-xs font-medium uppercase tracking-[0.18em] text-ink-soft'>
          {product.category} · {product.presentation}
        </p>
        <p className='mt-3 text-sm leading-relaxed text-ink-muted text-pretty'>{product.description}</p>
      </div>

      <div className='relative mt-5 grid grid-cols-3 gap-2 rounded-2xl border border-ink/8 bg-surface-cream p-4'>
        <div>
          <p className='text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-soft'>Mayoreo</p>
          <p className='mt-1 font-display text-xl font-semibold tabular-nums text-ink'>
            {peso(product.wholesalePrice)}
          </p>
        </div>
        <div>
          <p className='text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-soft'>PVP sugerido</p>
          <p className='mt-1 font-display text-xl font-medium tabular-nums text-ink-muted line-through'>
            {peso(product.retailPrice)}
          </p>
        </div>
        <div>
          <p className='text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-soft'>Margen</p>
          <p className='mt-1 font-display text-xl font-semibold tabular-nums text-coral-deep'>{marginPct}%</p>
        </div>
      </div>

      <p className='relative mt-3 text-[11px] font-medium uppercase tracking-[0.18em] text-ink-soft'>
        Pedido mínimo {product.minQty} cajas · {product.stockLabel}
      </p>

      <div className='relative mt-5 flex flex-wrap items-center gap-3'>
        {inCart ? (
          <>
            <QuantityStepper
              value={qty}
              min={0}
              onChange={n => setQty(product.sku, n)}
              ariaLabel={`Cantidad de ${product.name}`}
            />
            <span className={`text-sm font-medium ${styles.tint}`}>En carrito</span>
            <button
              type='button'
              onClick={() => setQty(product.sku, 0)}
              className='ml-auto text-xs font-medium uppercase tracking-[0.18em] text-ink-soft transition-colors hover:text-coral-deep'
            >
              Quitar
            </button>
          </>
        ) : (
          <>
            <QuantityStepper
              value={draftQty}
              min={1}
              onChange={setDraftQty}
              size='sm'
              ariaLabel={`Cantidad de ${product.name}`}
            />
            <button
              type='button'
              onClick={handleAdd}
              className='ml-auto inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-surface-cream transition-all duration-300 hover:bg-primary hover:shadow-glow'
            >
              <svg width='14' height='14' viewBox='0 0 14 14' fill='none'>
                <path d='M7 3v8M3 7h8' stroke='currentColor' strokeWidth='1.6' strokeLinecap='round' />
              </svg>
              Agregar
            </button>
          </>
        )}
      </div>

      {justAdded && (
        <div
          aria-hidden='true'
          className='pointer-events-none absolute right-6 top-6 rounded-full bg-coral px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-surface-cream shadow-coral tick'
        >
          ✓ Agregado
        </div>
      )}
    </article>
  )
}
