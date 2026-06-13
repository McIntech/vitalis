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
    <svg viewBox='0 0 64 64' className={className} aria-hidden='true' fill='none'>
      <defs>
        <linearGradient id='vitalisFigure' x1='0' y1='0' x2='64' y2='64' gradientUnits='userSpaceOnUse'>
          <stop offset='0' stopColor='#2BA76C' />
          <stop offset='0.32' stopColor='#1F7E50' />
          <stop offset='0.52' stopColor='#EC4899' />
          <stop offset='0.78' stopColor='#2D4A8F' />
          <stop offset='1' stopColor='#5B3B95' />
        </linearGradient>
        <linearGradient id='vitalisPill' x1='8' y1='38' x2='56' y2='58' gradientUnits='userSpaceOnUse'>
          <stop offset='0' stopColor='#1F7E50' />
          <stop offset='0.5' stopColor='#5B3B95' />
          <stop offset='1' stopColor='#1F2D5C' />
        </linearGradient>
      </defs>
      {/* pill base */}
      <rect x='10' y='40' width='44' height='18' rx='9' fill='url(#vitalisPill)' />
      {/* body with raised arms (Y silhouette) */}
      <path
        d='M32 18 C 27 22, 24 28, 24 36 L 17 26 L 14 28 L 24 44 L 24 46 C 24 50, 28 52, 32 52 C 36 52, 40 50, 40 46 L 40 44 L 50 28 L 47 26 L 40 36 C 40 28, 37 22, 32 18 Z'
        fill='url(#vitalisFigure)'
      />
      {/* sun head */}
      <circle cx='32' cy='14' r='6' fill='#F5A623' />
    </svg>
  )
}

export function IconTruck({ className = '' }: IconProps) {
  return (
    <svg viewBox='0 0 24 24' className={className} aria-hidden='true' fill='none'>
      <path d='M3 7h11v9H3V7Zm11 3h4l3 3v3h-7v-6Z' stroke='currentColor' strokeWidth='1.5' strokeLinejoin='round' />
      <circle cx='7.5' cy='17.5' r='1.8' stroke='currentColor' strokeWidth='1.5' />
      <circle cx='17.5' cy='17.5' r='1.8' stroke='currentColor' strokeWidth='1.5' />
    </svg>
  )
}

export function IconPackage({ className = '' }: IconProps) {
  return (
    <svg viewBox='0 0 24 24' className={className} aria-hidden='true' fill='none'>
      <path d='m12 3 9 4.5v9L12 21l-9-4.5v-9L12 3Z' stroke='currentColor' strokeWidth='1.5' strokeLinejoin='round' />
      <path d='m3 7.5 9 4.5 9-4.5M12 12v9' stroke='currentColor' strokeWidth='1.5' />
    </svg>
  )
}

export function IconChart({ className = '' }: IconProps) {
  return (
    <svg viewBox='0 0 24 24' className={className} aria-hidden='true' fill='none'>
      <path d='M3 21h18M5 17V9m6 8V5m6 12v-7' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' />
    </svg>
  )
}

export function IconCredit({ className = '' }: IconProps) {
  return (
    <svg viewBox='0 0 24 24' className={className} aria-hidden='true' fill='none'>
      <rect x='3' y='6' width='18' height='13' rx='2.5' stroke='currentColor' strokeWidth='1.5' />
      <path d='M3 11h18M7 16h4' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' />
    </svg>
  )
}

