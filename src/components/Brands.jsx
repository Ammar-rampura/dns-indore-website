import { brands } from '../data/content.js'

export default function Brands() {
  const loop = [...brands, ...brands]
  return (
    <section className="brands" id="brands" aria-label="Brands and companies we serve">
      <div className="container brands__head">
        <p>Trusted Carrying &amp; Forwarding partner for</p>
      </div>
      <div className="brands__marquee" role="presentation">
        <div className="brands__track">
          {loop.map((b, i) => (
            <span className="brands__chip" key={`${b.short}-${i}`} aria-hidden={i >= brands.length}>
              <svg viewBox="0 0 18 18" width="18" height="18" aria-hidden="true">
                <rect width="18" height="18" rx="5" fill="var(--brand-950)" />
                <path d="M5 12l3-5.5L10.5 10l1.3-2 2.2 4z" fill="var(--brand-400)" />
              </svg>
              {b.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
