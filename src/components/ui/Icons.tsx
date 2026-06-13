interface IconProps {
  className?: string
}

export function IconLeaf({ className = '' }: IconProps) {
  return (
    <svg viewBox='0 0 24 24' className={className} aria-hidden='true' fill='none'>
      <path
        d='M5 19c0-7 6-13 14-13 0 8-6 14-13 14a8 8 0 0 1-3-1Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path d='M5 19c2-4 5-7 9-9' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' />
    </svg>
  )
}

export function IconShield({ className = '' }: IconProps) {
  return (
    <svg viewBox='0 0 24 24' className={className} aria-hidden='true' fill='none'>
      <path
        d='M12 3 4 6v6c0 4.5 3 8 8 9 5-1 8-4.5 8-9V6l-8-3Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinejoin='round'
      />
      <path d='m9 12 2 2 4-4' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    </svg>
  )
}

export function IconMolecule({ className = '' }: IconProps) {
  return (
    <svg viewBox='0 0 24 24' className={className} aria-hidden='true' fill='none'>
      <circle cx='6' cy='6' r='2.5' stroke='currentColor' strokeWidth='1.5' />
      <circle cx='18' cy='6' r='2.5' stroke='currentColor' strokeWidth='1.5' />
      <circle cx='12' cy='18' r='2.5' stroke='currentColor' strokeWidth='1.5' />
      <path d='M8 7.5 10.5 16M16 7.5 13.5 16M8 6h8' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' />
    </svg>
  )
}

export function IconPill({ className = '' }: IconProps) {
  return (
    <svg viewBox='0 0 24 24' className={className} aria-hidden='true' fill='none'>
      <rect x='3' y='9' width='18' height='6' rx='3' stroke='currentColor' strokeWidth='1.5' />
      <path d='M12 9v6' stroke='currentColor' strokeWidth='1.5' />
    </svg>
  )
}

export function IconSparkle({ className = '' }: IconProps) {
  return (
    <svg viewBox='0 0 24 24' className={className} aria-hidden='true' fill='none'>
      <path d='M12 3v6m0 6v6m-9-9h6m6 0h6' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' />
      <path
        d='m6 6 3 3m6 6 3 3M6 18l3-3m6-6 3-3'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        opacity='.6'
      />
    </svg>
  )
}

export function IconWordmark({ className = '' }: IconProps) {
  return (
    <svg viewBox='0 0 40 40' className={className} aria-hidden='true' fill='none'>
      <rect width='40' height='40' rx='10' fill='currentColor' />
      <path d='M20 10c-4 4-7 8.5-7 13a7 7 0 0 0 14 0c0-4.5-3-9-7-13Z' fill='#C9A961' />
      <circle cx='20' cy='25' r='2.5' fill='#FAF7F2' />
    </svg>
  )
}
