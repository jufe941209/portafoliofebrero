import { useRef, useState, type PointerEvent } from 'react'

interface TiltState {
  rotateX: number
  rotateY: number
  glareX: number
  glareY: number
  active: boolean
}

const IDLE: TiltState = { rotateX: 0, rotateY: 0, glareX: 50, glareY: 50, active: false }

/** Tilt 3D tipo "Awwwards" que sigue el cursor. Intensidad en grados (default 10). */
export function useTilt3D(intensity = 10) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [tilt, setTilt] = useState<TiltState>(IDLE)

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (event.clientX - rect.left) / rect.width
    const py = (event.clientY - rect.top) / rect.height

    setTilt({
      rotateX: (0.5 - py) * intensity,
      rotateY: (px - 0.5) * intensity,
      glareX: px * 100,
      glareY: py * 100,
      active: true,
    })
  }

  const handlePointerLeave = () => setTilt(IDLE)

  return {
    ref,
    tilt,
    handlers: { onPointerMove: handlePointerMove, onPointerLeave: handlePointerLeave },
  }
}
