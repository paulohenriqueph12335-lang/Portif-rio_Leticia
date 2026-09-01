import { motion } from 'framer-motion'
import SectionEyebrow from '../components/ui/SectionEyebrow'
import Carousel from '../components/ui/Carousel'
import Butterfly from '../components/characters/Butterfly'
import { galeria } from '../content/copy'

export default function Galeria() {
  return (
    <div className="max-w-3xl mx-auto px-6 pb-20 pt-6">
      <section className="text-center relative mb-12">
        <Butterfly className="w-7 h-7 absolute -top-2 right-1/2 translate-x-16" />
        <SectionEyebrow>Galeria</SectionEyebrow>
        <h1 className="font-[family-name:var(--font-titulo)] font-semibold text-xl text-[var(--color-text-primary)] mb-2">
          Um pouco do dia a dia
        </h1>
        <p className="font-[family-name:var(--font-corpo)] text-sm text-[var(--color-text-secondary)] max-w-md mx-auto">
          Cenas reais de atividades, palestras e bastidores — cada uma com autorização de uso das famílias envolvidas.
        </p>
      </section>

      <div className="flex flex-col gap-14">
        {galeria.map((bloco, i) => (
          <motion.section
            key={bloco.categoria}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
          >
            <p className="font-[family-name:var(--font-narrativa)] italic text-base text-[var(--color-text-primary)] mb-4">
              {bloco.categoria}
            </p>
            <Carousel itens={bloco.itens} />
          </motion.section>
        ))}
      </div>
    </div>
  )
}
