import { useEffect, useRef, useState } from 'react'

interface Options {
  duration?: number
  decimals?: number
}

export function useCountUp(target: number, options: Options = {}) {
  const { duration = 1800, decimals = 0 } = options
  const [value, setValue] = useState<number>(0)
  const ref = useRef<HTMLSpanElement | null>(null)
  const startedRef = useRef<boolean>(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true
            const start = performance.now()
            const tick = (now: number) => {
              const elapsed = now - start
              const progress = Math.min(elapsed / duration, 1)
              const eased = 1 - Math.pow(1 - progress, 3)
              const current = target * eased
              setValue(Number(current.toFixed(decimals)))
              if (progress < 1) requestAnimationFrame(tick)
            }
            requestAnimationFrame(tick)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.3 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [target, duration, decimals])

  return { value, ref }
}
