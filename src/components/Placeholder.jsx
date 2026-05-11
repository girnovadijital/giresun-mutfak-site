'use client'

import { useState } from 'react'

export default function Placeholder({ label, dark = false, wood = false, style = {}, src = '' }) {
  const [failed, setFailed] = useState(false)

  if (src && !failed) {
    return (
      <img
        src={src}
        alt={label || ''}
        style={{ objectFit: 'cover', display: 'block', width: '100%', ...style }}
        onError={() => setFailed(true)}
      />
    )
  }
  const cls = ['ph', dark ? 'ph-dark' : '', wood ? 'ph-wood' : ''].filter(Boolean).join(' ')
  return (
    <div className={cls} style={style}>
      {label && <div className="ph-label">{label}</div>}
    </div>
  )
}
