import { MediaPlaceholder } from './MediaPlaceholder'

interface LeadershipCardProps {
  name: string
  role: string
  promptId: string
}

export function LeadershipCard({ name, role, promptId }: LeadershipCardProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-[var(--color-line)] bg-white shadow-[var(--shadow-card)]">
      <MediaPlaceholder
        promptId={promptId}
        aspect="1/1"
        shotType="Portrait"
        prompt="Formal portrait of a Saudi university leader in modern professional attire (thobe with bisht, or tailored abaya), confident expression, neutral studio background with soft maroon gradient, editorial lighting."
      />
      <div className="p-4">
        <h3 className="text-sm font-semibold text-[var(--color-ink)]">{name}</h3>
        <p className="text-xs text-[var(--color-ink-muted)]">{role}</p>
      </div>
    </div>
  )
}
