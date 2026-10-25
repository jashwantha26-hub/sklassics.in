import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'

const styles = String.raw`
.site-header { height: 65px; width: 100%; background: #fff; border-bottom: 1px solid #edf0f3; position: relative; z-index: 20; }
.nav-shell { width: min(100% - 68px, 1860px); height: 100%; margin: auto; display: flex; justify-content: space-between; align-items: center; gap: 28px; }
.brand { display: inline-flex; gap: 0; align-items: center; color: #4e1768; font-size: 30px; font-weight: 850; letter-spacing: -1.7px; white-space: nowrap; }
.brand-symbol { width: 40px; height: 38px; flex: none; margin-right: -2px; }
.primary-nav { display: flex; align-items: center; gap: clamp(13px, 1.35vw, 28px); }
.nav-link { font-size: 13.5px; color: #485266; font-weight: 750; white-space: nowrap; transition: color .2s; position: relative; padding: 8px 0; }
.nav-link:hover, .nav-link.active { color: var(--purple); }
.nav-link.active::after { content: ''; position: absolute; height: 2px; width: 85%; background: var(--purple); left: 7.5%; bottom: 0; }
.menu-toggle { display: none; border: 0; background: #f8f3f9; color： var(--purple); border-radius: 10px; padding: 10px; align-items： center; justify-content: center; }

@media (max-width: 760px) {
  .site-header { height: 64px; }
  .nav-shell { width: min(100% - 36px, 1860px); }
  .brand { font-size: 23px; }
  .brand-symbol { height: 35px; width: 33px; }
  .menu-toggle { display: inline-flex; }
  .primary-nav { display: none; position: absolute; left: 16px; right: 16px; top: 70px; background: white; box-shadow: 0 16px 48px #2b063b27; border: 1px solid #eee1f0; border-radius: 16px; padding: 11px; z-index: 20; }
  .primary-nav.is-open { display: flex; flex-direction: column; align-items: stretch; gap: 0; }
  .nav-link { display: flex; align-items: center; justify-content: space-between; font-size: 14px; padding: 13px 14px; border-radius: 9px; }
  .nav-link:hover, .nav-link.active { background: #f7edf9; }
  .nav-link.active::after { display: none; }
}
`

const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Courses', href: '/courses' },
  { label: 'Workshops', href: '/workshops' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact Us', href: '#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!menuOpen) return
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onEscape)
    return () => window.removeEventListener('keydown', onEscape)
  }, [menuOpen])

  return (
    <>
      <style>{styles}</style>
      <header className="site-header">
      <div className="nav-shell">
        <a className="brand" href="#home" aria-label="Sklassics home" onClick={() => setMenuOpen(false)}>
          <svg className="brand-symbol" width="36" height="38" viewBox="0 0 40 42" fill="none" aria-hidden="true">
            <path d="M20 2.3 36.7 11.7v18.6L20 39.7 3.3 30.3V11.7L20 2.3Z" stroke="currentColor" strokeWidth="2.8" />
            <path d="M26 14.3c-1.7-1.6-3.5-2.2-6.2-2.2-3.7 0-6.5 1.6-6.5 4.6 0 6.1 13.4 2.3 13.4 8.9 0 3-2.6 5.3-6.9 5.3-3.1 0-5.7-.9-7.7-3" stroke="currentColor" strokeWidth="2.7" strokeLinecap="round" />
          </svg>
          <span>klassics</span>
        </a>

        <nav className={`primary-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation" id="primary-navigation">
          {navigation.map(({ label, href }, index) => (
            <a
              className={index === 0 ? 'nav-link active' : 'nav-link'}
              href={href}
              key={label}
              aria-current={index === 0 ? 'page' : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {label}
              {menuOpen && index > 1 && index < 5 && <ArrowUpRight size={14} aria-hidden="true" />}
            </a>
          ))}
        </nav>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-controls="primary-navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
    </>
  )
}
