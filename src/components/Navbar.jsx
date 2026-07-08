import { useEffect, useState } from 'react'
import { company, navLinks } from '../data/content.js'

function Logo() {
  return (
    <a href="#top" className="logo" aria-label={`${company.name} — home`}>
      <span className="logo__mark" aria-hidden="true">
        <svg viewBox="0 0 32 32" width="34" height="34">
          <rect width="32" height="32" rx="9" fill="var(--brand-950)" />
          <path d="M9 21l5-9.5L18 18l2.2-3.5L23.5 21z" fill="var(--brand-400)" />
          <circle cx="22.5" cy="10.5" r="2" fill="var(--gold-400)" />
        </svg>
      </span>
      <span className="logo__text">
        <strong>Godrej DNS</strong>
        <small>CFA &amp; Warehousing</small>
      </span>
    </a>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id))
      },
      { rootMargin: '-35% 0px -60% 0px' },
    )
    navLinks.forEach((l) => {
      const el = document.getElementById(l.id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''} ${open ? 'nav--open' : ''}`}>
      <div className="container nav__inner">
        <Logo />
        <nav className="nav__links" aria-label="Primary">
          {navLinks.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={active === l.id ? 'is-active' : ''}
              aria-current={active === l.id ? 'true' : undefined}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="btn btn--primary nav__cta">
          Get a Quote
        </a>
        <button
          className={`nav__burger ${open ? 'is-open' : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`nav__drawer ${open ? 'is-open' : ''}`}>
        <nav aria-label="Mobile">
          {navLinks.map((l, i) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              style={{ transitionDelay: `${60 + i * 40}ms` }}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn btn--primary"
            style={{ transitionDelay: '420ms' }}
            onClick={() => setOpen(false)}
          >
            Get a Quote
          </a>
        </nav>
      </div>
    </header>
  )
}
