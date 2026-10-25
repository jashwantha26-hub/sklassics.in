import { ArrowRight } from 'lucide-react'
import { useState, type FormEvent } from 'react'

const styles = String.raw`


.domain-ticker {
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  padding: 24px 0;
}

.domain-ticker-track {
  display: flex;
  width: max-content;
  gap: 32px;
  animation: domain-scroll 35s linear infinite;
}

.domain-ticker-item {
  flex: 0 0 auto;
  color: #f8f9ff;
  font-family: inherit;
  font-size: 13px;
  text-decoration: none;
}

.domain-ticker-item:hover {
  color: #dfb5e6;
}

@keyframes domain-scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

@media (prefers-reduced-motion: reduce) {
  .domain-ticker-track {
    animation: none;
  }
}

.site-footer { background: #101522; color: #f8f9ff; padding: 47px 0 18px; font-family: "Inter", Arial, sans-serif;}
.footer-heading h2 { font-size: clamp(36px, 3vw, 58px); line-height: 1.04; font-weight: 900; letter-spacing: -.05em; margin: 0 0 28px; }
.footer-heading h2 span { background: linear-gradient(105deg, #dfbfe2, #a95cae); background-clip: text; -webkit-background-clip: text; color: transparent; position: relative; }
.footer-heading h2 span::after { content: ''; background: #842b92; width: 57%; height: 3px; position: absolute; bottom: -5px; left: 0; }
.subscribe-form { width: min(100%, 560px); background: #181a25; border-radius: 16px; border: 1px solid #303440; padding: 8px; }
.subscribe-row { display: flex; gap: 8px; }
.subscribe-row input { width: 100%; min-width: 0; border: 1px solid #514059; border-radius: 12px; background: #151722; color: #fff; outline: none; font-size: 13px; padding: 13px 15px; }
.subscribe-row input:focus { border-color: #ab76b6; }
.subscribe-row input::placeholder { color: #a6afc2; }
.subscribe-row button { white-space: nowrap; padding: 0 18px; background: #171622; border: 2px solid #8b5599; color: #fff; display: inline-flex; align-items: center; gap: 8px; border-radius: 10px; font-size: 13px; font-weight: 800; }
.subscribe-row button:hover { background: #32203c; }
.newsletter-helper { min-height: 14px; margin: 7px 3px 0; font-size: 11px; color: #a8b2c7; }
.footer-grid { display: grid; grid-template-columns: .94fr .94fr 1fr; gap: clamp(35px, 4.5vw, 85px); padding-top: 50px; }
.footer-links h3 { color: #f3f1f3; font-size: 12px; letter-spacing: .09em; text-transform: uppercase; margin: 0 0 17px; font-weight: 800; }
.footer-links ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 16px; }
.footer-links li { color: #f8f9ff; font-size: 13px; line-height: 1.3; }
.footer-links a {
  color: #ffffff;
  text-decoration: none;
}
.footer-links a:hover { color: #dfb5e6; text-decoration: underline; }
.footer-actions { display: flex; flex-direction: column; gap: 24px; }
.footer-action-card { background: #181b25; border: 1px solid #353644; border-radius: 18px; padding: 23px; min-height: 142px; }
.footer-action-card h3 { font-size: 17px; margin: 0 0 7px; font-weight: 850; }
.footer-action-card p { font-size: 13px; line-height: 1.4; color: #ccd3e1; margin: 0 0 17px; }
.footer-action-card a { display: inline-flex; align-items: center; gap: 7px; padding: 8px 16px; font-size: 12px; font-weight: 800; border: 2px solid #80508f; border-radius: 10px; color: #ffffff; text-decoration : none; }
.footer-action-card a:hover { background: #30213a; }
.footer-bottom { border-top: 1px solid #f5eded1b; margin: 45px 0 0; padding-top: 17px; font-size: 11px; color: #8790a3; }

@media (max-width: 760px) {
  .footer-grid { grid-template-columns: 1fr 1fr; gap: 34px 24px; padding-top: 40px; }
  .footer-actions { grid-column: 1 / -1; flex-direction: row; }
  .footer-action-card { flex: 1; }
}
@media (max-width: 520px) {
  .footer-heading h2 { font-size: 40px; }
  .subscribe-row { flex-direction: column; }
  .subscribe-row input { height: 46px; }
  .subscribe-row button { min-height: 44px; justify-content: center; }
  .footer-grid { grid-template-columns: 1fr; }
  .footer-actions { grid-column: auto; flex-direction: column; gap: 16px; }
  .footer-links ul { gap: 12px; }
  .footer-services { margin-top: 5px; }
}
`

