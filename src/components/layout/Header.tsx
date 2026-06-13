import { Container } from '../ui/Container'
import { Button } from '../ui/Button'
import { IconWordmark } from '../ui/Icons'
import { NAV_LINKS } from '../../data/content'

export function Header() {
  return (
    <header className='sticky top-0 z-40 border-b border-ink/5 bg-surface-cream/80 backdrop-blur-md'>
      <Container as='nav' className='flex items-center justify-between py-4'>
        <a href='#inicio' className='flex items-center gap-2 text-ink' aria-label='Vitalis — inicio'>
          <IconWordmark className='size-8 text-primary' />
          <span className='font-display text-xl font-semibold tracking-tightest'>Vitalis</span>
        </a>

        <ul className='hidden items-center gap-8 md:flex'>
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className='text-sm font-medium text-ink-muted transition-colors duration-200 hover:text-primary'
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className='flex items-center gap-3'>
          <Button href='#contacto' variant='primary' className='hidden sm:inline-flex'>
            Agendar consulta
          </Button>
        </div>
      </Container>
    </header>
  )
}
