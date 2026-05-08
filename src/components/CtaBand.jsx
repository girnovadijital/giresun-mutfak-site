import Link from 'next/link'
import { ArrowIcon, WhatsAppIcon } from './Icons'

export default function CtaBand() {
  return (
    <section className="s-xl" style={{ background: 'var(--c-paper-2)' }}>
      <div className="mxw-sm" style={{ textAlign: 'center' }}>
        <div className="eyebrow" style={{ marginBottom: 24 }}>Ücretsiz · Bağlayıcı değil</div>
        <h2 className="display t-cta">
          Önce bir <span className="h-script" style={{ color: 'var(--c-wood-deep)' }}>kahve</span> içelim,<br />
          sonra ölçü alalım.
        </h2>
        <p className="muted" style={{ fontSize: 17, marginBottom: 40, maxWidth: 560, margin: '0 auto 40px' }}>
          Ekibimiz adresinize gelir, ölçü alır, tasarım önerisini ücretsiz sunar. Beğenirseniz devam ederiz.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/iletisim" className="btn btn-ink">
            Ücretsiz Keşif Al <ArrowIcon />
          </Link>
          <a href="https://wa.me/904540000000" target="_blank" rel="noopener noreferrer" className="btn btn-wa">
            <WhatsAppIcon size={18} /> WhatsApp'tan Yaz
          </a>
        </div>
      </div>
    </section>
  )
}
