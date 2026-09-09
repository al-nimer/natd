import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { en, type Dictionary } from './en'
import { ar } from './ar'

type Locale = 'en' | 'ar'

const dictionaries: Record<Locale, Dictionary> = { en, ar }

interface LanguageContextValue {
  locale: Locale
  dir: 'ltr' | 'rtl'
  t: Dictionary
  setLocale: (locale: Locale) => void
  toggleLocale: () => void
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

const STORAGE_KEY = 'natd-locale'

function getInitialLocale(): Locale {
  if (typeof window === 'undefined') return 'en'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  return stored === 'ar' || stored === 'en' ? stored : 'en'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale)

  const dir = dictionaries[locale].meta.dir as 'ltr' | 'rtl'

  useEffect(() => {
    document.documentElement.lang = locale
    document.documentElement.dir = dir
    window.localStorage.setItem(STORAGE_KEY, locale)
  }, [locale, dir])

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      dir,
      t: dictionaries[locale],
      setLocale: setLocaleState,
      toggleLocale: () => setLocaleState((prev) => (prev === 'en' ? 'ar' : 'en')),
    }),
    [locale, dir],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}
