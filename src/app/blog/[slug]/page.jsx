import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import CtaBand from '@/components/CtaBand'
import Placeholder from '@/components/Placeholder'
import { client } from '@/sanity/lib/client'
import { postBySlugQuery, settingsQuery } from '@/sanity/lib/queries'
import { PortableText } from '@portabletext/react'
import Link from 'next/link'
import { ArrowIcon } from '@/components/Icons'
import { notFound } from 'next/navigation'
import Placeholder from '@/components/Placeholder'

function formatDate(iso) {
  if (!iso) return ''
  return new Date(iso).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })
}

const ptComponents = {
  block: {
    normal: ({ children }) => <p style={{ fontSize: 16, lineHeight: 1.8, marginBottom: 24, color: 'var(--c-ink-soft)' }}>{children}</p>,
    h2:     ({ children }) => <h2 className="display" style={{ fontSize: 32, marginTop: 48, marginBottom: 16, lineHeight: 1.1 }}>{children}</h2>,
    h3:     ({ children }) => <h3 className="display" style={{ fontSize: 24, marginTop: 36, marginBottom: 12, lineHeight: 1.15 }}>{children}</h3>,
    blockquote: ({ children }) => (
      <blockquote style={{ borderLeft: '3px solid var(--c-wood)', paddingLeft: 24, margin: '32px 0', fontFamily: 'var(--f-display)', fontSize: 22, lineHeight: 1.4, color: 'var(--c-ink)', fontStyle: 'italic' }}>
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => <strong style={{ fontWeight: 600 }}>{children}</strong>,
    em:     ({ children }) => <em>{children}</em>,
  },
  types: {
    image: ({ value }) => value?.asset?.url ? (
      <Placeholder src={value.asset.url} label={value.alt || ''} style={{ width: '100%', borderRadius: 4, margin: '32px 0', display: 'block' }} />
    ) : null,
  },
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params
  let post = null
  let settings = null

  try {
    const [p, s] = await Promise.all([
      client.fetch(postBySlugQuery, { slug }),
      client.fetch(settingsQuery),
    ])
    post = p
    settings = s
  } catch {}

  if (!post) notFound()

  return (
    <div className="page">
      <NavBar settings={settings} />

      {/* Başlık */}
      <section className="s-lg">
        <div className="mxw" style={{ maxWidth: 780 }}>
          <Link href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 13, marginBottom: 32, color: 'var(--c-mute)' }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M12 7H2M6 11L2 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Blog'a Dön
          </Link>
          <div style={{ display: 'flex', gap: 12, marginBottom: 20 }}>
            {post.category && <span className="eyebrow">{post.category}</span>}
            <span className="mono muted" style={{ fontSize: 11 }}>· {formatDate(post.publishedAt)}</span>
            {post.readTime && <span className="mono muted" style={{ fontSize: 11 }}>· {post.readTime}</span>}
          </div>
          <h1 className="display t-page" style={{ marginBottom: 24 }}>{post.title}</h1>
          {post.excerpt && (
            <p style={{ fontSize: 18, lineHeight: 1.6, color: 'var(--c-ink-soft)' }}>{post.excerpt}</p>
          )}
        </div>
      </section>

      {/* Kapak görseli */}
      {post.imageUrl && (
        <section style={{ paddingBottom: 0 }}>
          <div className="mxw">
            <Placeholder src={post.imageUrl} label={post.title} style={{ width: '100%', height: 480, borderRadius: 4, display: 'block' }} />
          </div>
        </section>
      )}

      {/* İçerik */}
      <section className="s-lg">
        <div className="mxw" style={{ maxWidth: 780 }}>
          {post.content ? (
            <PortableText value={post.content} components={ptComponents} />
          ) : (
            <p style={{ color: 'var(--c-mute)', fontStyle: 'italic' }}>Bu yazı yakında yayınlanacak.</p>
          )}
        </div>
      </section>

      <CtaBand />
      <Footer />
    </div>
  )
}
