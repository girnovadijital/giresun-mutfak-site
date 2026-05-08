'use client'

import { useState } from 'react'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Placeholder from '@/components/Placeholder'
import CtaBand from '@/components/CtaBand'
import { ArrowIcon } from '@/components/Icons'

const CATS = [
  { id: 'all',         l: 'Tümü' },
  { id: 'modern',      l: 'Modern' },
  { id: 'klasik',      l: 'Klasik' },
  { id: 'endustriyel', l: 'Endüstriyel' },
]

/* Sanity'den gelen projeyi ortak formata çevir */
function normalizeProject(p, index) {
  return {
    id:       p._id || p.id || index,
    title:    p.title,
    cat:      p.category || p.cat || 'modern',
    size:     p.size || '',
    loc:      p.location || p.loc || '',
    label:    p.description || p.label || '',
    imageUrl: p.imageUrl || null,
    dark:     p.dark || false,
    wood:     p.wood || false,
    large:    p.large || false,
  }
}

export default function ProjelerClient({ sanityProjects = [], fallbackProjects = [] }) {
  const raw = sanityProjects.length > 0 ? sanityProjects : fallbackProjects
  const projects = raw.map(normalizeProject)

  const [cat, setCat] = useState('all')
  const [hover, setHover] = useState(null)
  const visible = cat === 'all' ? projects : projects.filter(p => p.cat === cat)

  return (
    <div className="page">
      <NavBar />

      {/* Başlık */}
      <section className="s-lg">
        <div className="mxw">
          <div className="eyebrow" style={{ marginBottom: 20 }}>Referanslar · {projects.length}+ proje</div>
          <h1 className="display t-page">
            Giresun'un dört bir yanında<br />
            teslim ettiğimiz <span className="h-script" style={{ color: 'var(--c-wood-deep)' }}>mutfaklar.</span>
          </h1>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16, borderTop: '1px solid var(--c-line)', paddingTop: 32, marginTop: 32 }}>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {CATS.map(c => (
                <button key={c.id} onClick={() => setCat(c.id)}
                  style={{
                    padding: '8px 18px', fontSize: 13, fontWeight: 500, borderRadius: 999,
                    background: cat === c.id ? 'var(--c-ink)' : 'transparent',
                    color: cat === c.id ? 'var(--c-paper)' : 'var(--c-ink-soft)',
                    border: `1px solid ${cat === c.id ? 'var(--c-ink)' : 'var(--c-line)'}`,
                    transition: 'all 150ms ease',
                  }}>
                  {c.l}
                </button>
              ))}
            </div>
            <div className="mono muted" style={{ fontSize: 11, letterSpacing: '0.1em' }}>
              {visible.length.toString().padStart(2, '0')} / {projects.length.toString().padStart(2, '0')} GÖSTERİLİYOR
            </div>
          </div>
        </div>
      </section>

      {/* Galeri */}
      <section className="s-md">
        <div className="mxw">
          <div className="g-projeler">
            {visible.map(p => (
              <div key={p.id}
                className={p.large ? 'prj-large' : 'prj-small'}
                onMouseEnter={() => setHover(p.id)}
                onMouseLeave={() => setHover(null)}
                style={{ cursor: 'pointer' }}>

                {/* Gerçek fotoğraf varsa göster, yoksa placeholder */}
                {p.imageUrl ? (
                  <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 2, marginBottom: 16 }}>
                    <img
                      src={p.imageUrl}
                      alt={p.title}
                      style={{
                        width: '100%',
                        height: p.large ? 540 : 380,
                        objectFit: 'cover',
                        display: 'block',
                        transition: 'transform 400ms ease',
                        transform: hover === p.id ? 'scale(1.03)' : 'scale(1)',
                      }}
                    />
                  </div>
                ) : (
                  <Placeholder
                    label={p.label}
                    wood={p.wood}
                    dark={p.dark}
                    style={{
                      height: p.large ? 540 : 380,
                      marginBottom: 16,
                      transition: 'transform 400ms ease',
                      transform: hover === p.id ? 'scale(1.01)' : 'scale(1)',
                    }}
                  />
                )}

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <div>
                    <div className="display" style={{ fontSize: 20 }}>{p.title}</div>
                    <div className="mono muted" style={{ fontSize: 10, letterSpacing: '0.08em', marginTop: 4 }}>
                      {p.cat.toUpperCase()}{p.size ? ` · ${p.size}` : ''}{p.loc ? ` · ${p.loc.toUpperCase()}` : ''}
                    </div>
                  </div>
                  <div style={{ opacity: hover === p.id ? 1 : 0.4, transition: 'opacity 200ms ease', flexShrink: 0 }}>
                    <ArrowIcon />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {projects.length === 0 && (
            <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--c-mute)' }}>
              <p>Henüz proje eklenmemiş.</p>
            </div>
          )}
        </div>
      </section>

      {/* Öncesi / Sonrası */}
      <section className="s-xl" style={{ background: 'var(--c-paper-2)' }}>
        <div className="mxw">
          <div className="eyebrow" style={{ marginBottom: 16 }}>Öncesi · Sonrası</div>
          <h2 className="display t-h2" style={{ marginBottom: 56, maxWidth: 700 }}>
            Aynı mekân,<br /> bambaşka mutfak.
          </h2>
          <div className="g-2">
            <div>
              <div style={{ position: 'relative' }}>
                <Placeholder label="ÖNCESİ · 2003 yapımı, eski laminat" style={{ height: 480 }} />
                <div style={{ position: 'absolute', top: 16, left: 16, padding: '6px 12px', background: 'var(--c-paper)', fontSize: 11, fontFamily: 'var(--f-mono)', letterSpacing: '0.1em' }}>ÖNCESİ</div>
              </div>
              <div className="muted" style={{ fontSize: 13, marginTop: 12 }}>2003 yapımı dairenin orijinal mutfağı</div>
            </div>
            <div>
              <div style={{ position: 'relative' }}>
                <Placeholder wood label="SONRASI · Mat antrasit, meşe ada" style={{ height: 480 }} />
                <div style={{ position: 'absolute', top: 16, left: 16, padding: '6px 12px', background: 'var(--c-ink)', color: 'var(--c-paper)', fontSize: 11, fontFamily: 'var(--f-mono)', letterSpacing: '0.1em' }}>SONRASI</div>
              </div>
              <div className="muted" style={{ fontSize: 13, marginTop: 12 }}>11 günde teslim · Aksu Apt. · 14 m²</div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
      <Footer />
    </div>
  )
}
