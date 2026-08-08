import { about, company, milestones } from '../data/content.js'
import { Reveal, SectionHead } from '../hooks/useReveal.jsx'
import Icon from './Icons.jsx'

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container about__grid">
        <div className="about__media">
          <Reveal className="about__img-wrap" dir="left">
            <div className="img-curtain about__img-frame">
              <img
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=900&q=70"
                alt="Warehouse team member verifying inventory"
                loading="lazy"
              />
            </div>
            <div className="about__years">
              <b>{new Date().getFullYear() - company.established}+</b>
              <span>
                Years of<br />
                Excellence
              </span>
            </div>
          </Reveal>
        </div>

        <div className="about__content">
          <SectionHead eyebrow={about.eyebrow} title={about.title} />
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} as="p" className="about__para" delay={i * 80}>
              {p}
            </Reveal>
          ))}

          <div className="about__pillars">
            {about.pillars.map((pl, i) => (
              <Reveal key={pl.title} className="about__pillar" delay={i * 100}>
                <span className="about__pillar-check">
                  <Icon name="check" size={16} />
                </span>
                <div>
                  <h3>{pl.title}</h3>
                  <p>{pl.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="about__sign" delay={200}>
            <span className="about__sign-avatar" aria-hidden="true">
              {about.signatory.name
                .split(' ')
                .map((w) => w[0])
                .join('')}
            </span>
            <div>
              <strong>{about.signatory.name}</strong>
              <small>{about.signatory.role}, {company.legalName}</small>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="container">
        <Reveal as="ol" className="about__timeline" delay={100}>
          {milestones.map((m, i) => (
            <li className="about__milestone" key={m.year + m.text} style={{ '--d': `${i * 170}ms` }}>
              <span className="about__milestone-dot" aria-hidden="true" />
              <b>{m.year}</b>
              <p>{m.text}</p>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
