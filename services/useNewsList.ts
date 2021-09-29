import { useUserStore } from '@/store/useUserStore'
import { Pagination, ResBase } from '@/types'
import useRequest, { publicApiPath } from '@/utils/useRequest'
import useSWR from 'swr'

export interface NewsListReq {
  category: number
  page: number
  per_page: number
}

export interface News {
  id: string
  title: string
  content: string
  category: number
}

export interface NewsListRes extends ResBase {
  news: News[]
  page: Pagination
}

function useNewsList({ category, page, per_page }: NewsListReq) {
  const request = useRequest()
  const token = useUserStore((s) => s.tokenInfo?.accessToken)
  const { data, isValidating } = useSWR(
    [`${publicApiPath}/news/list`, token, category, page, per_page],
    (url, token, category, page, per_page) =>
      request<NewsListRes>({
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

  return { list: data?.news, paginator: data?.page, isLoading: isValidating }
}

export default useNewsList
