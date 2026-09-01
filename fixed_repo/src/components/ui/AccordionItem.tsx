import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface AccordionItemProps {
  question: string
  answer: string
}

export default function AccordionItem({ question, answer }: AccordionItemProps) {
  const [open, setOpen] = useState(false)

  return (
    <div className="bg-white rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 px-5 py-3.5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px]"
      >
        <span className="font-[family-name:var(--font-corpo)] text-sm text-[var(--color-text-primary)]">
          {question}
        </span>
        <span
          aria-hidden="true"
          className="shrink-0 w-6 h-6 rounded-full bg-[var(--color-rosa-claro)] text-[var(--color-text-primary)] flex items-center justify-center text-sm font-bold"
        >
          {open ? '\u2212' : '+'}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="font-[family-name:var(--font-corpo)] text-sm text-[var(--color-text-secondary)] leading-relaxed px-5 pb-4">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
