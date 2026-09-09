import { useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'

export function ContactForm() {
  const { t } = useLanguage()
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputClass =
    'w-full rounded-lg border border-[var(--color-line)] bg-white px-4 py-2.5 text-sm text-[var(--color-ink)] outline-none transition focus:border-[var(--color-maroon)] focus:ring-2 focus:ring-[var(--color-maroon)]/15'

  if (submitted) {
    return (
      <div className="rounded-xl border border-[var(--color-line)] bg-white p-8 text-center">
        <p className="text-lg font-semibold text-[var(--color-maroon)]">
          {t.meta.locale === 'ar' ? 'شكرًا لتواصلك معنا!' : 'Thank you for reaching out!'}
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-xl border border-[var(--color-line)] bg-white p-6 sm:p-8">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-[var(--color-ink)]">
          {t.contact.fields.name}
        </label>
        <input id="name" name="name" type="text" required className={inputClass} />
      </div>
      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-[var(--color-ink)]">
          {t.contact.fields.email}
        </label>
        <input id="email" name="email" type="email" required className={inputClass} />
      </div>
      <div>
        <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-[var(--color-ink)]">
          {t.contact.fields.subject}
        </label>
        <input id="subject" name="subject" type="text" required className={inputClass} />
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-[var(--color-ink)]">
          {t.contact.fields.message}
        </label>
        <textarea id="message" name="message" rows={5} required className={inputClass} />
      </div>
      <button
        type="submit"
        className="w-full rounded-full bg-[var(--color-maroon)] px-6 py-3 text-sm font-semibold text-[var(--color-canvas)] transition hover:bg-[var(--color-maroon-dark)] sm:w-auto"
      >
        {t.contact.fields.submit}
      </button>
    </form>
  )
}
