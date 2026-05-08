import { client } from '@/sanity/lib/client'
import { testimonialsQuery } from '@/sanity/lib/queries'
import HomeClient from './_home'

const FALLBACK_TESTIMONIALS = [
  { _id: '1', quote: "Ölçü alımından montaja 11 gün sürdü. Mutfağımız tam istediğimiz gibi oldu, üstelik Bulancak'a kadar geldiler.", name: 'Ayşe K.', location: 'Bulancak', rating: 5 },
  { _id: '2', quote: "Üç firmadan teklif aldık, fiyat-kalite oranıyla biz Giresun Mutfak'ı seçtik. Pişman değiliz, akrilik kapaklar bir yıl sonra ilk günkü gibi.", name: 'Murat & Selin T.', location: 'Merkez', rating: 5 },
  { _id: '3', quote: 'Apartmana taşınırken zaman çok azdı. 8 gün içinde mutfağı bitirdiler, montajda hiçbir aksaklık çıkmadı.', name: 'Hakan D.', location: 'Aksu Mah.', rating: 5 },
]

export default async function HomePage() {
  let testimonials = []

  try {
    testimonials = await client.fetch(testimonialsQuery)
  } catch {
    // Sanity bağlantısı yoksa fallback kullan
  }

  const finalTestimonials = testimonials.length > 0 ? testimonials : FALLBACK_TESTIMONIALS

  return <HomeClient testimonials={finalTestimonials} />
}
