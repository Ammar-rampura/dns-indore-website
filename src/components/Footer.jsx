import { company, navLinks, services } from '../data/content.js'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <div className="footer__logo">
            <svg viewBox="0 0 32 32" width="36" height="36" aria-hidden="true">
              <rect width="32" height="32" rx="9" fill="var(--brand-500)" opacity="0.16" />
              <path d="M9 21l5-9.5L18 18l2.2-3.5L23.5 21z" fill="var(--brand-400)" />
              <circle cx="22.5" cy="10.5" r="2" fill="var(--gold-400)" />
            </svg>
            <div>
              <strong>{company.name}</strong>
              <small>{company.tagline}</small>
            </div>
          </div>
          <p>
            {company.legalName} — carrying &amp; forwarding, warehousing and distribution
            operations trusted by Godrej group companies since {company.established}.
          </p>
        </div>

        <nav className="footer__col" aria-label="Footer — sections">
          <h3>Explore</h3>
          {navLinks.slice(0, 5).map((l) => (
            <a key={l.id} href={`#${l.id}`}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="footer__col">
          <h3>Services</h3>
          {services.slice(0, 5).map((s) => (
            <a key={s.title} href="#services">
              {s.title}
            </a>
          ))}
        </div>

        <div className="footer__col">
          <h3>Reach Us</h3>
          <p>
            {company.address.line1}
            <br />
            {company.address.line2}
            <br />
            {company.address.city}
          </p>
          <a href={`tel:${company.phone.replace(/\s/g, '')}`}>{company.phone}</a>
          <a href={`mailto:${company.email}`}>{company.email}</a>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>
          © {year} {company.legalName}. All rights reserved.
        </p>
        <p className="footer__note">
          Authorized CFA partner. Godrej name &amp; marks belong to their respective owners.
        </p>
      </div>
    </footer>
  )
}
