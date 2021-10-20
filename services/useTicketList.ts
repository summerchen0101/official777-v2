import { YesNo } from '@/lib/enums'
import { useUserStore } from '@/store/useUserStore'
import { Pagination, ResBase } from '@/types'
import useRequest, { publicApiPath } from '@/utils/useRequest'
import useSWR from 'swr'

export interface TicketListReq {
  category: number
  page: number
  perPage: number
}

export interface Ticket {
  id: string
  title: string
  content: string
  category: number
  createTimeMs: number
  isRedirect: YesNo
}

export interface TicketListRes extends ResBase {
  news: Ticket[]
  pagination: Pagination
}

function useTicketList({ category, page, perPage }: TicketListReq) {
  const request = useRequest()
  const token = useUserStore((s) => s.tokenInfo?.accessToken)
  const { data, isValidating } = useSWR(
    [`api/v2/tickets`, token, category, page, perPage],
    (url, token, category, page, perPage) =>
      request<TicketListRes>({
        url,
        method: 'get',
        config: {
          params: { category, page, perPage },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      }),
  )

  return {
    list: data?.news,
    paginator: data?.pagination,
    isLoading: isValidating,
  }
}

export default useTicketList
