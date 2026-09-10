import { NavLink } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { StatStrip } from '../components/StatStrip'
import { PillarCard } from '../components/PillarCard'
import { ProgramCard } from '../components/ProgramCard'
import { MediaPlaceholder } from '../components/MediaPlaceholder'
import { CTASection } from '../components/CTASection'
import { heroPrompt, collegePrompts, campusGalleryPrompts } from '../lib/mediaPrompts'
import { heroImage, programImages, campusLifeImages } from '../lib/realMedia'

export function Home() {
  const { t } = useLanguage()

  const featuredPrograms = t.programs.colleges.map((college) => ({
    college,
    program: college.programs[0],
  }))

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--color-maroon)]">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-sand-light)]">
              {t.home.eyebrow}
            </p>
            <h1 className="text-[clamp(2.25rem,5vw+1rem,4.5rem)] font-extrabold leading-[1.05] text-[var(--color-canvas)]">
              {t.home.headline}
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-[var(--color-canvas)]/80 sm:text-lg">
              {t.home.subhead}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <NavLink
                to="/programs"
                className="rounded-full bg-[var(--color-canvas)] px-6 py-3 text-sm font-semibold text-[var(--color-maroon)] transition hover:bg-[var(--color-sand-light)]"
              >
                {t.home.ctaPrimary}
              </NavLink>
              <NavLink
                to="/campus-life"
                className="rounded-full border border-[var(--color-canvas)]/40 px-6 py-3 text-sm font-semibold text-[var(--color-canvas)] transition hover:bg-[var(--color-canvas)]/10"
              >
                {t.home.ctaSecondary}
              </NavLink>
            </div>
            <div className="mt-14">
              <StatStrip stats={t.home.stats} />
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <MediaPlaceholder
              promptId="home-hero"
              aspect="4/3"
              shotType="Editorial"
              prompt={heroPrompt}
              src={heroImage}
              alt={t.home.headline}
            />
          </Reveal>
        </div>
      </section>

      {/* Programs highlight */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <Reveal>
          <SectionHeading eyebrow={t.home.programsEyebrow} title={t.home.programsTitle} subtitle={t.home.programsSubtitle} />
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredPrograms.map(({ college, program }, i) => (
            <Reveal key={college.id} delay={i * 0.08}>
              <ProgramCard
                collegeName={college.name}
                programName={program.name}
                degree={program.degree}
                duration={program.duration}
                promptId={`home-${college.id}`}
                prompt={collegePrompts[college.id]}
                image={programImages[program.name]}
              />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <NavLink to="/programs" className="text-sm font-semibold text-[var(--color-maroon)] hover:underline">
            {t.home.viewAllPrograms} →
          </NavLink>
        </Reveal>
      </section>

      {/* Why NATD */}
      <section className="bg-[var(--color-maroon-tint)] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading eyebrow={t.home.whyEyebrow} title={t.home.whyTitle} align="center" />
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.home.pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 0.08}>
                <PillarCard title={pillar.title} body={pillar.body} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Campus teaser */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <SectionHeading eyebrow={t.home.campusEyebrow} title={t.home.campusTitle} subtitle={t.home.campusBody} />
            <NavLink
              to="/campus-life"
              className="mt-6 inline-block rounded-full bg-[var(--color-maroon)] px-6 py-3 text-sm font-semibold text-[var(--color-canvas)] transition hover:bg-[var(--color-maroon-dark)]"
            >
              {t.home.campusCta}
            </NavLink>
          </Reveal>
          <div className="grid grid-cols-2 gap-4">
            {campusGalleryPrompts.slice(0, 4).map((item, i) => (
              <Reveal key={item.id} delay={i * 0.08} className={i % 3 === 0 ? 'col-span-2' : ''}>
                <MediaPlaceholder
                  promptId={item.id}
                  aspect={i % 3 === 0 ? '16/9' : '1/1'}
                  shotType={item.shotType}
                  prompt={item.prompt}
                  src={campusLifeImages[item.id]}
                  alt={item.shotType}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection title={t.home.ctaBandTitle} body={t.home.ctaBandBody} buttonLabel={t.home.ctaBandButton} />
    </>
  )
}
