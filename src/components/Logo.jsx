import Link from 'next/link'

export default function Logo({ size = 22 }) {
  return (
    <Link href="/" className="brand" style={{ fontSize: size }}>
      <span className="brand-mark">
        <span style={{ fontFamily: 'var(--f-display)' }}>Giresun</span>
        <span className="dot" />
        <span style={{ fontFamily: 'var(--f-display)', fontStyle: 'italic', opacity: 0.65 }}>Mutfak</span>
      </span>
    </Link>
  )
}
