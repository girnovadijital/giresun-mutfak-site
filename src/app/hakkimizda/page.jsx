import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import CtaBand from '@/components/CtaBand'
import Placeholder from '@/components/Placeholder'
import { ArrowIcon } from '@/components/Icons'
import Link from 'next/link'

export const metadata = {
  title: 'Hakkımızda — Giresun Mutfak',
  description: '2011\'den bu yana Giresun\'da özel tasarım mutfak üretiyoruz. Ekibimiz, değerlerimiz ve hikâyemiz.',
}

const values = [
  { t: 'Dürüstlük',     d: 'Fiyat sürprizi yok. Teklif aşamasında söylenen rakam, fatura rakamıdır.' },
  { t: 'Ustalık',       d: 'Her çekmece, her menteşe, her profil — yıllarca dayanacak şekilde işlenir.' },
  { t: 'Sorumluluk',    d: '2 yıl işçilik garantisi. Montaj sonrası sorun çıkarsa biz çözeriz.' },
  { t: 'Saydamlık',     d: 'Üretim sürecini WhatsApp\'tan canlı takip edebilirsiniz.' },
]

const stats = [
  { n: '500+', l: 'teslim mutfak' },
  { n: '14 yıl', l: 'sektör deneyimi' },
  { n: '2 yıl', l: 'işçilik garantisi' },
  { n: '48 sa', l: 'ortalama yanıt süresi' },
]

export default function HakkimizdaPage() {
  return (
    <div className="page">
      <NavBar />

      {/* Başlık */}
      <section className="s-lg">
        <div className="mxw">
          <div className="eyebrow" style={{ marginBottom: 20 }}>Hakkımızda</div>
          <h1 className="display t-page">
            Giresun'da bir{' '}
            <span className="h-script" style={{ color: 'var(--c-wood-deep)' }}>atölye</span>{' '}
            hikâyesi.
          </h1>
        </div>
      </section>

      {/* Hikâye */}
      <section className="s-md">
        <div className="mxw">
          <div className="about-grid">
            <div>
              <Placeholder
                label="Atölye · Giresun"
                wood={true}
                style={{ height: 520, borderRadius: 4, marginBottom: 16 }}
              />
              <Placeholder
                label="Ekip · 2024"
                style={{ height: 220, borderRadius: 4 }}
              />
            </div>
            <div style={{ paddingTop: 8 }}>
              <div className="eyebrow" style={{ marginBottom: 20 }}>2011'den beri</div>
              <p style={{ fontSize: 22, lineHeight: 1.5, fontFamily: 'var(--f-display)', marginBottom: 32, color: 'var(--c-ink)' }}>
                Küçük bir atölye olarak başladık. Bugün Giresun'un her ilçesine ulaşan bir ekibiz.
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--c-ink-soft)', marginBottom: 24 }}>
                Karadeniz'in nemli iklimine dayanıklı malzeme seçimi, yerel esnafla güçlü ilişkiler ve
                işi doğru yapma ısrarı — bu üç şey bizi ayakta tuttu.
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--c-ink-soft)', marginBottom: 40 }}>
                Her mutfak, o evin rutinini taşır. Sabahları kahve yapılan tezgâh, çocukların
                ödev yaptığı ada modülü, yıllarca açılıp kapanacak çekmeceler — bunları düşünerek
                tasarlıyoruz.
              </p>
              <Link href="/iletisim" className="btn btn-ink" style={{ marginBottom: 48 }}>
                Tanışalım <ArrowIcon />
              </Link>

              {/* Değerler */}
              <div className="eyebrow" style={{ marginBottom: 24 }}>Değerlerimiz</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {values.map((v, i) => (
                  <div key={i} style={{ padding: '20px 0', borderTop: '1px solid var(--c-line)' }}>
                    <div className="display" style={{ fontSize: 20, marginBottom: 6 }}>{v.t}</div>
                    <p className="muted" style={{ fontSize: 14, lineHeight: 1.6 }}>{v.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* İstatistikler */}
      <section className="s-xl" style={{ background: 'var(--c-ink)', color: 'var(--c-paper)' }}>
        <div className="mxw">
          <div className="eyebrow" style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 56 }}>14 yılda ne yaptık?</div>
          <div className="g-4">
            {stats.map((s, i) => (
              <div key={i} style={{
                paddingTop: 32, paddingBottom: 32,
                paddingLeft: i === 0 ? 0 : 32, paddingRight: 32,
                borderRight: i < 3 ? '1px solid rgba(255,255,255,0.1)' : 'none',
              }}>
                <div className="display" style={{ fontSize: 52, color: '#fff', marginBottom: 8 }}>{s.n}</div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Konum */}
      <section className="s-xl">
        <div className="mxw">
          <div className="about-loc-grid">
            <div>
              <div className="eyebrow" style={{ marginBottom: 16 }}>Atölyemiz & Showroom</div>
              <h2 className="display t-h2" style={{ marginBottom: 24 }}>
                Giresun'un{' '}
                <span className="h-script" style={{ color: 'var(--c-wood-deep)' }}>kalbindeyiz.</span>
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--c-ink-soft)', marginBottom: 32 }}>
                Hem showroomımızı gezip mevcut çalışmalarımızı görebilir, hem de atölyemizde
                üretim sürecini yakından takip edebilirsiniz.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, fontSize: 14 }}>
                <div><span className="muted">Adres · </span>Atatürk Bulvarı No:142, Merkez / Giresun</div>
                <div><span className="muted">Telefon · </span>+90 454 000 00 00</div>
                <div><span className="muted">Çalışma · </span>Pzt – Cmt · 09:00 – 19:00</div>
              </div>
            </div>
            <Placeholder
              label="Showroom · Giresun"
              wood={true}
              style={{ height: 400, borderRadius: 4 }}
            />
          </div>
        </div>
      </section>

      <CtaBand />
      <Footer />
    </div>
  )
}
