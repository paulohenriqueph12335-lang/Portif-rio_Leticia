import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* basename precisa bater com o "base" do vite.config.ts, pois o site
        vive em /Portif-rio_Leticia/ no GitHub Pages, não na raiz do domínio */}
    <BrowserRouter basename="/Portif-rio_Leticia/">
      <App />
    </BrowserRouter>
  </StrictMode>,
)
