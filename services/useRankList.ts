import { useUserStore } from '@/store/useUserStore'
import { Pagination, ResBase } from '@/types'
import useRequest, { publicApiPath } from '@/hooks/useRequest'
import useSWR from 'swr'

export interface RankListReq {
  rankType: number
  page: number
  perPage: number
}

export enum AvatarURL {
  The0 = '0@@',
  The401 = '401@@',
  The402 = '402@@',
}

export interface Ranking {
  rank: number
  uid: number
  nickname: string
  avatarID: AvatarURL
  gold: number
  bettingOdds: string
}

export interface RankListRes extends ResBase {
  rankings: Ranking[]
  pagination: Pagination
}

function useRankList({ rankType, page, perPage }: RankListReq) {
  const request = useRequest()
  const token = useUserStore((s) => s.tokenInfo?.accessToken)
  const { data, isValidating } = useSWR(
    [`${publicApiPath}/rank/list`, token, rankType, page, perPage],
    (url, token, rankType, page, perPage) =>
      request<RankListRes>({
        url,
        method: 'get',
        config: {
          params: { rankType, page, perPage },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      }),
  )

  return {
    list: data?.rankings,
    paginator: data?.pagination,
    isLoading: isValidating,
  }
}

export default useRankList
