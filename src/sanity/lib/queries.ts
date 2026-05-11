import { groq } from 'next-sanity'

export const projectsQuery = groq`
  *[_type == "project"] | order(completedAt desc) {
    _id,
    title,
    category,
    size,
    location,
    description,
    featured,
    "imageUrl": image.asset->url,
    completedAt
  }
`

export const featuredProjectsQuery = groq`
  *[_type == "project" && featured == true] | order(completedAt desc)[0...3] {
    _id,
    title,
    category,
    "imageUrl": image.asset->url
  }
`

export const testimonialsQuery = groq`
  *[_type == "testimonial"] | order(_createdAt desc) {
    _id,
    quote,
    name,
    location,
    rating
  }
`

export const postsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    category,
    excerpt,
    publishedAt,
    readTime,
    featured,
    "imageUrl": coverImage.asset->url
  }
`

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    category,
    excerpt,
    publishedAt,
    readTime,
    "imageUrl": coverImage.asset->url,
    content
  }
`

export const settingsQuery = groq`
  *[_type == "settings"][0] {
    phone,
    whatsapp,
    email,
    address,
    workingHours,
    workingHours2,
    foundedYear,
    footerTagline,
    heroEyebrow,
    heroLine1,
    heroLine2,
    heroHighlight,
    heroLine3Suffix,
    heroSubtitle,
    heroCta1,
    heroCta2,
    heroStats,
    services,
    processTitle,
    processSubtitle,
    processSteps,
    ctaEyebrow,
    ctaTitle,
    ctaSubtitle,
    ctaCta1,
    ctaCta2,
    "heroImages": heroImages[].asset->url
  }
`
