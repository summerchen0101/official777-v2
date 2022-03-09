import { useStore } from '@/store/useStore'
import React from 'react'

function useCdnUrl() {
  const cdnBaseUrl = useStore((s) => s.clientEnv.cdnBaseUrl)

  return (path: string) => {
    return cdnBaseUrl + path
  }
}

export default useCdnUrl
