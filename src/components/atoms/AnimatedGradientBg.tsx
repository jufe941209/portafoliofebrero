import { Box, keyframes } from '@mui/material'
import { palette } from '../../theme/theme'

const float1 = keyframes`
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(6%, 8%) scale(1.1); }
  66% { transform: translate(-4%, 4%) scale(0.95); }
`

const float2 = keyframes`
  0%, 100% { transform: translate(0, 0) scale(1); }
  40% { transform: translate(-8%, -6%) scale(1.08); }
  70% { transform: translate(5%, -4%) scale(0.92); }
`

const float3 = keyframes`
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(4%, -8%) scale(1.12); }
`

export function AnimatedGradientBg() {
  return (
    <Box
      sx={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        bgcolor: palette.brandDark,
      }}
      aria-hidden
    >
      <Box
        sx={{
          position: 'absolute',
          top: '-10%',
          left: '-5%',
          width: '55%',
          height: '55%',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${palette.brandStart} 0%, transparent 70%)`,
          filter: 'blur(60px)',
          opacity: 0.7,
          animation: `${float1} 18s ease-in-out infinite`,
          willChange: 'transform',
          '@media (prefers-reduced-motion: reduce)': { animation: 'none' },
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '-15%',
          right: '-10%',
          width: '60%',
          height: '60%',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${palette.brandEnd} 0%, transparent 70%)`,
          filter: 'blur(70px)',
          opacity: 0.6,
          animation: `${float2} 22s ease-in-out infinite`,
          willChange: 'transform',
          '@media (prefers-reduced-motion: reduce)': { animation: 'none' },
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '30%',
          right: '15%',
          width: '35%',
          height: '35%',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${palette.accent} 0%, transparent 70%)`,
          filter: 'blur(60px)',
          opacity: 0.45,
          animation: `${float3} 15s ease-in-out infinite`,
          willChange: 'transform',
          '@media (prefers-reduced-motion: reduce)': { animation: 'none' },
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '42px 42px',
          maskImage: 'radial-gradient(circle at center, black, transparent 75%)',
        }}
      />
      <Box sx={{ position: 'absolute', inset: 0, bgcolor: 'rgba(15,12,45,0.35)' }} />
    </Box>
  )
}
