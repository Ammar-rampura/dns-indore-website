import { company, heroStats } from '../data/content.js'
import Icon from './Icons.jsx'
import Hero3D from './Hero3D.jsx'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__grid-lines" />
        <div className="hero__glow hero__glow--a" />
        <div className="hero__glow hero__glow--b" />
        <svg className="hero__route" viewBox="0 0 1200 400" preserveAspectRatio="none">
          <path d="M-20 350 C 190 310, 330 170, 540 205 S 920 330, 1240 130" />
        </svg>
      </div>

      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="hero__badge">
            <span className="hero__badge-dot" />
            {company.tagline} · Est. {company.established}
          </p>
          <h1 className="hero__title">
            {[
              [
                ['Precision', false],
                ['Warehousing.', true],
              ],
              [
                ['Reliable', false],
                ['Distribution.', true],
              ],
            ].map((line, li) => (
              <span className="hero__line" key={li}>
                {line.map(([word, accent], wi) => (
                  <span className="hero__word" key={word} style={{ '--i': li * 2 + wi }}>
                    <span className={`hero__word-inner ${accent ? 'hero__word-accent' : ''}`}>
                      {word}
                    </span>
                  </span>
                ))}
              </span>
            ))}
          </h1>
          <p className="hero__sub">{company.subheadline}</p>

          <div className="hero__actions">
            <a href="#contact" className="btn btn--primary btn--lg">
              Partner With Us <Icon name="arrow" size={18} />
            </a>
            <a href="#services" className="btn btn--ghost btn--lg">
              Explore Services
            </a>
          </div>

          <dl className="hero__stats">
            {heroStats.map((s) => (
              <div key={s.label} className="hero__stat">
                <dt>{s.value}</dt>
                <dd>{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <Hero3D />
          <span className="hero__hint">Click a carton to dispatch it</span>

          <div className="hero__card hero__card--dispatch">
            <span className="hero__card-icon">
              <Icon name="truck" size={20} />
            </span>
            <div>
              <strong>1,200+ dispatches</strong>
              <small>processed today</small>
            </div>
            <span className="hero__pulse" />
          </div>

          <div className="hero__card hero__card--accuracy">
            <div className="hero__ring">
              <svg viewBox="0 0 44 44" width="44" height="44">
                <circle cx="22" cy="22" r="19" fill="none" stroke="var(--brand-100)" strokeWidth="5" />
                <circle
                  cx="22"
                  cy="22"
                  r="19"
                  fill="none"
                  stroke="var(--brand-500)"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeDasharray="119.4"
                  strokeDashoffset="0.4"
                  transform="rotate(-90 22 22)"
                />
              </svg>
              <b>99.7%</b>
            </div>
            <div>
              <strong>Order accuracy</strong>
              <small>FIFO · batch-tracked</small>
            </div>
          </div>
        </div>
      </div>

      <a href="#about" className="hero__scroll" aria-label="Scroll to About section">
        <span />
      </a>
    </section>
  )
}
