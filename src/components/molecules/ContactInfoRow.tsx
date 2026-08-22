import { Box, Typography } from '@mui/material'
import type { SvgIconComponent } from '@mui/icons-material'
import { palette } from '../../theme/theme'

interface ContactInfoRowProps {
  icon: SvgIconComponent
  label: string
  value: string
  light?: boolean
}

export function ContactInfoRow({ icon: Icon, label, value, light = false }: ContactInfoRowProps) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, mb: 2.5 }}>
      <Icon sx={{ color: palette.accent }} />
      <Box>
        <Typography variant="subtitle2" sx={{ fontWeight: 700, color: light ? '#fff' : 'text.primary' }}>
          {label}
        </Typography>
        <Typography variant="body2" sx={{ color: light ? 'rgba(255,255,255,0.75)' : 'text.secondary' }}>
          {value}
        </Typography>
      </Box>
    </Box>
  )
}
