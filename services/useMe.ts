import { useUserStore } from '@/store/useUserStore'
import { ResBase } from '@/types'
import useRequest, { apiPath } from '@/utils/useRequest'
import useSWR from 'swr'

export interface MeRes extends ResBase {
  id: number
  nickname: string
  avatar_url: string
  coin: number
}

function useMe() {
  const request = useRequest()
  const token = useUserStore((s) => s.tokenInfo?.accessToken)
  const { data, isValidating } = useSWR(
    token ? [`${apiPath}/member/me`, token] : null,
    (url, token, category, page, per_page) =>
      request<MeRes>({
        url,
        method: 'get',
        config: {
          params: { category, page, per_page },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      }),
  )

  return { data, isLoading: isValidating }
}

export default useMe
