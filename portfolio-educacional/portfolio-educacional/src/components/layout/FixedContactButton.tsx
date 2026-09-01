import { motion } from 'framer-motion'
import { contato } from '../../content/copy'

export default function FixedContactButton() {
  return (
    <motion.a
      href={contato.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-30 w-12 h-12 rounded-full bg-white border border-[var(--color-borda)] shadow-sm flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.6 }}
      whileHover={{ scale: 1.05 }}
    >
      <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
        <path
          d="M12 2C6.48 2 2 6.48 2 12c0 1.87.51 3.63 1.4 5.13L2 22l4.87-1.4A9.94 9.94 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2Z"
          fill="var(--color-accent-verde)"
        />
      </svg>
    </motion.a>
  )
}
