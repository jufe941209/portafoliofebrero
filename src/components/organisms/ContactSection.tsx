import { useState, type FormEvent } from 'react'
import {
  Alert,
  Box,
  Button,
  Chip,
  CircularProgress,
  Container,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead'
import PublicIcon from '@mui/icons-material/Public'
import SendIcon from '@mui/icons-material/Send'
import VerifiedIcon from '@mui/icons-material/Verified'
import { SectionTitle } from '../atoms/SectionTitle'
import { ContactInfoRow } from '../molecules/ContactInfoRow'
import { profile } from '../../data/profile'
import { palette } from '../../theme/theme'

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error'

export function ContactSection() {
  const [status, setStatus] = useState<SubmitStatus>('idle')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!WEB3FORMS_ACCESS_KEY) {
      setStatus('error')
      return
    }

    setStatus('loading')
    const form = event.currentTarget
    const formData = new FormData(form)
    formData.append('access_key', WEB3FORMS_ACCESS_KEY)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      const result = await response.json()
      setStatus(result.success ? 'success' : 'error')
      if (result.success) form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <Box component="section" id="contact" sx={{ py: { xs: 8, md: 10 }, backgroundImage: palette.sidebarGradient }}>
      <Container maxWidth="lg">
        <SectionTitle
          title="Contacto"
          subtitle="¿Tienes un proyecto o una oportunidad en mente? Escríbeme — este formulario funciona de verdad y tu mensaje llega directo a mi correo."
          light
        />

        <Grid container spacing={{ xs: 4, md: 5 }} alignItems="stretch">
          <Grid item xs={12} md={5} data-aos="fade-right">
            <Chip
              icon={<VerifiedIcon sx={{ color: `${palette.accent} !important`, fontSize: 18 }} />}
              label="Canal activo — respondo personalmente en menos de 24h"
              sx={{
                bgcolor: 'rgba(255,255,255,0.14)',
                color: '#fff',
                fontWeight: 700,
                mb: 3,
                height: 'auto',
                py: 1,
                px: 0.5,
                fontSize: { xs: 12.5, sm: 13 },
                '& .MuiChip-label': { whiteSpace: 'normal', display: 'block', lineHeight: 1.4 },
              }}
            />

            <Typography
              variant="body1"
              sx={{ color: 'rgba(255,255,255,0.88)', mb: 3, fontSize: { xs: 15, md: 16 }, lineHeight: 1.7 }}
            >
              Cuéntame sobre tu proyecto, una vacante o simplemente escríbeme para conectar — leo cada mensaje
              y te respondo yo mismo, no un bot.
            </Typography>

            <ContactInfoRow
              icon={MarkEmailReadIcon}
              label="Correo directo"
              value="El formulario envía el mensaje a mi bandeja de entrada al instante."
              light
            />
            <ContactInfoRow
              icon={PublicIcon}
              label="Zona horaria"
              value="Colombia (GMT-5) — disponible para coordinar con equipos internacionales."
              light
            />

            <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mt: 2 }}>
              {['Remoto', 'Freelance', 'Tiempo completo', 'Async-first'].map((tag) => (
                <Chip
                  key={tag}
                  label={tag}
                  size="small"
                  sx={{ bgcolor: 'rgba(255,255,255,0.14)', color: '#fff', fontWeight: 600 }}
                />
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={7} data-aos="fade-left">
            <Paper
              elevation={0}
              sx={{
                position: 'relative',
                overflow: 'hidden',
                p: { xs: 3, sm: 4 },
                borderRadius: 4,
                boxShadow: '0 24px 60px rgba(9,8,30,0.35)',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 6,
                  backgroundImage: `linear-gradient(90deg, ${palette.brandStart}, ${palette.accent})`,
                },
              }}
            >
              {!WEB3FORMS_ACCESS_KEY && (
                <Alert severity="warning" sx={{ mb: 2 }}>
                  El formulario aún no tiene configurada la clave de envío — vuelve a intentarlo más tarde.
                </Alert>
              )}
              <Box component="form" onSubmit={handleSubmit} noValidate>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField name="name" label="Tu nombre" fullWidth required />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField name="email" type="email" label="Tu email" fullWidth required />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField name="subject" label="Asunto" fullWidth required />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField name="message" label="Mensaje" fullWidth required multiline rows={6} />
                  </Grid>
                </Grid>

                <Stack sx={{ mt: 3 }} spacing={2}>
                  {status === 'success' && (
                    <Alert severity="success" variant="filled">
                      ¡Mensaje enviado con éxito! Ya está en mi bandeja de entrada — te responderé pronto.
                    </Alert>
                  )}
                  {status === 'error' && (
                    <Alert severity="error" variant="filled">
                      Hubo un problema al confirmar el envío. Si el mensaje no llegó, escríbeme directo a{' '}
                      <Box
                        component="a"
                        href={`mailto:${profile.email}`}
                        sx={{ color: 'inherit', fontWeight: 700, textDecoration: 'underline' }}
                      >
                        {profile.email}
                      </Box>
                      .
                    </Alert>
                  )}
                  <Box sx={{ textAlign: 'center' }}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      disabled={status === 'loading'}
                      endIcon={status === 'loading' ? null : <SendIcon />}
                      sx={{
                        px: 6,
                        py: 1.5,
                        fontSize: 16,
                        width: { xs: '100%', sm: 'auto' },
                        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                        '&:hover': { transform: 'translateY(-2px)' },
                      }}
                    >
                      {status === 'loading' ? <CircularProgress size={22} sx={{ color: '#fff' }} /> : 'Enviar mensaje'}
                    </Button>
                    <Typography variant="caption" sx={{ display: 'block', mt: 1.5, color: 'text.secondary' }}>
                      📩 Tu mensaje llega directo a mi correo — sin intermediarios.
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
