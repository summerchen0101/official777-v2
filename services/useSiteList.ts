import useMyAxios from '@/hooks/useMyAxios'
import { PrizeType, SitePlatform } from '@/lib/enums'
import { AxiosResponse } from 'axios'
import useSWR from 'swr'

export type Site = {
  host: string
  platform: SitePlatform
  desc?: string
}

function useSiteList(type?: PrizeType) {
  const myAxios = useMyAxios()
  const { data, isValidating } = useSWR<AxiosResponse<Site[]>>(
    ['public/sites', type],
    (url, type) => myAxios.get(url),
  )

  return {
    list: data?.data,
    isLoading: isValidating,
  }
}

export default useSiteList
