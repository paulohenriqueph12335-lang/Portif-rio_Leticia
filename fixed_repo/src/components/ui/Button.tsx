import type { ReactNode } from 'react'

interface ButtonProps {
  href: string
  children: ReactNode
  accentColor?: string
  className?: string
}

/** Botão de contorno fino — padrão aprovado no Design System (Fase 05). */
export default function Button({ href, children, accentColor = 'var(--color-text-primary)', className = '' }: ButtonProps) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
      className={`inline-block font-[family-name:var(--font-ui)] font-bold text-xs bg-white border border-[var(--color-borda)] rounded-full px-5 py-2.5 transition-colors hover:bg-[var(--color-base-alt)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${className}`}
      style={{ color: accentColor }}
    >
      {children}
    </a>
  )
}
