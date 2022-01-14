import { localOpen } from '@/utils'
import { useEffect } from 'react'
import { CgSpinnerTwo } from 'react-icons/cg'

function AppRedirect() {
  useEffect(() => {
    localOpen('megarich://demo' + location.search)
  }, [])
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <CgSpinnerTwo className="text-white/30 animate-spin text-8xl" />
    </div>
  )
}

export default AppRedirect
