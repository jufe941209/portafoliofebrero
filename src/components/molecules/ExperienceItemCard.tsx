import { Box, Card, CardContent, Chip, Divider, List, ListItem, Stack, Typography, Alert } from '@mui/material'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import WorkHistoryIcon from '@mui/icons-material/WorkHistory'
import type { ExperienceItem } from '../../data/experience'
import { Tilt3D } from '../atoms/Tilt3D'
import { palette } from '../../theme/theme'

interface ExperienceItemCardProps {
  item: ExperienceItem
}

export function ExperienceItemCard({ item }: ExperienceItemCardProps) {
  return (
    <Tilt3D intensity={4} borderRadius={16} sx={{ mb: 3 }}>
      <Card sx={{ boxShadow: 4 }} data-aos="fade-up">
        <CardContent sx={{ p: 3 }}>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            justifyContent="space-between"
            alignItems={{ xs: 'flex-start', sm: 'center' }}
            spacing={1}
            sx={{ mb: 1.5 }}
          >
            <Stack direction="row" spacing={1.5} alignItems="center">
              <Box
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundImage: palette.sidebarGradient,
                  flexShrink: 0,
                }}
              >
                <WorkHistoryIcon sx={{ color: '#fff', fontSize: 18 }} />
              </Box>
              <Box>
                <Typography variant="h6" sx={{ fontSize: 17, lineHeight: 1.3 }}>
                  {item.role}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {item.company} · {item.location}
                </Typography>
              </Box>
            </Stack>
            <Chip
              label={item.period}
              size="small"
              sx={{ bgcolor: palette.accentSoft, color: palette.accentHover, fontWeight: 700, flexShrink: 0 }}
            />
          </Stack>

          <Divider sx={{ mb: 1.5 }} />

          <List dense disablePadding>
            {item.bullets.map((bullet) => (
              <ListItem key={bullet} disableGutters sx={{ alignItems: 'flex-start', py: 0.4 }}>
                <ChevronRightIcon fontSize="small" sx={{ color: palette.accent, mr: 1, mt: '2px' }} />
                <Typography variant="body2">{bullet}</Typography>
              </ListItem>
            ))}
          </List>
          {item.achievement && (
            <Alert severity="success" variant="outlined" sx={{ mt: 1.5 }}>
              {item.achievement}
            </Alert>
          )}
        </CardContent>
      </Card>
    </Tilt3D>
  )
}
