import { useState } from 'react'
import { Box, Drawer, IconButton, List, useMediaQuery, useTheme } from '@mui/material'
import { useTranslation } from 'react-i18next'
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

const NAV_ITEM_ICONS = [
  { id: 'profile', icon: PersonIcon },
  { id: 'journey', icon: TimelineIcon },
  { id: 'skills', icon: ArticleIcon },
  { id: 'experience', icon: WorkHistoryIcon },
  { id: 'projects', icon: DnsIcon },
  { id: 'certifications', icon: WorkspacePremiumIcon },
  { id: 'contact', icon: MailIcon },
] as const

export function Sidebar() {
  const { t } = useTranslation()
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'))
  const [mobileOpen, setMobileOpen] = useState(false)
  const navItems = NAV_ITEM_ICONS.map((item) => ({ ...item, label: t(`nav.${item.id}`) }))
  const activeId = useScrollSpy(navItems.map((item) => item.id))

  const handleNavigate = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  const content = (
    <Box sx={{ backgroundImage: palette.sidebarGradient, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <SidebarProfile />
      <List component="nav" sx={{ px: 2, py: 0.5, flex: 1, minHeight: 0, overflowY: 'auto' }}>
        {navItems.map((item) => (
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
        aria-label={t('nav.openMenu')}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        ModalProps={{ keepMounted: true }}
        sx={{
          [`& .MuiDrawer-paper`]: { width: '85vw', maxWidth: SIDEBAR_WIDTH, border: 'none' },
        }}
      >
        {content}
      </Drawer>
    </>
  )
}
