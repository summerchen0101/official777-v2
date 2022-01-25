import useRequest, { apiPath } from '@/hooks/useRequest'
import { ResBase } from '@/types'
import { useState } from 'react'

export interface SerialExchangeReq {
  serialNum: string
  password: string
}

export interface SerialExchangeRes extends ResBase {}

function useSWSerialExchange() {
  const request = useRequest()
  const [isLoading, setIsLoading] = useState(false)
  const handler = async (data: SerialExchangeReq) => {
    setIsLoading(true)
    const res = await request<SerialExchangeRes>({
      method: 'post',
      url: `${apiPath}/serial/swExchange`,
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

export default useSWSerialExchange
