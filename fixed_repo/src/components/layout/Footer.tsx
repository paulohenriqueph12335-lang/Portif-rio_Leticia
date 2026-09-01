import { Link } from 'react-router-dom'
import { menu } from '../../content/copy'
import { contato } from '../../content/copy'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="max-w-[1120px] mx-auto px-5 md:px-10 py-10 mt-16 border-t border-[var(--color-borda)] flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="font-[family-name:var(--font-narrativa)] italic text-sm text-[var(--color-text-primary)]">
        Ticya
      </p>

      <nav className="flex flex-wrap justify-center gap-4 font-[family-name:var(--font-rotulo)] text-[11px] text-[var(--color-text-secondary)]">
        {menu.map((item) => (
          <Link key={item.to} to={item.to} className="hover:text-[var(--color-text-primary)] transition-colors">
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="flex gap-3 font-[family-name:var(--font-ui)] text-[11px] font-semibold text-[var(--color-text-secondary)]">
        <a href={contato.whatsapp} target="_blank" rel="noreferrer" className="hover:text-[var(--color-text-primary)]">
          WhatsApp
        </a>
        <a href={`mailto:${contato.email}`} className="hover:text-[var(--color-text-primary)]">
          E-mail
        </a>
        <a href={contato.instagramUrl} target="_blank" rel="noreferrer" className="hover:text-[var(--color-text-primary)]">
          Instagram
        </a>
      </div>

      <p className="font-[family-name:var(--font-rotulo)] text-[10px] text-[var(--color-text-secondary)] opacity-70">
        &copy; {year} Ticya
      </p>
    </footer>
  )
}
