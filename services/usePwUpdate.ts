import { ResBase } from '@/types'
import useRequest, { apiPath } from '@/utils/useRequest'
import { useState } from 'react'

export interface RechargeReq {
  old_password: string
  new_password: string
}

export interface RechargeRes extends ResBase {}

export default function usePwUpdate() {
  const request = useRequest()
  const [isLoading, setIsLoading] = useState(false)
  const handler = async (data: RechargeReq) => {
    setIsLoading(true)
    const res = await request<RechargeRes, RechargeReq>({
      method: 'patch',
      url: `${apiPath}/member/profile`,
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
