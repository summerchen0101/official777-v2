import { OptionType } from '@/types/index'
import { format } from 'date-fns'
import { StringMap } from '@/types'
import numeral from 'numeral'

export const toDate = (time: number, isUnix?: boolean) =>
  time && format(isUnix ? time * 1000 : time, 'yyyy-MM-dd')

export const toDateTime = (time: number, isUnix?: boolean) =>
  time && format(isUnix ? time * 1000 : time, 'yyyy-MM-dd HH:mm:ss')

export const optsToMap = (opts: OptionType[]) => {
  const map: Record<string, string> = {}
  opts?.forEach((t) => {
    map[t.value] = t.label
  })
  return map
}

export const mapToOpts = function <T>(map: StringMap): OptionType<T>[] {
  return Object.entries(map).map(([value, label]) => ({
    label,
    value: (isNaN(+value) ? value : +value) as unknown as T,
  }))
}

export const toCurrency = (num: number, decimal: number = 2) =>
  numeral(num).format(
    decimal ? `0,0.${Array(decimal).fill('0').join('')}` : '0,0',
  )
