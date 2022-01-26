import { useUserStore } from '@/store/useUserStore'
import { Pagination, ResBase } from '@/types'
import useRequest, { apiPath, publicApiPath } from '@/hooks/useRequest'
import useSWR from 'swr'

export interface EventOverviewReq {
  eventCode?: string
}

export interface ItmeInfo {
  type: number
  name: string
  itemID: number
}

export interface VoucherInfo {
  item_id: number
  threshold_score: number
  current_score: number
  total_count: number
}

export interface Data {
  eventID: number
  eventCode: string
  itmeInfo: ItmeInfo[]
  voucherInfo: VoucherInfo[]
}

export interface EventOverviewRes extends ResBase {
  meta: {}
  data: Data
}

function useEventOverview({ eventCode }: EventOverviewReq) {
  const request = useRequest()
  const token = useUserStore((s) => s.tokenInfo?.accessToken)
  const { data, isValidating } = useSWR(
    token && eventCode
      ? [`${apiPath}/campaignEvents/${eventCode}/overview`, token, eventCode]
      : null,
    (url, token, eventCode) =>
      request<EventOverviewRes>({
        url,
        method: 'get',
        config: {
          params: {
            eventCode,
          },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      }),
  )
  return {
    data: data?.data,
    isLoading: isValidating,
  }
}

export default useEventOverview
