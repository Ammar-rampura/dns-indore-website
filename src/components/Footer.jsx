import { company, navLinks, services } from '../data/content.js'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <div className="footer__logo">
            <span style={{ 
              background: '#fff', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              padding: '6px',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              border: '1px solid rgba(0,0,0,0.05)'
            }}>
              <img src="/dns-logo.png" alt="DNS International Logo" style={{ width: '56px', height: '56px', objectFit: 'contain' }} />
            </span>
            <div>
              <strong>{company.name}</strong>
              <small>{company.tagline}</small>
            </div>
          </div>
          <p>
            {company.legalName} — carrying &amp; forwarding, warehousing and distribution
            operations trusted by leading companies since {company.established}.
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
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
          <p>
            © {year} {company.legalName}. All rights reserved.
          </p>
          <p className="footer__note">
            Logistics partner. All company names &amp; marks belong to their respective owners.
          </p>
        </div>
        <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
          <p className="footer__note">
            Made by <strong style={{ color: 'var(--brand-300)' }}>Ameroids Tech Studio</strong>
          </p>
          <a 
            href="https://wa.me/917723868522" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              justifyContent: 'flex-end',
              gap: '6px', 
              color: '#25D366',
              fontWeight: 500,
              fontSize: '0.85rem'
            }}
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <path d="M12.031 24c-1.921 0-3.805-.487-5.46-1.412l-6.104 1.6 1.63-5.952c-1.014-1.696-1.55-3.645-1.55-5.641 0-6.393 5.203-11.595 11.595-11.595 6.388 0 11.59 5.203 11.59 11.595 0 6.392-5.202 11.405-11.701 11.405zm-5.69-2.825l.386.23c1.55.918 3.327 1.403 5.176 1.403 5.728 0 10.39-4.661 10.39-10.39s-4.662-10.391-10.39-10.391c-5.726 0-10.388 4.662-10.388 10.391 0 1.95.534 3.824 1.545 5.434l.254.404-1.127 4.116 4.154-1.197zm6.757-11.383c-.352-.782-.722-.797-1.055-.811-.271-.012-.582-.012-.893-.012-.312 0-.818.117-1.246.585-.429.467-1.636 1.597-1.636 3.896 0 2.298 1.675 4.519 1.91 4.83.234.312 3.298 5.034 7.994 7.062 1.116.482 1.988.77 2.668.986 1.12.356 2.14.305 2.943.185.897-.134 2.766-1.131 3.155-2.222.39-1.091.39-2.025.273-2.221-.117-.195-.428-.312-.895-.546-.467-.234-2.766-1.364-3.195-1.52-.428-.156-.739-.234-1.051.234-.311.468-1.206 1.52-1.48 1.831-.271.312-.545.351-1.012.117-.467-.234-1.974-.728-3.76-2.325-1.39-1.244-2.328-2.78-2.6-3.248-.273-.468-.029-.721.205-.953.21-.209.467-.546.702-.818.233-.273.311-.468.467-.78.156-.312.078-.585-.039-.819-.117-.234-1.053-2.534-1.442-3.47z"/>
            </svg>
            7723868522
          </a>
        </div>
      </div>
    </footer>
  )
}
