import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import CtaBand from '@/components/CtaBand'
import Placeholder from '@/components/Placeholder'
import { ArrowIcon } from '@/components/Icons'
import Link from 'next/link'
import { client } from '@/sanity/lib/client'
import { postsQuery, settingsQuery } from '@/sanity/lib/queries'

export const metadata = {
  title: 'Blog — Giresun Mutfak',
  description: 'Mutfak tasarımı, malzeme seçimi ve tadilat rehberleri. Giresun Mutfak uzmanlarından ipuçları.',
}

const FALLBACK_POSTS = [
  { _id: '1', slug: 'akrilik-lake-kapi-secimi',        category: 'Malzeme', featured: true,  readTime: '5 dk', publishedAt: '2025-04-01', imageUrl: 'https://images.unsplash.com/photo-1764526624453-db32c24eca55?auto=format&fit=crop&w=1200&q=80', title: 'Akrilik mi, Lake mi? Mutfak Dolabı Kapağı Seçerken Bilmeniz Gerekenler', excerpt: 'İkisi de parlak, ikisi de modern görünüyor — ama bakımı, dayanıklılığı ve fiyatı çok farklı. Karadeniz iklimine hangisi daha uygun?' },
  { _id: '2', slug: 'tadilat-oncesi-7-soru',           category: 'Tadilat', featured: false, readTime: '4 dk', publishedAt: '2025-03-01', imageUrl: 'https://images.unsplash.com/photo-1602028617950-0ed35e50e460?auto=format&fit=crop&w=700&q=80',  title: 'Mutfak Tadilatına Başlamadan Önce Sormanız Gereken 7 Soru', excerpt: 'Tesisat dahil mi? Elektrik yeterliliği kontrol edildi mi? Süre gerçekçi mi? Pişmanlıkları önleyecek sorular.' },
  { _id: '3', slug: 'kucuk-mutfak-depolama',           category: 'Tasarım', featured: false, readTime: '6 dk', publishedAt: '2025-02-01', imageUrl: 'https://images.unsplash.com/photo-1593136573819-c3b57b8caf29?auto=format&fit=crop&w=700&q=80',  title: "Küçük Mutfaklarda Depolama Kapasitesini İkiye Katlayan 6 Çözüm", excerpt: "Ada modülü şart değil. Doğru çekmece, köşe dolabı ve raf sistemiyle 8 m²'ye çok şey sığar." },
  { _id: '4', slug: 'tezgah-malzemesi-rehberi',        category: 'Malzeme', featured: false, readTime: '7 dk', publishedAt: '2025-01-15', imageUrl: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=700&q=80',  title: 'Tezgâh Malzemesi Rehberi: Granit, Kompak ve Laminat Karşılaştırması', excerpt: 'Fiyat, hijyen, ısıya dayanıklılık ve bakım açısından üç popüler tezgâh malzemesini karşılaştırıyoruz.' },
  { _id: '5', slug: '2025-mutfak-renk-trendleri',      category: 'İlham',   featured: false, readTime: '4 dk', publishedAt: '2025-01-01', imageUrl: 'https://images.unsplash.com/photo-1759239572496-4ec13e7643d6?auto=format&fit=crop&w=700&q=80',  title: '2025 Mutfak Renk Trendleri: Karadeniz Evlerine Uygulananlar', excerpt: 'Zeytini, antrasit, krem ve orman yeşili — bu yıl öne çıkan renk paletlerini gerçek projelerle inceliyoruz.' },
]

function formatDate(iso) {
  if (!iso) return ''
  const d = new Date(iso)
  return d.toLocaleDateString('tr-TR', { month: 'long', year: 'numeric' })
}

export default async function BlogPage() {
  let posts = []
  let settings = null

  try {
    const [p, s] = await Promise.all([
      client.fetch(postsQuery),
      client.fetch(settingsQuery),
    ])
    posts = p || []
    settings = s
  } catch {}

  const allPosts = posts.length > 0 ? posts : FALLBACK_POSTS
  const featured = allPosts.find(p => p.featured) || allPosts[0]
  const rest = allPosts.filter(p => p._id !== featured._id)

  return (
    <div className="page">
      <NavBar settings={settings} />

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
      <section>
        <div className="mxw" style={{ paddingBottom: 64, borderTop: '1px solid var(--c-line)', paddingTop: 56 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 56, alignItems: 'center' }}>
            <Placeholder label={featured.title} src={featured.imageUrl} style={{ height: 480, borderRadius: 4 }} />
            <div>
              <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 20 }}>
                <span className="eyebrow">{featured.category}</span>
                <span className="mono muted" style={{ fontSize: 11 }}>· {formatDate(featured.publishedAt)}</span>
                <span className="mono muted" style={{ fontSize: 11 }}>· {featured.readTime}</span>
              </div>
              <h2 className="display" style={{ fontSize: 36, lineHeight: 1.1, marginBottom: 20 }}>{featured.title}</h2>
              <p style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--c-ink-soft)', marginBottom: 32 }}>{featured.excerpt}</p>
              <Link href={`/blog/${featured.slug}`} className="btn btn-ink">
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
            {rest.map((p) => (
              <Link key={p._id} href={`/blog/${p.slug}`}
                style={{ borderTop: '1px solid var(--c-line)', paddingTop: 32, display: 'block', textDecoration: 'none' }}>
                <Placeholder label={p.title} src={p.imageUrl} style={{ height: 220, borderRadius: 4, marginBottom: 20 }} />
                <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 12 }}>
                  <span className="eyebrow">{p.category}</span>
                  <span className="mono muted" style={{ fontSize: 11 }}>· {formatDate(p.publishedAt)}</span>
                  <span className="mono muted" style={{ fontSize: 11 }}>· {p.readTime}</span>
                </div>
                <h3 className="display" style={{ fontSize: 24, lineHeight: 1.15, marginBottom: 12 }}>{p.title}</h3>
                <p className="muted" style={{ fontSize: 14, lineHeight: 1.6, marginBottom: 20 }}>{p.excerpt}</p>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 500 }}>
                  Oku <ArrowIcon />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
      <Footer />
    </div>
  )
}
