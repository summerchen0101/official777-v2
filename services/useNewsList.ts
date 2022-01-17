import { YesNo } from '@/lib/enums'
import { useUserStore } from '@/store/useUserStore'
import { Pagination, ResBase } from '@/types'
import useRequest, { publicApiPath } from '@/utils/useRequest'
import { groupBy, orderBy, take } from 'lodash'
import { useMemo } from 'react'
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
  createAt: string
  isRedirect: Boolean
}

export interface NewsListRes extends ResBase {
  news: News[]
  pagination: Pagination
}

function useNewsList({ category, page, perPage }: NewsListReq) {
  const request = useRequest()
  const token = useUserStore((s) => s.tokenInfo?.accessToken)
  const { data, isValidating } = useSWR<News[]>('/news.json', (url) =>
    fetch(url).then((res) => res.json()),
  )
  const list = useMemo(() => {
    if (category === 0) {
      return take(
        orderBy(data, (t) => t.createAt),
        5,
      )
    }
    return data?.filter((t) => t.category === category)
  }, [category, data])

  return {
    list,
    paginator: {
      page: 1,
      perPage: 100,
      totalCount: data?.length,
      totalPage: 1,
    },
    isLoading: isValidating,
  }
}

export default useNewsList
