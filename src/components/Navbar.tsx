import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'
import { LanguageToggle } from './LanguageToggle'

export function Navbar() {
  const { t } = useLanguage()
  const location = useLocation()
  const [scrolled, setScrolled] = useState(() => typeof window !== 'undefined' && window.scrollY > 8)
  const [drawerOpen, setDrawerOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setDrawerOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [drawerOpen])

  const links = [
    { to: '/', label: t.nav.home },
    { to: '/programs', label: t.nav.programs },
    { to: '/admissions', label: t.nav.admissions },
    { to: '/campus-life', label: t.nav.campusLife },
    { to: '/about', label: t.nav.about },
    { to: '/contact', label: t.nav.contact },
  ]

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors ${
      isActive ? 'text-[var(--color-maroon)]' : 'text-[var(--color-ink-muted)] hover:text-[var(--color-maroon)]'
    }`

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-[0_1px_0_var(--color-line)]' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--color-maroon)] text-sm font-bold text-[var(--color-canvas)]">
            N
          </span>
          <span className="text-sm font-semibold tracking-wide text-[var(--color-ink)]">NATD</span>
        </NavLink>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass} end={link.to === '/'}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageToggle />
          <NavLink
            to="/admissions"
            className="rounded-full bg-[var(--color-maroon)] px-5 py-2 text-sm font-semibold text-[var(--color-canvas)] transition hover:bg-[var(--color-maroon-dark)]"
          >
            {t.nav.apply}
          </NavLink>
        </div>

        <button
          type="button"
          onClick={() => setDrawerOpen(true)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--color-line)] lg:hidden"
          aria-label="Open menu"
          aria-expanded={drawerOpen}
        >
          <span className="relative block h-3 w-5">
            <span className="absolute inset-x-0 top-0 h-0.5 bg-[var(--color-ink)]" />
            <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 bg-[var(--color-ink)]" />
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[var(--color-ink)]" />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {drawerOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-[var(--color-maroon-dark)]/40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDrawerOpen(false)}
            />
            <motion.div
              className="glass fixed inset-y-0 end-0 z-50 flex w-[82%] max-w-sm flex-col gap-1 p-6 lg:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              role="dialog"
              aria-modal="true"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="text-sm font-semibold text-[var(--color-ink)]">NATD</span>
                <button
                  type="button"
                  onClick={() => setDrawerOpen(false)}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--color-line)]"
                  aria-label="Close menu"
                >
                  ✕
                </button>
              </div>
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `rounded-lg px-3 py-3 text-base font-medium ${
                      isActive ? 'bg-[var(--color-maroon-tint)] text-[var(--color-maroon)]' : 'text-[var(--color-ink)]'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="mt-4 flex items-center gap-3 border-t border-[var(--color-line)] pt-4">
                <LanguageToggle className="flex-1 text-center" />
              </div>
              <NavLink
                to="/admissions"
                className="mt-2 rounded-full bg-[var(--color-maroon)] px-5 py-3 text-center text-sm font-semibold text-[var(--color-canvas)]"
              >
                {t.nav.apply}
              </NavLink>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
