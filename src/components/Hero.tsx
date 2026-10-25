import { ArrowRight } from 'lucide-react'
import heroImage from '../assets/hero.png'

const styles = String.raw`
.hero-section
 { position: relative;
 isolation: isolate; 
 min-height: min(768px, calc(100svh - 65px));
display: flex; 
align-items: center;
overflow: hidden;
background: linear-gradient(90deg, #fff 0%, #fff 45%, #faf8fb 100%);
   }
.hero-grid { position: absolute; inset: 0; z-index: -1; pointer-events: none; background-image: linear-gradient(#51115a0b 1px, transparent 1px), linear-gradient(90deg, #51115a0b 1px, transparent 1px); background-size: 31px 31px; mask-image: linear-gradient(to right, #000 0%, #000 35%, transparent 72%); }
.hero-visual { position: absolute; inset: 0 0 0 auto; width: 62%; z-index: -1; overflow: hidden; mask-image: linear-gradient(to right, transparent 0%, rgba(0,0,0,.22) 17%, #000 43%, #000 100%); }
.hero-visual::after { content: ''; position: absolute; inset: 0; background: linear-gradient(90deg, rgba(255,255,255,.20), transparent 49%); }
.hero-visual img { width: 100%; height: 100%; object-fit: cover; object-position: 62% center; }
.hero-inner { position: relative; z-index: 1; padding-block: 88px 98px; }
.hero-copy { width: min(840px, 100%);
max-width: 840px; }

.hero-copy h1 {
  font-family: "Inter", Arial, Helvetica, sans-serif;
  color: #080808;
  font-size: clamp(43px, 4.38vw, 82px);
  line-height: 1.075;
  font-weight: 900;
  letter-spacing: -0.055em;
  margin: 0 0 23px;
  white-space: normal;
}

.gradient-text { background: linear-gradient(105deg, #48004d 4%, #781d83 51%, #b363ba 100%); background-clip: text; -webkit-background-clip: text; color: transparent; }
.hero-subtitle { margin: 0; max-width: 640px; color: #344861; font-size: clamp(15px, 1.09vw, 18px); font-weight: 450; line-height: 1.52; }
.hero-buttons { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 27px; }
.hero-section .btn { display: inline-flex; align-items: center; justify-content: center; gap: 11px; padding: 13px 23px; min-height: 46px; border-radius: 10px; font-size: 14px; font-weight: 800; transition: transform .2s, background .2s, box-shadow .2s; }
.hero-section .btn:hover { transform: translateY(-2px); }
.hero-section .btn-outline { border: 1.7px solid #83458e; color: var(--purple); background: rgba(255,255,255,.82); }
.hero-section .btn-outline:hover { background: #faf0fc; box-shadow: 0 8px 20px #390c4516; }
.hero-section .btn-muted { background: #fff; border: 1px solid #e5dfe9; color: #1d2838; border-radius: 30px; }
.hero-section .btn-muted:hover { background: #f5eef8; }
.hero-trust { display: flex; align-items: center; gap: 14px; margin-top: 31px; color: #43526c; }
.trust-avatars { display: flex; align-items: center; padding-left: 3px; }
.trust-avatars span { display: grid; place-items: center; background: #62126c; border: 2px solid white; color: white; font-size: 9px; font-weight: 800; width: 30px; height: 30px; border-radius: 50%; margin-left: -5px; }
.trust-avatars span:nth-child(2) { background: #7c2387; }
.trust-avatars span:nth-child(3) { background: #69287a; }
.trust-avatars span:nth-child(4) { background: #8b4d99; }
.hero-trust p { margin: 0; font-size: 12px; }

@media (min-width: 1800px) {
  .hero-copy { width: min(860px, 59%); }
  .hero-copy h1 { font-size: 78px; }
}
@media (max-width: 1300px) {
  .hero-copy h1 { font-size: clamp(40px, 5.15vw, 68px); }
  .hero-copy { width: 64%; }
  .hero-visual { width: 60%; }
}
@media (max-width: 1050px) {
  .hero-copy { width: 66%; }
  .hero-copy h1 { white-space: normal; }
  .hero-visual { width: 66%; opacity: .75; }
  .hero-visual::after { background: linear-gradient(90deg, #fff9, transparent 90%); }
}
@media (max-width: 760px) {
  .hero-section { min-height: 690px; }
  .hero-visual { width: 100%; inset: 0; opacity: .3; mask-image: linear-gradient(90deg, transparent, #000 100%); }
  .hero-visual::after { background: linear-gradient(180deg, #fff2, #fff8); }
  .hero-grid { opacity: .8; }
  .hero-inner { padding-block: 70px; }
  .hero-copy { width: 100%; }
  .hero-copy h1 { font-size: clamp(39px, 8.1vw, 61px); letter-spacing: -.055em; line-height: 1.11; }
  .hero-subtitle { max-width: 560px; font-size: 15px; }
  .hero-trust { align-items: flex-start; }
}
@media (max-width: 520px) {
  .hero-section { min-height: 640px; }
  .hero-copy h1 { font-size: clamp(35px, 8.5vw, 45px); }
  .hero-buttons { gap: 10px; }
  .hero-section .btn { font-size: 12px; padding: 12px 15px; }
  .hero-trust { gap: 8px; }
  .hero-trust p { font-size: 10px; line-height: 1.7; }
}
`

export default function Hero() {
  return (
    <>
      <style>{styles}</style>
      <section className="hero-section" id="home" aria-labelledby="hero-heading">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-visual" aria-hidden="true">
        <img src={heroImage} alt="" fetchPriority="high" />
      </div>
      <div className="hero-inner container-wide">
        <div className="hero-copy">
          <h1 id="hero-heading">
            Accelerate Your<br />
            Career Growth<br />
            <span className="gradient-text">&amp; Upskill Yourself</span>
          </h1>
          <p className="hero-subtitle">
            Live, mentor-led IT programs in Cloud, AI and Data Engineering — designed
            around real-world projects and the skills companies hire for.
          </p>
          <div className="hero-buttons">
            <a className="btn btn-outline" href="/courses">
              Explore Courses <ArrowRight size={17} aria-hidden="true" />
            </a>
            <a className="btn btn-muted" href="/courses">Browse Catalog</a>
          </div>
          <div className="hero-trust">
            <div className="trust-avatars" aria-label="Learning domains">
              {['AI', 'CL', 'DE', 'UX'].map((item) => <span key={item}>{item}</span>)}
            </div>
            <p>Trusted by 50k+ learners <span aria-hidden="true">·</span> 4.8/5 average rating</p>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
