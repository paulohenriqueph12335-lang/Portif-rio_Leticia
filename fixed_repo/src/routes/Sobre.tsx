import { Link } from 'react-router-dom'
import Bear from '../components/characters/Bear'
import Timeline from '../components/sections/Timeline'
import Carousel from '../components/ui/Carousel'
import SectionEyebrow from '../components/ui/SectionEyebrow'
import { sobre, galeria } from '../content/copy'

export default function Sobre() {
  const momentos = galeria.find((b) => b.categoria === 'Momentos e bastidores')?.itens ?? []

  return (
    <div className="max-w-2xl mx-auto px-6 pb-16">
      <section className="bg-[var(--color-rosa)] rounded-2xl p-8 flex gap-5 items-center relative overflow-hidden mb-12">
        <div className="w-20 h-20 rounded-full bg-white border-2 border-white flex items-center justify-center text-[10px] text-[var(--color-text-secondary)] shrink-0">
          foto
        </div>
        <Bear className="w-11 h-11 absolute right-4 bottom-3" />
        <div>
          <p className="font-[family-name:var(--font-rotulo)] text-[10px] font-bold tracking-wider text-[#7a3d4a] uppercase mb-1">
            {sobre.eyebrow}
          </p>
          <p className="font-[family-name:var(--font-titulo)] font-semibold text-base text-[#5c2c39] mb-2">
            {sobre.titulo}
          </p>
          {sobre.corpo.map((p, i) => (
            <p key={i} className="font-[family-name:var(--font-corpo)] text-xs text-[#6e3843] leading-relaxed mb-2 last:mb-0">
              {p}
            </p>
          ))}
        </div>
      </section>

      <Timeline />

      <section className="mt-12">
        <SectionEyebrow>Bastidores</SectionEyebrow>
        <h2 className="font-[family-name:var(--font-titulo)] font-semibold text-lg text-[var(--color-text-primary)] text-center mb-6">
          Alguns momentos pelo caminho
        </h2>
        <Carousel itens={momentos} />
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
