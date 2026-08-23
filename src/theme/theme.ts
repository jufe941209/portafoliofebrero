import { createTheme } from '@mui/material/styles'

export const SIDEBAR_WIDTH = 300

// Paleta profesional: violeta-índigo profundo como marca + azul cian como acento único.
// Menos colores, mejor contraste, coherencia total entre botones/chips/cards.
const colors = {
  brandDark: '#1E1B4B',
  brandStart: '#4338CA',
  brandEnd: '#7C3AED',
  sidebar: '#4338CA',
  accent: '#38BDF8',
  accentHover: '#0EA5E9',
  accentSoft: 'rgba(56,189,248,0.12)',
  backToTop: '#38BDF8',
  backToTopHover: '#0EA5E9',
  textDark: '#111827',
  textMuted: '#4B5563',
  sectionBg: '#F8FAFC',
  sidebarGradient: 'linear-gradient(160deg, #4338CA 0%, #6D28D9 55%, #312E81 100%)',
}

export const theme = createTheme({
  palette: {
    primary: { main: colors.sidebar, dark: colors.brandDark, light: colors.brandEnd },
    info: { main: colors.accent, light: colors.accentHover },
    secondary: { main: colors.accent },
    text: { primary: colors.textDark, secondary: colors.textMuted },
    background: { default: '#ffffff', paper: colors.sectionBg },
  },
  shape: { borderRadius: 10 },
  typography: {
    fontFamily: '"Open Sans", sans-serif',
    h1: { fontFamily: '"Poppins", sans-serif' },
    h2: { fontFamily: '"Raleway", sans-serif', fontWeight: 700 },
    h3: { fontFamily: '"Raleway", sans-serif', fontWeight: 600 },
    h4: { fontFamily: '"Raleway", sans-serif', fontWeight: 600 },
    h5: { fontFamily: '"Raleway", sans-serif', fontWeight: 600 },
    h6: { fontFamily: '"Raleway", sans-serif', fontWeight: 600 },
    button: { textTransform: 'none', fontWeight: 600 },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: { overflowX: 'hidden', width: '100%' },
        body: { scrollBehavior: 'smooth', overflowX: 'hidden', width: '100%' },
        a: { color: colors.accent, textDecoration: 'none' },
        'a:hover': { color: colors.accentHover },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 999, paddingLeft: 20, paddingRight: 20 },
        containedPrimary: {
          backgroundImage: `linear-gradient(135deg, ${colors.brandStart}, ${colors.brandEnd})`,
          boxShadow: '0 8px 20px rgba(67,56,202,0.28)',
          '&:hover': {
            backgroundImage: `linear-gradient(135deg, ${colors.brandEnd}, ${colors.brandStart})`,
            boxShadow: '0 10px 24px rgba(67,56,202,0.4)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { fontWeight: 600 },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 14,
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: { backgroundImage: 'none' },
      },
    },
  },
})

export const palette = colors
