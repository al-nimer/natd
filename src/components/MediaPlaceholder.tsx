import { useLanguage } from '../i18n/LanguageContext'

type AspectRatio = '16/9' | '4/3' | '1/1' | '3/4'

interface MediaPlaceholderProps {
  promptId: string
  aspect?: AspectRatio
  shotType: string
  prompt: string
  className?: string
  /** When provided, renders this real image instead of the AI-prompt placeholder. */
  src?: string
  alt?: string
}

const aspectClass: Record<AspectRatio, string> = {
  '16/9': 'aspect-[16/9]',
  '4/3': 'aspect-[4/3]',
  '1/1': 'aspect-square',
  '3/4': 'aspect-[3/4]',
}

/**
 * Structured AI-media container. Renders a labeled placeholder block (aspect ratio +
 * shot type + the actual generation prompt) in place of a real photo. Marked with
 * data-replace-with-real-image so real photography can be swapped in later without
 * touching layout.
 */
export function MediaPlaceholder({ promptId, aspect = '16/9', shotType, prompt, className = '', src, alt }: MediaPlaceholderProps) {
  const { t } = useLanguage()

  if (src) {
    return (
      <figure
        data-prompt-id={promptId}
        className={`overflow-hidden rounded-xl border border-[var(--color-line)] ${aspectClass[aspect]} ${className}`}
      >
        <img src={src} alt={alt ?? shotType} className="h-full w-full object-cover" />
      </figure>
    )
  }

  return (
    <figure
      data-replace-with-real-image="true"
      data-prompt-id={promptId}
      className={`group relative overflow-hidden rounded-xl border border-[var(--color-line)] ${aspectClass[aspect]} ${className}`}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            'repeating-linear-gradient(135deg, var(--color-maroon-tint) 0px, var(--color-maroon-tint) 12px, var(--color-sand-light) 12px, var(--color-sand-light) 13px), linear-gradient(160deg, var(--color-maroon) 0%, var(--color-sand) 100%)',
          backgroundBlendMode: 'overlay',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-maroon-dark)]/70 via-transparent to-transparent" />

      <span className="absolute start-3 top-3 rounded-full bg-[var(--color-canvas)]/90 px-3 py-1 text-[11px] font-medium tracking-wide text-[var(--color-maroon)] shadow-sm">
        {aspect} · {shotType}
      </span>

      <div className="absolute inset-x-0 bottom-0 p-4">
        <p className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-[var(--color-sand-light)]">
          {t.media.replaceNote}
        </p>
        <p className="max-h-16 overflow-hidden font-mono text-[11px] leading-snug text-[var(--color-canvas)]/90 transition-[max-height] duration-300 group-hover:max-h-40">
          {prompt}
        </p>
      </div>
    </figure>
  )
}
