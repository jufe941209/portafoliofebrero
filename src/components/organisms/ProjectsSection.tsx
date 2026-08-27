import { Box, Container, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { SectionTitle } from '../atoms/SectionTitle'
import { ProjectCardFeatured } from '../molecules/ProjectCardFeatured'
import { ProjectsCarousel } from './ProjectsCarousel'
import { useCompactProjects, useFeaturedProject } from '../../data/projects'
import { palette } from '../../theme/theme'

export function ProjectsSection() {
  const { t } = useTranslation()
  const featuredProject = useFeaturedProject()
  const compactProjects = useCompactProjects()

  return (
    <Box component="section" id="projects" sx={{ py: 8, bgcolor: palette.brandDark, overflow: 'hidden' }}>
      <Container maxWidth="lg">
        <SectionTitle title={t('projects.title')} subtitle={t('projects.subtitle')} light />

        <ProjectCardFeatured project={featuredProject} />

        <Typography variant="h5" sx={{ fontSize: 18, mb: 2, mt: 5, color: '#fff' }} data-aos="fade-up">
          {t('projects.other')}
        </Typography>
        <ProjectsCarousel projects={compactProjects} light />
      </Container>
    </Box>
  )
}
