import { debounce } from 'lodash'
import { useRouter } from 'next/dist/client/router'
import { useEffect } from 'react'
import useDeviceDetect from './useDeviceDetect'

export default function useDevicePage(
  pcRedirect?: string,
  mbRedirect?: string,
) {
  const router = useRouter()
  const { isMobile } = useDeviceDetect()

  useEffect(() => {
    const isMobilePage = router.asPath.includes('/mb')

    const handleResize = () => {
      if (mbRedirect && pcRedirect) {
        if (isMobile && !isMobilePage) {
          router.push(mbRedirect)
        } else if (!isMobile && isMobilePage) {
          router.push(pcRedirect)
        }
      }
    }
    const debounceResize = debounce(handleResize, 100)
    handleResize()
    window.addEventListener('resize', debounceResize)
    return () => {
      window.removeEventListener('resize', debounceResize)
    }
  }, [mbRedirect, pcRedirect, router, isMobile])
}
