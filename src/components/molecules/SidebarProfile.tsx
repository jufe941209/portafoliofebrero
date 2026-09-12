import { Avatar, Box, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import LanguageIcon from '@mui/icons-material/Language'
import EmailIcon from '@mui/icons-material/Email'
import { SocialIconLink } from '../atoms/SocialIconLink'
import { DownloadCvButton } from '../atoms/DownloadCvButton'
import { LanguageSwitcher } from '../atoms/LanguageSwitcher'
import { useProfile } from '../../data/profile'

export function SidebarProfile() {
  const { t } = useTranslation()
  const profile = useProfile()

  return (
    <Box sx={{ textAlign: 'center', pt: 2.5, pb: 1.5, px: 2 }}>
      <Avatar
        src={profile.avatar}
        alt={profile.name}
        sx={{ width: 76, height: 76, mx: 'auto', border: '3px solid #fff' }}
      />
      <Typography variant="h1" sx={{ color: '#fff', fontSize: 20, fontWeight: 600, mt: 1.25, lineHeight: 1.25 }}>
        {profile.name}
      </Typography>
      <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.75)', mt: 0.5, fontSize: 12 }}>
        {profile.title}
      </Typography>
      <Stack direction="row" justifyContent="center" flexWrap="wrap" sx={{ mt: 1 }}>
        <SocialIconLink href={profile.links.github} icon={GitHubIcon} label={t('common.github')} />
        <SocialIconLink href={profile.links.linkedin} icon={LinkedInIcon} label={t('common.linkedin')} color="#0077b5" />
        <SocialIconLink href={profile.links.portfolio} icon={LanguageIcon} label={t('common.portfolio')} />
        <SocialIconLink href="#contact" icon={EmailIcon} label={t('common.contact')} newTab={false} />
      </Stack>
      <DownloadCvButton
        sx={{
          mt: 1.25,
          whiteSpace: 'nowrap',
          color: '#fff',
          borderColor: 'rgba(255,255,255,0.4)',
          '&:hover': { borderColor: '#fff', bgcolor: 'rgba(255,255,255,0.08)' },
        }}
      />
      <Box sx={{ mt: 1, display: 'flex', justifyContent: 'center' }}>
        <LanguageSwitcher />
      </Box>
    </Box>
  )
}
