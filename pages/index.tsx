import useDevicePage from '@/hooks/useDevicePage'
import { LoginRes } from '@/services/useLogin'
import { useUserStore } from '@/store/useUserStore'
import type { NextPage } from 'next'
import { useRouter } from 'next/dist/client/router'
import { useEffect } from 'react'
import { CgSpinnerTwo } from 'react-icons/cg'

const Index: NextPage = () => {
  const router = useRouter()
  const msg = router.query.msg

  useEffect(() => {
    if (router.query.to) {
      router.push(router.query.to as string)
      return
    }
    router.push(window.innerWidth > 600 ? '/home' : '/mb/home')
  }, [router])
  return (
    <div className="flex flex-col justify-center items-center  h-full">
      <div hidden={!msg} className="text-gold-500 text-2xl mb-5">
        {msg}
      </div>
      <CgSpinnerTwo className="text-white/30 animate-spin text-8xl" />
    </div>
  )
}

export default Index
