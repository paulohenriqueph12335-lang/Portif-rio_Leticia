import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import type { GalleryItem } from '../../content/copy'

interface CarouselProps {
  itens: GalleryItem[]
  className?: string
}

/**
 * Carrossel horizontal com scroll-snap nativo (leve, sem dependência extra).
 * Setas + indicadores discretos, tudo dentro do Design System (Fase 05).
 */
export default function Carousel({ itens, className = '' }: CarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  function scrollToIndex(i: number) {
    const track = trackRef.current
    if (!track) return
    const child = track.children[i] as HTMLElement | undefined
    child?.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' })
  }

  function handleScroll() {
    const track = trackRef.current
    if (!track) return
    const index = Math.round(track.scrollLeft / track.clientWidth)
    setActive(index)
  }

  return (
    <div className={`relative ${className}`}>
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {itens.map((item, i) => (
          <motion.figure
            key={item.src}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="snap-start shrink-0 w-[78%] sm:w-[46%] md:w-[32%]"
          >
            <div className="rounded-2xl overflow-hidden bg-white border border-[var(--color-borda)]">
              <img src={item.src} alt={item.alt} loading="lazy" className="w-full aspect-[4/3] object-cover" />
            </div>
            <figcaption className="font-[family-name:var(--font-corpo)] text-xs text-[var(--color-text-secondary)] mt-2 text-center px-1">
              {item.legenda}
            </figcaption>
          </motion.figure>
        ))}
      </div>

      {itens.length > 1 && (
        <div className="flex justify-center gap-1.5 mt-3">
          {itens.map((_, i) => (
            <button
              key={i}
              aria-label={`Ir para item ${i + 1}`}
              onClick={() => scrollToIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                active === i ? 'w-5 bg-[var(--color-text-primary)]' : 'w-1.5 bg-[var(--color-borda)]'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
