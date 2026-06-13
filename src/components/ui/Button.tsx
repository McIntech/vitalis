import type { ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'

interface ButtonProps {
  children: ReactNode
  href?: string
  variant?: Variant
  className?: string
  ariaLabel?: string
}

const VARIANTS: Record<Variant, string> = {
  primary: 'bg-primary text-surface-cream hover:bg-primary-deep focus-visible:bg-primary-deep shadow-soft',
  secondary: 'bg-surface-cream text-ink ring-1 ring-ink/10 hover:ring-primary/40 hover:text-primary',
  ghost: 'bg-transparent text-ink hover:text-primary',
}

export function Button({ children, href = '#', variant = 'primary', className = '', ariaLabel }: ButtonProps) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      className={[
        'group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide',
        'transition-all duration-300 ease-out hover-lift',
        VARIANTS[variant],
        className,
      ].join(' ')}
    >
      <span>{children}</span>
      <svg
        width='14'
        height='14'
        viewBox='0 0 14 14'
        fill='none'
        aria-hidden='true'
        className='transition-transform duration-300 ease-out group-hover:translate-x-0.5'
      >
        <path
          d='M2 7h10M8 3l4 4-4 4'
          stroke='currentColor'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </a>
  )
}
