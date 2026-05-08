import { client } from '@/sanity/lib/client'
import { projectsQuery } from '@/sanity/lib/queries'
import ProjelerClient from './_client'

const FALLBACK_PROJECTS = [
  { id: 1, title: 'Aksu Apartmanı',   category: 'modern',      size: '14 m²', location: 'Bulancak', description: 'Mat antrasit + meşe',       dark: false, wood: true,  large: true  },
  { id: 2, title: 'Çamlık Villası',   category: 'klasik',      size: '22 m²', location: 'Merkez',   description: 'Lake beyaz, ada modülü',    dark: false, wood: false, large: false },
  { id: 3, title: 'Sahil Konağı',     category: 'endustriyel', size: '11 m²', location: 'Bulancak', description: 'Dökme beton + ahşap',       dark: true,  wood: false, large: false },
  { id: 4, title: 'Espiye Konutları', category: 'modern',      size: '9 m²',  location: 'Espiye',   description: 'Antrasit U mutfak',         dark: false, wood: false, large: false },
  { id: 5, title: 'Görele Sahil',     category: 'modern',      size: '16 m²', location: 'Görele',   description: 'Açık ahşap + krem',         dark: false, wood: true,  large: false },
  { id: 6, title: 'Tirebolu Daire',   category: 'klasik',      size: '12 m²', location: 'Tirebolu', description: 'Klasik freze, fildişi',     dark: false, wood: false, large: true  },
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
