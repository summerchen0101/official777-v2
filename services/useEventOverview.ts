import { useUserStore } from '@/store/useUserStore'
import { Pagination, ResBase } from '@/types'
import useRequest, { apiPath, publicApiPath } from '@/hooks/useRequest'
import useSWR from 'swr'

export interface EventOverviewReq {
  eventId?: number
}

export interface ItmeInfo {
  type: number
  name: string
  itemID: number
}

export interface Info {
  item_id: number
  threshold_score: number
}

export interface VoucherInfo {
  name: string
  start_time: number
  end_time: number
  infos: Info[]
  event_link: string
  banner_links: string[]
}

export interface Data {
  itmeInfo: ItmeInfo[]
  voucherInfo: VoucherInfo
}

export interface EventOverviewRes extends ResBase {
  meta: {}
  data: Data
}

function useEventOverview({ eventId }: EventOverviewReq) {
  const request = useRequest()
  const token = useUserStore((s) => s.tokenInfo?.accessToken)
  const { data, isValidating } = useSWR(
    eventId
      ? [`${apiPath}/campaignEvents/${eventId}/overview`, token, eventId]
      : null,
    (url, token, eventId) =>
      request<EventOverviewRes>({
        url,
        method: 'get',
        config: {
          params: {
            eventId,
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
