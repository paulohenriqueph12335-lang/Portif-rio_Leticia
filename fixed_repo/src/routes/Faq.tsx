import SectionEyebrow from '../components/ui/SectionEyebrow'
import AccordionItem from '../components/ui/AccordionItem'
import { faq } from '../content/copy'

export default function Faq() {
  return (
    <div className="max-w-xl mx-auto px-6 pb-20 pt-6">
      <SectionEyebrow>{faq.eyebrow}</SectionEyebrow>
      <h1 className="font-[family-name:var(--font-titulo)] font-semibold text-lg text-[var(--color-text-primary)] text-center mb-6">
        {faq.titulo}
      </h1>
      <div className="flex flex-col gap-2">
        {faq.perguntas.map((item) => (
          <AccordionItem key={item.pergunta} question={item.pergunta} answer={item.resposta} />
        ))}
      </div>
    </div>
  )
}
