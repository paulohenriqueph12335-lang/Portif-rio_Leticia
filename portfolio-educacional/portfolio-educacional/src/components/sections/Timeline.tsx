import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Rabbit from '../characters/Rabbit'
import { sobre } from '../../content/copy'

const PATH_D =
  'M16 90 C 90 60, 130 100, 190 70 C 250 40, 300 90, 370 60 C 430 34, 480 78, 584 40'
// Posições aproximadas dos marcos ao longo do path (x,y em unidades do viewBox 600x120)
const MARCOS_POS: [number, number][] = [
  [16, 90],
  [190, 70],
  [300, 74],
  [430, 50],
  [584, 40],
]

export default function Timeline() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 80%', 'end 40%'] })
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1])
  const rabbitIndex = useTransform(scrollYProgress, [0, 1], [0, MARCOS_POS.length - 1])

  return (
    <div ref={ref} className="py-8">
      <p className="font-[family-name:var(--font-rotulo)] text-[10px] font-bold tracking-[1.5px] text-[var(--color-text-secondary)] uppercase text-center mb-1">
        Trajetória
      </p>
      <h2 className="font-[family-name:var(--font-titulo)] font-semibold text-lg text-[var(--color-text-primary)] text-center mb-8">
        Um caminho que foi se desenhando
      </h2>

      <svg viewBox="0 0 600 120" className="w-full">
        <path d={PATH_D} stroke="#8FA37E" strokeWidth="1.4" fill="none" strokeDasharray="1 8" opacity="0.5" />
        <motion.path d={PATH_D} stroke="var(--color-personagem-quente)" strokeWidth="2" fill="none" style={{ pathLength }} />
        {MARCOS_POS.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="8" fill="#F4E6D8" stroke="var(--color-personagem-quente)" strokeWidth="1" />
        ))}
        <RabbitOnPath progress={rabbitIndex} />
      </svg>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
        {sobre.trajetoria.marcos.map((marco) => (
          <div key={marco.ano} className="text-center">
            <p className="font-[family-name:var(--font-rotulo)] text-xs font-bold text-[var(--color-text-primary)]">
              {marco.ano}
            </p>
            <p className="font-[family-name:var(--font-corpo)] text-xs text-[var(--color-text-secondary)] mt-1 leading-relaxed">
              {marco.texto}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

function RabbitOnPath({ progress }: { progress: import('framer-motion').MotionValue<number> }) {
  const x = useTransform(progress, (v) => {
    const i = Math.min(Math.floor(v), MARCOS_POS.length - 2)
    const t = v - i
    const [x1] = MARCOS_POS[i]
    const [x2] = MARCOS_POS[i + 1] ?? MARCOS_POS[i]
    return x1 + (x2 - x1) * t
  })
  const y = useTransform(progress, (v) => {
    const i = Math.min(Math.floor(v), MARCOS_POS.length - 2)
    const t = v - i
    const [, y1] = MARCOS_POS[i]
    const [, y2] = MARCOS_POS[i + 1] ?? MARCOS_POS[i]
    return y1 + (y2 - y1) * t - 14
  })

  return (
    <motion.g style={{ x, y }}>
      <Rabbit x={0} y={0} />
    </motion.g>
  )
}
