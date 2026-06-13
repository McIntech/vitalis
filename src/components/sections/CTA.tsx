import { Container } from '../ui/Container'
import { Button } from '../ui/Button'

export function CTA() {
  return (
    <section id='contacto' className='relative overflow-hidden py-20 sm:py-28'>
      <Container>
        <div className='relative overflow-hidden rounded-[2.5rem] bg-ink px-8 py-16 text-surface-cream shadow-glow sm:px-16 sm:py-24'>
          <div
            aria-hidden='true'
            className='pointer-events-none absolute -right-32 -top-32 size-[28rem] rounded-full bg-primary/40 blur-3xl'
          />
          <div
            aria-hidden='true'
            className='pointer-events-none absolute -bottom-40 -left-20 size-[24rem] rounded-full bg-accent/25 blur-3xl'
          />

          <div className='relative mx-auto max-w-2xl text-center'>
            <p className='font-display text-sm font-semibold uppercase tracking-[0.22em] text-accent-light'>
              Acceso por invitación
            </p>
            <h2 className='mt-5 font-display text-4xl font-medium leading-tight tracking-tightest sm:text-5xl text-balance'>
              Una consulta. Un farmacéutico. Una decisión informada.
            </h2>
            <p className='mt-6 text-base leading-relaxed text-sage-light text-pretty'>
              Agenda una llamada confidencial con un farmacéutico titulado. Sin compromiso, sin formularios eternos:
              solo una conversación sobre lo que tu salud necesita.
            </p>
            <div className='mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row'>
              <Button href='mailto:hola@vitalis.mx' variant='primary'>
                Agendar consulta
              </Button>
              <Button href='#catalogo' variant='ghost' className='text-surface-cream'>
                Ver catálogo
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
