import useMyAxios from '@/hooks/useMyAxios'
import { AxiosResponse } from 'axios'
import useSWR from 'swr'

export interface EventGroup {
  name: string
  code: string
}

export interface Level {
  count: number
  level: number
  prize_id: number
}

export interface LevelGroup {
  title: string
  levels: Level[]
}

export interface Rebate {
  game: string
  rebate: number
}

export interface Recharge {
  count: number
  amount: number
  prize_id: number
}

export enum CustomColumnType {
  TEXT = 1,
  ICON = 2,
  TEXT_ICON = 3,
}

export interface CustomColumn {
  key: string
  name: string
  type: CustomColumnType
}

export interface CustomColumnRow {
  text?: string
  icon?: number
}

export interface CustomTable {
  title?: string
  columns: CustomColumn[]
  rows: Record<string, CustomColumnRow>[]
}

export interface Event {
  id: string
  code: string
  title: string
  target: string
  content: string
  tab_img: string
  tab_active_img: string
  type: string
  start_at: string
  end_at: string
  is_active: boolean
  sort: number
  rebates: Rebate[] | null
  groups: LevelGroup[] | null
  recharges: Recharge[] | null
  event_groups: EventGroup[]
  custom_tables: CustomTable[]
}

function useEvent(code: string) {
  const myAxios = useMyAxios()
  const { data, isValidating } = useSWR<AxiosResponse<Event>>(
    [`public/events/${code}`],
    (url) => myAxios.get(url),
  )

  return {
    data: data?.data,
    isLoading: isValidating,
  }
}

export default useEvent
