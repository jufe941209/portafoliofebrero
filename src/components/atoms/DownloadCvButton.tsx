import { Button, type ButtonProps } from '@mui/material'
import { useTranslation } from 'react-i18next'
import DownloadIcon from '@mui/icons-material/Download'
import { useProfile } from '../../data/profile'

type DownloadCvButtonProps = Omit<ButtonProps<'a'>, 'href' | 'component' | 'children'>

export function DownloadCvButton(props: DownloadCvButtonProps) {
  const { t } = useTranslation()
  const profile = useProfile()

  return (
    <Button
      component="a"
      href={profile.cvUrl}
      download
      variant="outlined"
      size="small"
      startIcon={<DownloadIcon />}
      {...props}
    >
      {t('common.downloadCv')}
    </Button>
  )
}
