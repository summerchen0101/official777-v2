import { useEffect } from 'react'

function useImgHover() {
  useEffect(() => {
    const timer = setTimeout(() => {
      const images = document.querySelectorAll<HTMLImageElement>('a img')
      const handleMouseEnter = (event: globalThis.MouseEvent) => {
        const img = event.currentTarget as HTMLImageElement
        if (img.dataset.activeSrc) {
          img.dataset.originalSrc = img.src
          img.src = img.dataset.activeSrc
        }
      }

      const handleMouseLeave = (event: globalThis.MouseEvent) => {
        const img = event.currentTarget as HTMLImageElement
        if (img.dataset.originalSrc) {
          img.src = img.dataset.originalSrc
        }
      }
      images.forEach((img) => {
        img.addEventListener('mouseenter', handleMouseEnter)
        img.addEventListener('mouseleave', handleMouseLeave)
      })

      return () => {
        images.forEach((img) => {
          img.removeEventListener('mouseenter', handleMouseEnter)
          img.removeEventListener('mouseleave', handleMouseLeave)
        })
      }
    }, 0)

    return () => clearTimeout(timer)
  }, [])
}

export default useImgHover
