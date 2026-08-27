import { Box, Button, Container, Stack } from '@mui/material'
import { useTranslation } from 'react-i18next'
import PrintIcon from '@mui/icons-material/Print'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { Link as RouterLink } from 'react-router-dom'
import type { ReactNode } from 'react'
import { LanguageSwitcher } from '../atoms/LanguageSwitcher'

interface CvLayoutProps {
  children: ReactNode
}

export function CvLayout({ children }: CvLayoutProps) {
  const { t } = useTranslation()

  return (
    <Box sx={{ bgcolor: '#f0f0f0', minHeight: '100vh', py: { xs: 2, md: 5 } }}>
      <Container maxWidth="md">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
          sx={{ mb: 2, '@media print': { display: 'none' } }}
        >
          <Button component={RouterLink} to="/" startIcon={<ArrowBackIcon />}>
            {t('cv.back')}
          </Button>
          <Stack direction="row" spacing={2} alignItems="center">
            <LanguageSwitcher light={false} />
            <Button variant="contained" startIcon={<PrintIcon />} onClick={() => window.print()}>
              {t('cv.print')}
            </Button>
          </Stack>
        </Stack>
        <Box
          sx={{
            bgcolor: '#fff',
            boxShadow: 3,
            p: { xs: 3, md: 6 },
            '@media print': { boxShadow: 'none', p: 0 },
          }}
        >
          {children}
        </Box>
      </Container>
    </Box>
  )
}
