interface SectionHeadingProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'start' | 'center'
  light?: boolean
}

export function SectionHeading({ eyebrow, title, subtitle, align = 'start', light = false }: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-start'

  return (
    <div className={`max-w-2xl ${alignClass}`}>
      {eyebrow && (
        <p
          className={`mb-3 text-xs font-semibold uppercase tracking-[0.2em] ${
            light ? 'text-[var(--color-sand-light)]' : 'text-[var(--color-sand)]'
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-3xl font-bold leading-tight sm:text-4xl ${
          light ? 'text-[var(--color-canvas)]' : 'text-[var(--color-ink)]'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base leading-relaxed ${light ? 'text-[var(--color-canvas)]/80' : 'text-[var(--color-ink-muted)]'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
