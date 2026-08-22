import { Box, Container, Grid } from '@mui/material'
import { SectionTitle } from '../atoms/SectionTitle'
import { SkillCategoryCard } from '../molecules/SkillCategoryCard'
import { SkillOrbit3D } from './SkillOrbit3D'
import { featuredTech, skillGroups } from '../../data/skills'

export function SkillsSection() {
  return (
    <Box
      component="section"
      id="skills"
      sx={{
        py: 8,
        overflow: 'hidden',
        backgroundImage: 'linear-gradient(160deg, #0369A1 0%, #0EA5E9 100%)',
      }}
    >
      <Container maxWidth="lg">
        <SectionTitle
          title="Habilidades técnicas"
          subtitle="Stack de frontend, backend, bases de datos, DevOps, IA y datos, testing y seguridad."
          light
        />

        <SkillOrbit3D items={featuredTech} />

        <Grid container spacing={3} sx={{ mt: 2 }}>
          {skillGroups.map((group) => (
            <Grid item xs={12} sm={6} md={4} key={group.category}>
              <SkillCategoryCard group={group} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
