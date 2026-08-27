import { useRef, useState } from 'react'
import { Box, IconButton, Stack } from '@mui/material'
import { useTranslation } from 'react-i18next'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import type { CompactProject } from '../../data/projects'
import { ProjectCardCompact } from '../molecules/ProjectCardCompact'
import { ProjectDetailsDialog } from '../molecules/ProjectDetailsDialog'
import { palette } from '../../theme/theme'

interface ProjectsCarouselProps {
  projects: CompactProject[]
  light?: boolean
}

export function ProjectsCarousel({ projects, light = false }: ProjectsCarouselProps) {
  const { t } = useTranslation()
  const trackRef = useRef<HTMLDivElement | null>(null)
  const [selected, setSelected] = useState<CompactProject | null>(null)

  const scrollByCard = (direction: 1 | -1) => {
    const el = trackRef.current
    if (!el) return
    const card = el.querySelector<HTMLElement>('[data-carousel-item]')
    const step = (card?.offsetWidth ?? 320) + 24
    el.scrollBy({ left: step * direction, behavior: 'smooth' })
  }

  const arrowSx = light
    ? {
        bgcolor: 'rgba(255,255,255,0.12)',
        color: '#fff',
        '&:hover': { bgcolor: 'rgba(255,255,255,0.24)' },
      }
    : { bgcolor: palette.accentSoft, '&:hover': { bgcolor: palette.accentSoft } }

  return (
    <Box sx={{ position: 'relative' }} data-aos="fade-up">
      <Stack direction="row" justifyContent="flex-end" spacing={1} sx={{ mb: 1.5 }}>
        <IconButton onClick={() => scrollByCard(-1)} aria-label={t('common.previous')} sx={arrowSx}>
          <ArrowBackIosNewIcon fontSize="small" />
        </IconButton>
        <IconButton onClick={() => scrollByCard(1)} aria-label={t('common.next')} sx={arrowSx}>
          <ArrowForwardIosIcon fontSize="small" />
        </IconButton>
      </Stack>

      <Box
        ref={trackRef}
        sx={{
          display: 'flex',
          gap: 3,
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          pb: 2,
          px: 0.5,
          '&::-webkit-scrollbar': { height: 8 },
          '&::-webkit-scrollbar-thumb': { bgcolor: light ? 'rgba(255,255,255,0.24)' : palette.accentSoft, borderRadius: 4 },
        }}
      >
        {projects.map((project) => (
          <Box
            key={project.title}
            data-carousel-item
            sx={{
              flex: '0 0 auto',
              width: { xs: '85%', sm: 320 },
              scrollSnapAlign: 'start',
            }}
          >
            <ProjectCardCompact project={project} onOpen={setSelected} />
          </Box>
        ))}
      </Box>

      <ProjectDetailsDialog project={selected} onClose={() => setSelected(null)} />
    </Box>
  )
}
