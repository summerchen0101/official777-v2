import useDevicePage from '@/hooks/useDevicePage'
import { LoginRes } from '@/services/useLogin'
import { useUserStore } from '@/store/useUserStore'
import type { NextPage } from 'next'
import { useRouter } from 'next/dist/client/router'
import { useEffect } from 'react'
import { CgSpinnerTwo } from 'react-icons/cg'

const Index: NextPage = () => {
  const router = useRouter()
  const setTokenInfo = useUserStore((s) => s.setTokenInfo)

  useDevicePage('/home', '/mb/home')
  useEffect(() => {
    if (router.query.accessToken) {
      const res = router.query as unknown as LoginRes
      setTokenInfo({
        accessToken: res.accessToken,
        refreshToken: res.refreshToken,
        expiresIn: res.expiresIn,
      })
      if (router.query.to) {
        router.push(router.query.to as string)
      }
    } else {
      router.push('/home')
    }
  }, [router, setTokenInfo])
  return (
    <div className="flex justify-center items-center h-full">
      <CgSpinnerTwo className="text-white/30 animate-spin text-8xl" />
    </div>
  )
}

export default Index
