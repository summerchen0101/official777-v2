import usePopupStore from '@/store/usePopupStore'
import { useRouter } from 'next/dist/client/router'
import { useCallback } from 'react'

function useLoginFirst() {
  const router = useRouter()
  const onLoginToggle = usePopupStore((s) => s.login.onToggle)

  return useCallback(() => {
    router.replace({ query: { to: router.asPath } })
    onLoginToggle()
  }, [])
}

export default useLoginFirst
