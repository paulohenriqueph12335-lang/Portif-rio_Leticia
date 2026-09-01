import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Base "/" porque o site usa domínio próprio (portfolioleticia.com.br),
// servido na raiz do domínio — não em github.io/nome-do-repositorio/.
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
})


