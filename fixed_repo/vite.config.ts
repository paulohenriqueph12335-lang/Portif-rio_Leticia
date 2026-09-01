import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Base path necessário para GitHub Pages, já que o site fica em
// https://<usuario>.github.io/Portif-rio_Leticia/ (não na raiz do domínio).
export default defineConfig({
  base: '/Portif-rio_Leticia/',
  plugins: [react(), tailwindcss()],
})

