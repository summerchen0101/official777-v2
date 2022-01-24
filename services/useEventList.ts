import { useUserStore } from '@/store/useUserStore'
import { Pagination, ResBase } from '@/types'
import useRequest, { apiPath, publicApiPath } from '@/utils/useRequest'
import useSWR from 'swr'

export interface EventListReq {}

export interface AppInfo {
  type: number
  webURL: string
  imageSource: string
}

export interface Filter {
  betAmountMin: number
  grandTotalGainAmount: number
  betAmountMax?: number
}

export interface RewardCondition {
  type: number
  judanGameCategory: number
  filter: Filter
  vgItemType: number
  vgItemID: number
}

export interface Event {
  id: number
  name: string
  category: number
  startedShowAtMs: number
  endedShowAtMs: number
  startedAtMs: number
  endedAtMs: number
  enable: number
  appInfo: AppInfo[]
  rewardConditions: RewardCondition[]
  createdAtMs: number
  creatorID: number
  updatedAtMs: number
  updaterID: number
}

export interface EventListRes extends ResBase {
  data: Event[]
  pagination: Pagination
}

function useEventList() {
  const request = useRequest()
  const token = useUserStore((s) => s.tokenInfo?.accessToken)
  const { data, isValidating } = useSWR(
    [`${apiPath}/campaignEvents`, token],
    (url, token) =>
      request<EventListRes>({
        url,
        method: 'get',
        config: {
          params: {},
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

export default useEventList
