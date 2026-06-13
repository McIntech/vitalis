import { Container } from '../ui/Container'
import { IconWordmark } from '../ui/Icons'

export function Footer() {
  return (
    <footer className='border-t border-ink/10 bg-surface-bone'>
      <Container className='grid gap-10 py-16 md:grid-cols-4'>
        <div className='md:col-span-2'>
          <a href='#inicio' className='flex items-center gap-2 text-ink'>
            <IconWordmark className='size-8 text-primary' />
            <span className='font-display text-xl font-semibold tracking-tightest'>Vitalis</span>
          </a>
          <p className='mt-4 max-w-sm text-sm leading-relaxed text-ink-muted text-pretty'>
            Medicamentos premium con rigor farmacéutico. Una experiencia clínica confidencial, diseñada para quienes no
            negocian con su salud.
          </p>
        </div>

        <div>
          <h3 className='font-display text-sm font-semibold uppercase tracking-[0.18em] text-ink'>Compañía</h3>
          <ul className='mt-4 space-y-2 text-sm text-ink-muted'>
            <li>
              <a className='hover:text-primary' href='#ciencia'>
                Ciencia
              </a>
            </li>
            <li>
              <a className='hover:text-primary' href='#catalogo'>
                Catálogo
              </a>
            </li>
            <li>
              <a className='hover:text-primary' href='#testimonios'>
                Testimonios
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className='font-display text-sm font-semibold uppercase tracking-[0.18em] text-ink'>Contacto</h3>
          <ul className='mt-4 space-y-2 text-sm text-ink-muted'>
            <li>San Pedro Garza García, N.L.</li>
            <li>hola@vitalis.mx</li>
            <li>+52 81 0000 0000</li>
          </ul>
        </div>
      </Container>
      <div className='border-t border-ink/10'>
        <Container className='flex flex-col items-center justify-between gap-2 py-6 text-xs text-ink-soft sm:flex-row'>
          <p>© {new Date().getFullYear()} Vitalis Pharma S.A. de C.V.</p>
          <p>Aviso de privacidad · COFEPRIS · Términos</p>
        </Container>
      </div>
    </footer>
  )
}
