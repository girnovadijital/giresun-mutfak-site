import type { Metadata } from 'next'
import './globals.css'
import StickyWA from '@/components/StickyWA'

export const metadata: Metadata = {
  title: 'Giresun Mutfak — Özel Tasarım Mutfaklar',
  description: "2011'den beri Giresun'da özel tasarım mutfak, mutfak tadilatı ve anahtar teslim projeler. Ölçüden montaja tek elden.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>
        {children}
        <StickyWA />
      </body>
    </html>
  )
}
