export default function Placeholder({ label, dark = false, wood = false, style = {}, src = '' }) {
  if (src) {
    return (
      <img
        src={src}
        alt={label || ''}
        style={{ objectFit: 'cover', display: 'block', width: '100%', ...style }}
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
