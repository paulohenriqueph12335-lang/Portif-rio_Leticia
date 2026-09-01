import { motion } from 'framer-motion'

interface FoxProps {
  className?: string
}

/** Raposa original — espia discretamente no Hero da Home. Pisca lentamente ao entrar em viewport. */
export default function Fox({ className = '' }: FoxProps) {
  return (
    <motion.svg
      viewBox="0 0 118 118"
      className={className}
      aria-hidden="true"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <path d="M30 34 L18 6 L44 26 Z" fill="var(--color-personagem-quente)" />
      <path d="M88 34 L100 6 L74 26 Z" fill="var(--color-personagem-quente)" />
      <path d="M31 30 L24 14 L40 26 Z" fill="#F4E6D8" />
      <path d="M87 30 L94 14 L78 26 Z" fill="#F4E6D8" />
      <path
        d="M59 20 C86 20 100 44 96 66 C93 84 78 96 59 96 C40 96 25 84 22 66 C18 44 32 20 59 20 Z"
        fill="#D98E5E"
      />
      <path
        d="M59 58 C74 58 82 70 78 82 C75 91 66 96 59 96 C52 96 43 91 40 82 C36 70 44 58 59 58 Z"
        fill="#F4E6D8"
      />
      <ellipse cx="59" cy="82" rx="5" ry="3.5" fill="#5A3A28" />
      <motion.g
        animate={{ scaleY: [1, 0.1, 1] }}
        transition={{ duration: 0.25, repeat: Infinity, repeatDelay: 3.5 }}
        style={{ transformOrigin: '59px 58px' }}
      >
        <ellipse cx="45" cy="58" rx="4" ry="5" fill="#4A3B2F" />
        <ellipse cx="73" cy="58" rx="4" ry="5" fill="#4A3B2F" />
      </motion.g>
    </motion.svg>
  )
}
