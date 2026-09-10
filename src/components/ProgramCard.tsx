import { TiltCard } from './TiltCard'
import { MediaPlaceholder } from './MediaPlaceholder'
import { useLanguage } from '../i18n/LanguageContext'

interface ProgramCardProps {
  collegeName: string
  programName: string
  degree: string
  duration: string
  promptId: string
  prompt: string
  image?: string
}

export function ProgramCard({ collegeName, programName, degree, duration, promptId, prompt, image }: ProgramCardProps) {
  const { t } = useLanguage()

  return (
    <TiltCard className="h-full">
      <div className="flex h-full flex-col overflow-hidden rounded-xl border border-[var(--color-line)] bg-white shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-lift)]">
        <MediaPlaceholder promptId={promptId} aspect="4/3" shotType="Editorial" prompt={prompt} src={image} alt={programName} />
        <div className="flex flex-1 flex-col p-5">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-[var(--color-sand)]">{collegeName}</p>
          <h3 className="mb-3 text-lg font-semibold leading-snug text-[var(--color-ink)]">{programName}</h3>
          <div className="mt-auto flex items-center gap-4 text-sm text-[var(--color-ink-muted)]">
            <span>
              {t.programs.degreeLabel}: <strong className="font-medium text-[var(--color-ink)]">{degree}</strong>
            </span>
            <span>
              {t.programs.durationLabel}: <strong className="font-medium text-[var(--color-ink)]">{duration}</strong>
            </span>
          </div>
        </div>
      </div>
    </TiltCard>
  )
}
