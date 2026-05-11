import { WhatsAppIcon } from './Icons'

export default function StickyWA({ whatsapp = '904540000000' }) {
  return (
    <a
      className="wa-sticky"
      href={`https://wa.me/${whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp'tan Yaz"
    >
      <WhatsAppIcon size={26} />
    </a>
  )
}
