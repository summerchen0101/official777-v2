import { ResBase } from '@/types'
import useRequest from '@/hooks/useRequest'
import { useState } from 'react'
import { useUserStore } from '@/store/useUserStore'
import { LoginProvider } from '@/lib/enums'

export interface AppleStateReq {
  backUrl: string
}
export interface AppleStateRes extends ResBase {
  data: string
}

export default function useAppleState() {
  const request = useRequest()
  const setProvider = useUserStore((s) => s.setProvider)
  const [isLoading, setIsLoading] = useState(false)
  const handler = async (data: AppleStateReq) => {
    setIsLoading(true)
    const res = await request<AppleStateRes>({
      method: 'get',
      url: `api/v1/apple/state`,
      config: { params: data },
    })
    setIsLoading(false)
    setProvider(LoginProvider.APPLE)
    return res
  }
  return {
    isLoading,
    handler,
  }
}
