import { useStore } from '@/store/useStore'
import { useUserStore } from '@/store/useUserStore'
import { useRouter } from 'next/dist/client/router'
import { useEffect } from 'react'

export default function useAuth() {
  const token = useUserStore((s) => s.tokenInfo?.accessToken)
  const toggleLoginPopup = useStore((s) => s.toggleLoginPopup)
  const router = useRouter()
  useEffect(() => {
    if (!token) {
      toggleLoginPopup()
    }
  }, [router, toggleLoginPopup, token])
}
