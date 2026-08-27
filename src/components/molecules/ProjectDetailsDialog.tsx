import {
  Box,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  Typography,
} from '@mui/material'
import { useTranslation } from 'react-i18next'
import CloseIcon from '@mui/icons-material/Close'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import type { CompactProject } from '../../data/projects'
import { BrowserMockCard } from './BrowserMockCard'
import { palette } from '../../theme/theme'

interface ProjectDetailsDialogProps {
  project: CompactProject | null
  onClose: () => void
}

export function ProjectDetailsDialog({ project, onClose }: ProjectDetailsDialogProps) {
  const { t } = useTranslation()

  return (
    <Dialog open={Boolean(project)} onClose={onClose} maxWidth="sm" fullWidth>
      {project && (
        <>
          <DialogTitle sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', pr: 6 }}>
            {project.title}
            <IconButton onClick={onClose} sx={{ position: 'absolute', right: 12, top: 12 }} aria-label={t('projects.close')}>
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent dividers>
            {project.mock && (
              <Box sx={{ mb: 2, borderRadius: 2, overflow: 'hidden' }}>
                <BrowserMockCard
                  url={project.url.replace('https://', '').replace(/\/$/, '')}
                  brand={project.mock.brand}
                  accentFrom={project.mock.accentFrom}
                  accentTo={project.mock.accentTo}
                />
              </Box>
            )}
            {project.image && (
              <Box
                component="img"
                src={project.image}
                alt={project.title}
                sx={{ width: '100%', borderRadius: 2, mb: 2 }}
              />
            )}
            <Typography variant="body1" sx={{ mb: 2 }}>
              {project.longDescription}
            </Typography>
            {project.stack && project.stack.length > 0 && (
              <>
                <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1 }}>
                  {t('projects.technologies')}
                </Typography>
                <Stack direction="row" flexWrap="wrap" gap={1}>
                  {project.stack.map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
                      size="small"
                      sx={{ bgcolor: palette.sidebar, color: '#fff', fontWeight: 600 }}
                    />
                  ))}
                </Stack>
              </>
            )}
          </DialogContent>
          <DialogActions sx={{ p: 2.5 }}>
            <Button
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              endIcon={<OpenInNewIcon />}
            >
              {t('projects.viewLive')}
            </Button>
          </DialogActions>
        </>
      )}
    </Dialog>
  )
}
