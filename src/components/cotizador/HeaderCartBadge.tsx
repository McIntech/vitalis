import { useCart } from '../../hooks/useCart'

export function HeaderCartBadge() {
  const { itemCount, uniqueCount } = useCart()

  return (
    <a
      href='#cotizador'
      aria-label={`Ver carrito (${itemCount} cajas)`}
      className='relative inline-flex size-11 items-center justify-center rounded-full border border-ink/10 bg-surface-paper text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-surface-cream'
    >
      <svg viewBox='0 0 24 24' className='size-5' aria-hidden='true' fill='none'>
        <path
          d='M3 4h2l2 12h11l2-8H7'
          stroke='currentColor'
          strokeWidth='1.6'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <circle cx='10' cy='20' r='1.3' fill='currentColor' />
        <circle cx='17' cy='20' r='1.3' fill='currentColor' />
      </svg>
      {uniqueCount > 0 && (
        <span
          key={itemCount}
          className='cart-bounce absolute -right-1 -top-1 inline-flex min-w-5 items-center justify-center rounded-full bg-coral px-1.5 text-[10px] font-bold leading-none text-surface-cream shadow-coral'
          style={{ height: '20px' }}
        >
          {itemCount}
        </span>
      )}
    </a>
  )
}
