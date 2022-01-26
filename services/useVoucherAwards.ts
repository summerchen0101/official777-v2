import { useUserStore } from '@/store/useUserStore'
import { Pagination, ResBase } from '@/types'
import useRequest, { apiPath, publicApiPath } from '@/hooks/useRequest'
import useSWR from 'swr'

export interface VoucherAwardsReq {
  eventId?: number
  ticketId?: number
  page: number
  perpage: number
}

export interface Meta {
  pagination: Pagination
}

export interface VoucherAwardsRes extends ResBase {
  meta: Meta
  data: string[] | null
}

export interface ResData {
  meta: Meta
  data: string[]
}

function useVoucherAwards({
  eventId,
  ticketId,
  page,
  perpage,
}: VoucherAwardsReq) {
  const request = useRequest()
  const token = useUserStore((s) => s.tokenInfo?.accessToken)
  const { data, isValidating } = useSWR(
    eventId && ticketId
      ? [
          `${apiPath}/campaignEvents/${eventId}/${ticketId}/serial`,
          token,
          page,
          perpage,
        ]
      : null,
    (url, token, page, perpage) =>
      request<VoucherAwardsRes>({
        url,
        method: 'get',
        config: {
          params: { page, perpage },
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

export default useVoucherAwards
