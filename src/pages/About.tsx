import { useLanguage } from '../i18n/LanguageContext'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { LeadershipCard } from '../components/LeadershipCard'
import { MediaPlaceholder } from '../components/MediaPlaceholder'
import { aboutPrompt } from '../lib/mediaPrompts'

export function About() {
  const { t } = useLanguage()

  return (
    <div>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <Reveal>
          <SectionHeading eyebrow={t.about.eyebrow} title={t.about.title} align="center" />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <h2 className="mb-3 text-xl font-bold text-[var(--color-ink)]">{t.about.missionTitle}</h2>
            <p className="text-base leading-relaxed text-[var(--color-ink-muted)]">{t.about.missionBody}</p>

            <h2 className="mt-8 mb-3 text-xl font-bold text-[var(--color-ink)]">{t.about.visionTitle}</h2>
            <p className="text-base leading-relaxed text-[var(--color-ink-muted)]">{t.about.visionBody}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <MediaPlaceholder promptId="about-hero" aspect="4/3" shotType="Editorial" prompt={aboutPrompt} />
          </Reveal>
        </div>
      </section>

      <section className="bg-[var(--color-maroon-tint)] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="mb-10 text-2xl font-bold text-[var(--color-ink)]">{t.about.leadershipTitle}</h2>
          </Reveal>
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {t.about.leadership.map((leader, i) => (
              <Reveal key={leader.name} delay={i * 0.08}>
                <LeadershipCard name={leader.name} role={leader.role} promptId={`leader-${i}`} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <Reveal>
          <h2 className="mb-10 text-2xl font-bold text-[var(--color-ink)]">{t.about.milestonesTitle}</h2>
        </Reveal>
        <div className="space-y-8">
          {t.about.milestones.map((milestone, i) => (
            <Reveal key={milestone.year} delay={i * 0.08} className="flex gap-6">
              <span className="w-20 shrink-0 text-lg font-bold text-[var(--color-maroon)]">{milestone.year}</span>
              <p className="text-sm leading-relaxed text-[var(--color-ink-muted)]">{milestone.body}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  )
}
