import { defineField, defineType } from 'sanity'

export const post = defineType({
  name: 'post',
  title: 'Blog Yazısı',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Başlık',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL (otomatik oluşur)',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Kategori',
      type: 'string',
      options: {
        list: [
          { title: 'Malzeme', value: 'Malzeme' },
          { title: 'Tadilat', value: 'Tadilat' },
          { title: 'Tasarım', value: 'Tasarım' },
          { title: 'İlham',   value: 'İlham' },
          { title: 'Rehber',  value: 'Rehber' },
        ],
      },
    }),
    defineField({
      name: 'featured',
      title: 'Öne Çıkarılsın mı?',
      type: 'boolean',
      initialValue: false,
      description: 'Blog sayfasında en büyük kart olarak gösterilir',
    }),
    defineField({
      name: 'coverImage',
      title: 'Kapak Görseli',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'excerpt',
      title: 'Kısa Özet',
      type: 'text',
      rows: 3,
      description: 'Blog listesinde görünecek kısa açıklama (max 200 karakter)',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Yayın Tarihi',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'readTime',
      title: 'Okuma Süresi',
      type: 'string',
      placeholder: '5 dk',
    }),
    defineField({
      name: 'content',
      title: 'İçerik',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Başlık H2', value: 'h2' },
            { title: 'Başlık H3', value: 'h3' },
            { title: 'Alıntı', value: 'blockquote' },
          ],
          marks: {
            decorators: [
              { title: 'Kalın', value: 'strong' },
              { title: 'İtalik', value: 'em' },
            ],
          },
        },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({ name: 'alt', title: 'Görsel açıklaması', type: 'string' }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'category', media: 'coverImage' },
  },
  orderings: [
    { title: 'Yayın Tarihi', name: 'publishedAtDesc', by: [{ field: 'publishedAt', direction: 'desc' }] },
  ],
})
