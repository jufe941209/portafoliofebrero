import { Box, Chip, keyframes, useMediaQuery, useTheme } from '@mui/material'
import { palette } from '../../theme/theme'

const spin = keyframes`
  from { transform: rotateY(0deg); }
  to { transform: rotateY(360deg); }
`

interface SkillOrbit3DProps {
  items: string[]
}

export function SkillOrbit3D({ items }: SkillOrbit3DProps) {
  const theme = useTheme()
  const isXs = useMediaQuery(theme.breakpoints.down('sm'))

  if (isXs) {
    return (
      <Box
        sx={{
          display: 'flex',
          gap: 1,
          overflowX: 'auto',
          my: 1,
          py: 1,
          px: 0.5,
          '&::-webkit-scrollbar': { height: 6 },
          '&::-webkit-scrollbar-thumb': { bgcolor: 'rgba(255,255,255,0.24)', borderRadius: 4 },
        }}
        data-aos="fade-up"
      >
        {items.map((item) => (
          <Chip
            key={item}
            label={item}
            size="small"
            sx={{
              flexShrink: 0,
              fontWeight: 700,
              color: palette.brandDark,
              bgcolor: 'rgba(255,255,255,0.95)',
              border: `1px solid ${palette.accent}`,
            }}
          />
        ))}
      </Box>
    )
  }

  const radius = 240
  const itemWidth = 180
  const angleStep = 360 / items.length

  return (
    <Box
      sx={{
        position: 'relative',
        height: { xs: 150, md: 170 },
        my: { xs: 1, md: 2 },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        perspective: 1100,
      }}
      data-aos="zoom-in"
    >
      <Box
        sx={{
          position: 'relative',
          width: 1,
          height: 1,
          transformStyle: 'preserve-3d',
          animation: `${spin} 26s linear infinite`,
          '&:hover': { animationPlayState: 'paused' },
        }}
      >
        {items.map((item, index) => (
          <Box
            key={item}
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: itemWidth,
              ml: `-${itemWidth / 2}px`,
              mt: '-20px',
              textAlign: 'center',
              py: 1,
              px: 2,
              borderRadius: 999,
              fontSize: 13,
              fontWeight: 700,
              whiteSpace: 'nowrap',
              color: palette.brandDark,
              bgcolor: 'rgba(255,255,255,0.95)',
              border: `1px solid ${palette.accent}`,
              boxShadow: '0 6px 18px rgba(30,27,75,0.18)',
              transform: `rotateY(${angleStep * index}deg) translateZ(${radius}px)`,
              backfaceVisibility: 'hidden',
            }}
          >
            {item}
          </Box>
        ))}
      </Box>
    </Box>
  )
}
