import { localOpen } from '@/utils'
import { useRouter } from 'next/dist/client/router'
import { useEffect } from 'react'
import { CgSpinnerTwo } from 'react-icons/cg'

function AppRedirect() {
  const router = useRouter()
  useEffect(() => {
    localOpen('megarich://demo' + location.search)
    setTimeout(() => {
      router.push('/home')
    }, 1000 * 10)
  }, [])
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <CgSpinnerTwo className="text-white/30 animate-spin text-8xl" />
    </div>
  )
}

export default AppRedirect
