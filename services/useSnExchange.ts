import { ResBase } from '@/types'
import useRequest, { apiPath } from '@/hooks/useRequest'
import { useState } from 'react'

export interface SnExchangeReq {
  userID: BigInt
  serial: string
}

export interface SnExchangeRes extends ResBase {}

export default function useSnExchange() {
  const request = useRequest()
  const [isLoading, setIsLoading] = useState(false)
  const handler = async (data: SnExchangeReq) => {
    setIsLoading(true)
    const res = await request<SnExchangeRes, SnExchangeReq>({
      method: 'post',
      url: `${apiPath}/serial/exchange`,
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
