export default function SectionEyebrow({ children }: { children: string }) {
  return (
    <p className="font-[family-name:var(--font-rotulo)] text-[10px] font-bold tracking-[1.5px] text-[var(--color-text-secondary)] uppercase text-center mb-1">
      {children}
    </p>
  )
}
