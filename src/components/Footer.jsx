import { client } from '@/sanity/lib/client'
import { settingsQuery } from '@/sanity/lib/queries'

export default async function Footer() {
  let s = null
  try { s = await client.fetch(settingsQuery) } catch {}

  const phone        = s?.phone        || '+90 454 000 00 00'
  const email        = s?.email        || 'info@giresunmutfak.com'
  const address      = s?.address      || 'Atatürk Bulvarı No:142\nMerkez / Giresun'
  const hours1       = s?.workingHours  || 'Pzt – Cmt · 09:00 – 19:00'
  const hours2       = s?.workingHours2 || 'Pazar · Randevulu'
  const tagline      = s?.footerTagline || "Karadeniz'in kalbinde, 2011'den beri özel tasarım mutfaklar üretiyoruz. Her proje, ölçü alımından montaja kadar bizim sorumluluğumuzda."
  const year         = new Date().getFullYear()

  return (
    <footer style={{ background: 'var(--c-ink)', color: 'var(--c-paper)', padding: '72px 0 32px' }}>
      <div className="mxw" style={{ paddingLeft: 64, paddingRight: 64 }}>
        <div className="g-footer">
          <div>
            <div className="display" style={{ fontSize: 32, marginBottom: 20 }}>
              Giresun<span style={{ fontStyle: 'italic', opacity: 0.6 }}> Mutfak</span>
            </div>
            <p style={{ opacity: 0.7, fontSize: 14, maxWidth: 320, lineHeight: 1.6 }}>
              {tagline}
            </p>
          </div>
          <div>
            <div className="eyebrow" style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 16 }}>Hizmetler</div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, fontSize: 14, opacity: 0.85 }}>
              <li>Mutfak Dolabı</li>
              <li>Mutfak Tadilatı</li>
              <li>Özel Tasarım</li>
              <li>Anahtar Teslim</li>
            </ul>
          </div>
          <div>
            <div className="eyebrow" style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 16 }}>İletişim</div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, fontSize: 14, opacity: 0.85 }}>
              <li>{phone}</li>
              <li>{email}</li>
              <li style={{ whiteSpace: 'pre-line' }}>{address}</li>
            </ul>
          </div>
          <div>
            <div className="eyebrow" style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 16 }}>Çalışma Saatleri</div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, fontSize: 14, opacity: 0.85 }}>
              <li>{hours1}</li>
              <li>{hours2}</li>
            </ul>
          </div>
        </div>
        <div style={{ height: 1, background: 'rgba(255,255,255,0.1)', margin: '40px 0 24px' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8, fontSize: 12, opacity: 0.5, fontFamily: 'var(--f-mono)' }}>
          <span>© {year} Giresun Mutfak — Tüm hakları saklıdır.</span>
          <span>KVKK · Çerez Politikası</span>
        </div>
      </div>
    </footer>
  )
}
