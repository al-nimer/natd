import { useState } from 'react'

interface FAQ {
  q: string
  a: string
}

export function FAQAccordion({ faqs }: { faqs: readonly FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="divide-y divide-[var(--color-line)] rounded-xl border border-[var(--color-line)] bg-white">
      {faqs.map((faq, i) => {
        const open = openIndex === i
        return (
          <div key={faq.q}>
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-start"
              aria-expanded={open}
            >
              <span className="text-sm font-semibold text-[var(--color-ink)]">{faq.q}</span>
              <span
                className={`shrink-0 text-lg text-[var(--color-maroon)] transition-transform duration-200 ${open ? 'rotate-45' : ''}`}
                aria-hidden
              >
                +
              </span>
            </button>
            <div
              className="grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out"
              style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-4 text-sm leading-relaxed text-[var(--color-ink-muted)]">{faq.a}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
