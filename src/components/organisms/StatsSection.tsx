import { Box, Grid, Typography } from '@mui/material'
import { AnimatedCounter } from '../atoms/AnimatedCounter'
import { Tilt3D } from '../atoms/Tilt3D'
import { stats } from '../../data/stats'
import { palette } from '../../theme/theme'

export function StatsSection() {
  return (
    <Box sx={{ py: 8, backgroundImage: palette.sidebarGradient, color: '#fff' }}>
      <Box sx={{ maxWidth: 1100, mx: 'auto', px: 3 }}>
        <Grid container spacing={3}>
          {stats.map((stat) => (
            <Grid item xs={12} sm={6} md={4} key={stat.label}>
              <Tilt3D intensity={8} borderRadius={16}>
                <Box
                  sx={{
                    textAlign: 'center',
                    py: 3,
                    px: 2,
                    height: '100%',
                    borderRadius: 4,
                    bgcolor: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.14)',
                    backdropFilter: 'blur(6px)',
                  }}
                  data-aos="zoom-in"
                >
                  <Box sx={{ color: palette.accent }}>
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </Box>
                  <Typography variant="body2" sx={{ mt: 1, color: 'rgba(255,255,255,0.85)' }}>
                    {stat.label}
                  </Typography>
                </Box>
              </Tilt3D>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}
