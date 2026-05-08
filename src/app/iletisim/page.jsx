'use client'

import { useState } from 'react'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import { WhatsAppIcon, ArrowIcon } from '@/components/Icons'

function ContactForm() {
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' })
  const [sent, setSent] = useState(false)
  const services = ['Mutfak Dolabı', 'Mutfak Tadilatı', 'Özel Tasarım', 'Anahtar Teslim']

  const submit = (e) => {
    e.preventDefault()
    if (form.name && form.phone) setSent(true)
  }

  if (sent) {
    return (
      <div style={{ padding: 40, background: 'var(--c-paper-2)', textAlign: 'center', borderRadius: 8 }}>
        <div style={{ width: 56, height: 56, borderRadius: 999, background: 'var(--c-ink)', color: 'var(--c-paper)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M5 11l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        <h3 className="display" style={{ fontSize: 32, marginBottom: 12 }}>Mesajınız bize ulaştı.</h3>
        <p className="muted" style={{ fontSize: 14, maxWidth: 360, margin: '0 auto' }}>
          {form.name}, en geç bir iş günü içinde {form.phone} numarasından sizi arayacağız.
        </p>
      </div>
    )
  }

  const inputStyle = {
    width: '100%', padding: '14px 0', fontSize: 15,
    border: 'none', borderBottom: '1px solid var(--c-line)',
    background: 'transparent', fontFamily: 'inherit', color: 'var(--c-ink)',
    outline: 'none', transition: 'border-color 200ms ease',
  }
  const labelStyle = {
    display: 'block', fontSize: 11, fontFamily: 'var(--f-mono)',
    letterSpacing: '0.1em', textTransform: 'uppercase',
    color: 'var(--c-mute)', marginBottom: 8,
  }

  return (
    <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
      <div className="g-2" style={{ gap: 28 }}>
        <div>
          <label style={labelStyle}>İsim Soyisim</label>
          <input style={inputStyle} value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Ahmet Yılmaz" />
        </div>
        <div>
          <label style={labelStyle}>Telefon</label>
          <input style={inputStyle} value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="+90 5__ ___ __ __" />
        </div>
      </div>
      <div>
        <label style={labelStyle}>İlgilendiğiniz Hizmet</label>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 8 }}>
          {services.map(s => (
            <button type="button" key={s} onClick={() => setForm({ ...form, service: s })}
              style={{
                padding: '8px 14px', fontSize: 13, borderRadius: 999,
                border: `1px solid ${form.service === s ? 'var(--c-ink)' : 'var(--c-line)'}`,
                background: form.service === s ? 'var(--c-ink)' : 'transparent',
                color: form.service === s ? 'var(--c-paper)' : 'var(--c-ink-soft)',
              }}>
              {s}
            </button>
          ))}
        </div>
      </div>
      <div>
        <label style={labelStyle}>Mesajınız (opsiyonel)</label>
        <textarea
          style={{ ...inputStyle, minHeight: 80, resize: 'vertical' }}
          value={form.message}
          onChange={e => setForm({ ...form, message: e.target.value })}
          placeholder="Mutfağınızın yaklaşık ölçüsü, ne zaman başlamak istediğiniz..."
        />
      </div>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
        <button type="submit" className="btn btn-ink" style={{ padding: '16px 28px' }}>
          Ücretsiz Keşif Talep Et <ArrowIcon />
        </button>
        <span className="muted" style={{ fontSize: 12 }}>Bilgileriniz KVKK kapsamında korunur.</span>
      </div>
    </form>
  )
}

