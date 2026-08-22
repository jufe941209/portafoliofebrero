import { useState } from 'react'
import { Box, Drawer, IconButton, List, useMediaQuery, useTheme } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import PersonIcon from '@mui/icons-material/Person'
import TimelineIcon from '@mui/icons-material/Timeline'
import ArticleIcon from '@mui/icons-material/Article'
import WorkHistoryIcon from '@mui/icons-material/WorkHistory'
import DnsIcon from '@mui/icons-material/Dns'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium'
import MailIcon from '@mui/icons-material/Mail'
import { NavIconLink } from '../atoms/NavIconLink'
import { SidebarProfile } from '../molecules/SidebarProfile'
import { useScrollSpy } from '../../hooks/useScrollSpy'
import { palette, SIDEBAR_WIDTH } from '../../theme/theme'

const NAV_ITEMS = [
  { id: 'profile', label: 'Perfil profesional', icon: PersonIcon },
  { id: 'journey', label: 'Trayectoria', icon: TimelineIcon },
  { id: 'skills', label: 'Habilidades', icon: ArticleIcon },
  { id: 'experience', label: 'Experiencia', icon: WorkHistoryIcon },
  { id: 'projects', label: 'Proyectos', icon: DnsIcon },
  { id: 'certifications', label: 'Certificaciones', icon: WorkspacePremiumIcon },
  { id: 'contact', label: 'Contacto', icon: MailIcon },
]

export function Sidebar() {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'))
  const [mobileOpen, setMobileOpen] = useState(false)
  const activeId = useScrollSpy(NAV_ITEMS.map((item) => item.id))

  const handleNavigate = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  const content = (
    <Box sx={{ backgroundImage: palette.sidebarGradient, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <SidebarProfile />
      <List component="nav" sx={{ px: 2, flex: 1 }}>
        {NAV_ITEMS.map((item) => (
          <NavIconLink
            key={item.id}
            href={item.id}
            icon={item.icon}
            label={item.label}
            active={activeId === item.id}
            onClick={handleNavigate}
          />
        ))}
      </List>
    </Box>
  )

  if (isDesktop) {
    return (
      <Drawer
        variant="permanent"
        sx={{
          width: SIDEBAR_WIDTH,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: SIDEBAR_WIDTH, border: 'none' },
        }}
      >
        {content}
      </Drawer>
    )
  }

  return (
    <>
      <IconButton
        onClick={() => setMobileOpen(true)}
        sx={{
          position: 'fixed',
          top: 12,
          left: 12,
          zIndex: 1300,
          bgcolor: palette.sidebar,
          color: '#fff',
          '&:hover': { bgcolor: palette.sidebar },
        }}
        aria-label="Abrir menú"
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        ModalProps={{ keepMounted: true }}
        sx={{ [`& .MuiDrawer-paper`]: { width: SIDEBAR_WIDTH, border: 'none' } }}
      >
        {content}
      </Drawer>
    </>
  )
}
