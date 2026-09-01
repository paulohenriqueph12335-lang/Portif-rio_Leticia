import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Fox from '../components/characters/Fox'
import { home } from '../content/copy'

const CARD_STYLES: Record<string, string> = {
  rosa: 'bg-[var(--color-rosa)] text-[#5c2c39]',
  amarelo: 'bg-[#F6E4C8] text-[#5c4413]',
  verde: 'bg-[#D4E2C9] text-[#2F4030]',
  azul: 'bg-[#C6E3EF] text-[#1c3a45]',
  outline: 'bg-white border-2 border-[var(--color-personagem)] text-[#5c2c39]',
}

export default function Home() {
  return (
    <div>
      <section className="relative text-center px-6 pt-8 pb-8 max-w-2xl mx-auto">
        <Fox className="w-24 h-24 absolute -bottom-2 right-2 z-[1]" />
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-[2] font-[family-name:var(--font-narrativa)] italic font-medium text-2xl md:text-3xl text-[var(--color-text-primary)] leading-snug mb-3"
        >
          {home.headline}
        </motion.h1>
        <p className="relative z-[2] font-[family-name:var(--font-corpo)] text-sm text-[var(--color-text-secondary)] mb-1">
          {home.subheadline}
        </p>
        <p className="relative z-[2] font-[family-name:var(--font-corpo)] text-xs text-[var(--color-text-secondary)] opacity-80">
          {home.intro}
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-3 px-6 pb-16 max-w-2xl mx-auto">
        {home.capitulos.map((cap, i) => (
          <motion.div
            key={cap.to}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
          >
            <Link
              to={cap.to}
              className={`block rounded-2xl p-5 h-full transition-transform hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 ${CARD_STYLES[cap.cor]}`}
            >
              <p className="font-[family-name:var(--font-rotulo)] text-[9px] font-bold tracking-wider uppercase opacity-80 mb-1">
                {cap.eyebrow}
              </p>
              <p className="font-[family-name:var(--font-titulo)] font-semibold text-sm mb-1">{cap.titulo}</p>
              <p className="font-[family-name:var(--font-corpo)] text-xs opacity-90">{cap.descricao} &rarr;</p>
            </Link>
          </motion.div>
        ))}
      </section>
    </div>
  )
}