export function IconMap({ className = '' }: IconProps) {
  return (
    <svg viewBox='0 0 24 24' className={className} aria-hidden='true' fill='none'>
      <path
        d='M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2ZM9 4v14M15 6v14'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export function IconPin({ className = '' }: IconProps) {
  return (
    <svg viewBox='0 0 24 24' className={className} aria-hidden='true' fill='none'>
      <path
        d='M12 22s-7-6-7-12a7 7 0 1 1 14 0c0 6-7 12-7 12Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinejoin='round'
      />
      <circle cx='12' cy='10' r='2.5' stroke='currentColor' strokeWidth='1.5' />
    </svg>
  )
}

export function IconPlus({ className = '' }: IconProps) {
  return (
    <svg viewBox='0 0 24 24' className={className} aria-hidden='true' fill='none'>
      <path d='M12 5v14M5 12h14' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' />
    </svg>
  )
}

export function IconInstagram({ className = '' }: IconProps) {
  return (
    <svg viewBox='0 0 24 24' className={className} aria-hidden='true' fill='none'>
      <rect x='3' y='3' width='18' height='18' rx='5' stroke='currentColor' strokeWidth='1.5' />
      <circle cx='12' cy='12' r='4' stroke='currentColor' strokeWidth='1.5' />
      <circle cx='17.5' cy='6.5' r='1' fill='currentColor' />
    </svg>
  )
}

export function IconLinkedIn({ className = '' }: IconProps) {
  return (
    <svg viewBox='0 0 24 24' className={className} aria-hidden='true' fill='currentColor'>
      <path d='M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.5h4V21H3V9.5Zm6 0h3.8v1.6h.05c.53-1 1.83-2 3.77-2 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.34c0-1.27-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.81V21H9V9.5Z' />
    </svg>
  )
}

export function IconTikTok({ className = '' }: IconProps) {
  return (
    <svg viewBox='0 0 24 24' className={className} aria-hidden='true' fill='currentColor'>
      <path d='M16 3c.3 2 1.6 3.7 3.7 4.1V10a6.7 6.7 0 0 1-3.7-1.1V15a6 6 0 1 1-6-6c.3 0 .7 0 1 .1v3.2a2.8 2.8 0 1 0 2 2.7V3h3Z' />
    </svg>
  )
}

export function IconFacebook({ className = '' }: IconProps) {
  return (
    <svg viewBox='0 0 24 24' className={className} aria-hidden='true' fill='currentColor'>
      <path d='M13.5 21v-8h2.7l.4-3.2h-3.1V7.7c0-.9.3-1.6 1.6-1.6h1.6V3.3c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.6H7.8V13h2.8v8h2.9Z' />
    </svg>
  )
}

export function IconWhatsApp({ className = '' }: IconProps) {
  return (
    <svg viewBox='0 0 24 24' className={className} aria-hidden='true' fill='currentColor'>
      <path d='M20 12a8 8 0 1 1-15.1-3.6L3 21l12.8-3.4A8 8 0 0 1 20 12Zm-9 4.2c-.4 0-1.6-.3-2.9-1.5-1.5-1.4-2.4-3.1-2.5-3.3 0-.2-.6-1.3.3-2.5.3-.4.6-.5.9-.5h.6c.2 0 .4 0 .6.5.2.5.7 1.7.8 1.8.1.2.1.4 0 .6-.1.2-.2.3-.4.5-.2.2-.4.4-.5.6-.2.2-.3.4-.1.7.2.4.9 1.4 1.9 2.2 1.2 1.1 2.3 1.4 2.7 1.6.3.1.4.1.6-.1l.7-.9c.2-.3.4-.2.6-.1l1.7.8c.3.2.5.2.6.4.1.2.1.9-.2 1.7-.2.9-1.3 1.7-2.1 1.8h-.8Z' />
    </svg>
  )
}

export function IconYouTube({ className = '' }: IconProps) {
  return (
    <svg viewBox='0 0 24 24' className={className} aria-hidden='true' fill='currentColor'>
      <path d='M22.5 7.4a2.7 2.7 0 0 0-1.9-1.9C18.9 5 12 5 12 5s-6.9 0-8.6.5A2.7 2.7 0 0 0 1.5 7.4 28 28 0 0 0 1 12a28 28 0 0 0 .5 4.6 2.7 2.7 0 0 0 1.9 1.9c1.7.5 8.6.5 8.6.5s6.9 0 8.6-.5a2.7 2.7 0 0 0 1.9-1.9A28 28 0 0 0 23 12a28 28 0 0 0-.5-4.6ZM10 15.2V8.8l5.5 3.2L10 15.2Z' />
    </svg>
  )
}