const domains = [
  'sklassics.com',
  'sklassics-lms.com',
  'sklassics-ai.com',
  'sklassicstutor.com',
  'sklassics-quiz.com',
  'hanumancars.com',
  'vlnvs.com',
  'myleadcontrol.com',
  'ganeshseva.com',
  'durgamatha.com',
  'fruveto.com',
  'aharuchi.com',
];

<div className="domain-ticker">
  <div className="domain-ticker-track">
    {[...domains, ...domains].map((domain, index) => (
      <a
        key={`${domain}-${index}`}
        href={`https://${domain}`}
        className="domain-ticker-item"
      >
        {domain}
      </a>
    ))}
  </div>
</div>

const services = [
  'IT Training & Placement Programs',
  'Professional IT Services',
  'Travel Application Services',
  'Real Estate Platform Solutions',
  'Online & offline Tutoring',
]

const phone = '919392732341'
const whatsAppUrl = (message: string) =>
  `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

export default function Footer() {
  const [email, setEmail] = useState('')
  const [feedback, setFeedback] = useState('')

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!email.trim()) return
    // Replace this with your newsletter API request when the backend is ready.
    setFeedback('Subscriptions are not yet connected. Please contact us to join the list.')
  }

  return (
    <>
      <style>{styles}</style>
      <footer className="site-footer" id="contact">
      <div className="container-wide footer-inner">
        <div className="footer-heading">
          <h2>Where talent meets<br /><span>opportunity</span></h2>
          <form className="subscribe-form" onSubmit={handleSubscribe}>
            <div className="subscribe-row">
              <label className="sr-only" htmlFor="newsletter-email">Email for course updates</label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Subscribe for new courses & offers"
                value={email}
                onChange={(event) => { setEmail(event.target.value); setFeedback('') }}
                required
              />
              <button type="submit">Subscribe <ArrowRight size={17} aria-hidden="true" /></button>
            </div>
            <p className="newsletter-helper" role={feedback ? 'status' : undefined}>
              {feedback || 'No spam. Unsubscribe anytime.'}
            </p>
          </form>
        </div>

        <div className="footer-grid">
          <div className="footer-links">
            <h3>Our Domains</h3>
            <ul>
              {domains.map((domain) => (
                <li key={domain}>
                  <a href={`https://${domain}`} target="_blank" rel="noreferrer">{domain}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-links footer-services">
            <h3>Our Services</h3>
            <ul>{services.map((service) => <li key={service}>{service}</li>)}</ul>
          </div>
          <div className="footer-actions">
            <div className="footer-action-card">
              <h3>I want to enroll</h3>
              <p>Find the right course for your learning journey</p>
              <a href={whatsAppUrl('Hi Sklassics, I would like to enquire about enrolling in a course.')} target="_blank" rel="noreferrer">
                Get Started <ArrowRight size={17} aria-hidden="true" />
              </a>
            </div>
            <div className="footer-action-card">
              <h3>I want to teach</h3>
              <p>Inspire students and share your knowledge</p>
              <a href={whatsAppUrl('Hi Sklassics, I am interested in teaching or mentoring.')} target="_blank" rel="noreferrer">
                Get Started <ArrowRight size={17} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
        <p className="footer-bottom">© {new Date().getFullYear()} Sklassics Technologies Pvt Ltd. All rights reserved.</p>
      </div>
    </footer>
    </>
  )
}
