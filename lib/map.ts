import {
  PaymentGateway,
  PaymentStatus,
  ProductCategory,
  RankType,
  RemitStatus,
  RewardStatus,
  RewardsType,
} from './enums'
import { StringMap } from '@/types'

export const newsTypeMap: StringMap = {
  0: '最新',
  1: '營運',
  2: '活動',
  3: '客服',
}

export const rewardsTypeMap: StringMap = {
  [RewardsType.Physical]: '實體商店',
  [RewardsType.Internet]: '電子票卷',
  [RewardsType.Virtual]: '虛擬獎項',
}
export const rankTypeMap: StringMap = {
  [RankType.Gold]: '金幣榜',
  [RankType.Slot]: 'SLOT榜',
}

export const paymentGatewayMap: StringMap = {
  [PaymentGateway.Google]: 'Google Pay',
  [PaymentGateway.Apple]: 'Apple Pay',
}

export const paymentStatusMap: StringMap = {
  [PaymentStatus.Init]: '處理中',
  [PaymentStatus.Success]: '已完成',
  [PaymentStatus.Fail]: '已取消',
}

export const productCategoryMap: StringMap = {
  [ProductCategory.Gold]: '金幣',
  [ProductCategory.Object]: '虛擬寶物',
}

export const rewardStatusMap: StringMap = {
  [RewardStatus.Waiting]: '待領取',
  [RewardStatus.Processing]: '已受理',
  [RewardStatus.Received]: '已領取',
}
export const remitStatusMap: StringMap = {
  [RemitStatus.Pending]: '未匯款',
  [RemitStatus.Paid]: '已匯款',
}
