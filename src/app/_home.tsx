'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Placeholder from '@/components/Placeholder'
import CtaBand from '@/components/CtaBand'
import { WhatsAppIcon, ArrowIcon } from '@/components/Icons'

/* ── Hero Slider ── */
function HeroSlider({ images }: { images: string[] }) {
  const [cur, setCur] = useState(0)
  const [failed, setFailed] = useState<Set<number>>(new Set())

  const okImages = images.filter((_, i) => !failed.has(i))
  const allFailed = images.length > 0 && failed.size >= images.length

  useEffect(() => {
    if (okImages.length <= 1) return
    const t = setInterval(() => setCur(c => (c + 1) % images.length), 5000)
    return () => clearInterval(t)
  }, [okImages.length, images.length])

  const markFailed = (i: number) => setFailed(prev => { const s = new Set(prev); s.add(i); return s })
  const prev = () => setCur(c => (c - 1 + images.length) % images.length)
  const next = () => setCur(c => (c + 1) % images.length)

  if (images.length === 0 || allFailed) {
    return (
      <div style={{
        height: '100%', minHeight: 520, borderRadius: 4,
        background: 'var(--c-paper-2)',
        backgroundImage: 'repeating-linear-gradient(135deg, rgba(0,0,0,0.025) 0 1px, transparent 1px 14px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        border: '1px solid var(--c-line)',
      }}>
        <div className="eyebrow" style={{ opacity: 0.5 }}>Giresun Mutfak</div>
      </div>
    )
  }

  const showDots = okImages.length > 1

  return (
    <div style={{ position: 'relative', height: '100%', minHeight: 520, borderRadius: 4, overflow: 'hidden', background: 'var(--c-paper-2)' }}>
      {images.map((src, i) => (
        <img key={i} src={src} alt="Mutfak görseli"
          style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            objectFit: 'cover',
            opacity: i === cur && !failed.has(i) ? 1 : 0,
            transition: 'opacity 700ms ease',
          }}
          onError={() => markFailed(i)}
        />
      ))}
      {okImages.length > 1 && (
        <>
          <button onClick={prev} aria-label="Önceki" style={{
            position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)',
            width: 40, height: 40, borderRadius: 999, border: 'none',
            background: 'rgba(255,255,255,0.88)', cursor: 'pointer', zIndex: 2,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
          }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M12 7H2M6 11L2 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <button onClick={next} aria-label="Sonraki" style={{
            position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)',
            width: 40, height: 40, borderRadius: 999, border: 'none',
            background: 'rgba(255,255,255,0.88)', cursor: 'pointer', zIndex: 2,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
          }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </>
      )}
      {showDots && (
        <div style={{
          position: 'absolute', bottom: 18, left: '50%', transform: 'translateX(-50%)',
          display: 'flex', gap: 8, zIndex: 2,
        }}>
          {images.filter((_, i) => !failed.has(i)).map((_, idx) => (
            <button key={idx} onClick={() => setCur(idx)} aria-label={`Görsel ${idx + 1}`}
              style={{
                width: idx === cur ? 28 : 8, height: 8, borderRadius: 999,
                background: idx === cur ? '#fff' : 'rgba(255,255,255,0.55)',
                border: 'none', cursor: 'pointer', padding: 0,
                transition: 'all 350ms ease',
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}

/* ── Hero ── */
function HomeHero({ heroImages, s }: { heroImages: string[], s: any }) {
  const eyebrow   = s?.heroEyebrow     || "Giresun · 2011'den beri"
  const line1     = s?.heroLine1       || "Giresun'da"
  const line2     = s?.heroLine2       || 'hayalinizdeki'
  const highlight = s?.heroHighlight   || 'mutfağı'
  const suffix    = s?.heroLine3Suffix || 'tasarlıyoruz.'
  const subtitle  = s?.heroSubtitle    || "Ölçü alımından montaja kadar tek elden, ustalıkla. Özel tasarım mutfak dolapları, tadilat ve anahtar teslim projeler — Karadeniz'in iklimine ve evinize göre."
  const cta1      = s?.heroCta1        || "WhatsApp'tan Yaz"
  const cta2      = s?.heroCta2        || 'Ücretsiz Keşif Al'
  const whatsapp  = s?.whatsapp        || '904540000000'
  const stats     = s?.heroStats?.length > 0
    ? s.heroStats
    : [{ value: '500+', label: 'teslim mutfak' }, { value: '14 yıl', label: 'ustalık' }, { value: '2 yıl', label: 'garanti' }]

  return (
    <section>
      <div className="mxw g-hero">
        <div className="g-hero-txt">
          <div className="eyebrow" style={{ marginBottom: 28 }}>
            <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--c-mute)', verticalAlign: 'middle', marginRight: 12 }} />
            {eyebrow}
          </div>
          <h1 className="display t-hero">
            {line1}<br />
            {line2}<br />
            <span className="h-script" style={{ color: 'var(--c-wood-deep)' }}>{highlight}</span> {suffix}
          </h1>
          <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--c-ink-soft)', maxWidth: 440, marginBottom: 36 }}>
            {subtitle}
          </p>
          <div style={{ display: 'flex', gap: 12, marginBottom: 36, flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn btn-wa">
              <WhatsAppIcon size={18} /> {cta1}
            </a>
            <Link href="/iletisim" className="btn btn-ghost">
              {cta2} <ArrowIcon />
            </Link>
          </div>
          <div style={{ display: 'flex', gap: 32, paddingTop: 28, borderTop: '1px solid var(--c-line)' }}>
            {stats.map((st: any, i: number) => (
              <div key={i}>
                <div className="serif" style={{ fontSize: 22 }}>{st.value}</div>
                <div className="muted" style={{ fontSize: 11 }}>{st.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="g-hero-img">
          <HeroSlider images={heroImages} />
        </div>
      </div>
    </section>
  )
}

/* ── Hizmetler ── */
function ServicesSection({ s }: { s: any }) {
  const FALLBACK = [
    { title: 'Mutfak Dolabı',   description: 'Akrilik, lake, MDF kaplama; çekmece sistemleri Hettich ve Blum.', tag: 'En çok tercih edilen' },
    { title: 'Mutfak Tadilatı', description: 'Eski mutfağınızı söküyor, tesisat-elektrik dahil yeniliyoruz.',    tag: '' },
    { title: 'Özel Tasarım',    description: 'Mimar eşliğinde 3D render; her ölçüye, her mekâna özel çözüm.',   tag: '' },
    { title: 'Anahtar Teslim',  description: 'Banyo, dolap, dahili — tüm proje tek sözleşme, tek bütçe.',        tag: '' },
  ]
  const services = s?.services?.length > 0 ? s.services : FALLBACK

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
          {services.map((sv: any, i: number) => (
            <div key={i} style={{
              paddingTop: 32, paddingBottom: 32,
              paddingLeft: i === 0 ? 0 : 24, paddingRight: 24,
              borderBottom: '1px solid var(--c-line)',
              borderRight: i < services.length - 1 ? '1px solid var(--c-line)' : 'none',
              display: 'flex', flexDirection: 'column', gap: 16, minHeight: 260,
            }}>
              <div className="mono" style={{ color: 'var(--c-mute)', fontSize: 11, letterSpacing: '0.1em' }}>
                {String(i + 1).padStart(2, '0')}
              </div>
              <div className="display" style={{ fontSize: 28 }}>{sv.title}</div>
              <p className="muted" style={{ fontSize: 14, flex: 1 }}>{sv.description}</p>
              {sv.tag && (
                <div style={{ fontSize: 11, fontFamily: 'var(--f-mono)', letterSpacing: '0.06em', color: 'var(--c-wood-deep)', textTransform: 'uppercase' }}>
                  · {sv.tag}
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
    { title: 'Aksu Apartmanı', meta: 'Modern · 14 m²',      label: 'Mat antrasit + meşe',    src: 'https://images.unsplash.com/photo-1692133186528-c1c42edd5a5c?auto=format&fit=crop&w=900&q=80' },
    { title: 'Çamlık Villası', meta: 'Klasik · 22 m²',      label: 'Lake beyaz, ada modülü', src: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=700&q=80' },
    { title: 'Bulancak Sahil', meta: 'Endüstriyel · 11 m²', label: 'Dökme beton + ahşap',   src: 'https://images.unsplash.com/photo-1724217600569-a5547860a433?auto=format&fit=crop&w=700&q=80' },
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
              <Placeholder label={p.label} src={p.src}
                style={{ height: i === 0 ? 480 : 380, marginBottom: 16 }} />
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
function ProcessSection({ s }: { s: any }) {
  const FALLBACK_STEPS = [
    { title: 'Ücretsiz keşif',  description: 'Adresinize geliyoruz, ölçü alıp ihtiyacınızı dinliyoruz.' },
    { title: '3D tasarım',      description: 'Renk, malzeme ve donanımı 3D render üzerinde birlikte seçiyoruz.' },
    { title: 'Üretim',          description: "Giresun atölyemizde, mimarın onayıyla üretim başlıyor." },
    { title: 'Montaj & teslim', description: '5–14 gün içinde montaj. 2 yıl işçilik garantisi.' },
  ]
  const title    = s?.processTitle    || 'İlk konuşmadan teslime kadar.'
  const subtitle = s?.processSubtitle || 'Her aşamada size bir kontak kişi atanır. Şantiyeyi WhatsApp\'tan canlı takip edebilirsiniz.'
  const steps    = s?.processSteps?.length > 0 ? s.processSteps : FALLBACK_STEPS

  return (
    <section className="s-xl">
      <div className="mxw">
        <div className="g-process">
          <div className="process-sticky">
            <div className="eyebrow" style={{ marginBottom: 16 }}>Süreç</div>
            <h2 className="display t-h2" style={{ marginBottom: 24 }}>{title}</h2>
            <p className="muted" style={{ fontSize: 15, maxWidth: 380, marginBottom: 32 }}>{subtitle}</p>
            <Link href="/iletisim" className="btn btn-ink">Süreci başlatın <ArrowIcon /></Link>
          </div>
          <div>
            {steps.map((step: any, i: number) => (
              <div key={i} style={{
                display: 'grid', gridTemplateColumns: '60px 1fr', gap: 24,
                padding: '32px 0',
                borderTop: '1px solid var(--c-line)',
                borderBottom: i === steps.length - 1 ? '1px solid var(--c-line)' : 'none',
              }}>
                <div className="mono" style={{ color: 'var(--c-wood-deep)', fontSize: 12, letterSpacing: '0.1em', paddingTop: 4 }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <div className="display" style={{ fontSize: 32, marginBottom: 10 }}>{step.title}</div>
                  <p className="muted" style={{ fontSize: 15, maxWidth: 480 }}>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Yorumlar ── */
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
              <p className="serif" style={{ fontSize: 20, lineHeight: 1.4, marginBottom: 32, color: '#fff' }}>"{t.quote}"</p>
              <div style={{ fontSize: 13, opacity: 0.85 }}>{t.name}</div>
              <div className="mono" style={{ fontSize: 11, opacity: 0.55, marginTop: 4 }}>{(t.location || '').toUpperCase()}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Ana Sayfa ── */
export default function HomeClient({ testimonials, heroImages, settings }: {
  testimonials: any[]
  heroImages: string[]
  settings: any
}) {
  return (
    <div className="page">
      <NavBar settings={settings} />
      <HomeHero heroImages={heroImages} s={settings} />
      <ServicesSection s={settings} />
      <ProjectShowcase />
      <ProcessSection s={settings} />
      <TestimonialsSection testimonials={testimonials} />
      <CtaBand />
      <Footer />
    </div>
  )
}
