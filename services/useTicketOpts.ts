import { useUserStore } from '@/store/useUserStore'
import { ResBase } from '@/types'
import useRequest, { apiPath } from '@/utils/useRequest'
import useSWR from 'swr'

export interface TicketOptsReq {}

export interface TicketOptsRes extends ResBase {
  data: {
    id: number
    title: string
    options: string[]
  }
  meta: {}
}

function useTicketOpts() {
  const request = useRequest()
  const token = useUserStore((s) => s.tokenInfo?.accessToken)
  const { data, isValidating } = useSWR(
    [`${apiPath}/cs/ticket/options`, token],
    (url, token) =>
      request<TicketOptsRes>({
        url,
        method: 'get',
        config: {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      }),
  )

  return {
    list: data?.data.options || [],
    isLoading: isValidating,
  }
}

export default useTicketOpts
