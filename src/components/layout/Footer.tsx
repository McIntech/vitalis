import { Container } from '../ui/Container'
import {
  IconFacebook,
  IconInstagram,
  IconLinkedIn,
  IconTikTok,
  IconWhatsApp,
  IconWordmark,
  IconYouTube,
} from '../ui/Icons'
import { SOCIAL_LINKS } from '../../data/content'

const ICONS = {
  instagram: IconInstagram,
  linkedin: IconLinkedIn,
  tiktok: IconTikTok,
  facebook: IconFacebook,
  whatsapp: IconWhatsApp,
  youtube: IconYouTube,
} as const

type IconKey = keyof typeof ICONS

export function Footer() {
  return (
    <footer className='border-t border-ink/10 bg-surface-bone'>
      <Container className='grid gap-10 py-16 md:grid-cols-4'>
        <div className='md:col-span-2'>
          <a href='#inicio' className='flex items-center gap-2 text-ink'>
            <IconWordmark className='size-9 text-primary' />
            <span className='font-display text-xl font-semibold tracking-tightest'>Vitalis</span>
          </a>
          <p className='mt-4 max-w-sm text-sm leading-relaxed text-ink-muted text-pretty'>
            Distribuidora mayorista de medicamentos. Margen, logística y catálogo que mueven tu farmacia hacia adelante.
          </p>

          <ul className='mt-6 flex flex-wrap gap-3'>
            {SOCIAL_LINKS.map(s => {
              const Icon = ICONS[s.icon as IconKey]
              return (
                <li key={s.name}>
                  <a
                    href={s.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={`Vitalis en ${s.name}`}
                    className='inline-flex size-10 items-center justify-center rounded-full border border-ink/10 bg-surface-paper text-ink-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-surface-cream'
                  >
                    <Icon className='size-4' />
                  </a>
                </li>
              )
            })}
          </ul>
        </div>

        <div>
          <h3 className='font-display text-sm font-semibold uppercase tracking-[0.18em] text-ink'>Negocio</h3>
          <ul className='mt-4 space-y-2 text-sm text-ink-muted'>
            <li>
              <a className='hover:text-primary' href='#porque'>
                Por qué Vitalis
              </a>
            </li>
            <li>
              <a className='hover:text-primary' href='#catalogo'>
                Catálogo
              </a>
            </li>
            <li>
              <a className='hover:text-primary' href='#cobertura'>
                Cobertura
              </a>
            </li>
            <li>
              <a className='hover:text-primary' href='#proceso'>
                Cómo funciona
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className='font-display text-sm font-semibold uppercase tracking-[0.18em] text-ink'>Contacto</h3>
          <ul className='mt-4 space-y-2 text-sm text-ink-muted'>
            <li>San Pedro Garza García, N.L.</li>
            <li>
              <a className='hover:text-primary' href='mailto:ventas@vitalis.mx'>
                ventas@vitalis.mx
              </a>
            </li>
            <li>
              <a className='hover:text-primary' href='https://wa.me/528100000000'>
                +52 81 0000 0000
              </a>
            </li>
          </ul>
        </div>
      </Container>
      <div className='border-t border-ink/10'>
        <Container className='flex flex-col items-center justify-between gap-2 py-6 text-xs text-ink-soft sm:flex-row'>
          <p>© {new Date().getFullYear()} Vitalis Distribuidora S.A. de C.V.</p>
          <p>Aviso de privacidad · COFEPRIS · Términos comerciales</p>
        </Container>
      </div>
    </footer>
  )
}
