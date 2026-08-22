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
import { SectionTitle } from '../atoms/SectionTitle'
import { ContactInfoRow } from '../molecules/ContactInfoRow'
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
    const formData = new FormData(event.currentTarget)
    const payload = Object.fromEntries(formData.entries())
    payload.access_key = WEB3FORMS_ACCESS_KEY

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      })
      const result = await response.json()
      setStatus(result.success ? 'success' : 'error')
      if (result.success) event.currentTarget.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <Box component="section" id="contact" sx={{ py: 8, backgroundImage: palette.sidebarGradient }}>
      <Container maxWidth="lg">
        <SectionTitle title="Contacto" light />

        <Grid container spacing={5}>
          <Grid item xs={12} md={5} data-aos="fade-right">
            <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.85)', mb: 3 }}>
              ¿Quieres contactarme? Escríbeme por este formulario y el mensaje llegará directo a mi correo
              electrónico. Este canal está activo y funcional — te respondo lo antes posible.
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
            <Paper elevation={0} sx={{ p: { xs: 3, md: 4 }, borderRadius: 3 }}>
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
                  {status === 'success' && <Alert severity="success">Tu mensaje ha sido enviado. ¡Gracias!</Alert>}
                  {status === 'error' && (
                    <Alert severity="error">Hubo un error al enviar el mensaje. Intenta de nuevo.</Alert>
                  )}
                  <Box sx={{ textAlign: 'center' }}>
                    <Button
                      type="submit"
                      variant="contained"
                      disabled={status === 'loading'}
                      sx={{ px: 5, py: 1.25 }}
                    >
                      {status === 'loading' ? (
                        <CircularProgress size={20} sx={{ color: '#fff' }} />
                      ) : (
                        'Enviar mensaje'
                      )}
                    </Button>
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
