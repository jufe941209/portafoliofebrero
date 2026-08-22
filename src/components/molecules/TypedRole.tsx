import { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import { Box } from '@mui/material'
import { palette } from '../../theme/theme'

interface TypedRoleProps {
  strings: string[]
}

export function TypedRole({ strings }: TypedRoleProps) {
  const elRef = useRef<HTMLSpanElement | null>(null)

  useEffect(() => {
    if (!elRef.current) return
    const typed = new Typed(elRef.current, {
      strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
    })
    return () => typed.destroy()
  }, [strings])

  return (
    <Box component="span" sx={{ color: palette.accent, fontWeight: 600 }}>
      <Box component="span" ref={elRef} />
    </Box>
  )
}
