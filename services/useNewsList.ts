import { YesNo } from '@/lib/enums'
import { useUserStore } from '@/store/useUserStore'
import { Pagination, ResBase } from '@/types'
import useRequest, { publicApiPath } from '@/utils/useRequest'
import { isAfter, isBefore } from 'date-fns'
import { groupBy, orderBy, take } from 'lodash'
import { useMemo } from 'react'
import useSWR from 'swr'

export interface NewsListReq {
  category: number
  page: number
  perPage: number
}

export interface News {
  id: number
  title: string
  content: string
  category: number
  createdAt: string
  startAt: string
  endAt: string
  enable: boolean
  isRedirect: Boolean
  sort: number
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
    const periodData = data?.filter((t) => t.enable)
    // 置頂 -> 日期
    const orderedData = orderBy(periodData, ['startAt', 'sort'])
    if (category === 0) {
      return take(orderedData, 10)
    }
    return orderedData?.filter((t) => t.category === category)
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
