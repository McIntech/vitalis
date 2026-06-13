import { Container } from '../ui/Container'
import { Button } from '../ui/Button'
import { IconWordmark } from '../ui/Icons'
import { HeaderCartBadge } from '../cotizador/HeaderCartBadge'
import { NAV_LINKS } from '../../data/content'

export function Header() {
  return (
    <header className='sticky top-0 z-40 border-b border-ink/5 glass'>
      <Container as='nav' className='flex items-center justify-between py-4'>
        <a href='#inicio' className='flex items-center gap-2 text-ink' aria-label='Vitalis — inicio'>
          <IconWordmark className='size-9 text-primary' />
          <span className='font-display text-xl font-semibold tracking-tightest'>Vitalis</span>
          <span className='ml-2 hidden text-[10px] font-medium uppercase tracking-[0.22em] text-coral-deep sm:inline'>
            · Mayoreo
          </span>
        </a>

        <ul className='hidden items-center gap-7 md:flex'>
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className='relative text-sm font-medium text-ink-muted transition-colors duration-200 hover:text-primary'
              >
                {link.label}
                <span className='absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full' />
              </a>
            </li>
          ))}
        </ul>

        <div className='flex items-center gap-3'>
          <HeaderCartBadge />
          <Button href='#cotizador' variant='primary' className='hidden sm:inline-flex'>
            Cotizar al mayoreo
          </Button>
        </div>
      </Container>
    </header>
  )
}
