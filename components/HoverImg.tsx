import React, { useRef, useEffect } from 'react'

interface HoverImgProps {
  src: string
  activeSrc: string
  alt?: string
  className?: string
}

const HoverImg: React.FC<HoverImgProps> = ({
  src,
  activeSrc,
  alt = '',
  className = '',
}) => {
  const imgRef = useRef<HTMLImageElement | null>(null)

  useEffect(() => {
    const imgElement = imgRef.current

    if (!imgElement) return

    const handleMouseEnter = () => {
      if (imgElement && activeSrc) {
        imgElement.dataset.originalSrc = imgElement.src
        imgElement.src = activeSrc
      }
    }

    const handleMouseLeave = () => {
      if (imgElement && imgElement.dataset.originalSrc) {
        imgElement.src = imgElement.dataset.originalSrc
      }
    }

    imgElement.addEventListener('mouseenter', handleMouseEnter)
    imgElement.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      imgElement.removeEventListener('mouseenter', handleMouseEnter)
      imgElement.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [activeSrc])

  return <img ref={imgRef} src={src} alt={alt} className={className} />
}

export default HoverImg
