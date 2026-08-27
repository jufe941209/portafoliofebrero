import { Box, Container, Grid, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { SectionTitle } from '../atoms/SectionTitle'
import { CertificationBadgeCard } from '../molecules/CertificationBadgeCard'
import { useCertifications, useLanguages } from '../../data/education'
import { palette } from '../../theme/theme'

export function CertificationsSection() {
  const { t } = useTranslation()
  const certifications = useCertifications()
  const languages = useLanguages()

  return (
    <Box component="section" id="certifications" sx={{ py: 8, bgcolor: '#ffffff' }}>
      <Container maxWidth="lg">
        <SectionTitle title={t('certifications.title')} subtitle={t('certifications.subtitle')} />

        <Grid container spacing={3}>
          {certifications.map((cert) => (
            <Grid item xs={12} sm={6} md={4} key={cert.title}>
              <CertificationBadgeCard cert={cert} />
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 5 }} data-aos="fade-up">
          <Typography variant="subtitle1" sx={{ fontWeight: 700, color: palette.sidebar }}>
            {t('certifications.languages')}
          </Typography>
          {languages.map((lang) => (
            <Typography key={lang.language + lang.level} variant="body2" color="text.secondary">
              <strong>{lang.language}:</strong> {lang.level}
            </Typography>
          ))}
        </Box>
      </Container>
    </Box>
  )
}
