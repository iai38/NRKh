import Image from 'next/image'

type Props = {
  src?: string
  alt?: string
  aspect?: string    // e.g. "4/5", "2/3", "1/1", "7/5"
  label?: string     // ph-label text
  corner?: string    // ph-corner text
  className?: string
  style?: React.CSSProperties
  fill?: boolean
}

export default function MediaSlot({ src, alt = '', aspect, label, corner, className = '', style }: Props) {
  const aspectStyle = aspect ? { aspectRatio: aspect.replace('/', ' / ') } : {}

  if (src) {
    return (
      <div className={className} style={{ ...aspectStyle, position: 'relative', ...style }}>
        <Image src={src} alt={alt} fill style={{ objectFit: 'cover' }} />
      </div>
    )
  }

  return (
    <div className={`ph ${className}`} style={{ ...aspectStyle, ...style }}>
      {label && <span className="ph-label">{label}</span>}
      {corner && <span className="ph-corner">{corner}</span>}
    </div>
  )
}
