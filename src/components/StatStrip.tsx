interface Stat {
  value: string
  label: string
}

export function StatStrip({ stats }: { stats: readonly Stat[] }) {
  return (
    <dl className="grid grid-cols-2 gap-6 sm:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className="text-center sm:text-start">
          <dt className="sr-only">{stat.label}</dt>
          <dd className="text-3xl font-bold text-[var(--color-canvas)] sm:text-4xl">{stat.value}</dd>
          <dd className="mt-1 text-sm text-[var(--color-sand-light)]">{stat.label}</dd>
        </div>
      ))}
    </dl>
  )
}
