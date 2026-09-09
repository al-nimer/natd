import { Reveal } from './Reveal'

interface TimelineStep {
  title: string
  body: string
  date: string
}

export function Timeline({ steps }: { steps: readonly TimelineStep[] }) {
  return (
    <ol className="relative border-s-2 border-[var(--color-sand-light)] ps-6 sm:ps-8">
      {steps.map((step, i) => (
        <Reveal key={step.title} as="li" delay={i * 0.08} className="mb-10 last:mb-0">
          <span className="absolute -start-[9px] mt-1.5 h-4 w-4 rounded-full border-2 border-[var(--color-canvas)] bg-[var(--color-maroon)]" />
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-[var(--color-sand)]">{step.date}</p>
          <h3 className="text-lg font-semibold text-[var(--color-ink)]">{step.title}</h3>
          <p className="mt-1 text-sm leading-relaxed text-[var(--color-ink-muted)]">{step.body}</p>
        </Reveal>
      ))}
    </ol>
  )
}
