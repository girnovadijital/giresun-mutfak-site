import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Placeholder from '@/components/Placeholder'
import { ArrowIcon } from '@/components/Icons'
import Link from 'next/link'

export const metadata = {
  title: 'Blog — Giresun Mutfak',
  description: 'Mutfak tasarımı, malzeme seçimi ve tadilat rehberleri. Giresun Mutfak uzmanlarından ipuçları.',
}

const posts = [
  {
    cat: 'Malzeme',
    title: 'Akrilik mi, Lake mi? Mutfak Dolabı Kapağı Seçerken Bilmeniz Gerekenler',
    excerpt: 'İkisi de parlak, ikisi de modern görünüyor — ama bakımı, dayanıklılığı ve fiyatı çok farklı. Karadeniz iklimine hangisi daha uygun?',
    date: 'Nisan 2025',
    readTime: '5 dk',
    large: true,
    wood: true,
  },
  {
    cat: 'Tadilat',
    title: 'Mutfak Tadilatına Başlamadan Önce Sormanız Gereken 7 Soru',
    excerpt: 'Tesisat dahil mi? Elektrik yeterliliği kontrol edildi mi? Süre gerçekçi mi? Pişmanlıkları önleyecek sorular.',
    date: 'Mart 2025',
    readTime: '4 dk',
    large: false,
  },
  {
    cat: 'Tasarım',
    title: 'Küçük Mutfaklarda Depolama Kapasitesini İkiye Katlayan 6 Çözüm',
    excerpt: 'Ada modülü şart değil. Doğru çekmece, köşe dolabı ve raf sistemiyle 8 m²'ye çok şey sığar.',
    date: 'Şubat 2025',
    readTime: '6 dk',
    large: false,
    dark: true,
  },
  {
    cat: 'Malzeme',
    title: 'Tezgâh Malzemesi Rehberi: Granit, Kompak ve Laminat Karşılaştırması',
    excerpt: 'Fiyat, hijyen, ısıya dayanıklılık ve bakım açısından üç popüler tezgâh malzemesini karşılaştırıyoruz.',
    date: 'Ocak 2025',
    readTime: '7 dk',
    large: false,
  },
  {
    cat: 'İlham',
    title: '2025 Mutfak Renk Trendleri: Karadeniz Evlerine Uygulananlar',
    excerpt: 'Zeytini, antrasit, krem ve orman yeşili — bu yıl öne çıkan renk paletlerini gerçek projelerle inceliyoruz.',
    date: 'Ocak 2025',
    readTime: '4 dk',
    large: false,
    wood: true,
  },
]

export default function BlogPage() {
  const [featured, ...rest] = posts

  return (
    <div className="page">
      <NavBar />

      {/* Başlık */}
      <section className="s-lg">
        <div className="mxw">
          <div className="eyebrow" style={{ marginBottom: 20 }}>Blog · Rehberler & İpuçları</div>
          <h1 className="display t-page">
            Mutfağınız için{' '}
            <span className="h-script" style={{ color: 'var(--c-wood-deep)' }}>doğru kararlar.</span>
          </h1>
        </div>
      </section>

      {/* Öne çıkan yazı */}
      <section style={{ paddingBottom: 0 }}>
        <div className="mxw" style={{ padding: '0 0 56px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 56, alignItems: 'center', borderTop: '1px solid var(--c-line)', paddingTop: 56 }}>
            <Placeholder
              label={featured.title}
              wood={featured.wood}
              style={{ height: 480, borderRadius: 4 }}
            />
            <div>
              <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 20 }}>
                <span className="eyebrow">{featured.cat}</span>
                <span className="muted" style={{ fontSize: 12 }}>·</span>
                <span className="mono muted" style={{ fontSize: 11 }}>{featured.date}</span>
                <span className="mono muted" style={{ fontSize: 11 }}>· {featured.readTime}</span>
              </div>
              <h2 className="display" style={{ fontSize: 36, lineHeight: 1.1, marginBottom: 20 }}>{featured.title}</h2>
              <p style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--c-ink-soft)', marginBottom: 32 }}>{featured.excerpt}</p>
              <Link href="/blog/akrilik-lake-kapi-secimi" className="btn btn-ink">
                Devamını Oku <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Diğer yazılar */}
      <section className="s-md">
        <div className="mxw">
          <div className="eyebrow" style={{ marginBottom: 40 }}>Son Yazılar</div>
          <div className="g-2" style={{ gap: 48 }}>
            {rest.map((p, i) => (
              <div key={i} style={{ borderTop: '1px solid var(--c-line)', paddingTop: 32 }}>
                <Placeholder
                  label={p.title}
                  wood={p.wood}
                  dark={p.dark}
                  style={{ height: 220, borderRadius: 4, marginBottom: 20 }}
                />
                <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 12 }}>
                  <span className="eyebrow">{p.cat}</span>
                  <span className="mono muted" style={{ fontSize: 11 }}>· {p.date}</span>
                  <span className="mono muted" style={{ fontSize: 11 }}>· {p.readTime}</span>
                </div>
                <h3 className="display" style={{ fontSize: 24, lineHeight: 1.15, marginBottom: 12 }}>{p.title}</h3>
                <p className="muted" style={{ fontSize: 14, lineHeight: 1.6, marginBottom: 20 }}>{p.excerpt}</p>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 500 }}>
                  Oku <ArrowIcon />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bülten */}
      <section className="s-xl" style={{ background: 'var(--c-paper-2)' }}>
        <div className="mxw-sm" style={{ textAlign: 'center' }}>
          <div className="eyebrow" style={{ marginBottom: 16 }}>Bülten</div>
          <h2 className="display t-h2" style={{ marginBottom: 20 }}>
            Yeni yazıları kaçırmayın.
          </h2>
          <p className="muted" style={{ fontSize: 16, marginBottom: 36 }}>
            Ayda bir, mutfak tasarımı ve tadilat hakkında pratik bilgiler.
          </p>
          <div style={{ display: 'flex', gap: 8, maxWidth: 440, margin: '0 auto', flexWrap: 'wrap', justifyContent: 'center' }}>
            <input
              type="email"
              placeholder="e-posta adresiniz"
              style={{
                flex: 1, minWidth: 220, padding: '14px 18px', fontSize: 14,
                border: '1px solid var(--c-line)', borderRadius: 4,
                background: 'var(--c-paper)', fontFamily: 'inherit', outline: 'none',
              }}
            />
            <button className="btn btn-ink">Abone Ol</button>
          </div>
          <p className="mono muted" style={{ fontSize: 11, marginTop: 16, letterSpacing: '0.06em' }}>
            SPAM YOK · İSTEDİĞİNİZDE ÇIKIN
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
