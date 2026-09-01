import { Box, Chip, Divider, Stack, Typography } from '@mui/material'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import { useIcfesResult } from '../../data/achievement'
import { palette } from '../../theme/theme'

const GOLD = '#F5B800'
const GOLD_SOFT = 'rgba(245,184,0,0.14)'

export function AcademicAchievementCard() {
  const icfes = useIcfesResult()

  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 4,
        p: { xs: 3, sm: 4 },
        my: 4,
        backgroundImage: palette.sidebarGradient,
        border: `1px solid ${GOLD_SOFT}`,
        boxShadow: `0 20px 50px rgba(9,8,30,0.35), 0 0 0 1px ${GOLD_SOFT}`,
      }}
      data-aos="zoom-in"
    >
      <Box
        sx={{
          position: 'absolute',
          top: -60,
          right: -60,
          width: 220,
          height: 220,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${GOLD_SOFT} 0%, transparent 70%)`,
        }}
      />

      <Stack direction="row" spacing={2} alignItems="center" sx={{ position: 'relative', mb: 2 }}>
        <Box
          sx={{
            width: 52,
            height: 52,
            flexShrink: 0,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: GOLD_SOFT,
            border: `1.5px solid ${GOLD}`,
          }}
        >
          <EmojiEventsIcon sx={{ color: GOLD, fontSize: 28 }} />
        </Box>
        <Box>
          <Typography
            variant="overline"
            sx={{ color: GOLD, fontWeight: 700, letterSpacing: 1, display: 'block', lineHeight: 1.4 }}
          >
            {icfes.examName} · {icfes.year}
          </Typography>
          <Typography variant="h5" sx={{ color: '#fff', fontSize: { xs: 18, sm: 21 }, fontWeight: 700 }}>
            {icfes.headline}
          </Typography>
        </Box>
      </Stack>

      <Typography
        variant="body1"
        sx={{ position: 'relative', color: 'rgba(255,255,255,0.88)', fontSize: { xs: 14.5, sm: 15.5 }, lineHeight: 1.7, mb: 3 }}
      >
        {icfes.body}
      </Typography>

      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 2, sm: 3 }}
        divider={<Divider orientation="vertical" flexItem sx={{ borderColor: 'rgba(255,255,255,0.14)', display: { xs: 'none', sm: 'block' } }} />}
        sx={{ position: 'relative', mb: 3 }}
      >
        <Box>
          <Typography sx={{ color: GOLD, fontWeight: 800, fontSize: { xs: 30, sm: 34 }, lineHeight: 1 }}>
            {icfes.globalScore}
            <Typography component="span" sx={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.5em', fontWeight: 600 }}>
              /{icfes.maxScore}
            </Typography>
          </Typography>
          <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.7)' }}>
            {icfes.globalScoreLabel}
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ color: GOLD, fontWeight: 800, fontSize: { xs: 30, sm: 34 }, lineHeight: 1 }}>
            {icfes.percentileNational}
          </Typography>
          <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.7)' }}>
            {icfes.percentileNationalLabel}
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ color: GOLD, fontWeight: 800, fontSize: { xs: 30, sm: 34 }, lineHeight: 1 }}>
            {icfes.percentileNbc}
          </Typography>
          <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.7)' }}>
            {icfes.percentileNbcLabel} · {icfes.nbcLabel}
          </Typography>
        </Box>
      </Stack>

      <Stack direction="row" flexWrap="wrap" gap={1} sx={{ position: 'relative' }}>
        {icfes.modules.map((module) => (
          <Chip
            key={module.key}
            label={`${module.label} · ${module.score}/${icfes.maxScore}`}
            size="small"
            sx={{
              bgcolor: 'rgba(255,255,255,0.1)',
              color: '#fff',
              fontWeight: 600,
              border: '1px solid rgba(255,255,255,0.16)',
            }}
          />
        ))}
      </Stack>
    </Box>
  )
}
