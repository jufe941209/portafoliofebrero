import { Box, Chip, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike'
import CodeIcon from '@mui/icons-material/Code'
import type { JourneyMilestone } from '../../data/journey'
import { palette } from '../../theme/theme'

const TRACK_COLOR = { sport: '#F97316', tech: palette.accent }
const TRACK_ICON = { sport: DirectionsBikeIcon, tech: CodeIcon }

interface JourneyMilestoneCardProps {
  milestone: JourneyMilestone
  align: 'left' | 'right'
}

export function JourneyMilestoneCard({ milestone, align }: JourneyMilestoneCardProps) {
  const { t } = useTranslation()
  const color = TRACK_COLOR[milestone.track]
  const Icon = TRACK_ICON[milestone.track]
  const trackLabel = milestone.track === 'sport' ? t('journey.trackSport') : t('journey.trackTech')

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: { md: align === 'left' ? 'flex-end' : 'flex-start' },
        textAlign: { xs: 'left', md: align === 'left' ? 'right' : 'left' },
      }}
      data-aos={align === 'left' ? 'fade-right' : 'fade-left'}
    >
      <Box sx={{ maxWidth: 380, width: '100%' }}>
        <Chip
          icon={<Icon sx={{ color: '#fff !important', fontSize: 16 }} />}
          label={`${milestone.year} · ${trackLabel}`}
          size="small"
          sx={{ bgcolor: color, color: '#fff', mb: 1, fontWeight: 700 }}
        />
        <Typography variant="h6" sx={{ fontSize: 16, color: '#fff' }}>
          {milestone.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
          {milestone.detail}
        </Typography>
      </Box>
    </Box>
  )
}
