import { Box, Card, CardContent, Chip, Stack, Typography } from '@mui/material'
import WebIcon from '@mui/icons-material/Web'
import DnsIcon from '@mui/icons-material/Dns'
import StorageIcon from '@mui/icons-material/Storage'
import BuildIcon from '@mui/icons-material/Build'
import PsychologyIcon from '@mui/icons-material/Psychology'
import FactCheckIcon from '@mui/icons-material/FactCheck'
import SecurityIcon from '@mui/icons-material/Security'
import TranslateIcon from '@mui/icons-material/Translate'
import type { SvgIconComponent } from '@mui/icons-material'
import type { SkillGroup } from '../../data/skills'
import { Tilt3D } from '../atoms/Tilt3D'
import { palette } from '../../theme/theme'

const CATEGORY_ICONS: Record<string, SvgIconComponent> = {
  Frontend: WebIcon,
  Backend: DnsIcon,
  'Bases de datos': StorageIcon,
  'DevOps y Herramientas': BuildIcon,
  'IA y Datos': PsychologyIcon,
  'Testing y Documentación': FactCheckIcon,
  Seguridad: SecurityIcon,
  Idiomas: TranslateIcon,
}

interface SkillCategoryCardProps {
  group: SkillGroup
}

export function SkillCategoryCard({ group }: SkillCategoryCardProps) {
  const Icon = CATEGORY_ICONS[group.category] ?? WebIcon

  return (
    <Tilt3D intensity={8} borderRadius={16} sx={{ height: '100%' }}>
      <Card sx={{ height: '100%', boxShadow: 5 }} data-aos="fade-up">
        <CardContent sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundImage: palette.sidebarGradient,
                flexShrink: 0,
              }}
            >
              <Icon sx={{ color: '#fff', fontSize: 20 }} />
            </Box>
            <Typography variant="h6" sx={{ fontSize: 15, textTransform: 'uppercase', letterSpacing: 0.3 }}>
              {group.category}
            </Typography>
          </Box>
          <Stack direction="row" flexWrap="wrap" gap={1}>
            {group.items.map((item) => (
              <Chip key={item} label={item} size="small" variant="outlined" sx={{ borderColor: palette.accent }} />
            ))}
          </Stack>
        </CardContent>
      </Card>
    </Tilt3D>
  )
}
