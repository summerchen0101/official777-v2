import useMyAxios from '@/hooks/useMyAxios'
import { AxiosResponse } from 'axios'
import useSWR from 'swr'

export interface Event {
  code: string
  title: string
}

export interface EventGroup {
  id: string
  banner: null
  name: string
  code: string
  info: string
  url: string
  platform: string
  events: Event[]
}

function useEventGroup(code?: string) {
  const myAxios = useMyAxios()
  const { data, isValidating } = useSWR<AxiosResponse<EventGroup>>(
    code ? [`public/event-groups/${code}`] : null,
    (url) => myAxios.get(url),
  )

  return {
    data: data?.data,
    isLoading: isValidating,
  }
}

export default useEventGroup
