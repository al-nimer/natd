import { useLanguage } from '../i18n/LanguageContext'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { ContactForm } from '../components/ContactForm'
import { MediaPlaceholder } from '../components/MediaPlaceholder'
import { contactPrompt } from '../lib/mediaPrompts'

export function Contact() {
  const { t } = useLanguage()

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <Reveal>
        <SectionHeading eyebrow={t.contact.eyebrow} title={t.contact.title} subtitle={t.contact.subtitle} />
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <h2 className="mb-4 text-lg font-semibold text-[var(--color-ink)]">{t.contact.formTitle}</h2>
          <ContactForm />
        </Reveal>

        <Reveal delay={0.1} className="space-y-6 lg:col-span-2">
          <div>
            <h2 className="mb-3 text-lg font-semibold text-[var(--color-ink)]">{t.contact.infoTitle}</h2>
            <p className="text-sm leading-relaxed text-[var(--color-ink-muted)]">{t.contact.address}</p>
            <p dir="ltr" className="mt-2 text-start text-sm text-[var(--color-ink-muted)]">
              {t.contact.phone}
            </p>
            <p dir="ltr" className="text-start text-sm text-[var(--color-ink-muted)]">
              {t.contact.email}
            </p>
          </div>
          <MediaPlaceholder promptId="contact-map" aspect="4/3" shotType={t.contact.mapLabel} prompt={contactPrompt} />
        </Reveal>
      </div>
    </div>
  )
}
