import { ResBase } from '@/types'
import useRequest, { apiPath } from '@/hooks/useRequest'
import { useState } from 'react'

export interface PwUpdateReq {
  newPassword?: string
  newSecondPassword?: string
  answer: string
}

export interface PwUpdateRes extends ResBase {}

export default function usePwUpdate() {
  const request = useRequest()
  const [isLoading, setIsLoading] = useState(false)
  const handler = async (data: PwUpdateReq) => {
    setIsLoading(true)
    const res = await request<PwUpdateRes, PwUpdateReq>({
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
