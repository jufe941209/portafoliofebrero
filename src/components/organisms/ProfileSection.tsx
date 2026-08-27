import { Box, Container, Grid, List, ListItem, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { SectionTitle } from '../atoms/SectionTitle'
import { useProfile } from '../../data/profile'
import { palette } from '../../theme/theme'

export function ProfileSection() {
  const { t } = useTranslation()
  const profile = useProfile()

  const facts = [
    { label: t('profile.facts.github'), value: 'github.com/jufe941209' },
    { label: t('profile.facts.degree'), value: profile.degree },
    { label: t('profile.facts.availability'), value: profile.freelance },
    { label: t('profile.facts.mode'), value: t('profile.facts.modeValue') },
  ]

  return (
    <Box component="section" id="profile" sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <SectionTitle title={t('profile.title')} />
        <Typography variant="body1" sx={{ mb: 2 }} data-aos="fade-up">
          {profile.summary}
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }} data-aos="fade-up">
          {profile.differentiator}
        </Typography>

        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={4} data-aos="fade-right">
            <Box
              component="img"
              src={profile.photo}
              alt={profile.name}
              sx={{ width: '100%', borderRadius: 2 }}
            />
          </Grid>
          <Grid item xs={12} md={8} data-aos="fade-left">
            <Typography variant="h3" sx={{ fontSize: 22, mb: 2 }}>
              {t('profile.heading')}
            </Typography>
            <Grid container spacing={1}>
              {facts.map((fact) => (
                <Grid item xs={12} sm={6} key={fact.label}>
                  <List dense disablePadding>
                    <ListItem disableGutters sx={{ py: 0.5 }}>
                      <ChevronRightIcon fontSize="small" sx={{ color: palette.accent, mr: 1 }} />
                      <Typography variant="body2">
                        <strong>{fact.label}:</strong> {fact.value}
                      </Typography>
                    </ListItem>
                  </List>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
