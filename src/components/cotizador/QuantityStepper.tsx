interface QuantityStepperProps {
  value: number
  min?: number
  step?: number
  onChange: (next: number) => void
  size?: 'sm' | 'md'
  ariaLabel?: string
}

export function QuantityStepper({
  value,
  min = 0,
  step = 1,
  onChange,
  size = 'md',
  ariaLabel = 'Cantidad',
}: QuantityStepperProps) {
  const dec = () => onChange(Math.max(min, value - step))
  const inc = () => onChange(value + step)

  const sizeClass = size === 'sm' ? 'h-9 text-sm' : 'h-11 text-base'

  return (
    <div
      role='group'
      aria-label={ariaLabel}
      className={`inline-flex items-center overflow-hidden rounded-full border border-ink/12 bg-surface-paper ${sizeClass}`}
    >
      <button
        type='button'
        onClick={dec}
        disabled={value <= min}
        aria-label='Disminuir'
        className='flex aspect-square h-full items-center justify-center text-ink-muted transition-colors hover:bg-coral/10 hover:text-coral-deep disabled:cursor-not-allowed disabled:opacity-30'
      >
        <svg width='14' height='14' viewBox='0 0 14 14' fill='none'>
          <path d='M3 7h8' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' />
        </svg>
      </button>
      <span className='flex min-w-12 items-center justify-center font-mono font-medium tabular-nums text-ink'>
        {value}
      </span>
      <button
        type='button'
        onClick={inc}
        aria-label='Aumentar'
        className='flex aspect-square h-full items-center justify-center text-ink-muted transition-colors hover:bg-primary/10 hover:text-primary'
      >
        <svg width='14' height='14' viewBox='0 0 14 14' fill='none'>
          <path d='M7 3v8M3 7h8' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' />
        </svg>
      </button>
    </div>
  )
}
