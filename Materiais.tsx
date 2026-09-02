import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionEyebrow from '../components/ui/SectionEyebrow'
import Butterfly from '../components/characters/Butterfly'
import { materiais, type ArtigoMaterial } from '../content/copy'

/**
 * Área dinâmica — promovida de "oportunidade futura" (Fase 03 original) a página real.
 * Agora funciona como um mini blog: artigos curtos, expansíveis, escritos na voz
 * já estabelecida na Fase 06 (Storytelling). Cresce aos poucos, sem redesenho estrutural.
 */
export default function Materiais() {
  return (
    <div className="max-w-2xl mx-auto px-6 pb-20 pt-8">
      <section className="text-center mb-12 relative">
        <Butterfly className="w-7 h-7 absolute -top-2 right-1/2 translate-x-20" />
        <SectionEyebrow>{materiais.eyebrow}</SectionEyebrow>
        <h1 className="font-[family-name:var(--font-titulo)] font-semibold text-xl text-[var(--color-text-primary)] mb-2">
          {materiais.titulo}
        </h1>
        <p className="font-[family-name:var(--font-corpo)] text-sm text-[var(--color-text-secondary)] max-w-md mx-auto">
          {materiais.introducao}
        </p>
      </section>

      <div className="flex flex-col gap-3">
        {materiais.artigos.map((artigo, i) => (
          <ArtigoCard key={artigo.slug} artigo={artigo} index={i} />
        ))}
      </div>
    </div>
  )
}

function ArtigoCard({ artigo, index }: { artigo: ArtigoMaterial; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="bg-white rounded-2xl overflow-hidden border border-[var(--color-borda)]"
    >
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full text-left px-6 py-5 flex items-start justify-between gap-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px]"
      >
        <div>
          <p className="font-[family-name:var(--font-titulo)] font-semibold text-base text-[var(--color-text-primary)] mb-1">
            {artigo.titulo}
          </p>
          <p className="font-[family-name:var(--font-corpo)] text-xs text-[var(--color-text-secondary)]">
            {artigo.resumo}
          </p>
        </div>
        <span
          aria-hidden="true"
          className="shrink-0 w-7 h-7 rounded-full bg-[var(--color-rosa-claro)] text-[var(--color-text-primary)] flex items-center justify-center text-sm font-bold mt-1"
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
            <div className="px-6 pb-6 flex flex-col gap-3">
              {artigo.corpo.map((paragrafo, i) => (
                <p
                  key={i}
                  className="font-[family-name:var(--font-corpo)] text-sm text-[var(--color-text-primary)] leading-relaxed"
                >
                  {paragrafo}
                </p>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
