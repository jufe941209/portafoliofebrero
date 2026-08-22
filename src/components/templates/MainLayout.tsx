import { Box } from '@mui/material'
import type { ReactNode } from 'react'
import { Sidebar } from '../organisms/Sidebar'
import { ScrollToTopButton } from '../atoms/ScrollToTopButton'
import { SIDEBAR_WIDTH } from '../../theme/theme'

interface MainLayoutProps {
  children: ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box component="main" sx={{ flex: 1, width: { lg: `calc(100% - ${SIDEBAR_WIDTH}px)` } }}>
        {children}
      </Box>
      <ScrollToTopButton />
    </Box>
  )
}
