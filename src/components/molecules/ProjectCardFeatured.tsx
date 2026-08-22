import { Box, Button, Card, CardContent, Chip, Stack, Typography } from '@mui/material'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import type { FeaturedProject } from '../../data/projects'
import { palette } from '../../theme/theme'
import { BrowserMockCard } from './BrowserMockCard'
import { Tilt3D } from '../atoms/Tilt3D'

interface ProjectCardFeaturedProps {
  project: FeaturedProject
}

export function ProjectCardFeatured({ project }: ProjectCardFeaturedProps) {
  return (
    <Tilt3D intensity={4} borderRadius={14} sx={{ mb: 4 }}>
    <Card sx={{ display: { xs: 'block', md: 'flex' }, height: '100%', boxShadow: 6 }} data-aos="fade-up">
      <Box sx={{ width: { xs: '100%', md: 340 }, flexShrink: 0 }}>
        <BrowserMockCard
          url={project.url.replace('https://', '')}
          brand={project.brand}
          accentFrom={project.accentFrom}
          accentTo={project.accentTo}
          features={['Catálogo', 'Login por rol', 'Portal domiciliario', 'Panel admin']}
        />
      </Box>
      <CardContent sx={{ flex: 1 }}>
        <Typography variant="overline" sx={{ color: palette.accent, fontWeight: 700 }}>
          Proyecto destacado
        </Typography>
        <Typography variant="h4" sx={{ fontSize: 22 }}>
          {project.title}
        </Typography>
        <Typography variant="body2" sx={{ fontStyle: 'italic', color: 'text.secondary', mb: 1.5 }}>
          {project.subtitle}
        </Typography>
        <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mb: 1.5 }}>
          {project.stack.map((tech) => (
            <Chip key={tech} label={tech} size="small" sx={{ bgcolor: palette.sidebar, color: '#fff' }} />
          ))}
        </Stack>
        <Box component="ul" sx={{ pl: 2, m: 0, mb: 2 }}>
          {project.bullets.map((bullet) => (
            <Typography key={bullet} component="li" variant="body2" sx={{ mb: 0.5 }}>
              {bullet}
            </Typography>
          ))}
        </Box>
        <Button
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          variant="contained"
          endIcon={<OpenInNewIcon />}
          sx={{ bgcolor: palette.accent, '&:hover': { bgcolor: palette.accentHover } }}
        >
          Ver proyecto
        </Button>
      </CardContent>
    </Card>
    </Tilt3D>
  )
}
