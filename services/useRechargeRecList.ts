import { apiPath } from './../hooks/useRequest'
import { useUserStore } from '@/store/useUserStore'
import { Pagination, ResBase } from '@/types'
import useRequest, { publicApiPath } from '@/hooks/useRequest'
import useSWR from 'swr'

export interface RechargeRecListReq {
  paymentStatus: number
  paymentGateway: number
  createdAtMsStart: number
  createdAtMsEnd: number
  page: number
  perPage: number
}

export interface RechargeRec {
  ID: number
  LinkedID: number
  ThirdPartID: string
  ProductCategory: number
  ProductID: string
  ItemID: number
  GatewayToken: string
  PriceAmountMicros: number
  PriceCurrencyCode: string
  PaymentStatus: number
  RefundStatus: number
  RevisePaidStatus: number
  PaymentGateway: number
  UserID: number
  Note: string
  NoteImageURLs: null
  CallBackURL: string
  CreatedAtMs: number
  ExpiredAtMs: number
  PayType: number
}

export interface Meta {
  pagination: Pagination
}

export interface RechargeRecListRes extends ResBase {
  meta: Meta
  data: RechargeRec[]
}

function useRechargeRecList({
  paymentStatus,
  paymentGateway,
  createdAtMsStart,
  createdAtMsEnd,
  page,
  perPage,
}: RechargeRecListReq) {
  const request = useRequest()
  const token = useUserStore((s) => s.tokenInfo?.accessToken)
  const { data, isValidating } = useSWR(
    token
      ? [
          `${apiPath}/payment/list`,
          token,
          paymentStatus,
          paymentGateway,
          createdAtMsStart,
          createdAtMsEnd,
          page,
          perPage,
        ]
      : null,
    (
      url,
      token,
      paymentStatus,
      paymentGateway,
      createdAtMsStart,
      createdAtMsEnd,
      page,
      perPage,
    ) =>
      request<RechargeRecListRes>({
        url,
        method: 'get',
        config: {
          params: {
            paymentStatus,
            paymentGateway,
            createdAtMsStart,
            createdAtMsEnd,
            page,
            perPage,
          },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      }),
  )

  return {
    list: data?.data,
    paginator: data?.meta.pagination,
    isLoading: isValidating,
  }
}

export default useRechargeRecList
