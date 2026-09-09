interface PillarCardProps {
  title: string
  body: string
  index: number
}

export function PillarCard({ title, body, index }: PillarCardProps) {
  return (
    <div className="glass flex h-full flex-col rounded-xl p-6 shadow-[var(--shadow-card)]">
      <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-maroon)] text-sm font-semibold text-[var(--color-canvas)]">
        {String(index + 1).padStart(2, '0')}
      </span>
      <h3 className="mb-2 text-lg font-semibold text-[var(--color-ink)]">{title}</h3>
      <p className="text-sm leading-relaxed text-[var(--color-ink-muted)]">{body}</p>
    </div>
  )
}
