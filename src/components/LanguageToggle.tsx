import { useLanguage } from '../i18n/LanguageContext'

export function LanguageToggle({ className = '' }: { className?: string }) {
  const { t, toggleLocale, locale } = useLanguage()

  return (
    <button
      type="button"
      onClick={toggleLocale}
      className={`rounded-full border border-[var(--color-sand)] px-4 py-1.5 text-sm font-medium text-[var(--color-maroon)] transition hover:bg-[var(--color-maroon)] hover:text-[var(--color-canvas)] ${className}`}
      aria-label={locale === 'en' ? 'Switch to Arabic' : 'التبديل إلى الإنجليزية'}
    >
      {t.nav.langToggle}
    </button>
  )
}
