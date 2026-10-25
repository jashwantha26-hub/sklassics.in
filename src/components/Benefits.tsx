import { BriefcaseBusiness, Headphones, Laptop, Star } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const styles = String.raw`
.benefits-section { background: radial-gradient(ellipse 25% 90% at 0% 46%, #dbcde0 0%, transparent 100%), radial-gradient(ellipse 25% 90% at 100% 80%, #e9dce9 0%, transparent 100%), #fdfcfe; padding: 52px 0 54px; }
.section-intro { text-align: center; margin-bottom: 41px; }
.section-intro h2 { color: var(--ink); font-size: clamp(27px, 2vw, 36px); line-height: 1.15; font-weight: 900; letter-spacing: -.04em; margin: 0 0 8px; }
.section-intro p { color: #556174; margin: 0; font-size: 15px; }
.benefits-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 23px; }
.benefit-card { background: #ffffffec; border: 1px solid #e6d5ed; border-radius: 17px; min-height: 195px; box-shadow: 0 2px 4px #371d4215, 0 0 1px #69327624; text-align: center; padding: 17px 13px 15px; display: flex; flex-direction: column; align-items: center; }
.benefit-icon { width: 56px; height: 56px; flex: none; display: grid; place-items: center; border-radius: 13px; color: white; background: linear-gradient(140deg, #4c0757, #792589); box-shadow: 0 6px 10px #55116621; margin-bottom: 11px; }
.benefit-card h3 { margin: 0 0 8px; font-size: 15px; line-height: 1.28; color: #172033; font-weight: 800; }
.benefit-card strong { color: var(--purple); font-size: 17px; font-weight: 850; }
.benefit-card p { color: #5c697d; margin: 11px 0 14px; font-size: 13px; line-height: 1.4; }
.benefit-accent { width: 40px; height: 2px; margin-top: auto; background: #83218d; }

@media (max-width: 1050px) {
  .benefits-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; }
}
@media (max-width: 760px) {
  .benefits-section { padding: 51px 0; }
  .section-intro { margin-bottom: 26px; }
  .section-intro p { font-size: 14px; }
}
@media (max-width: 520px) {
  .benefits-grid { grid-template-columns: 1fr; }
  .benefit-card { min-height: 183px; }
}
`

type Benefit = {
  title: string
  metric: string
  description: string
  icon: LucideIcon
}

const benefits: Benefit[] = [
  {
    title: '24 x 7 Support',
    metric: '24/7',
    description: 'Real humans. Real time. Any timezone.',
    icon: Headphones,
  },
  {
    title: '4.8/5 Rating',
    metric: '4.8/5',
    description: 'Consistently loved by 50k+ learners.',
    icon: Star,
  },
  {
    title: 'Access On The Go',
    metric: '100%',
    description: 'Responsive, mobile-first learning experience.',
    icon: Laptop,
  },
  {
    title: 'Job Assistance',
    metric: '1000+',
    description: 'Interview prep, referrals & career coaching.',
    icon: BriefcaseBusiness,
  },
]

export default function Benefits() {
  return (
    <>
      <style>{styles}</style>
      <section className="benefits-section" id="benefits" aria-labelledby="benefits-heading">
      <div className="container-wide">
        <div className="section-intro">
          <h2 id="benefits-heading">Why learners choose us</h2>
          <p>Benefits designed for outcomes—support, quality, flexibility and careers.</p>
        </div>
        <div className="benefits-grid">
          {benefits.map(({ title, metric, description, icon: Icon }) => (
            <article className="benefit-card" key={title}>
              <div className="benefit-icon"><Icon size={26} strokeWidth={2.6} aria-hidden="true" /></div>
              <h3>{title}</h3>
              <strong>{metric}</strong>
              <p>{description}</p>
              <span className="benefit-accent" aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}
