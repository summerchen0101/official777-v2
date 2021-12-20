import { MCPaymentType } from '@/lib/enums'
import { ResBase } from '@/types'
import useRequest, { apiPath } from '@/utils/useRequest'
import { useState } from 'react'

export interface OrderCreateReq {
  productID: number
  gatewayCode: number
  userID: number
  paymentType: MCPaymentType
}

export interface OrderCreateRes extends ResBase {
  data: { requestURL: string; orderID: number; token: string }
  meta: {}
}

function useOrderCreate() {
  const request = useRequest()
  const [isLoading, setIsLoading] = useState(false)
  const handler = async (data: OrderCreateReq) => {
    setIsLoading(true)
    const res = await request<OrderCreateRes>({
      method: 'post',
      url: `${apiPath}/webPayment/${data.productID}/${data.gatewayCode}/create`,
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

export default useOrderCreate
