import { Button, type ButtonProps } from '@mui/material'
import DownloadIcon from '@mui/icons-material/Download'
import { profile } from '../../data/profile'

type DownloadCvButtonProps = Omit<ButtonProps<'a'>, 'href' | 'component' | 'children'>

export function DownloadCvButton(props: DownloadCvButtonProps) {
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
      Descargar CV
    </Button>
  )
}
