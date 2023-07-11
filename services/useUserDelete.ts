import { ResBase } from '@/types'
import useRequest, { apiPath } from '@/hooks/useRequest'
import { useState } from 'react'

export interface RechargeReq {
  provider: string
  accessToken: string
}

export interface RechargeRes extends ResBase {}

export default function useUserDelete() {
  const request = useRequest()
  const [isLoading, setIsLoading] = useState(false)
  const handler = async (data: RechargeReq) => {
    setIsLoading(true)
    const res = await request<RechargeRes, RechargeReq>({
      method: 'delete',
      url: `${apiPath}/member`,
      data,
    })
    setIsLoading(false)
    return res
  }
  return {
    isLoading,
    handler,
  }
}
