import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import type { SvgIconComponent } from '@mui/icons-material'

interface NavIconLinkProps {
  href: string
  icon: SvgIconComponent
  label: string
  active: boolean
  onClick: (href: string) => void
}

export function NavIconLink({ href, icon: Icon, label, active, onClick }: NavIconLinkProps) {
  return (
    <ListItemButton
      onClick={() => onClick(href)}
      sx={{
        color: active ? '#fff' : 'rgba(255,255,255,0.6)',
        borderRadius: 1,
        mb: 0.5,
        '&:hover': { color: '#fff' },
      }}
    >
      <ListItemIcon sx={{ minWidth: 36, color: 'inherit' }}>
        <Icon fontSize="small" />
      </ListItemIcon>
      <ListItemText primary={label} primaryTypographyProps={{ fontSize: 14, fontWeight: 600 }} />
    </ListItemButton>
  )
}
