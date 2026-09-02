import { useRef, useEffect } from 'react'
import { about, company, milestones, principalCompanies } from '../data/content.js'
import { Reveal, SectionHead } from '../hooks/useReveal.jsx'
import Icon from './Icons.jsx'

export default function About() {
  const scrollRef = useRef(null)
  const isHovering = useRef(false)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    let animationId
    const step = () => {
      if (!isHovering.current) {
        el.scrollLeft += 1
        // Reset when scrolled halfway (since list is duplicated for infinite effect)
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0
        }
      }
      animationId = requestAnimationFrame(step)
    }
    animationId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(animationId)
  }, [])

  const groupedCompanies = principalCompanies.reduce((acc, curr) => {
    let group = acc.find(g => g.year === curr.year)
    if (!group) {
      group = { year: curr.year, companies: [] }
      acc.push(group)
    }
    group.companies.push(curr)
    return acc
  }, [])

  return (
    <section className="section about" id="about">
      <div className="container about__grid">
        <div className="about__media">
          <Reveal className="about__img-wrap" dir="left">
            <div className="img-curtain about__img-frame">
              <img
                src="/image8.png"
                alt="DNS International Operations"
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
        <Reveal delay={100}>
          <ol 
            className="about__timeline" 
            ref={scrollRef}
            onMouseEnter={() => (isHovering.current = true)}
            onMouseLeave={() => (isHovering.current = false)}
            onTouchStart={() => (isHovering.current = true)}
            onTouchEnd={() => (isHovering.current = false)}
          >
            {[...groupedCompanies, ...groupedCompanies].map((group, i) => (
              <li className="about__milestone" key={i + group.year} style={{ '--d': `${(i % 5) * 100}ms` }}>
                <span className="about__milestone-dot" aria-hidden="true" />
                <b>{group.year}</b>
                <div className="about__milestone-logos">
                  {group.companies.map(comp => (
                    <div className="about__milestone-logo" key={comp.text}>
                      <img 
                        src={comp.logo} 
                        alt={comp.text} 
                        loading="lazy"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="about__milestone-logo-fallback" style={{ display: 'none' }}>
                        {comp.text}
                      </div>
                    </div>
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  )
}
