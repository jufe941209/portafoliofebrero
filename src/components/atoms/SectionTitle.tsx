import { Box, Typography } from '@mui/material'
import { palette } from '../../theme/theme'

interface SectionTitleProps {
  title: string
  subtitle?: string
  light?: boolean
}

export function SectionTitle({ title, subtitle, light = false }: SectionTitleProps) {
  return (
    <Box sx={{ textAlign: 'center', pb: 4, position: 'relative' }} data-aos="fade-up">
      <Typography
        variant="h2"
        sx={{
          fontSize: '32px',
          fontWeight: 700,
          textTransform: 'uppercase',
          position: 'relative',
          pb: 2,
          color: light ? '#fff' : 'text.primary',
          '&::after': {
            content: '""',
            position: 'absolute',
            display: 'block',
            width: '50px',
            height: '3px',
            bgcolor: palette.accent,
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
          },
        }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography
          variant="body1"
          sx={{ maxWidth: 700, mx: 'auto', mt: 2, color: light ? 'rgba(255,255,255,0.75)' : 'text.secondary' }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  )
}
