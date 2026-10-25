import { Phone } from 'lucide-react'

const styles = String.raw`
.floating-contact { position: fixed; bottom: 12px; right: 12px; z-index: 30; background: white; color: #172033; box-shadow: 0 3px 22px #21002e29; border: 1px solid #e0d2e4; border-radius: 28px; padding: 9px 14px; font-size: 12px; font-weight: 900; display: flex; align-items: center; gap: 7px; white-space: nowrap; }
.floating-contact:hover { background: #f6e9fa; }
.contact-dot { display: inline-grid; place-items: center; width: 12px; height: 12px; color: #65116b; }
`

export default function FloatingContact() {
  return (
    <>
      <style>{styles}</style>
      <a className="floating-contact" href="tel:+919392732341" aria-label="Call Sklassics at +91 9392732341">
      <span className="contact-dot"><Phone size={12} aria-hidden="true" /></span>
      <span>+91 9392732341</span>
    </a>
    </>
  )
}
