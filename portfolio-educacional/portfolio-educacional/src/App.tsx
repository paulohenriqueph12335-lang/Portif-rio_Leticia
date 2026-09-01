import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import FixedContactButton from './components/layout/FixedContactButton'
import MagicDustTransition from './components/transitions/MagicDustTransition'
import CornerOrnaments from './components/ui/CornerOrnaments'
import Home from './routes/Home'
import Sobre from './routes/Sobre'
import Metodologia from './routes/Metodologia'
import Materiais from './routes/Materiais'
import Formacao from './routes/Formacao'
import Faq from './routes/Faq'
import Contato from './routes/Contato'
import Galeria from './routes/Galeria'

export default function App() {
  const location = useLocation()

  return (
    <div className="relative min-h-screen">
      <CornerOrnaments />
      <Header />
      <MagicDustTransition />

      <main className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/metodologia" element={<Metodologia />} />
              <Route path="/galeria" element={<Galeria />} />
              <Route path="/materiais" element={<Materiais />} />
              <Route path="/formacao" element={<Formacao />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/contato" element={<Contato />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
      <FixedContactButton />
    </div>
  )
}
