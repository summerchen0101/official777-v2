import { ResBase } from '@/types'
import useRequest, { apiPath } from '@/hooks/useRequest'
import { useState } from 'react'

export interface SendSmsReq {
  countryCode: string
  cellphone: string
}

export interface SendSmsRes extends ResBase {}

export default function useSendSms() {
  const request = useRequest()
  const [isLoading, setIsLoading] = useState(false)
  const handler = async (data: SendSmsReq) => {
    setIsLoading(true)
    const res = await request<SendSmsRes, SendSmsReq>({
      method: 'post',
      url: `/api/v1/sms/send`,
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
