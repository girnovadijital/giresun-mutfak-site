import { client } from '@/sanity/lib/client'
import { testimonialsQuery, settingsQuery } from '@/sanity/lib/queries'
import HomeClient from './_home'

const FALLBACK_TESTIMONIALS = [
  { _id: '1', quote: "Ölçü alımından montaja 11 gün sürdü. Mutfağımız tam istediğimiz gibi oldu, üstelik Bulancak'a kadar geldiler.", name: 'Ayşe K.', location: 'Bulancak', rating: 5 },
  { _id: '2', quote: "Üç firmadan teklif aldık, fiyat-kalite oranıyla biz Giresun Mutfak'ı seçtik. Pişman değiliz, akrilik kapaklar bir yıl sonra ilk günkü gibi.", name: 'Murat & Selin T.', location: 'Merkez', rating: 5 },
  { _id: '3', quote: 'Apartmana taşınırken zaman çok azdı. 8 gün içinde mutfağı bitirdiler, montajda hiçbir aksaklık çıkmadı.', name: 'Hakan D.', location: 'Aksu Mah.', rating: 5 },
]

const FALLBACK_HERO_IMAGES = [
  'https://images.unsplash.com/photo-1764526624453-db32c24eca55?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1692133186528-c1c42edd5a5c?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80',
]

export default async function HomePage() {
  let testimonials: any[] = []
  let settings: any = null

  try {
    const [t, s] = await Promise.all([
      client.fetch(testimonialsQuery),
      client.fetch(settingsQuery),
    ])
    testimonials = t || []
    settings = s
  } catch {}

  const heroImages = settings?.heroImages?.filter(Boolean)

  return (
    <HomeClient
      testimonials={testimonials.length > 0 ? testimonials : FALLBACK_TESTIMONIALS}
      heroImages={heroImages?.length > 0 ? heroImages : FALLBACK_HERO_IMAGES}
      settings={settings}
    />
  )
}
