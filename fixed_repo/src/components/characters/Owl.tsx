import { motion } from 'framer-motion'

interface OwlProps {
  className?: string
}

/** Coruja original — pousada no galho da página de Contato. Sabedoria calma (arquétipo "Sábio em formação"). */
export default function Owl({ className = '' }: OwlProps) {
  return (
    <motion.svg
      viewBox="0 0 76 76"
      className={className}
      aria-hidden="true"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <ellipse cx="38" cy="46" rx="30" ry="28" fill="#8E9E86" />
      <path d="M10 24 L4 8 L22 20 Z" fill="#8E9E86" />
      <path d="M66 24 L72 8 L54 20 Z" fill="#8E9E86" />
      <circle cx="27" cy="40" r="12" fill="#F4EEDF" />
      <circle cx="49" cy="40" r="12" fill="#F4EEDF" />
      <circle cx="27" cy="40" r="5" fill="#3B4A34" />
      <circle cx="49" cy="40" r="5" fill="#3B4A34" />
      <path d="M38 46 L34 54 L42 54 Z" fill="#E9B84D" />
      <path d="M18 62c8 6 32 6 40 0" stroke="#77876f" strokeWidth="1.4" fill="none" strokeLinecap="round" />
    </motion.svg>
  )
}
