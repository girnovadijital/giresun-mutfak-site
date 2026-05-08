import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './src/sanity/schemaTypes'

export default defineConfig({
  name: 'giresun-mutfak',
  title: 'Giresun Mutfak',
  basePath: '/studio',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('İçerikler')
          .items([
            S.listItem().title('Projeler').schemaType('project').child(
              S.documentTypeList('project').title('Projeler')
            ),
            S.listItem().title('Müşteri Yorumları').schemaType('testimonial').child(
              S.documentTypeList('testimonial').title('Yorumlar')
            ),
            S.divider(),
            S.listItem().title('Site Ayarları').schemaType('settings').child(
              S.documentTypeList('settings').title('Ayarlar')
            ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
