import { ResBase } from '@/types'
import useRequest from '@/hooks/useRequest'
import { useState } from 'react'
import { useUserStore } from '@/store/useUserStore'
import { LoginProvider } from '@/lib/enums'

export interface SmsLoginReq {
  countryCode: string
  cellphone: string
  digitCode: string
  type: number
}

export interface SmsLoginRes extends ResBase {
  accessToken: string
  refreshToken: string
  tokenType: string
  expiresIn: number
}

export default function useSmsLogin() {
  const request = useRequest()
  const [isLoading, setIsLoading] = useState(false)
  const handler = async (data: SmsLoginReq) => {
    setIsLoading(true)
    const res = await request<SmsLoginRes, SmsLoginReq>({
      method: 'post',
      url: `/api/v1/sms/verify/login`,
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
