import { NavLink } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { Timeline } from '../components/Timeline'
import { FAQAccordion } from '../components/FAQAccordion'
import { MediaPlaceholder } from '../components/MediaPlaceholder'
import { admissionsPrompt } from '../lib/mediaPrompts'
import { admissionsHeroImage } from '../lib/realMedia'

export function Admissions() {
  const { t } = useLanguage()

  return (
    <div>
      <section className="bg-[var(--color-maroon-tint)]">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <SectionHeading eyebrow={t.admissions.eyebrow} title={t.admissions.title} subtitle={t.admissions.subtitle} />
            <NavLink
              to="/contact"
              className="mt-6 inline-block rounded-full bg-[var(--color-maroon)] px-6 py-3 text-sm font-semibold text-[var(--color-canvas)] transition hover:bg-[var(--color-maroon-dark)]"
            >
              {t.admissions.cta}
            </NavLink>
          </Reveal>
          <Reveal delay={0.15}>
            <MediaPlaceholder
              promptId="admissions-hero"
              aspect="4/3"
              shotType="Editorial"
              prompt={admissionsPrompt}
              src={admissionsHeroImage}
              alt={t.admissions.title}
            />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <Reveal>
          <h2 className="mb-10 text-2xl font-bold text-[var(--color-ink)]">{t.admissions.stepsTitle}</h2>
        </Reveal>
        <Timeline steps={t.admissions.steps} />
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <h2 className="mb-6 text-2xl font-bold text-[var(--color-ink)]">{t.admissions.requirementsTitle}</h2>
            <ul className="space-y-3">
              {t.admissions.requirements.map((req) => (
                <li key={req} className="flex gap-3 text-sm leading-relaxed text-[var(--color-ink-muted)]">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-sand)]" />
                  {req}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="mb-6 text-2xl font-bold text-[var(--color-ink)]">{t.admissions.faqTitle}</h2>
            <FAQAccordion faqs={t.admissions.faqs} />
          </Reveal>
        </div>
      </section>
    </div>
  )
}
