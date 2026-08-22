import { Box, Container, Typography } from '@mui/material'
import { SectionTitle } from '../atoms/SectionTitle'
import { ProjectCardFeatured } from '../molecules/ProjectCardFeatured'
import { ProjectsCarousel } from './ProjectsCarousel'
import { compactProjects, featuredProject } from '../../data/projects'
import { palette } from '../../theme/theme'

export function ProjectsSection() {
  return (
    <Box component="section" id="projects" sx={{ py: 8, bgcolor: palette.brandDark, overflow: 'hidden' }}>
      <Container maxWidth="lg">
        <SectionTitle
          title="Proyectos"
          subtitle="Proyectos desplegados en la nube, desarrollados de forma independiente end-to-end."
          light
        />

        <ProjectCardFeatured project={featuredProject} />

        <Typography variant="h5" sx={{ fontSize: 18, mb: 2, mt: 5, color: '#fff' }} data-aos="fade-up">
          Otros proyectos
        </Typography>
        <ProjectsCarousel projects={compactProjects} light />
      </Container>
    </Box>
  )
}
