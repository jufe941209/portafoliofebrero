import { Avatar, Box, Divider, Grid, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { CvLayout } from '../components/templates/CvLayout'
import { SkillGroupCard } from '../components/molecules/SkillGroupCard'
import { ExperienceItemCard } from '../components/molecules/ExperienceItemCard'
import { EducationItemCard } from '../components/molecules/EducationItemCard'
import { useProfile } from '../data/profile'
import { useSkillGroups } from '../data/skills'
import { useExperience } from '../data/experience'
import { useCertifications, useEducation, useLanguages } from '../data/education'
import { palette } from '../theme/theme'

export function CvPage() {
  const { t } = useTranslation()
  const profile = useProfile()
  const skillGroups = useSkillGroups()
  const experience = useExperience()
  const education = useEducation()
  const certifications = useCertifications()
  const languages = useLanguages()

  return (
    <CvLayout>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} alignItems="center" sx={{ mb: 4 }}>
        <Avatar src={profile.avatar} alt={profile.name} sx={{ width: 96, height: 96 }} />
        <Box>
          <Typography variant="h1" sx={{ fontSize: 30, fontWeight: 700 }}>
            {profile.name}
          </Typography>
          <Typography variant="subtitle1" sx={{ color: palette.accent, fontWeight: 600 }}>
            {profile.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {profile.phone} · {profile.email} · {profile.location}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {profile.links.linkedin} · {profile.links.github} · {profile.links.newlife}
          </Typography>
        </Box>
      </Stack>

      <Typography variant="body1" sx={{ mb: 1 }}>
        {profile.summary}
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        {profile.differentiator}
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h4" sx={{ fontSize: 20, mb: 2, color: palette.sidebar }}>
        {t('skills.title')}
      </Typography>
      {skillGroups.map((group) => (
        <SkillGroupCard key={group.id} group={group} />
      ))}

      <Divider sx={{ my: 3 }} />

      <Typography variant="h4" sx={{ fontSize: 20, mb: 2, color: palette.sidebar }}>
        {t('experience.work')}
      </Typography>
      {experience.map((item) => (
        <ExperienceItemCard key={item.role + item.period} item={item} />
      ))}

      <Divider sx={{ my: 3 }} />

      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h4" sx={{ fontSize: 20, mb: 2, color: palette.sidebar }}>
            {t('experience.education')}
          </Typography>
          {education.map((item) => (
            <EducationItemCard key={item.title} item={item} />
          ))}
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h4" sx={{ fontSize: 20, mb: 2, color: palette.sidebar }}>
            {t('certifications.title')}
          </Typography>
          {certifications.map((cert) => (
            <Box key={cert.title} sx={{ mb: 1.5 }}>
              <Typography variant="subtitle2">{cert.title}</Typography>
              <Typography variant="body2" color="text.secondary">
                {cert.issuer} · {cert.year}
              </Typography>
            </Box>
          ))}

          <Typography variant="h4" sx={{ fontSize: 20, mt: 3, mb: 2, color: palette.sidebar }}>
            {t('certifications.languages')}
          </Typography>
          {languages.map((lang) => (
            <Typography key={lang.language + lang.level} variant="body2" sx={{ mb: 0.5 }}>
              <strong>{lang.language}:</strong> {lang.level}
            </Typography>
          ))}
        </Grid>
      </Grid>
    </CvLayout>
  )
}
