import { Link } from 'react-router-dom'
import Butterfly from '../components/characters/Butterfly'
import SectionEyebrow from '../components/ui/SectionEyebrow'
import Carousel from '../components/ui/Carousel'
import { metodologia, galeria } from '../content/copy'

export default function Metodologia() {
  const atividades = galeria.find((b) => b.categoria === 'Atividades pedagógicas')?.itens ?? []

  return (
    <div className="max-w-2xl mx-auto px-6 pb-16 flex flex-col gap-12">
      <section className="text-center relative pt-4">
        <Butterfly className="w-8 h-8 absolute top-0 right-6" />
        <p className="font-[family-name:var(--font-narrativa)] italic text-lg text-[var(--color-text-primary)] max-w-md mx-auto mb-2">
          "{metodologia.filosofia.citacao}"
        </p>
        <SectionEyebrow>{metodologia.filosofia.eyebrow}</SectionEyebrow>
        <p className="font-[family-name:var(--font-corpo)] text-sm text-[var(--color-text-secondary)] max-w-md mx-auto mt-3">
          {metodologia.filosofia.corpo}
        </p>
      </section>

      <section>
        <SectionEyebrow>{metodologia.metodologia.eyebrow}</SectionEyebrow>
        <h2 className="font-[family-name:var(--font-titulo)] font-semibold text-lg text-[var(--color-text-primary)] text-center mb-2">
          {metodologia.metodologia.titulo}
        </h2>
        <p className="font-[family-name:var(--font-corpo)] text-xs text-[var(--color-text-secondary)] text-center mb-6">
          {metodologia.metodologia.introducao}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {metodologia.metodologia.cards.map((card) => (
            <div key={card.titulo} className="bg-[var(--color-rosa-claro)] rounded-2xl p-4 text-center">
              <p className="font-[family-name:var(--font-corpo)] font-bold text-xs text-[var(--color-text-primary)] mb-1">
                {card.titulo}
              </p>
              <p className="font-[family-name:var(--font-corpo)] text-[11px] text-[var(--color-text-secondary)] leading-relaxed">
                {card.texto}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <SectionEyebrow>{metodologia.servicos.eyebrow}</SectionEyebrow>
        <h2 className="font-[family-name:var(--font-titulo)] font-semibold text-lg text-[var(--color-text-primary)] text-center mb-2">
          {metodologia.servicos.titulo}
        </h2>
        <p className="font-[family-name:var(--font-corpo)] text-xs text-[var(--color-text-secondary)] text-center mb-6">
          {metodologia.servicos.introducao}
        </p>
        <div className="grid grid-cols-2 gap-3">
          {metodologia.servicos.cards.map((card) => (
            <div
              key={card.titulo}
              className="bg-[var(--color-base-alt)] border border-[var(--color-borda)] rounded-2xl p-4 text-center font-[family-name:var(--font-corpo)] font-semibold text-xs text-[var(--color-text-primary)]"
            >
              {card.titulo}
            </div>
          ))}
        </div>
      </section>

      <section>
        <SectionEyebrow>Na prática</SectionEyebrow>
        <h2 className="font-[family-name:var(--font-titulo)] font-semibold text-lg text-[var(--color-text-primary)] text-center mb-6">
          Como isso acontece no dia a dia
        </h2>
        <Carousel itens={atividades.slice(0, 4)} />
        <p className="text-center mt-4">
          <Link
            to="/galeria"
            className="font-[family-name:var(--font-ui)] text-xs font-bold text-[var(--color-text-secondary)] underline underline-offset-4 hover:text-[var(--color-text-primary)]"
          >
            Ver galeria completa &rarr;
          </Link>
        </p>
      </section>
    </div>
  )
}
