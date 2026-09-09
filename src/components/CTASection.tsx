import { NavLink } from 'react-router-dom'
import { Reveal } from './Reveal'

interface CTASectionProps {
  title: string
  body: string
  buttonLabel: string
  to?: string
}

export function CTASection({ title, body, buttonLabel, to = '/admissions' }: CTASectionProps) {
  return (
    <section className="bg-[var(--color-maroon)] py-16 sm:py-20">
      <Reveal className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-[var(--color-canvas)] sm:text-3xl">{title}</h2>
        <p className="max-w-xl text-[var(--color-canvas)]/80">{body}</p>
        <NavLink
          to={to}
          className="rounded-full bg-[var(--color-canvas)] px-7 py-3 text-sm font-semibold text-[var(--color-maroon)] transition hover:bg-[var(--color-sand-light)]"
        >
          {buttonLabel}
        </NavLink>
      </Reveal>
    </section>
  )
}
