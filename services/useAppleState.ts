import { ResBase } from '@/types'
import useRequest from '@/utils/useRequest'
import { useState } from 'react'

export interface AppleStateRes extends ResBase {
  data: string
}

export default function useAppleState() {
  const request = useRequest()
  const [isLoading, setIsLoading] = useState(false)
  const handler = async () => {
    setIsLoading(true)
    const res = await request<AppleStateRes>({
      method: 'get',
      url: `api/v1/apple/state`,
    })
    setIsLoading(false)
    return res
  }
  return {
    isLoading,
    handler,
  }
}
