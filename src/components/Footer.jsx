export default function Footer() {
  return (
    <footer style={{ background: 'var(--c-ink)', color: 'var(--c-paper)', padding: '72px 32px 32px' }}>
      <div className="mxw">
        <div className="g-footer">
          <div>
            <div className="display" style={{ fontSize: 32, marginBottom: 20 }}>
              Giresun<span style={{ fontStyle: 'italic', opacity: 0.6 }}> Mutfak</span>
            </div>
            <p style={{ opacity: 0.7, fontSize: 14, maxWidth: 320, lineHeight: 1.6 }}>
              Karadeniz'in kalbinde, 2011'den beri özel tasarım mutfaklar üretiyoruz.
              Her proje, ölçü alımından montaja kadar bizim sorumluluğumuzda.
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
              <li>+90 454 000 00 00</li>
              <li>info@giresunmutfak.com</li>
              <li>Atatürk Bulvarı No:142<br />Merkez / Giresun</li>
            </ul>
          </div>
          <div>
            <div className="eyebrow" style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 16 }}>Çalışma Saatleri</div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, fontSize: 14, opacity: 0.85 }}>
              <li>Pzt – Cmt · 09:00 – 19:00</li>
              <li>Pazar · Randevulu</li>
            </ul>
          </div>
        </div>
        <div style={{ height: 1, background: 'rgba(255,255,255,0.1)', marginBottom: 24 }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8, fontSize: 12, opacity: 0.5, fontFamily: 'var(--f-mono)' }}>
          <span>© 2025 Giresun Mutfak — Tüm hakları saklıdır.</span>
          <span>KVKK · Çerez Politikası</span>
        </div>
      </div>
    </footer>
  )
}
