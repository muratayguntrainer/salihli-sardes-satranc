import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Üyelik/oyun uygulaması sitenin /uygulama/ adresinde çalışır.
// Tanıtım sayfaları (site/ klasörü) derlemeden sonra dist/ köküne kopyalanır.
export default defineConfig({
  root: 'app',
  base: '/uygulama/',
  envDir: '..',
  plugins: [react()],
  build: {
    outDir: '../dist/uygulama',
    emptyOutDir: true,
  },
})
