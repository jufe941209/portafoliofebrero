import { Box, Container, Stack } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { SectionTitle } from '../atoms/SectionTitle'
import { JourneyMilestoneCard } from '../molecules/JourneyMilestoneCard'
import { useJourney } from '../../data/journey'
import { palette } from '../../theme/theme'

export function JourneySection() {
  const { t } = useTranslation()
  const journey = useJourney()

  return (
    <Box component="section" id="journey" sx={{ py: 8, bgcolor: '#0B1023' }}>
      <Container maxWidth="md">
        <SectionTitle title={t('journey.title')} subtitle={t('journey.subtitle')} light />

        <Box sx={{ position: 'relative' }}>
          <Box
            sx={{
              position: 'absolute',
              left: { xs: 7, md: '50%' },
              top: 0,
              bottom: 0,
              width: 3,
              transform: { md: 'translateX(-50%)' },
              background: `linear-gradient(180deg, #F97316, ${palette.accent})`,
              borderRadius: 2,
            }}
          />
          <Stack spacing={5}>
            {journey.map((milestone, index) => (
              <Box key={milestone.year + milestone.title} sx={{ position: 'relative', pl: { xs: 4, md: 0 } }}>
                <Box
                  sx={{
                    position: 'absolute',
                    left: { xs: 0, md: '50%' },
                    top: 6,
                    width: 16,
                    height: 16,
                    borderRadius: '50%',
                    transform: { md: 'translateX(-50%)' },
                    bgcolor: '#fff',
                    border: `3px solid ${milestone.track === 'sport' ? '#F97316' : palette.accent}`,
                    zIndex: 1,
                  }}
                />
                <JourneyMilestoneCard milestone={milestone} align={index % 2 === 0 ? 'left' : 'right'} />
              </Box>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}
