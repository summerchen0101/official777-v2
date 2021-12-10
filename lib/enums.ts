export enum GameType {
  Tiger = 1,
  FiveSixSeven = 2,
  TwentyOne = 3,
  Mahjong = 4,
  Fish = 5,
}

export enum RankType {
  Gold = 1,
  Slot = 2,
}

export enum PaymentGateway {
  Google = 1,
  Apple = 2,
  MyCard = 3,
  ECPay = 4,
}

export enum PaymentStatus {
  Init = 1,
  Success = 2,
  Fail = 3,
}

export enum OAuthChannel {
  Google = 'google',
  Facebook = 'fb',
  Line = 'line',
}

export enum ProductCategory {
  Gold = 1,
  Object = 2,
}
export enum YesNo {
  Yes = 1,
  No = 2,
}

export enum RewardsType {
  Physical = 1,
  Internet = 2,
  Virtual = 3,
}

export enum RewardReceiveType {
  Normal = 1,
  GameCoin = 2,
}

export enum RewardStatus {
  Waiting = 1,
  Processing = 2,
  Received = 3,
}
export enum RemitStatus {
  Pending = 1,
  Paid = 2,
}

export enum ItemType {
  All = 0,
  Activity = 1,
  Gold = 2,
  Cash = 3,
}

export enum PayType {
  All = 0,
  MCGiftCard = 1,
  MCTransfer = 2,
  MCTelephone = 3,
  MCCreditCard = 4,
  MCCoupon = 5,
  ECPayATM = 6,
}
