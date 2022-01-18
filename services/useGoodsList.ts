import { PaymentGateway } from './../lib/enums'
import { useUserStore } from '@/store/useUserStore'
import { Pagination, ResBase } from '@/types'
import useRequest, { publicApiPath } from '@/utils/useRequest'
import useSWR from 'swr'

export interface GoodsListReq {
  itemType: number
  payType: number
  paymentType: number
  paymentGateway: number
  page: number
  perPage: number
}

export interface Goods {
  ItemId: number
  Description: string
  GoodType: number
  Price: number
  StoreDataId: number
  Name: string
  Lv: number
  OriginalPrice: number
  SpecialPrice: number
  PriceType: number
  Icon: string
  BuyTimes: number
  StoreDataType: number
  UseValue: number
  AppPayId: string
  GpPayId: string
  MyPayId: string
  PayId: string
  PayType: number
}

export interface GoodsListRes extends ResBase {
  data: Goods[]
  pagination: Pagination
}

function useGoodsList({
  itemType,
  payType,
  paymentType,
  paymentGateway,
  page,
  perPage,
}: GoodsListReq) {
  const request = useRequest()
  const token = useUserStore((s) => s.tokenInfo?.accessToken)
  const { data, isValidating } = useSWR(
    payType
      ? [
          `${publicApiPath}/payment/storeItems`,
          token,
          itemType,
          payType,
          paymentType,
          paymentGateway,
          page,
          perPage,
        ]
      : null,
    (
      url,
      token,
      itemType,
      payType,
      paymentType,
      paymentGateway,
      page,
      perPage,
    ) =>
      request<GoodsListRes>({
        url,
        method: 'get',
        config: {
          params: {
            itemType,
            payType,
            paymentType,
            paymentGateway,
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
    paginator: data?.pagination,
    isLoading: isValidating,
  }
}

export default useGoodsList
