import type { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  as?: 'div' | 'section' | 'header' | 'footer' | 'main' | 'nav' | 'article'
  className?: string
}

export function Container({ children, as: Tag = 'div', className = '' }: ContainerProps) {
  return <Tag className={`mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-12 ${className}`}>{children}</Tag>
}
