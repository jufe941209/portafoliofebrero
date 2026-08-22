import { Box, Card, CardContent, Stack, Typography } from '@mui/material'
import SchoolIcon from '@mui/icons-material/School'
import type { EducationItem } from '../../data/education'
import { palette } from '../../theme/theme'

interface EducationItemCardProps {
  item: EducationItem
}

export function EducationItemCard({ item }: EducationItemCardProps) {
  return (
    <Card sx={{ mb: 2, boxShadow: 2 }} data-aos="fade-up">
      <CardContent sx={{ p: 2.5, '&:last-child': { pb: 2.5 } }}>
        <Stack direction="row" spacing={1.5} alignItems="flex-start">
          <SchoolIcon sx={{ color: palette.accent, mt: '2px' }} />
          <Box>
            <Typography variant="h6" sx={{ fontSize: 15, lineHeight: 1.35 }}>
              {item.title}
            </Typography>
            <Typography variant="caption" sx={{ color: palette.accent, fontWeight: 700 }}>
              {item.period}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {item.institution} — {item.location}
            </Typography>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  )
}
