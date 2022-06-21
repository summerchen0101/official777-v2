import useMyAxios from '@/hooks/useMyAxios'
import { SitePlatform } from '@/lib/enums'
import { AxiosResponse } from 'axios'
import useSWR from 'swr'

export interface Event {
  code: string
  title: string
  tab_img: string
  tab_active_img: string
}

export interface EventExpoEventGroup {
  code: string
  platform: SitePlatform
}

export interface EventExpo {
  id: string
  code: string
  event_groups: EventExpoEventGroup[]
}

export interface EventGroup {
  id: string
  banner: string | null
  title_img: string | null
  name: string
  code: string
  info: string
  url: string
  theme: string
  platform: SitePlatform
  events: Event[]
  event_expo: EventExpo
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
