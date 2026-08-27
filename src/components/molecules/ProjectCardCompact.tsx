import { Box, Card, CardActionArea, CardContent, CardMedia, Chip, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import VisibilityIcon from '@mui/icons-material/Visibility'
import type { CompactProject } from '../../data/projects'
import { Tilt3D } from '../atoms/Tilt3D'
import { BrowserMockCard } from './BrowserMockCard'

interface ProjectCardCompactProps {
  project: CompactProject
  onOpen: (project: CompactProject) => void
}

export function ProjectCardCompact({ project, onOpen }: ProjectCardCompactProps) {
  const { t } = useTranslation()

  return (
    <Tilt3D intensity={12} borderRadius={14} sx={{ height: '100%' }}>
      <Card sx={{ height: '100%', boxShadow: 4 }} data-aos="fade-up">
        <CardActionArea onClick={() => onOpen(project)} sx={{ height: '100%' }}>
          <Box sx={{ position: 'relative' }}>
            {project.image ? (
              <CardMedia
                component="img"
                image={project.image}
                alt={project.title}
                sx={{ height: 160, objectFit: 'cover' }}
              />
            ) : (
              <BrowserMockCard
                url={project.url.replace('https://', '').replace(/\/$/, '')}
                brand={project.mock!.brand}
                accentFrom={project.mock!.accentFrom}
                accentTo={project.mock!.accentTo}
              />
            )}
            <Chip
              icon={<VisibilityIcon sx={{ color: '#fff !important', fontSize: 16 }} />}
              label={t('projects.viewDetails')}
              size="small"
              sx={{
                position: 'absolute',
                bottom: 8,
                right: 8,
                bgcolor: 'rgba(9,8,30,0.75)',
                color: '#fff',
                fontWeight: 600,
              }}
            />
          </Box>
          <CardContent>
            <Typography variant="h6" sx={{ fontSize: 16 }}>
              {project.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {project.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Tilt3D>
  )
}
