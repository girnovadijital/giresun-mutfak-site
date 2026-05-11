import { defineField, defineType } from 'sanity'

export const settings = defineType({
  name: 'settings',
  title: 'Site Ayarları',
  type: 'document',
  groups: [
    { name: 'iletisim', title: '📞 İletişim' },
    { name: 'hero',     title: '🏠 Ana Sayfa — Hero' },
    { name: 'hizmetler', title: '🔧 Hizmetler' },
    { name: 'surec',    title: '📋 Süreç Adımları' },
    { name: 'cta',      title: '📢 CTA Bölümü' },
    { name: 'gorseller', title: '🖼️ Görseller' },
  ],
  fields: [
    /* ── İletişim ── */
    defineField({ name: 'phone',        title: 'Telefon', type: 'string', group: 'iletisim', placeholder: '+90 454 000 00 00' }),
    defineField({ name: 'whatsapp',     title: 'WhatsApp (başında 90 ile, boşluksuz)', type: 'string', group: 'iletisim', placeholder: '904540000000' }),
    defineField({ name: 'email',        title: 'E-posta', type: 'string', group: 'iletisim' }),
    defineField({ name: 'address',      title: 'Adres', type: 'text', rows: 2, group: 'iletisim', placeholder: 'Atatürk Bulvarı No:142\nMerkez / Giresun' }),
    defineField({ name: 'workingHours', title: 'Çalışma Saatleri (1. satır)', type: 'string', group: 'iletisim', placeholder: 'Pzt – Cmt · 09:00 – 19:00' }),
    defineField({ name: 'workingHours2', title: 'Çalışma Saatleri (2. satır)', type: 'string', group: 'iletisim', placeholder: 'Pazar · Randevulu' }),
    defineField({ name: 'foundedYear',  title: 'Kuruluş Yılı', type: 'number', group: 'iletisim', initialValue: 2011 }),
    defineField({ name: 'footerTagline', title: 'Footer Açıklama Metni', type: 'text', rows: 3, group: 'iletisim',
      placeholder: "Karadeniz'in kalbinde, 2011'den beri özel tasarım mutfaklar üretiyoruz." }),

    /* ── Hero ── */
    defineField({ name: 'heroEyebrow', title: 'Hero — Üst Küçük Yazı', type: 'string', group: 'hero', placeholder: "Giresun · 2011'den beri" }),
    defineField({ name: 'heroLine1',   title: 'Hero — Başlık 1. Satır', type: 'string', group: 'hero', placeholder: "Giresun'da" }),
    defineField({ name: 'heroLine2',   title: 'Hero — Başlık 2. Satır', type: 'string', group: 'hero', placeholder: 'hayalinizdeki' }),
    defineField({ name: 'heroHighlight', title: 'Hero — İtalik Kelime', type: 'string', group: 'hero', placeholder: 'mutfağı', description: 'Kahverengi italik görünecek kelime' }),
    defineField({ name: 'heroLine3Suffix', title: 'Hero — 3. Satır (italik sonrası)', type: 'string', group: 'hero', placeholder: 'tasarlıyoruz.' }),
    defineField({ name: 'heroSubtitle', title: 'Hero — Alt Paragraf', type: 'text', rows: 3, group: 'hero',
      placeholder: "Ölçü alımından montaja kadar tek elden, ustalıkla. Özel tasarım mutfak dolapları, tadilat ve anahtar teslim projeler — Karadeniz'in iklimine ve evinize göre." }),
    defineField({ name: 'heroCta1', title: 'Hero — 1. Buton Yazısı', type: 'string', group: 'hero', placeholder: "WhatsApp'tan Yaz" }),
    defineField({ name: 'heroCta2', title: 'Hero — 2. Buton Yazısı', type: 'string', group: 'hero', placeholder: 'Ücretsiz Keşif Al' }),
    defineField({
      name: 'heroStats',
      title: 'Hero — İstatistikler (3 adet)',
      type: 'array',
      group: 'hero',
      of: [{ type: 'object', fields: [
        defineField({ name: 'value', title: 'Değer', type: 'string', placeholder: '500+' }),
        defineField({ name: 'label', title: 'Açıklama', type: 'string', placeholder: 'teslim mutfak' }),
      ], preview: { select: { title: 'value', subtitle: 'label' } } }],
    }),

    /* ── Hizmetler ── */
    defineField({
      name: 'services',
      title: 'Hizmet Kartları',
      type: 'array',
      group: 'hizmetler',
      description: '4 adet hizmet kartı (sırayla görünür)',
      of: [{ type: 'object', fields: [
        defineField({ name: 'title',       title: 'Hizmet Adı',      type: 'string' }),
        defineField({ name: 'description', title: 'Açıklama',        type: 'text', rows: 2 }),
        defineField({ name: 'tag',         title: 'Rozet (opsiyonel)', type: 'string', placeholder: 'En çok tercih edilen' }),
      ], preview: { select: { title: 'title', subtitle: 'description' } } }],
    }),

    /* ── Süreç ── */
    defineField({ name: 'processTitle',    title: 'Süreç — Başlık',  type: 'string', group: 'surec', placeholder: "İlk konuşmadan teslime kadar." }),
    defineField({ name: 'processSubtitle', title: 'Süreç — Alt Yazı', type: 'text', rows: 2, group: 'surec',
      placeholder: 'Her aşamada size bir kontak kişi atanır. Şantiyeyi WhatsApp\'tan canlı takip edebilirsiniz.' }),
    defineField({
      name: 'processSteps',
      title: 'Süreç Adımları',
      type: 'array',
      group: 'surec',
      description: '4 adım (sırayla)',
      of: [{ type: 'object', fields: [
        defineField({ name: 'title',       title: 'Adım Başlığı', type: 'string' }),
        defineField({ name: 'description', title: 'Açıklama',     type: 'text', rows: 2 }),
      ], preview: { select: { title: 'title' } } }],
    }),

    /* ── CTA ── */
    defineField({ name: 'ctaEyebrow',  title: 'CTA — Üst Yazı',  type: 'string', group: 'cta', placeholder: 'Ücretsiz · Bağlayıcı değil' }),
    defineField({ name: 'ctaTitle',    title: 'CTA — Başlık',    type: 'string', group: 'cta', placeholder: 'Önce bir kahve içelim, sonra ölçü alalım.' }),
    defineField({ name: 'ctaSubtitle', title: 'CTA — Alt Yazı',  type: 'text', rows: 2, group: 'cta',
      placeholder: 'Ekibimiz adresinize gelir, ölçü alır, tasarım önerisini ücretsiz sunar. Beğenirseniz devam ederiz.' }),
    defineField({ name: 'ctaCta1',    title: 'CTA — 1. Buton',  type: 'string', group: 'cta', placeholder: 'Ücretsiz Keşif Al' }),
    defineField({ name: 'ctaCta2',    title: 'CTA — 2. Buton',  type: 'string', group: 'cta', placeholder: "WhatsApp'tan Yaz" }),

    /* ── Görseller ── */
    defineField({
      name: 'heroImages',
      title: 'Slider Görseller',
      description: 'Hero bölümünde gösterilecek mutfak görselleri (önerilen: 3–5 adet)',
      type: 'array',
      group: 'gorseller',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Site Ayarları' }),
  },
})
