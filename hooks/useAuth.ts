import usePopupStore from '@/store/usePopupStore'
import { useStore } from '@/store/useStore'
import { useUserStore } from '@/store/useUserStore'
import { useRouter } from 'next/dist/client/router'
import { useEffect } from 'react'

export default function useAuth() {
  const token = useUserStore((s) => s.tokenInfo?.accessToken)
  const onToggle = usePopupStore((s) => s.login.onToggle)
  const router = useRouter()
  useEffect(() => {
    if (!token) {
      onToggle()
    }
  }, [router, onToggle, token])
}
