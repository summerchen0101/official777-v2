import { ResBase } from '@/types'
import useRequest, { apiPath } from '@/utils/useRequest'
import { useState } from 'react'

export interface RechargeReq {
  productID: number
  callbackURL: string
  productCategory: number
  gatewayCode: number
}

export interface RechargeRes extends ResBase {
  meta: {}
  data: {
    requestURL: string
    requestBody: string
  }
}

export default function useRecharge() {
  const request = useRequest()
  const [isLoading, setIsLoading] = useState(false)
  const handler = async (data: RechargeReq) => {
    setIsLoading(true)
    const res = await request<RechargeRes, RechargeReq>({
      method: 'post',
      url: `${apiPath}/payment/${data.productID}/${data.gatewayCode}/create`,
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
