import { useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { ProgramCard } from '../components/ProgramCard'
import { collegePrompts } from '../lib/mediaPrompts'

export function Programs() {
  const { t } = useLanguage()
  const [activeCollege, setActiveCollege] = useState<string | 'all'>('all')

  const colleges = t.programs.colleges
  const visibleColleges = activeCollege === 'all' ? colleges : colleges.filter((c) => c.id === activeCollege)

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <Reveal>
        <SectionHeading eyebrow={t.programs.eyebrow} title={t.programs.title} subtitle={t.programs.subtitle} />
      </Reveal>

      <Reveal delay={0.1} className="mt-8 flex flex-wrap gap-2">
        <FilterPill label={t.programs.filterAll} active={activeCollege === 'all'} onClick={() => setActiveCollege('all')} />
        {colleges.map((college) => (
          <FilterPill
            key={college.id}
            label={college.name}
            active={activeCollege === college.id}
            onClick={() => setActiveCollege(college.id)}
          />
        ))}
      </Reveal>

      <div className="mt-12 space-y-16">
        {visibleColleges.map((college) => (
          <div key={college.id}>
            <Reveal>
              <h2 className="mb-6 text-xl font-bold text-[var(--color-ink)]">{college.name}</h2>
            </Reveal>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {college.programs.map((program, i) => (
                <Reveal key={program.name} delay={i * 0.08}>
                  <ProgramCard
                    collegeName={college.name}
                    programName={program.name}
                    degree={program.degree}
                    duration={program.duration}
                    promptId={`${college.id}-${i}`}
                    prompt={collegePrompts[college.id]}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function FilterPill({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
        active
          ? 'border-[var(--color-maroon)] bg-[var(--color-maroon)] text-[var(--color-canvas)]'
          : 'border-[var(--color-line)] text-[var(--color-ink-muted)] hover:border-[var(--color-maroon)] hover:text-[var(--color-maroon)]'
      }`}
    >
      {label}
    </button>
  )
}
