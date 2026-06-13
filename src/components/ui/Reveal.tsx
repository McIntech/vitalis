import type { ReactNode } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'

interface RevealProps {
  children: ReactNode
  delay?: 0 | 1 | 2 | 3 | 4 | 5 | 6
  as?: 'div' | 'span' | 'li' | 'article' | 'section'
  className?: string
}

export function Reveal({ children, delay = 0, as: Tag = 'div', className = '' }: RevealProps) {
  const ref = useScrollReveal<HTMLElement>()
  const delayClass = delay > 0 ? `reveal-delay-${delay}` : ''
  return (
    <Tag ref={ref as never} className={`reveal ${delayClass} ${className}`.trim()}>
      {children}
    </Tag>
  )
}
