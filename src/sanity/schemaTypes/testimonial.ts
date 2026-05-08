import { defineField, defineType } from 'sanity'

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Müşteri Yorumu',
  type: 'document',
  fields: [
    defineField({
      name: 'quote',
      title: 'Yorum',
      type: 'text',
      rows: 4,
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'name',
      title: 'İsim',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'İlçe',
      type: 'string',
      placeholder: 'Örn: Bulancak, Merkez',
    }),
    defineField({
      name: 'rating',
      title: 'Puan (1–5)',
      type: 'number',
      initialValue: 5,
      validation: Rule => Rule.min(1).max(5).integer(),
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'location' },
  },
})
