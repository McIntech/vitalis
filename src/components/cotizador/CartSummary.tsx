import { useCart } from '../../hooks/useCart'
import { QuantityStepper } from './QuantityStepper'
import { ProductIcon } from './ProductIcon'

const peso = (n: number): string =>
  new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
    maximumFractionDigits: 2,
  }).format(n)

function buildWhatsAppLink(message: string): string {
  return `https://wa.me/528100000000?text=${encodeURIComponent(message)}`
}

export function CartSummary() {
  const {
    details,
    itemCount,
    uniqueCount,
    subtotalWholesale,
    subtotalRetail,
    marginAmount,
    marginPct,
    setQty,
    remove,
    clear,
  } = useCart()

  const isEmpty = uniqueCount === 0

  const message = [
    'Hola Vitalis, quiero cotizar este pedido al mayoreo:',
    '',
    ...details.map(
      d =>
        `• ${d.product.name} (${d.product.brand}) — ${d.qty} × ${peso(
          d.product.wholesalePrice
        )} = ${peso(d.lineWholesale)}`
    ),
    '',
    `Subtotal mayoreo: ${peso(subtotalWholesale)}`,
    `Margen estimado: ${peso(marginAmount)} (${marginPct.toFixed(1)}%)`,
  ].join('\n')

  return (
    <aside
      aria-label='Carrito de cotización'
      className='sticky top-24 flex max-h-[calc(100vh-7rem)] flex-col overflow-hidden rounded-3xl border border-ink/10 bg-surface-paper shadow-soft'
    >
      <header className='flex items-center justify-between gap-3 border-b border-ink/8 bg-ink px-6 py-5 text-surface-cream'>
        <div className='flex items-center gap-3'>
          <span className='relative inline-flex size-10 items-center justify-center rounded-full bg-primary text-surface-cream'>
            <svg viewBox='0 0 24 24' className='size-5' aria-hidden='true' fill='none'>
              <path
                d='M3 4h2l2 12h11l2-8H7'
                stroke='currentColor'
                strokeWidth='1.6'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <circle cx='10' cy='20' r='1.4' fill='currentColor' />
              <circle cx='17' cy='20' r='1.4' fill='currentColor' />
            </svg>
          </span>
          <div>
            <p className='font-display text-lg font-medium tracking-tight'>Tu cotización</p>
            <p className='text-xs uppercase tracking-[0.2em] text-sage-light'>
              {itemCount} {itemCount === 1 ? 'caja' : 'cajas'} · {uniqueCount}{' '}
              {uniqueCount === 1 ? 'producto' : 'productos'}
            </p>
          </div>
        </div>
        {!isEmpty && (
          <button
            type='button'
            onClick={clear}
            className='text-[10px] font-semibold uppercase tracking-[0.18em] text-sage-light transition-colors hover:text-coral-light'
          >
            Vaciar
          </button>
        )}
      </header>

      <div className='flex-1 overflow-y-auto px-6 py-5'>
        {isEmpty ? (
          <div className='flex flex-col items-center justify-center py-10 text-center'>
            <span className='floaty inline-flex size-16 items-center justify-center rounded-full bg-sage-light text-primary'>
              <svg viewBox='0 0 24 24' className='size-7' aria-hidden='true' fill='none'>
                <path
                  d='M3 4h2l2 12h11l2-8H7'
                  stroke='currentColor'
                  strokeWidth='1.6'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </span>
            <p className='mt-5 font-display text-lg font-medium tracking-tight text-ink'>Tu carrito está vacío</p>
            <p className='mt-2 max-w-xs text-sm text-ink-muted text-pretty'>
              Agrega medicamentos del catálogo para armar tu cotización mayorista en segundos.
            </p>
          </div>
        ) : (
          <ul className='space-y-3'>
            {details.map(d => (
              <li key={d.product.sku} className='tick rounded-2xl border border-ink/8 bg-surface-cream p-4'>
                <div className='flex items-start gap-3'>
                  <span className='inline-flex size-10 items-center justify-center rounded-xl bg-surface-paper text-primary'>
                    <ProductIcon kind={d.product.icon} className='size-7' />
                  </span>
                  <div className='min-w-0 flex-1'>
                    <p className='truncate font-display text-base font-medium tracking-tight text-ink'>
                      {d.product.name}
                    </p>
                    <p className='truncate text-xs text-ink-soft'>{d.product.presentation}</p>
                  </div>
                  <button
                    type='button'
                    onClick={() => remove(d.product.sku)}
                    aria-label={`Quitar ${d.product.name}`}
                    className='text-ink-soft transition-colors hover:text-coral-deep'
                  >
                    <svg width='14' height='14' viewBox='0 0 14 14' fill='none'>
                      <path d='m3 3 8 8M11 3l-8 8' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' />
                    </svg>
                  </button>
                </div>
                <div className='mt-3 flex items-center justify-between gap-3'>
                  <QuantityStepper
                    value={d.qty}
                    size='sm'
                    onChange={n => setQty(d.product.sku, n)}
                    ariaLabel={`Cantidad de ${d.product.name}`}
                  />
                  <p className='font-mono text-sm font-semibold tabular-nums text-ink'>{peso(d.lineWholesale)}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <footer className='border-t border-ink/8 bg-surface-bone/60 px-6 py-5'>
        <dl className='space-y-2 text-sm'>
          <div className='flex items-center justify-between'>
            <dt className='text-ink-muted'>Subtotal mayoreo</dt>
            <dd className='font-mono font-semibold tabular-nums text-ink'>{peso(subtotalWholesale)}</dd>
          </div>
          <div className='flex items-center justify-between'>
            <dt className='text-ink-muted'>PVP sugerido</dt>
            <dd className='font-mono tabular-nums text-ink-muted line-through'>{peso(subtotalRetail)}</dd>
          </div>
          <div className='flex items-center justify-between text-coral-deep'>
            <dt className='font-medium'>Margen estimado</dt>
            <dd className='font-mono font-semibold tabular-nums'>
              {peso(marginAmount)} · {marginPct.toFixed(1)}%
            </dd>
          </div>
        </dl>
        <a
          href={isEmpty ? '#cotizador' : buildWhatsAppLink(message)}
          target={isEmpty ? undefined : '_blank'}
          rel={isEmpty ? undefined : 'noopener noreferrer'}
          aria-disabled={isEmpty}
          className={`mt-5 flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ${
            isEmpty
              ? 'cursor-not-allowed bg-ink/15 text-ink-soft'
              : 'bg-primary text-surface-cream hover:bg-primary-deep hover:shadow-glow'
          }`}
        >
          <svg viewBox='0 0 24 24' width='16' height='16' fill='currentColor' aria-hidden='true'>
            <path d='M20 12a8 8 0 1 1-15.1-3.6L3 21l12.8-3.4A8 8 0 0 1 20 12Z' />
          </svg>
          Enviar cotización por WhatsApp
        </a>
        <p className='mt-3 text-center text-[10px] uppercase tracking-[0.2em] text-ink-soft'>
          Demo interactiva · precios referenciales
        </p>
      </footer>
    </aside>
  )
}
