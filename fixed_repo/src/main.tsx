import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* Sem basename: o site usa domínio próprio (portfolioleticia.com.br)
        servido na raiz — não precisa de subcaminho como em github.io/repo/ */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
