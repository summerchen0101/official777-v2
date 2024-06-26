import { IconType } from 'react-icons/lib'

export type ResBase = {
  code?: string
  message?: string
  ok?: boolean
}
export type StringMap = Record<string, string>

export type ListReqBase = { page: number; perpage: number }
export interface Menu {
  label: string
  icon?: IconType
  path?: string
  subs?: Menu[]
  code?: string

  menuID?: number
  actionTypes?: number[]
  sort?: number
}

export interface OptionType<T = number | string> {
  label: string
  value: T
}

export interface Pagination {
  page: number
  perPage: number
  totalCount: number
  totalPage: number
}
