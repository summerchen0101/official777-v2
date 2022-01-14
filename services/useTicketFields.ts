import { useUserStore } from '@/store/useUserStore'
import { ResBase } from '@/types'
import useRequest, { apiPath } from '@/utils/useRequest'
import useSWR from 'swr'

export interface Option {
  name: string
  default: boolean
}
export interface Item {
  itemID: number
  name: string
  description: string
  required: boolean
  type: string
  regexp_for_validation: string
  position: number
  dataType: string
  options: Option[] | null
}

export interface TicketFieldsRes extends ResBase {
  data: { items: Item[] }
  meta: {}
}

function useTicketFields() {
  const request = useRequest()
  const token = useUserStore((s) => s.tokenInfo?.accessToken)
  const { data, isValidating } = useSWR(
    [`${apiPath}/cs/ticket/items`, token],
    (url, token) =>
      request<TicketFieldsRes>({
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
    list: data?.data.items || [],
    isLoading: isValidating,
  }
}

export default useTicketFields
