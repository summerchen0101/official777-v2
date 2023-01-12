import useMe from '@/services/useMe'
import { useRouter } from 'next/dist/client/router'
import { useEffect } from 'react'
import { showLoginPopup } from '.'

function useAuthPage() {
  const router = useRouter()
  const { data: user, isLoading: isMeLoading } = useMe()

  useEffect(() => {
    if (!user && !isMeLoading) {
      showLoginPopup()
    }
  }, [user, router.query])

  return user
}

export default useAuthPage
