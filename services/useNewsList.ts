import useMyAxios from '@/hooks/useMyAxios'
import { NewsType, SitePlatform } from '@/lib/enums'
import { useStore } from '@/store/useStore'
import { ListReqBase } from '@/types'
import { AxiosResponse } from 'axios'
import useSWR from 'swr'

export type News = {
  id: string
  title: string
  content: string
  start_at: Date | null
  end_at: Date | null
  created_at: Date
  updated_at: Date
  type: string
  is_active: boolean
  platform: string
  link: null | string
  is_new_win: boolean
  is_top: boolean
  sort: number
} & { date: Date }

export interface Paginator {
  page: number
  perpage: number
  total: number
}

export interface NewsListRes {
  items: News[]
  paginator: Paginator
}

export interface NewsListReq extends ListReqBase {
  // keyword?: string
  // start_at?: number
  // end_at?: number
  // is_active?: boolean
  type?: NewsType
}

function useNewsList({ type: _type, page, perpage }: NewsListReq) {
  const { canRecharge } = useStore((s) => s.clientEnv)
  const myAxios = useMyAxios()
  const type = _type !== NewsType.ALL ? _type : null
  const platform = canRecharge ? SitePlatform.MAIN : SitePlatform.SECONDARY
  const { data, isValidating } = useSWR<AxiosResponse<NewsListRes>>(
    ['public/announcements', type, platform, page, perpage],
    (url, type, platform, page, perpage) =>
      myAxios.get(url, {
        params: { type, platform, page, perpage },
      }),
  )

  return {
    list:
      data?.data.items.map((t) => ({
        ...t,
        date: t.start_at || t.created_at,
      })) || [],
    paginator: {
      page: data?.data.paginator.page,
      perPage: data?.data.paginator.perpage,
      totalCount: data?.data.paginator.total,
      totalPage:
        Math.ceil(
          data?.data.paginator.total! / data?.data.paginator.perpage!,
        ) || 1,
    },
    isLoading: isValidating,
  }
}

export default useNewsList
