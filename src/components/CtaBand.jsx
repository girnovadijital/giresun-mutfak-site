import Link from 'next/link'
import { ArrowIcon, WhatsAppIcon } from './Icons'
import { client } from '@/sanity/lib/client'
import { settingsQuery } from '@/sanity/lib/queries'

export default async function CtaBand() {
  let s = null
  try { s = await client.fetch(settingsQuery) } catch {}

  const eyebrow  = s?.ctaEyebrow  || 'Ücretsiz · Bağlayıcı değil'
  const title    = s?.ctaTitle    || 'Önce bir kahve içelim, sonra ölçü alalım.'
  const subtitle = s?.ctaSubtitle || 'Ekibimiz adresinize gelir, ölçü alır, tasarım önerisini ücretsiz sunar. Beğenirseniz devam ederiz.'
  const cta1     = s?.ctaCta1     || 'Ücretsiz Keşif Al'
  const cta2     = s?.ctaCta2     || "WhatsApp'tan Yaz"
  const whatsapp = s?.whatsapp    || '904540000000'

  return (
    <section className="s-xl" style={{ background: 'var(--c-paper-2)' }}>
      <div className="mxw-sm" style={{ textAlign: 'center' }}>
        <div className="eyebrow" style={{ marginBottom: 24 }}>{eyebrow}</div>
        <h2 className="display t-cta" style={{ marginBottom: 24 }}>
          {title}
        </h2>
        <p className="muted" style={{ fontSize: 16, maxWidth: 560, margin: '0 auto 40px' }}>
          {subtitle}
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/iletisim" className="btn btn-ink">
            {cta1} <ArrowIcon />
          </Link>
          <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn btn-wa">
            <WhatsAppIcon size={18} /> {cta2}
          </a>
        </div>
      </div>
    </section>
  )
}
