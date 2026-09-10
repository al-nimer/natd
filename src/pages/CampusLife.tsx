import { useLanguage } from '../i18n/LanguageContext'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { PillarCard } from '../components/PillarCard'
import { MediaPlaceholder } from '../components/MediaPlaceholder'
import { CTASection } from '../components/CTASection'
import { campusGalleryPrompts } from '../lib/mediaPrompts'

export function CampusLife() {
  const { t } = useLanguage()

  return (
    <div>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <Reveal>
          <SectionHeading eyebrow={t.campusLife.eyebrow} title={t.campusLife.title} subtitle={t.campusLife.subtitle} align="center" />
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mt-14 mb-6 text-xl font-bold text-[var(--color-ink)]">{t.campusLife.galleryTitle}</h2>
        </Reveal>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {campusGalleryPrompts.map((item, i) => {
            const isFirst = i === 0
            const isLast = i === campusGalleryPrompts.length - 1
            const span = isFirst ? 'col-span-2' : isLast ? 'col-span-2 lg:col-span-4' : ''
            return (
              <Reveal key={item.id} delay={i * 0.06} className={span}>
                <MediaPlaceholder promptId={item.id} aspect={item.aspect} shotType={item.shotType} prompt={item.prompt} />
              </Reveal>
            )
          })}
        </div>
      </section>

      <section className="bg-[var(--color-maroon-tint)] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="mb-10 text-2xl font-bold text-[var(--color-ink)]">{t.campusLife.pillarsTitle}</h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.campusLife.pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 0.08}>
                <PillarCard title={pillar.title} body={pillar.body} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection title={t.home.ctaBandTitle} body={t.home.ctaBandBody} buttonLabel={t.home.ctaBandButton} />
    </div>
  )
}
