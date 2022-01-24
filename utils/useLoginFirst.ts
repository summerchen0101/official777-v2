import usePopupStore from '@/store/usePopupStore'
import { useRouter } from 'next/dist/client/router'
import { useCallback } from 'react'

function useLoginFirst(keepRoute?: boolean) {
  const router = useRouter()
  const onLoginToggle = usePopupStore((s) => s.login.onToggle)

  return useCallback(() => {
    if (keepRoute) {
      router.replace({ query: { to: router.asPath } })
    }
    onLoginToggle()
  }, [])
}

export default useLoginFirst
