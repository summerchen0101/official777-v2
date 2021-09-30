import { useUserStore } from '@/store/useUserStore'
import { ResBase } from '@/types'
import useRequest, { apiPath } from '@/utils/useRequest'
import useSWR from 'swr'

export interface MeRes extends ResBase {
  id: number
  nickname: string
  avatarID: string
  coin: number
  vipLevel: number
}

function useMe() {
  const request = useRequest()
  const token = useUserStore((s) => s.tokenInfo?.accessToken)
  const { data, isValidating } = useSWR(
    token ? [`${apiPath}/member/me`, token] : null,
    (url, token, category, page, perPage) =>
      request<MeRes>({
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

  return { data, isLoading: isValidating }
}

export default useMe
