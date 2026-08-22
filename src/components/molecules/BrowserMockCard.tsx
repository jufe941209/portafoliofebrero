import { Box, Chip, Stack, Typography } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

interface BrowserMockCardProps {
  url: string
  brand: string
  accentFrom: string
  accentTo: string
  features?: string[]
}

// No hay screenshot real disponible todavía: se representa la app con una
// maqueta de navegador en vez de una imagen inventada o de otro proyecto.
export function BrowserMockCard({ url, brand, accentFrom, accentTo, features }: BrowserMockCardProps) {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        minHeight: 220,
        borderRadius: 1,
        overflow: 'hidden',
        border: '1px solid rgba(0,0,0,0.08)',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: '#fff',
      }}
    >
      <Box sx={{ bgcolor: '#e9e9ec', px: 1.5, py: 0.75, display: 'flex', alignItems: 'center', gap: 1 }}>
        <Stack direction="row" spacing={0.5}>
          {['#ff5f57', '#febc2e', '#28c840'].map((dot) => (
            <Box key={dot} sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: dot }} />
          ))}
        </Stack>
        <Box
          sx={{
            flex: 1,
            bgcolor: '#fff',
            borderRadius: 4,
            px: 1.5,
            py: 0.25,
            fontSize: 11,
            color: 'text.secondary',
            textAlign: 'center',
          }}
        >
          {url}
        </Box>
      </Box>

      <Box
        sx={{
          position: 'relative',
          flex: 1,
          background: `linear-gradient(135deg, ${accentFrom}, ${accentTo})`,
          color: '#fff',
          p: 2.5,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          gap: 1.5,
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.35), transparent 55%)',
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            top: '-60%',
            left: '-20%',
            width: '60%',
            height: '220%',
            background: 'rgba(255,255,255,0.14)',
            transform: 'rotate(20deg)',
          },
        }}
      >
        <Typography
          variant="h5"
          sx={{
            position: 'relative',
            zIndex: 1,
            fontWeight: 800,
            letterSpacing: 1,
            textShadow: '0 2px 10px rgba(0,0,0,0.2)',
          }}
        >
          {brand}
        </Typography>
        {features && features.length > 0 && (
          <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={1} sx={{ position: 'relative', zIndex: 1 }}>
            {features.map((feature) => (
              <Chip
                key={feature}
                icon={<CheckCircleIcon sx={{ color: '#fff !important', fontSize: 16 }} />}
                label={feature}
                size="small"
                sx={{ bgcolor: 'rgba(255,255,255,0.18)', color: '#fff' }}
              />
            ))}
          </Stack>
        )}
      </Box>
    </Box>
  )
}
