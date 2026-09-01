import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Base "/" porque o site é publicado como "user page" gratuita do GitHub
// (repositório chamado paulohenriqueph12335-lang.github.io) — sem domínio
// próprio, servido direto na raiz da conta.
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
})


