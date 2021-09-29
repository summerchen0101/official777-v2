import { RankType } from './enums'
import { StringMap } from '@/types'

export const newsTypeMap: StringMap = {
  0: '最新',
  1: '營運',
  2: '活動',
  3: '客服',
}

export const rankTypeMap: StringMap = {
  [RankType.Gold]: '金幣榜',
  [RankType.Slot]: 'SLOT榜',
}
