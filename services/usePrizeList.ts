import useMyAxios from '@/hooks/useMyAxios'
import { PrizeType } from '@/lib/enums'
import { AxiosResponse } from 'axios'
import useSWR from 'swr'

export type Prize = {
  id: number
  name: string
  img_path: string
  type: PrizeType
}

function usePrizeList(type?: PrizeType) {
  const myAxios = useMyAxios()
  const { data, isValidating } = useSWR<AxiosResponse<Prize[]>>(
    ['public/prizes', type],
    (url, type) =>
      myAxios.get(url, {
        params: { type },
      }),
  )

  return {
    list: data?.data,
    isLoading: isValidating,
  }
}

export default usePrizeList
