import SectionEyebrow from '../components/ui/SectionEyebrow'
import { materiais } from '../content/copy'

/**
 * Área dinâmica — promovida de "oportunidade futura" (Fase 03 original) a página real.
 * Estado inicial "em construção"; conteúdo será adicionado aos poucos sem necessidade
 * de redesenho estrutural (arquitetura já prevista para isso).
 */
export default function Materiais() {
  return (
    <div className="max-w-xl mx-auto px-6 pb-20 pt-10 text-center">
      <SectionEyebrow>{materiais.eyebrow}</SectionEyebrow>
      <h1 className="font-[family-name:var(--font-titulo)] font-semibold text-lg text-[var(--color-text-primary)] mb-3">
        {materiais.titulo}
      </h1>
      <p className="font-[family-name:var(--font-corpo)] text-sm text-[var(--color-text-secondary)] max-w-sm mx-auto">
        {materiais.corpo}
      </p>
    </div>
  )
}
