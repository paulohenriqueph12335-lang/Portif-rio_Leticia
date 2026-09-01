interface RabbitProps {
  x: number
  y: number
  className?: string
}

/** Coelha original — caminha ao longo da trilha da timeline (posição controlada via scroll pelo componente pai). */
export default function Rabbit({ x, y, className = '' }: RabbitProps) {
  return (
    <g className={className} transform={`translate(${x},${y})`} aria-hidden="true">
      <ellipse cx="0" cy="10" rx="9" ry="7" fill="#EDE1CF" />
      <circle cx="0" cy="-2" r="7" fill="#EDE1CF" />
      <path d="M-4 -8 C -6 -18, -1 -18, -1 -8" fill="#EDE1CF" />
      <path d="M4 -8 C 6 -18, 1 -18, 1 -8" fill="#EDE1CF" />
      <circle cx="-2.5" cy="-2" r="1" fill="#4A3B2F" />
      <circle cx="2.5" cy="-2" r="1" fill="#4A3B2F" />
    </g>
  )
}
