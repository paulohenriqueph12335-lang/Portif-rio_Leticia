interface BearProps {
  className?: string
}

/** Ursinho original — acolhimento, ao lado do retrato na página Sobre. */
export default function Bear({ className = '' }: BearProps) {
  return (
    <svg viewBox="0 0 46 46" className={className} aria-hidden="true">
      <ellipse cx="23" cy="30" rx="16" ry="13" fill="#C97B4F" opacity="0.9" />
      <circle cx="23" cy="16" r="12" fill="#C97B4F" opacity="0.9" />
      <circle cx="14" cy="7" r="4.5" fill="#C97B4F" opacity="0.9" />
      <circle cx="32" cy="7" r="4.5" fill="#C97B4F" opacity="0.9" />
      <circle cx="19" cy="15" r="1.3" fill="#3B2A1E" />
      <circle cx="27" cy="15" r="1.3" fill="#3B2A1E" />
    </svg>
  )
}
