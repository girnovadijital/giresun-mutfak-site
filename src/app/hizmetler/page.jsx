import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import CtaBand from '@/components/CtaBand'
import Placeholder from '@/components/Placeholder'
import { ArrowIcon } from '@/components/Icons'
import Link from 'next/link'

export const metadata = {
  title: 'Hizmetler — Giresun Mutfak',
  description: 'Mutfak dolabı, tadilat, özel tasarım ve anahtar teslim projeler. Giresun\'da 2011\'den beri.',
}

const services = [
  {
    n: '01',
    title: 'Mutfak Dolabı',
    tag: 'En çok tercih edilen',
    desc: 'Akrilik, lake ve MDF kaplama seçenekleriyle ölçüye özel mutfak dolapları. Çekmece ve menteşe sistemlerinde Hettich ve Blum kullanıyoruz.',
    details: [
      'Akrilik, lake, ahşap kaplama seçenekleri',
      'Hettich ve Blum çekmece sistemleri',
      'Yumuşak kapanma mekanizması',
      'İtalyan ve yerli menteşe alternatifleri',
      '5 yıla kadar garanti seçenekleri',
    ],
    src: 'https://images.unsplash.com/photo-1646592472504-d4a42297d4c3?auto=format&fit=crop&w=900&q=80',
  },
  {
    n: '02',
    title: 'Mutfak Tadilatı',
    tag: '',
    desc: 'Eski mutfağınızı baştan aşağı yeniliyoruz. Söküm, tesisat ve elektrik dahil eksiksiz tadilat hizmetimizle mutfağınız tamamen değişiyor.',
    details: [
      'Komple söküm ve bertaraf',
      'Su tesisatı revizyonu',
      'Elektrik ve aydınlatma güncelleme',
      'Zemin ve duvar kaplama',
      'Anahtar teslim tadilat',
    ],
    src: 'https://images.unsplash.com/photo-1602028617950-0ed35e50e460?auto=format&fit=crop&w=900&q=80',
  },
  {
    n: '03',
    title: 'Özel Tasarım',
    tag: '',
    desc: 'Mimar eşliğinde çizilen 3D renderlarla mutfağınızı daha yapılmadan görün. Her mekâna, her ölçüye, her zevke özel çözümler.',
    details: [
      '3D render ve sanal tur',
      'Renk ve malzeme danışmanlığı',
      'Ada modülü tasarımı',
      'Yerleşim ve ergonomi planlaması',
      'Revizyonsuz sunum garantisi',
    ],
    src: 'https://images.unsplash.com/photo-1682888813788-bf57c360123e?auto=format&fit=crop&w=900&q=80',
  },
  {
    n: '04',
    title: 'Anahtar Teslim',
    tag: '',
    desc: 'Banyo dolabı, yatak odası, giyinme odası — tüm iç mekân projenizi tek sözleşme ve tek bütçeyle teslim ediyoruz.',
    details: [
      'Tek sözleşme, tek bütçe',
      'Mutfak + banyo + dolap paketi',
      'Proje yöneticisi atanması',
      "WhatsApp'tan canlı takip",
      '2 yıl işçilik garantisi',
    ],
    src: 'https://images.unsplash.com/photo-1682888813726-24adc990e6f7?auto=format&fit=crop&w=900&q=80',
  },
]

export default function HizmetlerPage() {
  return (
    <div className="page">
      <NavBar />

      {/* Başlık */}
      <section className="s-lg">
        <div className="mxw">
          <div className="eyebrow" style={{ marginBottom: 20 }}>Hizmetler</div>
          <h1 className="display t-page">
            Tek elden,{' '}
            <span className="h-script" style={{ color: 'var(--c-wood-deep)' }}>baştan sona</span>{' '}
            mutfak.
          </h1>
        </div>
      </section>

      {/* Hizmet listesi */}
      <section className="s-md">
        <div className="mxw">
          {services.map((s, i) => (
            <div key={i} className="srv-row">
              <div>
                <div style={{ display: 'flex', gap: 16, alignItems: 'baseline', marginBottom: 24 }}>
                  <span className="mono" style={{ fontSize: 11, color: 'var(--c-mute)', letterSpacing: '0.1em' }}>{s.n}</span>
                  {s.tag && (
                    <span style={{ fontSize: 11, fontFamily: 'var(--f-mono)', letterSpacing: '0.06em', color: 'var(--c-wood-deep)', textTransform: 'uppercase' }}>
                      · {s.tag}
                    </span>
                  )}
                </div>
                <h2 className="display t-h2" style={{ marginBottom: 20 }}>{s.title}</h2>
                <p style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--c-ink-soft)', marginBottom: 32, maxWidth: 480 }}>{s.desc}</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 40 }}>
                  {s.details.map((d, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 14 }}>
                      <span style={{ width: 20, height: 20, borderRadius: 999, background: 'var(--c-paper-2)', border: '1px solid var(--c-line)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M2 5l2 2 4-4" stroke="var(--c-wood-deep)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      {d}
                    </li>
                  ))}
                </ul>
                <Link href="/iletisim" className="btn btn-ink">
                  Fiyat Al <ArrowIcon />
                </Link>
              </div>
              <div>
                <Placeholder
                  label={s.title}
                  src={s.src}
                  style={{ height: 400, borderRadius: 4 }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Süreç özeti */}
      <section className="s-xl" style={{ background: 'var(--c-paper-2)' }}>
        <div className="mxw">
          <div className="eyebrow" style={{ marginBottom: 16 }}>Nasıl çalışıyoruz?</div>
          <h2 className="display t-h2" style={{ marginBottom: 56, maxWidth: 600 }}>
            İlk adımdan teslime <span className="h-script" style={{ color: 'var(--c-wood-deep)' }}>4 adım.</span>
          </h2>
          <div className="g-4">
            {[
              { n: '01', t: 'Ücretsiz Keşif', d: 'Adresinize geliyoruz, ölçü alıp ihtiyacınızı dinliyoruz.' },
              { n: '02', t: '3D Tasarım',     d: '3D render üzerinde renk, malzeme ve donanımı birlikte seçiyoruz.' },
              { n: '03', t: 'Üretim',         d: 'Giresun atölyemizde mimarın onayıyla üretim başlıyor.' },
              { n: '04', t: 'Montaj & Teslim', d: '5–14 gün içinde montaj. 2 yıl işçilik garantisi.' },
            ].map((step, i) => (
              <div key={i} style={{
                paddingTop: 32, paddingBottom: 32,
                paddingLeft: i === 0 ? 0 : 24, paddingRight: 24,
                borderRight: i < 3 ? '1px solid var(--c-line)' : 'none',
              }}>
                <div className="mono" style={{ color: 'var(--c-wood-deep)', fontSize: 11, letterSpacing: '0.1em', marginBottom: 16 }}>{step.n}</div>
                <div className="display" style={{ fontSize: 24, marginBottom: 10 }}>{step.t}</div>
                <p className="muted" style={{ fontSize: 14 }}>{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
      <Footer />
    </div>
  )
}
