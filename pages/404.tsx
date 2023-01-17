import { useRouter } from 'next/dist/client/router'
import React, { useEffect } from 'react'

function NotfoundPage() {
  const router = useRouter()
  useEffect(() => {
    router.push('/home')
  }, [])
  return <div>Page Notfound</div>
}

export default NotfoundPage
