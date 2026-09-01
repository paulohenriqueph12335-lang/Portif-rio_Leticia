import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { menu } from '../../content/copy'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="relative z-20 max-w-[1120px] mx-auto px-5 md:px-10 py-4 flex items-center justify-between">
      <Link
        to="/"
        className="font-[family-name:var(--font-narrativa)] italic text-lg text-[var(--color-text-primary)]"
        onClick={() => setOpen(false)}
      >
        Ticya
      </Link>

      <nav className="hidden md:flex gap-4 font-[family-name:var(--font-rotulo)] text-[11px] font-semibold text-[var(--color-text-secondary)]">
        {menu.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `hover:text-[var(--color-text-primary)] transition-colors ${isActive ? 'text-[var(--color-text-primary)]' : ''}`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <button
        className="md:hidden text-[var(--color-text-primary)] text-sm font-[family-name:var(--font-rotulo)] font-semibold"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label="Abrir menu"
      >
        {open ? 'Fechar' : 'Menu'}
      </button>

      {open && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[var(--color-base)] border-t border-[var(--color-borda)] px-5 py-4 flex flex-col gap-3">
          {menu.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="font-[family-name:var(--font-rotulo)] text-sm font-semibold text-[var(--color-text-secondary)]"
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  )
}
