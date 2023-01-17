import { useRouter } from 'next/dist/client/router'
import React, { useEffect } from 'react'

function ErrorPage() {
  const router = useRouter()
  useEffect(() => {
    router.push('/home')
  }, [])
  return <div>Page Error</div>
}

export default ErrorPage
