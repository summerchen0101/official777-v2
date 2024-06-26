import { YesNo } from '@/lib/enums'
import { useUserStore } from '@/store/useUserStore'
import { Pagination, ResBase } from '@/types'
import useRequest, { apiPath, publicApiPath } from '@/hooks/useRequest'
import useSWR from 'swr'

export interface RewardListReq {
  userID?: number
  rewardStatus?: number
  remitStatus?: number
  page: number
  perPage: number
}

export interface Reward {
  id: number
  name: string
  type: number
  gold: number
  needForm: number
}
export interface Reward {
  id: number
  name: string
  type: number
  price: number
  unit: string
  gold: number
  needForm: number
  itemID: number
  amount: number
}

export interface Record {
  id: number
  userID: number
  realName: string
  socialID: string
  receiveDate: number
  rewardID: number
  rewardStatus: number
  remitStatus: number
  reward: Reward
}

export interface RewardListRes extends ResBase {
  records: Record[]
  pagination: Pagination
}

function useRewardList({
  userID,
  rewardStatus,
  remitStatus,
  page,
  perPage,
}: RewardListReq) {
  const request = useRequest()
  const token = useUserStore((s) => s.tokenInfo?.accessToken)
  const { data, isValidating } = useSWR(
    [
      `${apiPath}/member/reward`,
      token,
      userID,
      rewardStatus,
      remitStatus,
      page,
      perPage,
    ],
    (url, token, userID, rewardStatus, remitStatus, page, perPage) =>
      request<RewardListRes>({
        url,
        method: 'get',
        config: {
          params: { userID, rewardStatus, remitStatus, page, perPage },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      }),
  )

  return {
    list: data?.records || [],
    paginator: data?.pagination,
    isLoading: isValidating,
  }
}

export default useRewardList
