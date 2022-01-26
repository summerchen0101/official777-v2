import { ECPayPaymentType, MCPaymentType } from '@/lib/enums'
import { ResBase } from '@/types'
import useRequest, { apiPath } from '@/hooks/useRequest'
import { useState } from 'react'

export interface Invoice {
  eCPayInvoiceType: number
  citizenDigitalCertificateNum?: string
  carrierNum?: string
  loveCode?: string
  notifyMail?: string
  phone?: string
}

export interface OrderCreateReq {
  productID: number
  gatewayCode: number
  userID: number
  paymentType: ECPayPaymentType
  invoice: Invoice
}

export interface OrderCreateRes extends ResBase {
  data: { requestURL: string; orderID: number; token: string; data?: string }
  meta: {}
}

function useEcpayOrderCreate() {
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

export default useEcpayOrderCreate
