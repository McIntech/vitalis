import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { IconFacebook, IconInstagram, IconLinkedIn, IconTikTok, IconWhatsApp, IconYouTube } from '../ui/Icons'
import { SOCIAL_LINKS } from '../../data/content'

const ICONS = {
  instagram: IconInstagram,
  linkedin: IconLinkedIn,
  tiktok: IconTikTok,
  facebook: IconFacebook,
  whatsapp: IconWhatsApp,
  youtube: IconYouTube,
} as const

const COLOR_STYLES = {
  coral: 'bg-coral/10 text-coral-deep hover:bg-coral hover:text-surface-cream hover:shadow-coral',
  primary: 'bg-primary/10 text-primary hover:bg-primary hover:text-surface-cream hover:shadow-glow',
  teal: 'bg-teal/10 text-teal-deep hover:bg-teal hover:text-surface-cream hover:shadow-teal',
  violet: 'bg-violet/10 text-violet hover:bg-violet hover:text-surface-cream',
} as const

type IconKey = keyof typeof ICONS
type ColorKey = keyof typeof COLOR_STYLES

export function Social() {
  return (
    <section id='redes' className='relative overflow-hidden bg-surface-cream py-20 sm:py-28'>
      <div aria-hidden='true' className='pointer-events-none absolute inset-0 -z-10'>
        <div className='blob absolute -left-20 top-0 size-72 bg-coral/15' />
        <div className='blob blob-delay-2 absolute -right-10 bottom-0 size-80 bg-teal/15' />
      </div>

      <Container>
        <div className='mx-auto max-w-2xl text-center'>
          <Reveal>
            <p className='font-display text-sm font-semibold uppercase tracking-[0.22em] text-coral-deep'>
              Estamos donde estás
            </p>
          </Reveal>
          <Reveal delay={1}>
            <h2 className='mt-4 font-display text-4xl font-medium leading-tight tracking-tightest text-ink sm:text-5xl text-balance'>
              Síguenos. Promociones, drops y novedades farmacéuticas.
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className='mx-auto mt-5 max-w-xl text-base text-ink-muted text-pretty'>
              Anuncios de inventario, ofertas relámpago, lanzamientos de proveedor y contenido para tu farmacia.
            </p>
          </Reveal>
        </div>

        <ul className='mx-auto mt-14 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          {SOCIAL_LINKS.map((s, idx) => {
            const Icon = ICONS[s.icon as IconKey]
            const styles = COLOR_STYLES[s.color as ColorKey]
            return (
              <Reveal key={s.name} delay={((idx % 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6} as='li'>
                <a
                  href={s.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={`group flex items-center gap-5 rounded-2xl border border-ink/8 bg-surface-paper p-5 transition-all duration-300 hover-lift ${styles}`}
                >
                  <span className='inline-flex size-12 items-center justify-center rounded-xl border border-current/15 bg-surface-paper/40'>
                    <Icon className='size-6 transition-transform duration-300 group-hover:scale-110' />
                  </span>
                  <span className='flex flex-col'>
                    <span className='font-display text-lg font-semibold tracking-tight'>{s.name}</span>
                    <span className='text-sm opacity-80'>{s.handle}</span>
                  </span>
                  <span
                    aria-hidden='true'
                    className='ml-auto inline-flex size-8 items-center justify-center rounded-full border border-current/20 transition-transform duration-300 group-hover:translate-x-1'
                  >
                    <svg width='12' height='12' viewBox='0 0 12 12' fill='none'>
                      <path
                        d='M3 9 9 3M5 3h4v4'
                        stroke='currentColor'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </span>
                </a>
              </Reveal>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}
