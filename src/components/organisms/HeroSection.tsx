import { lazy, Suspense } from 'react'
import { Box, Chip, Stack, Typography } from '@mui/material'
import { AnimatedGradientBg } from '../atoms/AnimatedGradientBg'
import { TypedRole } from '../molecules/TypedRole'
import { DownloadCvButton } from '../atoms/DownloadCvButton'
import { profile } from '../../data/profile'
import { palette } from '../../theme/theme'

const Hero3DObject = lazy(() => import('./Hero3DObject').then((m) => ({ default: m.Hero3DObject })))

const HIGHLIGHTS = ['Angular', 'React', '.NET / C#', 'IA & Datos']

export function HeroSection() {
  return (
    <Box
      component="section"
      id="hero"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: '#fff',
        px: 3,
        overflow: 'hidden',
      }}
    >
      <AnimatedGradientBg />

      <Box sx={{ position: 'absolute', inset: 0, opacity: { xs: 0.45, md: 0.7 } }}>
        <Suspense fallback={null}>
          <Hero3DObject />
        </Suspense>
      </Box>

      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          maxWidth: 780,
          p: { xs: 3, md: 5 },
          borderRadius: 4,
          bgcolor: 'rgba(9,8,30,0.6)',
          border: '1px solid rgba(255,255,255,0.14)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 20px 60px rgba(0,0,0,0.45)',
          pointerEvents: 'none',
        }}
        data-aos="fade-in"
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: 30, md: 46 },
            fontWeight: 700,
            letterSpacing: 1,
            textShadow: '0 2px 20px rgba(0,0,0,0.6)',
          }}
        >
          {profile.name.toUpperCase()}
        </Typography>
        <Typography variant="h5" sx={{ mt: 2, fontSize: { xs: 17, md: 22 } }}>
          Soy <TypedRole strings={profile.typedRoles} />
        </Typography>
        <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={1} sx={{ mt: 3 }}>
          {HIGHLIGHTS.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              size="small"
              sx={{ bgcolor: palette.accentSoft, color: '#fff', border: `1px solid ${palette.accent}` }}
            />
          ))}
        </Stack>
        <DownloadCvButton
          variant="contained"
          size="medium"
          sx={{
            mt: 3.5,
            pointerEvents: 'auto',
            bgcolor: palette.accent,
            color: palette.brandDark,
            fontWeight: 700,
            '&:hover': { bgcolor: palette.accentHover },
          }}
        />
      </Box>
    </Box>
  )
}
