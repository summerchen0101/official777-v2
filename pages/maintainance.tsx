import useMaintenance from '@/services/useMaintenance'
import type { NextPage } from 'next'
import { useRouter } from 'next/dist/client/router'
import { useEffect } from 'react'
import { CgSpinnerTwo } from 'react-icons/cg'

const Index: NextPage = () => {
  const router = useRouter()
  const { data } = useMaintenance()
  console.log(data)
  useEffect(() => {
    if (!data?.isOpen) {
      router.push('/')
    }
  }, [data])
  return (
    <div className="flex flex-col justify-center items-center  h-full">
      <div className="text-gold-500 text-2xl mb-5">{data?.content}</div>
    </div>
  )
}

export default Index
