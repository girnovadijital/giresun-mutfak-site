'use client'

import { useState } from 'react'
import Link from 'next/link'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Placeholder from '@/components/Placeholder'
import CtaBand from '@/components/CtaBand'
import { WhatsAppIcon, ArrowIcon } from '@/components/Icons'

/* ── Hero ── */
function HomeHero() {
  return (
    <section>
      <div className="mxw g-hero">
      <div className="g-hero-txt">
        <div className="eyebrow" style={{ marginBottom: 28 }}>
          <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--c-mute)', verticalAlign: 'middle', marginRight: 12 }} />
          Giresun · 2011'den beri
        </div>
        <h1 className="display t-hero">
          Giresun'da<br />
          hayalinizdeki<br />
          <span className="h-script" style={{ color: 'var(--c-wood-deep)' }}>mutfağı</span> tasarlıyoruz.
        </h1>
        <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--c-ink-soft)', maxWidth: 440, marginBottom: 36 }}>
          Ölçü alımından montaja kadar tek elden, ustalıkla. Özel tasarım mutfak dolapları,
          tadilat ve anahtar teslim projeler — Karadeniz'in iklimine ve evinize göre.
        </p>
        <div style={{ display: 'flex', gap: 12, marginBottom: 36, flexWrap: 'wrap' }}>
          <a href="https://wa.me/904540000000" target="_blank" rel="noopener noreferrer" className="btn btn-wa">
            <WhatsAppIcon size={18} /> WhatsApp'tan Yaz
          </a>
          <Link href="/iletisim" className="btn btn-ghost">
            Ücretsiz Keşif Al <ArrowIcon />
          </Link>
        </div>
        <div style={{ display: 'flex', gap: 32, paddingTop: 28, borderTop: '1px solid var(--c-line)' }}>
          {[['500+', 'teslim mutfak'], ['14 yıl', 'ustalık'], ['2 yıl', 'garanti']].map(([n, l]) => (
            <div key={l}>
              <div className="serif" style={{ fontSize: 22 }}>{n}</div>
              <div className="muted" style={{ fontSize: 11 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="g-hero-img">
        <Placeholder
          label="HERO · Doğal ahşap + mat antrasit ada mutfak"
          style={{ height: '100%', minHeight: 520, borderRadius: 4 }}
        />
      </div>
      </div>
    </section>
  )
}

/* ── Hizmetler ── */
function ServicesSection() {
  const services = [
    { n: '01', t: 'Mutfak Dolabı',   d: 'Akrilik, lake, MDF kaplama; çekmece sistemleri Hettich ve Blum.', tag: 'En çok tercih edilen' },
    { n: '02', t: 'Mutfak Tadilatı', d: 'Eski mutfağınızı söküyor, tesisat-elektrik dahil yeniliyoruz.',    tag: '' },
    { n: '03', t: 'Özel Tasarım',    d: 'Mimar eşliğinde 3D render; her ölçüye, her mekâna özel çözüm.',   tag: '' },
    { n: '04', t: 'Anahtar Teslim',  d: 'Banyo, dolap, dahili — tüm proje tek sözleşme, tek bütçe.',        tag: '' },
  ]
  return (
    <section className="s-xl">
      <div className="mxw">
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 64, flexWrap: 'wrap', gap: 16 }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 16 }}>Hizmetler</div>
            <h2 className="display t-h2" style={{ maxWidth: 700 }}>
              Tek elden, <span className="h-script" style={{ color: 'var(--c-wood-deep)' }}>baştan sona</span> mutfak.
            </h2>
          </div>
          <Link href="/hizmetler" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 500 }}>
            Tüm hizmetler <ArrowIcon />
          </Link>
        </div>
        <div className="g-4">
          {services.map((s, i) => (
            <div key={i} style={{
              paddingTop: 32, paddingBottom: 32,
              paddingLeft: i === 0 ? 0 : 24, paddingRight: 24,
              borderBottom: '1px solid var(--c-line)',
              borderRight: i < 3 ? '1px solid var(--c-line)' : 'none',
              display: 'flex', flexDirection: 'column', gap: 16, minHeight: 280,
            }}>
              <div className="mono" style={{ color: 'var(--c-mute)', fontSize: 11, letterSpacing: '0.1em' }}>{s.n}</div>
              <div className="display" style={{ fontSize: 28 }}>{s.t}</div>
              <p className="muted" style={{ fontSize: 14, flex: 1 }}>{s.d}</p>
              {s.tag && (
                <div style={{ fontSize: 11, fontFamily: 'var(--f-mono)', letterSpacing: '0.06em', color: 'var(--c-wood-deep)', textTransform: 'uppercase' }}>
                  · {s.tag}
                </div>
              )}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 500 }}>
                İncele <ArrowIcon />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Son Projeler ── */
function ProjectShowcase() {
  const [active, setActive] = useState(0)
  const items = [
    { title: 'Aksu Apartmanı', meta: 'Modern · 14 m²',      label: 'Mat antrasit + meşe',    wood: true,  dark: false },
    { title: 'Çamlık Villası', meta: 'Klasik · 22 m²',      label: 'Lake beyaz, ada modülü', wood: false, dark: false },
    { title: 'Bulancak Sahil', meta: 'Endüstriyel · 11 m²', label: 'Dökme beton + ahşap',   wood: false, dark: true  },
  ]
  return (
    <section className="s-xl" style={{ background: 'var(--c-paper-2)' }}>
      <div className="mxw">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56, flexWrap: 'wrap', gap: 16 }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 16 }}>Son Projeler</div>
            <h2 className="display t-h2">Giresun'da teslim ettiklerimiz.</h2>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button onClick={() => setActive(Math.max(0, active - 1))}
              style={{ width: 44, height: 44, borderRadius: 999, border: '1px solid var(--c-line)', background: 'var(--c-paper)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M12 7H2M6 11L2 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <button onClick={() => setActive(Math.min(items.length - 1, active + 1))}
              style={{ width: 44, height: 44, borderRadius: 999, border: '1px solid var(--c-ink)', background: 'var(--c-ink)', color: 'var(--c-paper)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ArrowIcon size={14} />
            </button>
          </div>
        </div>
        <div className="g-showcase">
          {items.map((p, i) => (
            <div key={i} onClick={() => setActive(i)}
              style={{ cursor: 'pointer', transform: i === active ? 'translateY(-4px)' : 'none', transition: 'transform 300ms ease' }}>
              <Placeholder label={p.label} wood={p.wood} dark={p.dark}
                style={{ height: i === 0 ? 540 : 420, marginBottom: 16 }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <div className="display" style={{ fontSize: 22 }}>{p.title}</div>
                <div className="mono muted" style={{ fontSize: 11 }}>{p.meta}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Süreç ── */
function ProcessSection() {
  const steps = [
    { n: '01', t: 'Ücretsiz keşif',  d: 'Adresinize geliyoruz, ölçü alıp ihtiyacınızı dinliyoruz.' },
    { n: '02', t: '3D tasarım',      d: 'Renk, malzeme ve donanımı 3D render üzerinde birlikte seçiyoruz.' },
    { n: '03', t: 'Üretim',          d: "Giresun atölyemizde, mimarın onayıyla üretim başlıyor." },
    { n: '04', t: 'Montaj & teslim', d: '5–14 gün içinde montaj. 2 yıl işçilik garantisi.' },
  ]
  return (
    <section className="s-xl">
      <div className="mxw">
        <div className="g-process">
          <div className="process-sticky">
            <div className="eyebrow" style={{ marginBottom: 16 }}>Süreç</div>
            <h2 className="display t-h2" style={{ marginBottom: 24 }}>İlk konuşmadan<br /> teslime kadar.</h2>
            <p className="muted" style={{ fontSize: 15, maxWidth: 380, marginBottom: 32 }}>
              Her aşamada size bir kontak kişi atanır. Şantiyeyi WhatsApp'tan canlı takip edebilirsiniz.
            </p>
            <Link href="/iletisim" className="btn btn-ink">Süreci başlatın <ArrowIcon /></Link>
          </div>
          <div>
            {steps.map((s, i) => (
              <div key={i} style={{
                display: 'grid', gridTemplateColumns: '60px 1fr', gap: 24,
                padding: '32px 0',
                borderTop: '1px solid var(--c-line)',
                borderBottom: i === steps.length - 1 ? '1px solid var(--c-line)' : 'none',
              }}>
                <div className="mono" style={{ color: 'var(--c-wood-deep)', fontSize: 12, letterSpacing: '0.1em', paddingTop: 4 }}>{s.n}</div>
                <div>
                  <div className="display" style={{ fontSize: 32, marginBottom: 10 }}>{s.t}</div>
                  <p className="muted" style={{ fontSize: 15, maxWidth: 480 }}>{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Yorumlar (Sanity'den) ── */
function TestimonialsSection({ testimonials }: { testimonials: any[] }) {
  return (
    <section className="s-xl" style={{ background: 'var(--c-ink)', color: 'var(--c-paper)' }}>
      <div className="mxw">
        <div className="eyebrow" style={{ color: 'rgba(255,255,255,0.6)', marginBottom: 16 }}>Müşterilerimiz</div>
        <h2 className="display t-h2" style={{ marginBottom: 64, color: '#fff', maxWidth: 800 }}>
          Mutfaklarımız<br /> kullananların ağzından.
        </h2>
        <div className="g-3">
          {testimonials.map((t, i) => (
            <div key={t._id || i} style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: 28 }}>
              <div style={{ display: 'flex', gap: 2, marginBottom: 20, color: 'var(--c-wood)' }}>
                {Array.from({ length: t.rating || 5 }).map((_, j) => (
                  <svg key={j} width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                    <path d="M7 0l1.8 4.6L14 5l-3.8 3.4L11.5 14 7 11.2 2.5 14l1.3-5.6L0 5l5.2-.4z" />
                  </svg>
                ))}
              </div>
              <p className="serif" style={{ fontSize: 20, lineHeight: 1.4, marginBottom: 32, color: '#fff' }}>
                "{t.quote}"
              </p>
              <div style={{ fontSize: 13, opacity: 0.85 }}>{t.name}</div>
              <div className="mono" style={{ fontSize: 11, opacity: 0.55, marginTop: 4 }}>
                {(t.location || '').toUpperCase()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Ana Sayfa ── */
export default function HomeClient({ testimonials }: { testimonials: any[] }) {
  return (
    <div className="page">
      <NavBar />
      <HomeHero />
      <ServicesSection />
      <ProjectShowcase />
      <ProcessSection />
      <TestimonialsSection testimonials={testimonials} />
      <CtaBand />
      <Footer />
    </div>
  )
}
