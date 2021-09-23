import { debounce } from 'lodash'
import { useRouter } from 'next/dist/client/router'
import { useEffect } from 'react'

export default function useDevicePage(pcRedirect: string, mbRedirect: string) {
  const router = useRouter()

  useEffect(() => {
    const isMobilePage = router.asPath.includes('/mb')
    const handleResize = () => {
      const isMobile = window.innerHeight > window.innerWidth
      if (isMobile && !isMobilePage) router.push(mbRedirect)
      else if (!isMobile && isMobilePage) router.push(pcRedirect)
    }
    const debounceResize = debounce(handleResize, 100)
    handleResize()
    window.addEventListener('resize', debounceResize)
    return () => {
      window.removeEventListener('resize', debounceResize)
    }
  }, [mbRedirect, pcRedirect, router])
}
