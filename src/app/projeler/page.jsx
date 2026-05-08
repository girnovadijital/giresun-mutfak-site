import { client } from '@/sanity/lib/client'
import { projectsQuery } from '@/sanity/lib/queries'
import ProjelerClient from './_client'

const FALLBACK_PROJECTS = [
  { id: 1, title: 'Aksu Apartmanı',   category: 'modern',      size: '14 m²', location: 'Bulancak', description: 'Mat antrasit + meşe',    imageUrl: 'https://images.unsplash.com/photo-1764526624453-db32c24eca55?auto=format&fit=crop&w=1200&q=80', large: true  },
  { id: 2, title: 'Çamlık Villası',   category: 'klasik',      size: '22 m²', location: 'Merkez',   description: 'Lake beyaz, ada modülü', imageUrl: 'https://images.unsplash.com/photo-1612031736732-082438882d51?auto=format&fit=crop&w=800&q=80',  large: false },
  { id: 3, title: 'Sahil Konağı',     category: 'endustriyel', size: '11 m²', location: 'Bulancak', description: 'Dökme beton + ahşap',    imageUrl: 'https://images.unsplash.com/photo-1724217600569-a5547860a433?auto=format&fit=crop&w=800&q=80',  large: false },
  { id: 4, title: 'Espiye Konutları', category: 'modern',      size: '9 m²',  location: 'Espiye',   description: 'Antrasit U mutfak',      imageUrl: 'https://images.unsplash.com/photo-1593136573819-c3b57b8caf29?auto=format&fit=crop&w=800&q=80',  large: false },
  { id: 5, title: 'Görele Sahil',     category: 'modern',      size: '16 m²', location: 'Görele',   description: 'Açık ahşap + krem',      imageUrl: 'https://images.unsplash.com/photo-1759239572496-4ec13e7643d6?auto=format&fit=crop&w=800&q=80',  large: false },
  { id: 6, title: 'Tirebolu Daire',   category: 'klasik',      size: '12 m²', location: 'Tirebolu', description: 'Klasik freze, fildişi',   imageUrl: 'https://images.unsplash.com/photo-1682888813726-24adc990e6f7?auto=format&fit=crop&w=1200&q=80', large: true  },
]

export default async function ProjelerPage() {
  let sanityProjects = []

  try {
    sanityProjects = await client.fetch(projectsQuery)
  } catch {
    // Sanity bağlantısı yoksa fallback verileri kullan
  }

  return (
    <ProjelerClient
      sanityProjects={sanityProjects}
      fallbackProjects={FALLBACK_PROJECTS}
    />
  )
}
