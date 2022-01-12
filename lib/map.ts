import {
  ECPayInvoiceType,
  ECPayPaymentType,
  GameCode,
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

export const gameMap: StringMap = {
  1: '海盜傳奇',
  2: '昆蟲樂園',
  3: '開心動物園',
  4: '沙灘派對',
  5: '鋼鐵超人',
  6: '神燈精靈',
  7: '決戰希臘',
  8: '巨龍家族',
  9: '埃及艷后',
  10: '齊天大聖',
  11: '西部牛仔',
  12: '甜心護士',
  13: '魔法消消樂',
  14: '汪汪家園',
  15: '聖誕快樂',
  16: '經典777',
  17: '三國之義薄雲天',
  18: '恭喜發財',
  19: '黑道風暴',
  20: '九尾狐傳',
  21: '麻將拉拉樂',
  22: '棒球甜心',
  23: '呆萌鳥',
  24: '水滸傳',
  25: '叢林冒險',
  26: '潘金蓮',
  27: '舞姬貂蟬',
  28: '年年有瑜',
  29: '女僕咖啡廳',
  30: '深海巨魷',
  [GameCode.Poker]: '3D 高倍21點',
  [GameCode.Fish]: '3D 深海總動員',
  [GameCode.Mahjong]: '發財麻將',
  [GameCode.Niuniu]: '搶莊牛牛',
  [GameCode.Lottery]: '刮刮樂',
  [GameCode.Lottery_777]: '幸運777',
  [GameCode.Lottery_Mahjong]: '摸麻將',
  [GameCode.Lottery_Jackpot]: '大頭家超級紅包',
}
