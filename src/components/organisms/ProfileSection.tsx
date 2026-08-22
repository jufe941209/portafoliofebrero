import { Box, Container, Grid, List, ListItem, Typography } from '@mui/material'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { SectionTitle } from '../atoms/SectionTitle'
import { profile } from '../../data/profile'
import { palette } from '../../theme/theme'

const facts = [
  { label: 'GitHub', value: 'github.com/jufe941209' },
  { label: 'Título', value: profile.degree },
  { label: 'Disponibilidad', value: profile.freelance },
  { label: 'Modalidad', value: 'Remoto, async-first' },
]

export function ProfileSection() {
  return (
    <Box component="section" id="profile" sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <SectionTitle title="Perfil profesional" />
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
              Desarrollador Fullstack &amp; Entrenador de Alto Rendimiento
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
