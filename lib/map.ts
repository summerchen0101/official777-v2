import {
  ECPayInvoiceType,
  ECPayPaymentType,
  InvoiceType,
  ItemType,
  MCPaymentType,
  PaymentGateway,
  PaymentStatus,
  PayType,
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
export const itemTypeMap: StringMap = {
  [ItemType.All]: '全部',
  [ItemType.Activity]: '活動商品',
  [ItemType.Gold]: '金幣商品',
  [ItemType.Cash]: '現金商品',
}
export const payTypeMap: StringMap = {
  // [PayType.All]: '全部',
  [PayType.MCGiftCard]: 'MyCard實體卡',
  [PayType.MCTransfer]: 'MyCard線上轉點',
  [PayType.MCTelephone]: 'MyCard電信',
  [PayType.MCCreditCard]: 'MyCard信用卡',
  [PayType.MCCoupon]: 'MyCard免費折抵',
  // [PayType.ECPayATM]: '綠界ATM',
}

export const ecpayPaymentTypeMap: StringMap = {
  [ECPayPaymentType.ATM]: 'ATM',
  [ECPayPaymentType.WEB_ATM]: 'WebATM',
}

export const payTypePaymentMap: Record<string, MCPaymentType> = {
  [PayType.MCGiftCard]: MCPaymentType.IN_GAME,
  [PayType.MCTransfer]: MCPaymentType.COST_POINT,
  [PayType.MCTelephone]: MCPaymentType.ASIA_PACIFIC_MOBILE,
  [PayType.MCCreditCard]: MCPaymentType.CREDIT_CARD,
  [PayType.MCCoupon]: MCPaymentType.FREE_POINT,
}

export const telePaymentMap: StringMap = {
  [MCPaymentType.ASIA_PACIFIC_MOBILE]: '亞太電信',
  [MCPaymentType.TAIWAN_START_MOBILE]: '台灣之星',
  [MCPaymentType.FET_MOBILE]: '遠傳電信',
  [MCPaymentType.TAIWAN_MOBILE]: '台灣大哥大',
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
  [PaymentGateway.Google]: 'Google',
  [PaymentGateway.Apple]: 'Apple',
  [PaymentGateway.MyCard]: '智冠MyCard',
  [PaymentGateway.ECPay]: '綠界',
}

export const invoiceTypeMap: StringMap = {
  [InvoiceType.DONATE]: '捐贈發票',
  [InvoiceType.CLOUD]: '電子發票',
}

export const ecpayInvoiceMap: StringMap = {
  [ECPayInvoiceType.EC_PAY_INVOICE]: '綠界載具',
  [ECPayInvoiceType.PHONE_CARRIER]: '手機載具',
  [ECPayInvoiceType.CITIZEN_DIGITAL_CERTIFICATE]: '自然人憑證載具',
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

export const genderMap: StringMap = {
  1: '男',
  2: '女',
  3: '未設定',
}
