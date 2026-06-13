import type { ProductIcon as IconKind } from '../../data/products'

interface ProductIconProps {
  kind: IconKind
  className?: string
}

export function ProductIcon({ kind, className = '' }: ProductIconProps) {
  if (kind === 'pill') {
    return (
      <svg viewBox='0 0 32 32' className={className} aria-hidden='true' fill='none'>
        <rect x='2' y='11' width='28' height='10' rx='5' fill='currentColor' opacity='0.18' />
        <rect x='2' y='11' width='14' height='10' rx='5' fill='currentColor' opacity='0.55' />
        <path d='M16 11v10' stroke='currentColor' strokeWidth='1.2' opacity='0.4' />
      </svg>
    )
  }
  if (kind === 'capsule') {
    return (
      <svg viewBox='0 0 32 32' className={className} aria-hidden='true' fill='none'>
        <g transform='rotate(-30 16 16)'>
          <rect x='3' y='12' width='26' height='8' rx='4' fill='currentColor' opacity='0.2' />
          <rect x='3' y='12' width='13' height='8' rx='4' fill='currentColor' opacity='0.65' />
          <circle cx='9' cy='16' r='0.8' fill='currentColor' opacity='0.3' />
          <circle cx='13' cy='16' r='0.8' fill='currentColor' opacity='0.3' />
        </g>
      </svg>
    )
  }
  if (kind === 'tablet') {
    return (
      <svg viewBox='0 0 32 32' className={className} aria-hidden='true' fill='none'>
        <circle cx='16' cy='16' r='11' fill='currentColor' opacity='0.18' />
        <circle cx='16' cy='16' r='11' stroke='currentColor' strokeWidth='1.2' opacity='0.45' />
        <path d='M9 16h14' stroke='currentColor' strokeWidth='1.5' opacity='0.55' />
      </svg>
    )
  }
  if (kind === 'bottle') {
    return (
      <svg viewBox='0 0 32 32' className={className} aria-hidden='true' fill='none'>
        <rect x='11' y='3' width='10' height='4' rx='1.5' fill='currentColor' opacity='0.5' />
        <rect
          x='8'
          y='8'
          width='16'
          height='20'
          rx='3'
          fill='currentColor'
          opacity='0.2'
          stroke='currentColor'
          strokeWidth='1.2'
        />
        <path d='M12 14h8M12 18h8M12 22h5' stroke='currentColor' strokeWidth='1' opacity='0.5' />
      </svg>
    )
  }
  return (
    <svg viewBox='0 0 32 32' className={className} aria-hidden='true' fill='none'>
      <rect x='5' y='6' width='22' height='20' rx='2' fill='currentColor' opacity='0.18' />
      <g opacity='0.6' fill='currentColor'>
        <circle cx='10' cy='12' r='1.6' />
        <circle cx='16' cy='12' r='1.6' />
        <circle cx='22' cy='12' r='1.6' />
        <circle cx='10' cy='20' r='1.6' />
        <circle cx='16' cy='20' r='1.6' />
        <circle cx='22' cy='20' r='1.6' />
      </g>
    </svg>
  )
}
