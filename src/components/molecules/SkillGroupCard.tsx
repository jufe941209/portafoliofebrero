import { Box, Chip, Stack, Typography } from '@mui/material'
import type { SkillGroup } from '../../data/skills'
import { palette } from '../../theme/theme'

interface SkillGroupCardProps {
  group: SkillGroup
}

export function SkillGroupCard({ group }: SkillGroupCardProps) {
  return (
    <Box sx={{ mb: 3 }} data-aos="fade-up">
      <Typography
        variant="h6"
        sx={{ fontSize: 16, color: palette.accent, mb: 1.5, textTransform: 'uppercase', letterSpacing: 0.5 }}
      >
        {group.category}
      </Typography>
      <Stack direction="row" flexWrap="wrap" gap={1}>
        {group.items.map((item) => (
          <Chip key={item} label={item} size="small" variant="outlined" sx={{ borderColor: palette.accent }} />
        ))}
      </Stack>
    </Box>
  )
}
