import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import { SectionTitle } from '../atoms/SectionTitle'
import { ExperienceItemCard } from '../molecules/ExperienceItemCard'
import { EducationItemCard } from '../molecules/EducationItemCard'
import { experience } from '../../data/experience'
import { education } from '../../data/education'
import { palette } from '../../theme/theme'

export function ExperienceSection() {
  return (
    <Box component="section" id="experience" sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <SectionTitle title="Experiencia profesional" />
        <Grid container spacing={6}>
          <Grid item xs={12} md={7}>
            <Typography variant="h4" sx={{ fontSize: 20, mb: 3, color: palette.sidebar }}>
              Experiencia laboral
            </Typography>
            <Stack spacing={0}>
              {experience.map((item) => (
                <ExperienceItemCard key={item.role + item.period} item={item} />
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={5}>
            <Typography variant="h4" sx={{ fontSize: 20, mb: 3, color: palette.sidebar }}>
              Educación
            </Typography>
            {education.map((item) => (
              <EducationItemCard key={item.title} item={item} />
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
