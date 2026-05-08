'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from './Logo'
import { ArrowIcon } from './Icons'

const links = [
  { href: '/',            label: 'Ana Sayfa' },
  { href: '/hizmetler',  label: 'Hizmetler' },
  { href: '/projeler',   label: 'Projeler' },
  { href: '/hakkimizda', label: 'Hakkımızda' },
  { href: '/blog',       label: 'Blog' },
  { href: '/iletisim',   label: 'İletişim' },
]

export default function NavBar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="nav">
        <Logo />

        {/* Desktop menü */}
        <nav className="nav-links">
          {links.map(l => (
            <Link key={l.href} href={l.href} className={pathname === l.href ? 'active' : ''}>
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Desktop sağ taraf */}
        <div className="nav-actions">
          <span className="mono" style={{ fontSize: 12, color: 'var(--c-mute)' }}>+90 454 000 00 00</span>
          <Link href="/iletisim" className="btn btn-ink">
            Ücretsiz Keşif <ArrowIcon />
          </Link>
        </div>

        {/* Hamburger butonu (sadece mobilde görünür) */}
        <button className="nav-hamburger" onClick={() => setOpen(true)} aria-label="Menüyü aç">
          <span /><span />
        </button>
      </div>

      {/* Mobil tam ekran menü */}
      <div className={`nav-mobile-menu${open ? ' open' : ''}`}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Logo size={20} />
          <button className="nav-mobile-close" onClick={() => setOpen(false)} aria-label="Menüyü kapat">✕</button>
        </div>

        <nav className="nav-mobile-links">
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className={pathname === l.href ? 'active' : ''}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div style={{ marginTop: 40, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <Link href="/iletisim" className="btn btn-ink" onClick={() => setOpen(false)}
            style={{ justifyContent: 'center', padding: '16px 24px' }}>
            Ücretsiz Keşif Al <ArrowIcon />
          </Link>
          <a href="https://wa.me/904540000000" target="_blank" rel="noopener noreferrer"
            className="btn btn-wa" style={{ justifyContent: 'center', padding: '16px 24px' }}>
            WhatsApp'tan Yaz
          </a>
        </div>

        <div style={{ marginTop: 'auto', paddingTop: 32, borderTop: '1px solid var(--c-line)', fontSize: 13, color: 'var(--c-mute)' }}>
          +90 454 000 00 00
        </div>
      </div>
    </>
  )
}
