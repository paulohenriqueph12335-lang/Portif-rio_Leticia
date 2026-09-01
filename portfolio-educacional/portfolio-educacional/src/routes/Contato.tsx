import Owl from '../components/characters/Owl'
import Button from '../components/ui/Button'
import { contato, contatoPagina } from '../content/copy'

export default function Contato() {
  return (
    <div className="max-w-xl mx-auto px-6 pb-20 pt-10 text-center">
      <div className="bg-[#F0E9DA] rounded-2xl p-10 relative overflow-hidden">
        <svg viewBox="0 0 220 30" className="w-44 mx-auto absolute top-16 left-1/2 -translate-x-1/2" aria-hidden="true">
          <path d="M10 20 C 60 8, 160 8, 210 20" stroke="#A9895E" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        </svg>

        <Owl className="w-14 h-14 mx-auto mb-4 relative z-[1]" />

        <p className="font-[family-name:var(--font-narrativa)] italic text-lg text-[var(--color-text-primary)] mb-1 relative z-[1]">
          {contatoPagina.titulo}
        </p>
        <p className="font-[family-name:var(--font-corpo)] text-xs text-[var(--color-text-secondary)] mb-6 relative z-[1]">
          {contatoPagina.subtitulo}
        </p>

        <div className="flex gap-2 justify-center flex-wrap relative z-[1]">
          <Button href={contato.whatsapp} accentColor="#3d5a34">
            WhatsApp
          </Button>
          <Button href={`mailto:${contato.email}`} accentColor="#a3556b">
            E-mail
          </Button>
          <Button href={contato.instagramUrl} accentColor="#3f6f88">
            Instagram
          </Button>
        </div>
      </div>
    </div>
  )
}
