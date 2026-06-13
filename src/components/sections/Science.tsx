import { Container } from '../ui/Container'
import { Button } from '../ui/Button'
import { SCIENCE_PILLARS } from '../../data/content'

export function Science() {
  return (
    <section id='ciencia' className='relative overflow-hidden bg-primary-deep text-surface-cream'>
      <div aria-hidden='true' className='pointer-events-none absolute inset-0 opacity-40'>
        <div className='absolute -left-32 top-0 size-[30rem] rounded-full bg-primary-soft blur-3xl' />
        <div className='absolute -right-20 bottom-0 size-[24rem] rounded-full bg-accent/30 blur-3xl' />
      </div>

      <Container className='relative py-24 sm:py-32'>
        <div className='grid items-end gap-12 lg:grid-cols-2'>
          <div>
            <p className='font-display text-sm font-semibold uppercase tracking-[0.22em] text-accent-light'>
              Ciencia y método
            </p>
            <h2 className='mt-4 font-display text-4xl font-medium leading-tight tracking-tightest sm:text-5xl text-balance'>
              Cada miligramo, sostenido por evidencia.
            </h2>
            <p className='mt-6 max-w-lg text-base leading-relaxed text-sage-light text-pretty'>
              No vendemos esperanza, vendemos protocolos. Nuestro equipo farmacéutico audita cada eslabón —de la
              molécula al paciente— porque el lujo, en medicina, se mide en certeza.
            </p>
            <div className='mt-8'>
              <Button href='#contacto' variant='secondary'>
                Pedir dossier clínico
              </Button>
            </div>
          </div>

          <dl className='grid grid-cols-2 gap-x-8 gap-y-10'>
            {SCIENCE_PILLARS.map(pillar => (
              <div key={pillar.label} className='border-t border-surface-cream/20 pt-6'>
                <dt className='text-xs font-medium uppercase tracking-[0.18em] text-sage-light'>{pillar.label}</dt>
                <dd className='mt-3 font-display text-4xl font-medium tracking-tightest text-surface-cream'>
                  {pillar.value}
                </dd>
                <p className='mt-2 text-sm leading-relaxed text-sage'>{pillar.detail}</p>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  )
}
