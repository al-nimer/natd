import { NavLink } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'

export function Footer() {
  const { t } = useLanguage()

  const links = [
    { to: '/programs', label: t.nav.programs },
    { to: '/admissions', label: t.nav.admissions },
    { to: '/campus-life', label: t.nav.campusLife },
    { to: '/about', label: t.nav.about },
    { to: '/contact', label: t.nav.contact },
  ]

  return (
    <footer className="bg-[var(--color-maroon)] text-[var(--color-canvas)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <img src="/logo-sec.png" alt="NATD — Najd Academy of Technology & Design" className="h-9 w-auto" />
          <p className="mt-4 max-w-xs text-sm text-[var(--color-sand-light)]">{t.footer.tagline}</p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-[var(--color-sand-light)]">
            {t.footer.quickLinks}
          </h3>
          <ul className="space-y-2">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} className="text-sm text-[var(--color-canvas)]/85 hover:text-[var(--color-canvas)]">
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-[var(--color-sand-light)]">
            {t.footer.contactTitle}
          </h3>
          <ul className="space-y-2 text-sm text-[var(--color-canvas)]/85">
            <li>{t.contact.address}</li>
            <li dir="ltr" className="text-start">
              {t.contact.phone}
            </li>
            <li dir="ltr" className="text-start">
              {t.contact.email}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[var(--color-canvas)]/15 py-5 text-center text-xs text-[var(--color-canvas)]/70">
        © {new Date().getFullYear()} NATD — Najd Academy of Technology &amp; Design. {t.footer.rights}
      </div>
    </footer>
  )
}
