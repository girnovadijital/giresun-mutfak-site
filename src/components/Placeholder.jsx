export default function Placeholder({ label, dark = false, wood = false, style = {} }) {
  const cls = ['ph', dark ? 'ph-dark' : '', wood ? 'ph-wood' : ''].filter(Boolean).join(' ')
  return (
    <div className={cls} style={style}>
      {label && <div className="ph-label">{label}</div>}
    </div>
  )
}
