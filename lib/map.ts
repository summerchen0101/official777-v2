import { GameType, InboxType, RewardType, StatusType } from './enums'

export type StringMap = Record<string, string>

export const statusMap: StringMap = {
  [StatusType.On]: '開啟',
  [StatusType.Off]: '關閉',
}
export const moneyTypeMap: StringMap = {
  cash: '現金',
  gold: '金幣',
}

export const keywordTypeMap: StringMap = {
  uid: 'UID',
  nickname: '名稱',
  // phone: '手機',
}

export const userCtrlMap: StringMap = {
  basic: '基本',
  object: '道具',
  money: '錢包',
  gift: '紅包',
  card: '卡牌',
  bet: '注單',
  order: '訂單',
  chat: '聊天',
}

export const gameSettingMap: StringMap = {
  setting: '遊戲設定',
  jackpot: 'JackPot',
  reward: '獎勵設定',
  winners: '中獎清單',
}
export const coinSearchMap: StringMap = {
  basic: '金幣查詢',
  withdraw: '提領查詢',
  recharge: '存入',
}
export const sysMsgMap: StringMap = {
  current: '現有訊息',
  send: '發送訊息',
  history: '歷史訊息',
}
export const transferMsgMap: StringMap = {
  send: '發送金幣',
  history: '歷史紀錄',
}
export const inboxTabMap: StringMap = {
  current: '已有訊息',
  ad: '廣告',
  gift: '禮包',
}
export const competitionTabMap: StringMap = {
  current: '未進行競賽',
  history: '歷史紀錄',
}

export const gameTypeMap: StringMap = {
  [GameType.Tiger]: '老虎機',
  [GameType.FiveSixSeven]: '五六七',
  [GameType.TwentyOne]: '二十一',
  [GameType.Mahjong]: '麻將',
  [GameType.Fish]: '捕魚機',
}
export const rewardTypeMap: StringMap = {
  [RewardType.SuperMega]: 'SuperMega(1)',
  [RewardType.Mega]: 'Mega(2)',
  [RewardType.Major]: 'Major(3)',
  [RewardType.Minor]: 'Minor(4)',
  [RewardType.Mini]: 'Mini(5)',
}

// export const statusMap: StringMap = {
//   1: '啟用',
//   2: '關閉',
// }

export const actionTypeMap: StringMap = {
  1: '查詢',
  2: '操作',
}
export const inboxTypeMap: StringMap = {
  [InboxType.Ad]: '廣告',
  [InboxType.Gift]: '禮包',
}
