import { ResBase } from '@/types'
import useRequest from '@/utils/useRequest'
import { useState } from 'react'

export interface AppleStateReq {
  backUrl: string
}
export interface AppleStateRes extends ResBase {
  data: string
}

export default function useAppleState() {
  const request = useRequest()
  const [isLoading, setIsLoading] = useState(false)
  const handler = async (data: AppleStateReq) => {
    setIsLoading(true)
    const res = await request<AppleStateRes>({
      method: 'get',
      url: `api/v1/apple/state`,
      config: { params: data },
    })
    setIsLoading(false)
    return res
  }
  return {
    isLoading,
    handler,
  }
}
