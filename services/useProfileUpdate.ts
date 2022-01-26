import { ResBase } from '@/types'
import useRequest, { apiPath } from '@/hooks/useRequest'
import { useState } from 'react'

export interface RechargeReq {
  email: string
  nickname: string
  newPassword?: string
  newCountryCode: string
  newCellphone: string
  newSecondPassword?: string
  answer?: string
  gender?: number
}

export interface RechargeRes extends ResBase {}

export default function useProfileUpdate() {
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
