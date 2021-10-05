import { YesNo } from '@/lib/enums'
import { useUserStore } from '@/store/useUserStore'
import { Pagination, ResBase } from '@/types'
import useRequest, { publicApiPath } from '@/utils/useRequest'
import useSWR from 'swr'

export interface NewsListReq {
  category: number
  page: number
  perPage: number
}

export interface News {
  id: string
  title: string
  content: string
  category: number
  createTimeMs: number
  isRedirect: YesNo
}

export interface NewsListRes extends ResBase {
  news: News[]
  pagination: Pagination
}

function useNewsList({ category, page, perPage }: NewsListReq) {
  const request = useRequest()
  const token = useUserStore((s) => s.tokenInfo?.accessToken)
  const { data, isValidating } = useSWR(
    [`${publicApiPath}/news/list`, token, category, page, perPage],
    (url, token, category, page, perPage) =>
      request<NewsListRes>({
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

export default useNewsList
