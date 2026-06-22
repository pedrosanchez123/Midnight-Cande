import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// En el build para GitHub Pages la app vive en /Midnight-Cande/.
// En desarrollo local se sirve desde la raíz (/).
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/Midnight-Cande/' : '/',
  plugins: [react()],
}))
