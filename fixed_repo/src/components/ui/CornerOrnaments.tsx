import { motion } from 'framer-motion'

/**
 * Ornamentos discretos nos quatro cantos — folha, estrela, flor, borboleta.
 * Presentes em todas as páginas (regra do Design System, Fase 05).
 * Micro-movimento sutil (balanço/cintilar), nunca competindo com o conteúdo.
 */
export default function CornerOrnaments() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <motion.svg
        viewBox="0 0 24 24"
        className="absolute -top-1.5 -left-1.5 w-14 h-14 opacity-80"
        animate={{ rotate: [0, -4, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <path d="M12 2C7 6 5 11 8 16C10 13 12 10 12 2Z" fill="var(--color-accent-verde)" />
      </motion.svg>

      <motion.svg
        viewBox="0 0 10 10"
        className="absolute -top-1 -right-0.5 w-12 h-12"
        animate={{ opacity: [1, 0.5, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <path d="M5 0 L6 4 L10 5 L6 6 L5 10 L4 6 L0 5 L4 4 Z" fill="var(--color-accent-amarelo)" />
      </motion.svg>

      <svg viewBox="0 0 24 24" className="absolute -bottom-2 -left-2 w-14 h-14">
        <circle cx="12" cy="8" r="4.6" fill="var(--color-rosa)" />
        <circle cx="7" cy="12.5" r="4.6" fill="var(--color-rosa)" />
        <circle cx="17" cy="12.5" r="4.6" fill="var(--color-rosa)" />
        <circle cx="12" cy="15" r="4.6" fill="var(--color-rosa)" />
        <circle cx="12" cy="11.5" r="2.4" fill="var(--color-accent-amarelo)" />
      </svg>

      <motion.svg
        viewBox="0 0 24 24"
        className="absolute -bottom-1.5 -right-1.5 w-14 h-14"
        animate={{ x: [0, 4, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <path d="M12 4C7 -1 1 1 1 8C1 13 8 13 12 12C8 13 1 13 1 18C1 24 7 26 12 21" fill="var(--color-accent-azul)" />
        <path d="M12 4C17 -1 23 1 23 8C23 13 16 13 12 12C16 13 23 13 23 18C23 24 17 26 12 21" fill="var(--color-rosa)" />
      </motion.svg>
    </div>
  )
}
