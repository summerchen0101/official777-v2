import usePopupStore from '@/store/usePopupStore'
import { useRouter } from 'next/dist/client/router'
import { useCallback } from 'react'

function useLoginFirst(targetRoute?: string) {
  const router = useRouter()
  const onLoginToggle = usePopupStore((s) => s.login.onToggle)

  return useCallback(() => {
    if (targetRoute) {
      router.push({ query: { to: targetRoute } })
    } else {
      router.replace({ query: { to: router.asPath } })
    }
    onLoginToggle()
  }, [targetRoute, router.asPath])
}

export default useLoginFirst
