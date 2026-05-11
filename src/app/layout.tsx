import type { Metadata } from 'next'
import './globals.css'
import StickyWA from '@/components/StickyWA'
import { client } from '@/sanity/lib/client'
import { settingsQuery } from '@/sanity/lib/queries'

export const metadata: Metadata = {
  title: 'Giresun Mutfak — Özel Tasarım Mutfaklar',
  description: "2011'den beri Giresun'da özel tasarım mutfak, mutfak tadilatı ve anahtar teslim projeler. Ölçüden montaja tek elden.",
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  let settings: any = null
  try { settings = await client.fetch(settingsQuery) } catch {}

  const whatsapp = settings?.whatsapp || '904540000000'

  return (
    <html lang="tr">
      <body>
        {children}
        <StickyWA whatsapp={whatsapp} />
      </body>
    </html>
  )
}
