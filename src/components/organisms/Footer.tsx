import { Box, Container, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { SocialIconLink } from '../atoms/SocialIconLink'
import { useProfile } from '../../data/profile'
import { palette } from '../../theme/theme'

export function Footer() {
  const { t } = useTranslation()
  const profile = useProfile()

  return (
    <Box component="footer" sx={{ backgroundImage: palette.sidebarGradient, color: '#fff', py: 4 }}>
      <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} {profile.name}
        </Typography>
        <Stack direction="row" justifyContent="center" sx={{ mt: 1 }}>
          <SocialIconLink href={profile.links.github} icon={GitHubIcon} label={t('common.github')} />
          <SocialIconLink href={profile.links.linkedin} icon={LinkedInIcon} label={t('common.linkedin')} />
        </Stack>
      </Container>
    </Box>
  )
}
