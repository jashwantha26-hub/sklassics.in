import { ArrowRight } from 'lucide-react'
import certificateImage from '../assets/certificate.png'

const styles = String.raw`
.about-section { position: relative; overflow: hidden; padding: 81px 0 28px; background: #fbfcfe; }
.about-glow { pointer-events: none; position: absolute; inset: -30px -90px 0 44%; background: radial-gradient(ellipse at 67% 40%, rgba(139, 46, 155, .11), transparent 70%); }
.about-layout { position: relative; display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: clamp(45px, 5.4vw, 104px); align-items: center; }
.about-copy { padding: 12px 0 22px; }
.eyebrow { display: inline-flex; align-items: center; gap: 9px; border: 1px solid #b999c7; border-radius: 20px; box-shadow: 0 2px 4px #4815501a; color: var(--purple); padding: 5px 10px; background: white; font-size: 12px; margin-bottom: 21px; }
.eyebrow > span { width: 7px; height: 7px; background: var(--purple); border-radius: 50%; }
.about-copy h2 { color: var(--ink); margin: 0 0 23px; font-size: clamp(32px, 3.05vw, 58px); line-height: 1.21; font-weight: 900; letter-spacing: -.05em; }
.about-copy h2 span { color: #671772; text-decoration: underline; text-decoration-thickness: 6px; text-decoration-color: #ebcfec; text-underline-offset: 2px; }
.about-copy > p { font-size: 14px; line-height: 1.66; color: #304562; margin: 0 0 17px; max-width: 775px; }
.about-stats { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; margin-top: 26px; }
.stat-card { min-height: 70px; display: flex; flex-direction: column; align-items: center; justify-content: center; background: white; border: 1px solid #cba6d0; border-radius: 17px; box-shadow: 0 3px 4px #40254818; }
.stat-card strong { color: #131b2c; font-weight: 900; font-size: 21px; letter-spacing: -.04em; }
.stat-card span { color: #556174; font-size: 11px; padding-top: 1px; }
.about-cta { margin-top: 27px; padding-inline: 23px; }
.certificate-wrap { position: relative; padding: 0 0 18px 0; }
.certificate-blob { position: absolute; width: 42%; height: 45%; left: -25px; top: -18px; background: #a66eaf; opacity: .55; border-radius: 45% 55% 57% 43%; }
.certificate-frame { position: relative; border: 3px solid #fff; box-shadow: 0 18px 46px #5c23663b; border-radius: 34px; background: #501268; overflow: hidden; }
.certificate-frame img { display: block; width: 100%; height: auto; aspect-ratio: 1.35 / 1; object-fit: contain; }
.certificate-chip { position: absolute; z-index: 1; background: #fff; padding: 11px 13px; border-radius: 12px; font-size: 12px; color: var(--purple); font-weight: 800; box-shadow: 0 3px 18px #45125113; white-space: nowrap; }
.certificate-chip-top { top: -10px; right: 15px; }
.certificate-chip-bottom { bottom: 0; left: 15px; }
.partners-strip { position: relative; display: flex; gap: clamp(15px, 2.5vw, 46px); justify-content: space-around; align-items: center; overflow: hidden; margin-top: 34px; padding: 16px 20px 8px; background: #fff9; }
.partners-strip > span { display: inline-flex; align-items: center; gap: 10px; flex: none; color: #8792a4; font-size: 13px; white-space: nowrap; }
.partners-strip i { width: 8px; height: 8px; border-radius: 50%; background: #65136c; }
.about-section .btn { display: inline-flex; align-items: center; justify-content: center; gap: 11px; padding: 13px 23px; min-height: 46px; border-radius: 10px; font-size: 14px; font-weight: 800; transition: transform .2s, background .2s, box-shadow .2s; }
.about-section .btn:hover { transform: translateY(-2px); }
.about-section .btn-outline { border: 1.7px solid #83458e; color: var(--purple); background: rgba(255,255,255,.82); }
.about-section .btn-outline:hover { background: #faf0fc; box-shadow: 0 8px 20px #390c4516; }


@media (max-width: 1300px) {
  .about-layout { gap: 40px; }
  .about-copy h2 { font-size: clamp(30px, 3.25vw, 48px); }
}
@media (max-width: 1050px) {
  .about-layout { grid-template-columns: 1fr 1fr; gap: 24px; }
  .about-copy h2 { font-size: 38px; }
  .desktop-break { display: none; }
  .partners-strip { justify-content: flex-start; overflow-x: auto; scrollbar-width: none; }
  .partners-strip::-webkit-scrollbar { display: none; }
}
@media (max-width: 760px) {
  .about-section { padding-top: 58px; }
  .about-layout { grid-template-columns: 1fr; gap: 45px; }
  .about-copy { padding: 0; }
  .about-copy h2 { font-size: clamp(33px, 7.3vw, 47px); }
  .certificate-wrap { width: min(100%, 650px); margin-inline: auto; }
  .partners-strip { margin-top: 38px; }
}
@media (max-width: 520px) {
  .about-stats { gap: 8px; }
  .stat-card strong { font-size: 18px; }
  .certificate-frame { border-radius: 17px; }
  .certificate-chip { font-size: 9px; padding: 8px; border-radius: 9px; }
  .certificate-chip-top { right: 3px; }
  .certificate-chip-bottom { left: 5px; }
  .about-section .btn { font-size: 12px; padding: 12px 15px; }
}
`

const stats = [
  { number: '1000+', label: 'Learners' },
  { number: '25+', label: 'Mentors' },
  { number: '30+', label: 'Courses' },
]
const partners = ['Meta', 'Stripe', 'AWS', 'Google', 'Microsoft', 'Atlassian', 'Adobe', 'Uber', 'Meta', 'Stripe']

export default function About() {
  return (
    <>
      <style>{styles}</style>
      <section className="about-section" id="about" aria-labelledby="about-heading">
      <div className="about-glow" aria-hidden="true" />
      <div className="about-layout container-wide">
        <div className="about-copy">
          <div className="eyebrow"><span /> About Us</div>
          <h2 id="about-heading">
            We help learners level-up<br className="desktop-break" /> with{' '}
            <span>expert-led IT training</span>
          </h2>
          <p>
            We are a team of seasoned professionals across modern IT stacks. Our passion is
            making high-quality education accessible worldwide and preparing learners for real
            projects and careers.
          </p>
          <p>
            At Sklassics, our programs span fundamentals to advanced techniques—carefully
            designed with industry to build skills and confidence through practice.
          </p>
          <div className="about-stats">
            {stats.map((stat) => (
              <div className="stat-card" key={stat.label}>
                <strong>{stat.number}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
          <a className="btn btn-outline about-cta" href="/courses">
            Explore Courses <ArrowRight size={17} aria-hidden="true" />
          </a>
        </div>
        <div className="certificate-wrap">
          <div className="certificate-blob" aria-hidden="true" />
          <div className="certificate-frame">
            <img src={certificateImage} alt="Example of a Sklassics course completion certificate" loading="lazy" />
          </div>
          <span className="certificate-chip certificate-chip-top">Verified Certificate</span>
          <span className="certificate-chip certificate-chip-bottom">Course Completion Certificate</span>
        </div>
      </div>
      <div className="partners-strip container-wide" aria-label="Technology ecosystem">
        {partners.map((partner, index) => (
          <span key={`${partner}-${index}`}><i aria-hidden="true" /> {partner}</span>
        ))}
      </div>
    </section>
    </>
  )
}
