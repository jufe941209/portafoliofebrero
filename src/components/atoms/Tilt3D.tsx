import { Box } from '@mui/material'
import type { ReactNode } from 'react'
import { useTilt3D } from '../../hooks/useTilt3D'

interface Tilt3DProps {
  children: ReactNode
  intensity?: number
  borderRadius?: number
  sx?: object
}

export function Tilt3D({ children, intensity = 10, borderRadius = 14, sx }: Tilt3DProps) {
  const { ref, tilt, handlers } = useTilt3D(intensity)

  return (
    <Box
      ref={ref}
      {...handlers}
      sx={{
        position: 'relative',
        height: '100%',
        perspective: 1200,
        ...sx,
      }}
    >
      <Box
        sx={{
          height: '100%',
          transformStyle: 'preserve-3d',
          transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale(${tilt.active ? 1.02 : 1})`,
          transition: tilt.active ? 'transform 0.08s ease-out' : 'transform 0.5s ease',
          willChange: 'transform',
        }}
      >
        {children}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            borderRadius,
            pointerEvents: 'none',
            opacity: tilt.active ? 1 : 0,
            transition: 'opacity 0.3s ease',
            background: `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(255,255,255,0.35), transparent 55%)`,
          }}
        />
      </Box>
    </Box>
  )
}
