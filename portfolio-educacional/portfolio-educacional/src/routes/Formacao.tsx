import SectionEyebrow from '../components/ui/SectionEyebrow'
import { formacao } from '../content/copy'

/**
 * Página deliberadamente "quieta" — sem personagem, sem grade, sem ícone de destaque.
 * Decisão estratégica registrada desde a Fase 04/05: uma seção "gritante" sobre um tema
 * delicado (formação em andamento) soaria defensiva.
 */
export default function Formacao() {
  return (
    <div className="max-w-xl mx-auto px-6 pb-20 pt-6">
      <div className="bg-[var(--color-base-alt)] border border-[var(--color-borda)] rounded-2xl p-8">
        <SectionEyebrow>{formacao.eyebrow}</SectionEyebrow>
        <p className="font-[family-name:var(--font-corpo)] text-sm text-[var(--color-text-primary)] leading-relaxed text-center mt-2">
          {formacao.corpo}
        </p>
        <p className="font-[family-name:var(--font-corpo)] text-xs text-[var(--color-text-secondary)] leading-relaxed text-center mt-4">
          {formacao.complementar}
        </p>
      </div>
    </div>
  )
}

