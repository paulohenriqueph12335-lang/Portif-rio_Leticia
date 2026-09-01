import { motion } from 'framer-motion'

interface ButterflyProps {
  className?: string
}

/** Borboleta original — cruza lentamente a seção Filosofia. Símbolo de transformação. */
export default function Butterfly({ className = '' }: ButterflyProps) {
  return (
    <motion.svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
    >
      <path
        d="M12 4C8 0 2 2 2 8C2 13 8 13 12 12C8 13 2 13 2 17C2 23 8 24 12 20"
        fill="var(--color-personagem)"
      />
      <path
        d="M12 4C16 0 22 2 22 8C22 13 16 13 12 12C16 13 22 13 22 17C22 23 16 24 12 20"
        fill="var(--color-accent-azul)"
      />
      <circle cx="12" cy="5" r="1.4" fill="#4A3F35" />
    </motion.svg>
  )
}
