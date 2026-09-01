import { Box, Typography } from '@mui/material'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import { Tilt3D } from '../atoms/Tilt3D'
import type { CertificationItem } from '../../data/education'
import { palette } from '../../theme/theme'

const GOLD = '#F5B800'

interface CertificationBadgeCardProps {
  cert: CertificationItem
}

export function CertificationBadgeCard({ cert }: CertificationBadgeCardProps) {
  const isAchievement = cert.variant === 'achievement'

  return (
    <Tilt3D intensity={14} borderRadius={16} sx={{ height: '100%' }}>
      <Box
        sx={{
          height: '100%',
          textAlign: 'center',
          p: 3,
          borderRadius: 4,
          bgcolor: isAchievement ? '#FFFBEB' : '#fff',
          boxShadow: isAchievement ? `0 10px 24px rgba(245,184,0,0.22)` : '0 10px 24px rgba(30,27,75,0.1)',
          border: isAchievement ? `1px solid ${GOLD}` : '1px solid rgba(0,0,0,0.06)',
        }}
        data-aos="zoom-in"
      >
        <Box
          sx={{
            width: 56,
            height: 56,
            mx: 'auto',
            mb: 1.5,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            backgroundImage: isAchievement ? `linear-gradient(135deg, ${GOLD}, #B8860B)` : palette.sidebarGradient,
          }}
        >
          {isAchievement ? (
            <EmojiEventsIcon sx={{ color: '#fff' }} />
          ) : (
            <WorkspacePremiumIcon sx={{ color: '#fff' }} />
          )}
        </Box>
        <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
          {cert.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {cert.issuer}
        </Typography>
        <Typography variant="caption" sx={{ color: isAchievement ? '#B8860B' : palette.accent, fontWeight: 700 }}>
          {cert.year}
        </Typography>
      </Box>
    </Tilt3D>
  )
}
