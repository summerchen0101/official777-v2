import { ResBase } from '@/types'
import useRequest, { apiPath } from '@/hooks/useRequest'
import { useState } from 'react'

export interface SmsReq {
  userID?: number
  newCountryCode?: string
  newCellphone?: string
}

export interface SmsRes extends ResBase {
  sendSuccess: number
  cellPhone: string
}

export default function useSms() {
  const request = useRequest()
  const [isLoading, setIsLoading] = useState(false)
  const handler = async (data: SmsReq) => {
    setIsLoading(true)
    const res = await request<SmsRes, SmsReq>({
      method: 'post',
      url: `${apiPath}/sms`,
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
