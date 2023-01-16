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
    router.push('/home')
  }, [router])
  return (
    <div>
      <h1>{msg || '載入中...'}</h1>
      <CgSpinnerTwo />
    </div>
  )
}

export default Index
