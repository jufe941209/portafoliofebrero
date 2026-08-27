import { Box, Container, Grid } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { SectionTitle } from '../atoms/SectionTitle'
import { SkillCategoryCard } from '../molecules/SkillCategoryCard'
import { SkillOrbit3D } from './SkillOrbit3D'
import { featuredTech, useSkillGroups } from '../../data/skills'

export function SkillsSection() {
  const { t } = useTranslation()
  const skillGroups = useSkillGroups()

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
        <SectionTitle title={t('skills.title')} subtitle={t('skills.subtitle')} light />

        <SkillOrbit3D items={featuredTech} />

        <Grid container spacing={3} sx={{ mt: 2 }}>
          {skillGroups.map((group) => (
            <Grid item xs={12} sm={6} md={4} key={group.id}>
              <SkillCategoryCard group={group} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
