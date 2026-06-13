import type { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  className?: string
}

export function Badge({ children, className = '' }: BadgeProps) {
  return (
    <span
      className={[
        'inline-flex items-center gap-2 rounded-full border border-primary/15 bg-sage-light/50 px-4 py-1.5',
        'text-xs font-medium uppercase tracking-[0.18em] text-primary-deep',
        className,
      ].join(' ')}
    >
      <span className='inline-block size-1.5 rounded-full bg-accent-deep' aria-hidden='true' />
      {children}
    </span>
  )
}
