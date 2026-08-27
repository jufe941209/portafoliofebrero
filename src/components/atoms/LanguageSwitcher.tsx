import type { MouseEvent } from 'react'
import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import { useTranslation } from 'react-i18next'
import type { Locale } from '../../hooks/useLocale'
import { useLocale } from '../../hooks/useLocale'

const OPTIONS: { locale: Locale; flag: string; code: string }[] = [
  { locale: 'es', flag: '🇨🇴', code: 'ES' },
  { locale: 'en', flag: '🇺🇸', code: 'EN' },
]

interface LanguageSwitcherProps {
  light?: boolean
}

export function LanguageSwitcher({ light = true }: LanguageSwitcherProps) {
  const { t, i18n } = useTranslation()
  const locale = useLocale()

  const handleChange = (_event: MouseEvent<HTMLElement>, next: Locale | null) => {
    if (next) i18n.changeLanguage(next)
  }

  return (
    <ToggleButtonGroup
      value={locale}
      exclusive
      onChange={handleChange}
      size="small"
      aria-label={t('language.switchTo', { language: '' }).replace(/:?\s*$/, '')}
      sx={{
        bgcolor: light ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.04)',
        borderRadius: 999,
        p: 0.4,
        gap: 0.4,
        '& .MuiToggleButtonGroup-grouped': {
          border: 0,
          borderRadius: '999px !important',
        },
      }}
    >
      {OPTIONS.map((option) => (
        <ToggleButton
          key={option.locale}
          value={option.locale}
          aria-label={t('language.switchTo', { language: t(`language.${option.locale}`) })}
          sx={{
            px: 1.5,
            py: 0.5,
            minWidth: 0,
            gap: 0.6,
            fontSize: 12.5,
            fontWeight: 700,
            letterSpacing: 0.3,
            textTransform: 'none',
            color: light ? 'rgba(255,255,255,0.75)' : 'text.secondary',
            '&.Mui-selected': {
              bgcolor: light ? 'rgba(255,255,255,0.95)' : 'primary.main',
              color: light ? 'text.primary' : '#fff',
            },
            '&.Mui-selected:hover': {
              bgcolor: light ? 'rgba(255,255,255,0.95)' : 'primary.dark',
            },
          }}
        >
          <span role="img" aria-hidden="true" style={{ fontSize: 15, lineHeight: 1 }}>
            {option.flag}
          </span>
          {option.code}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  )
}
