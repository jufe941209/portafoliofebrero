import { Box, Container, Stack, Typography } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { SocialIconLink } from '../atoms/SocialIconLink'
import { profile } from '../../data/profile'
import { palette } from '../../theme/theme'

export function Footer() {
  return (
    <Box component="footer" sx={{ backgroundImage: palette.sidebarGradient, color: '#fff', py: 4 }}>
      <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} {profile.name}
        </Typography>
        <Stack direction="row" justifyContent="center" sx={{ mt: 1 }}>
          <SocialIconLink href={profile.links.github} icon={GitHubIcon} label="GitHub" />
          <SocialIconLink href={profile.links.linkedin} icon={LinkedInIcon} label="LinkedIn" />
        </Stack>
      </Container>
    </Box>
  )
}
