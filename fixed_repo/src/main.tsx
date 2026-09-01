import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* Sem basename: "user page" gratuita do GitHub, servida na raiz
        (https://paulohenriqueph12335-lang.github.io/) */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
