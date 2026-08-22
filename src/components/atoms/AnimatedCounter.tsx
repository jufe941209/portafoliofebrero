import { useEffect, useState } from 'react'
import { Typography } from '@mui/material'
import { useInViewOnce } from '../../hooks/useInViewOnce'

interface AnimatedCounterProps {
  value: number
  suffix?: string
  duration?: number
}

export function AnimatedCounter({ value, suffix = '', duration = 1400 }: AnimatedCounterProps) {
  const { ref, inView } = useInViewOnce<HTMLDivElement>(0.4)
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const start = performance.now()

    let frame: number
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(value * eased))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, value, duration])

  return (
    <Typography ref={ref} variant="h3" component="div" sx={{ fontWeight: 800, fontSize: { xs: 34, md: 42 } }}>
      {display.toLocaleString('es-CO')}
      {suffix}
    </Typography>
  )
}