function MapBlock({ height = 420 }) {
  return (
    <div style={{
      position: 'relative', height, overflow: 'hidden', borderRadius: 4,
      background: '#e8e6df',
      backgroundImage: `
        repeating-linear-gradient(0deg, rgba(0,0,0,0.03) 0 1px, transparent 1px 40px),
        repeating-linear-gradient(90deg, rgba(0,0,0,0.03) 0 1px, transparent 1px 40px),
        linear-gradient(120deg, #d8d8d0 0%, #ebe9e2 100%)
      `,
    }}>
      <svg width="100%" height="100%" viewBox="0 0 800 420" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', inset: 0 }}>
        <path d="M0,140 C120,120 220,160 320,150 C420,140 520,180 640,170 C720,165 800,190 800,200 L800,420 L0,420 Z" fill="#a8c8d8" opacity="0.5" />
        <path d="M0,180 C100,170 220,200 340,180 C460,160 580,210 700,190 C760,180 800,210 800,220 L800,420 L0,420 Z" fill="#b8d4e2" opacity="0.6" />
        <path d="M0,260 L800,250" stroke="rgba(255,255,255,0.6)" strokeWidth="3" />
        <path d="M380,0 L420,420" stroke="rgba(255,255,255,0.6)" strokeWidth="3" />
        <text x="120" y="80" fontFamily="monospace" fontSize="10" fill="rgba(0,0,0,0.4)" letterSpacing="2">KARADENİZ</text>
        <text x="540" y="320" fontFamily="monospace" fontSize="9" fill="rgba(0,0,0,0.4)" letterSpacing="1">MERKEZ</text>
      </svg>
      <div style={{ position: 'absolute', top: '52%', left: '48%', transform: 'translate(-50%, -100%)' }}>
        <div style={{ width: 28, height: 28, borderRadius: 999, background: 'var(--c-ink)', border: '4px solid var(--c-paper)', boxShadow: '0 4px 12px rgba(0,0,0,0.25)' }} />
        <div style={{ width: 2, height: 12, background: 'var(--c-ink)', margin: '0 auto' }} />
      </div>
      <div style={{ position: 'absolute', bottom: 16, left: 16, background: 'var(--c-paper)', padding: '12px 16px', boxShadow: 'var(--shadow-sm)', maxWidth: 260 }}>
        <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 4 }}>Giresun Mutfak Atölyesi</div>
        <div className="muted" style={{ fontSize: 12 }}>Atatürk Bulvarı No:142, Merkez</div>
      </div>
    </div>
  )
}

export default function IletisimPage() {
  return (
    <div className="page">
      <NavBar />

      <section className="s-lg">
        <div className="mxw">
          <div className="eyebrow" style={{ marginBottom: 20 }}>İletişim</div>
          <h1 className="display t-page">
            Bir <span className="h-script" style={{ color: 'var(--c-wood-deep)' }}>kahve</span> içelim,<br />
            mutfağınızı konuşalım.
          </h1>
        </div>
      </section>

      <section className="s-md">
        <div className="mxw">
          <div className="g-contact">
            <ContactForm />
            <div>
              <div className="eyebrow" style={{ marginBottom: 20 }}>Doğrudan Ulaşın</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                <a href="https://wa.me/904540000000" target="_blank" rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '20px 0', borderTop: '1px solid var(--c-line)' }}>
                  <div style={{ width: 40, height: 40, borderRadius: 999, background: '#25D366', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <WhatsAppIcon size={18} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 14, fontWeight: 500 }}>WhatsApp'tan yazın</div>
                    <div className="muted" style={{ fontSize: 12 }}>Genelde 5 dk içinde dönüyoruz</div>
                  </div>
                  <ArrowIcon />
                </a>
                <a href="tel:+904540000000"
                  style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '20px 0', borderTop: '1px solid var(--c-line)' }}>
                  <div style={{ width: 40, height: 40, borderRadius: 999, background: 'var(--c-ink)', color: 'var(--c-paper)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 3l2 0c.4 0 .7.3.8.7l.5 2.2c.1.4-.1.8-.4 1l-1 .8c.8 1.6 2 2.8 3.6 3.6l.8-1c.2-.3.6-.5 1-.4l2.2.5c.4.1.7.4.7.8l0 2c0 .6-.4 1-1 1C6.6 14 2 9.4 2 4c0-.6.4-1 1-1z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 14, fontWeight: 500 }}>+90 454 000 00 00</div>
                    <div className="muted" style={{ fontSize: 12 }}>Pzt – Cmt · 09:00 – 19:00</div>
                  </div>
                  <ArrowIcon />
                </a>
                <div style={{ padding: '20px 0', borderTop: '1px solid var(--c-line)' }}>
                  <div className="mono muted" style={{ fontSize: 10, letterSpacing: '0.1em', marginBottom: 8 }}>ATÖLYE & SHOWROOM</div>
                  <div style={{ fontSize: 14, lineHeight: 1.5 }}>Atatürk Bulvarı No:142<br />Merkez / Giresun</div>
                  <div className="muted" style={{ fontSize: 12, marginTop: 8 }}>Pazar günleri randevuludur.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="s-map">
        <div className="mxw">
          <MapBlock height={400} />
        </div>
      </section>

      <Footer />
    </div>
  )
}
