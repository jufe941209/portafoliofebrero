import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (!id.includes('node_modules')) return undefined
          if (/[\\/](react|react-dom|react-router-dom)[\\/]/.test(id)) return 'vendor-react'
          if (/[\\/]@mui[\\/]/.test(id)) return 'vendor-mui'
          if (/[\\/](i18next|react-i18next)[\\/]/.test(id)) return 'vendor-i18n'
          return undefined
        },
      },
    },
  },
})
