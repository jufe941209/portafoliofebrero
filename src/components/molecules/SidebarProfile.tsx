import { Avatar, Box, Stack, Typography } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import LanguageIcon from '@mui/icons-material/Language'
import EmailIcon from '@mui/icons-material/Email'
import { SocialIconLink } from '../atoms/SocialIconLink'
import { DownloadCvButton } from '../atoms/DownloadCvButton'
import { profile } from '../../data/profile'

export function SidebarProfile() {
  return (
    <Box sx={{ textAlign: 'center', pt: 4, pb: 2, px: 2 }}>
      <Avatar
        src={profile.avatar}
        alt={profile.name}
        sx={{ width: 100, height: 100, mx: 'auto', border: '4px solid #fff' }}
      />
      <Typography variant="h1" sx={{ color: '#fff', fontSize: 26, fontWeight: 600, mt: 2 }}>
        {profile.name}
      </Typography>
      <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.75)', mt: 1, fontSize: 13 }}>
        {profile.title}
      </Typography>
      <Stack direction="row" justifyContent="center" flexWrap="wrap" sx={{ mt: 2 }}>
        <SocialIconLink href={profile.links.github} icon={GitHubIcon} label="GitHub" />
        <SocialIconLink href={profile.links.linkedin} icon={LinkedInIcon} label="LinkedIn" color="#0077b5" />
        <SocialIconLink href={profile.links.portfolio} icon={LanguageIcon} label="Portafolio" />
        <SocialIconLink href="#contact" icon={EmailIcon} label="Contacto" newTab={false} />
      </Stack>
      <DownloadCvButton
        sx={{
          mt: 2.5,
          color: '#fff',
          borderColor: 'rgba(255,255,255,0.4)',
          '&:hover': { borderColor: '#fff', bgcolor: 'rgba(255,255,255,0.08)' },
        }}
      />
    </Box>
  )
}
