import { IconButton } from '@mui/material'
import type { SvgIconComponent } from '@mui/icons-material'

interface SocialIconLinkProps {
  href: string
  icon: SvgIconComponent
  label: string
  color?: string
  newTab?: boolean
}

export function SocialIconLink({ href, icon: Icon, label, color, newTab = true }: SocialIconLinkProps) {
  return (
    <IconButton
      component="a"
      href={href}
      target={newTab ? '_blank' : undefined}
      rel={newTab ? 'noopener noreferrer' : undefined}
      aria-label={label}
      sx={{
        color: '#fff',
        bgcolor: 'rgba(255,255,255,0.08)',
        mx: 0.5,
        '&:hover': { bgcolor: color ?? 'rgba(255,255,255,0.2)' },
      }}
      size="small"
    >
      <Icon fontSize="small" />
    </IconButton>
  )
}
