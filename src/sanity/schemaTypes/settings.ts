import { defineField, defineType } from 'sanity'

export const settings = defineType({
  name: 'settings',
  title: 'Site Ayarları',
  type: 'document',
  fields: [
    defineField({
      name: 'phone',
      title: 'Telefon Numarası',
      type: 'string',
      placeholder: '+90 454 000 00 00',
    }),
    defineField({
      name: 'whatsapp',
      title: 'WhatsApp Numarası (başında 90 ile)',
      type: 'string',
      placeholder: '904540000000',
    }),
    defineField({
      name: 'email',
      title: 'E-posta',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Adres',
      type: 'text',
      rows: 2,
      placeholder: 'Atatürk Bulvarı No:142\nMerkez / Giresun',
    }),
    defineField({
      name: 'workingHours',
      title: 'Çalışma Saatleri',
      type: 'string',
      placeholder: 'Pzt – Cmt · 09:00 – 19:00',
    }),
    defineField({
      name: 'foundedYear',
      title: 'Kuruluş Yılı',
      type: 'number',
      initialValue: 2011,
    }),
    defineField({
      name: 'projectCount',
      title: 'Teslim Edilen Proje Sayısı',
      type: 'string',
      placeholder: '500+',
    }),
    defineField({
      name: 'heroImages',
      title: 'Slider Görseller',
      description: 'Ana sayfada hero bölümünde gösterilecek mutfak görselleri (önerilen: 3–5 adet)',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
        },
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Site Ayarları' }),
  },
})
