import { defineField, defineType } from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Proje',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Proje Adı',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Kategori',
      type: 'string',
      options: {
        list: [
          { title: 'Modern', value: 'modern' },
          { title: 'Klasik', value: 'klasik' },
          { title: 'Endüstriyel', value: 'endustriyel' },
        ],
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'size',
      title: 'Alan (m²)',
      type: 'string',
      placeholder: 'Örn: 14 m²',
    }),
    defineField({
      name: 'location',
      title: 'İlçe',
      type: 'string',
      placeholder: 'Örn: Merkez, Bulancak, Espiye',
    }),
    defineField({
      name: 'description',
      title: 'Kısa Açıklama',
      type: 'string',
      placeholder: 'Örn: Mat antrasit + meşe ada mutfak',
    }),
    defineField({
      name: 'featured',
      title: 'Ana sayfada göster',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'image',
      title: 'Fotoğraf',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'completedAt',
      title: 'Teslim Tarihi',
      type: 'date',
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'location', media: 'image' },
  },
  orderings: [
    {
      title: 'Teslim Tarihi (Yeni → Eski)',
      name: 'completedAtDesc',
      by: [{ field: 'completedAt', direction: 'desc' }],
    },
  ],
})
