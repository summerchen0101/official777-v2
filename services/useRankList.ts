import { useUserStore } from '@/store/useUserStore'
import { Pagination, ResBase } from '@/types'
import useRequest, { publicApiPath } from '@/utils/useRequest'
import useSWR from 'swr'

export interface RankListReq {
  rank_type: number
  page: number
  per_page: number
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
  avatar_url: AvatarURL
  gold: number
  betting_odds: string
}

export interface RankListRes extends ResBase {
  rankings: Ranking[]
  page: Pagination
}

function useRankList({ rank_type, page, per_page }: RankListReq) {
  const request = useRequest()
  const token = useUserStore((s) => s.tokenInfo?.accessToken)
  const { data, isValidating } = useSWR(
    [`${publicApiPath}/rank/list`, token, rank_type, page, per_page],
    (url, token, rank_type, page, per_page) =>
      request<RankListRes>({
        url,
        method: 'get',
        config: {
          params: { rank_type, page, per_page },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      }),
  )

  return {
    list: data?.rankings,
    paginator: data?.page,
    isLoading: isValidating,
  }
}

export default useRankList
