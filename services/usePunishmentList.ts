import { YesNo } from '@/lib/enums'
import { useUserStore } from '@/store/useUserStore'
import { Pagination, ResBase } from '@/types'
import useRequest, { apiPath, publicApiPath } from '@/hooks/useRequest'
import useSWR from 'swr'

export interface PunishmentListReq {
  page: number
  perPage: number
}

export interface Punishment {
  userID: number
  nickName: string
  reason: string
  suspendAtMs: number
  suspendUntilMs: number
}

export interface PunishmentListRes extends ResBase {
  data: Punishment[]
  pagination: Pagination
}

function usePunishmentList({ page, perPage }: PunishmentListReq) {
  const request = useRequest()
  const token = useUserStore((s) => s.tokenInfo?.accessToken)
  const { data, isValidating } = useSWR(
    [`${publicApiPath}/punishment`, token, page, perPage],
    (url, token, page, perPage) =>
      request<PunishmentListRes>({
        url,
        method: 'get',
        config: {
          params: { page, perPage },
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

export default usePunishmentList
