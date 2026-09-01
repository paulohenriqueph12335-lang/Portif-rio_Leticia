import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'

interface Particle {
  id: number
  left: number
  top: number
  size: number
  isStar: boolean
  color: string
  dx: number
  dy: number
  delay: number
}

const COLORS = ['#E9B84D', '#84C9E3', '#F0C9D2', '#A9BBA0', '#c25a76']

function generateParticles(): Particle[] {
  return Array.from({ length: 34 }).map((_, i) => {
    const angle = Math.random() * Math.PI * 2
    const dist = 90 + Math.random() * 140
    return {
      id: i,
      left: 40 + Math.random() * 20,
      top: 30 + Math.random() * 30,
      size: Math.random() < 0.35 ? 8 + Math.random() * 8 : 3 + Math.random() * 5,
      isStar: Math.random() < 0.35,
      color: COLORS[i % COLORS.length],
      dx: Math.cos(angle) * dist,
      dy: Math.sin(angle) * dist,
      delay: Math.random() * 0.3,
    }
  })
}

/**
 * Explosão de partículas ("poeira mágica") disparada a cada troca de rota.
 * ~2.2s de duração, conforme calibração final aprovada (Fase 05).
 * Respeita prefers-reduced-motion (ver src/styles/tokens.css).
 */
export default function MagicDustTransition() {
  const location = useLocation()
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    setParticles(generateParticles())
    const timeout = setTimeout(() => setParticles([]), 2600)
    return () => clearTimeout(timeout)
  }, [location.pathname])

  return (
    <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden">
      <AnimatePresence>
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: p.size,
              height: p.size,
              background: p.color,
              borderRadius: p.isStar ? 0 : '50%',
              clipPath: p.isStar
                ? 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
                : undefined,
            }}
            initial={{ opacity: 0, scale: 0.3, rotate: 0, x: 0, y: 0 }}
            animate={{
              opacity: [0, 1, 0.9, 0],
              scale: [0.3, 1.1, 1.1],
              rotate: 180,
              x: p.dx,
              y: p.dy,
            }}
            transition={{ duration: 2.2, delay: p.delay, ease: [0.2, 0.6, 0.3, 1] }}
          />
        ))}
      </AnimatePresence>
    </div>
  )
}
