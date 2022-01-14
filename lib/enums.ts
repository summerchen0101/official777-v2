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

export enum MCPaymentType {
  UNKNOWN_PAYMENT_TYPE = 0,
  IN_GAME = 1,
  COST_POINT = 2,
  CREDIT_CARD = 3,
  FREE_POINT = 4,
  ASIA_PACIFIC_MOBILE = 5,
  TAIWAN_MOBILE = 6,
  TAIWAN_START_MOBILE = 7,
  FET_MOBILE = 8,
}

export enum ECPayPaymentType {
  UNKNOWN_PAYMENT_TYPE = 0,
  ATM = 1,
  WEB_ATM = 2,
}

export enum InvoiceType {
  DONATE = 'DONATE',
  CLOUD = 'CLOUD',
}

export enum ECPayInvoiceType {
  UNKNOWN_ECPay_INVOICE_TYPE = 0,
  DONATE_INVOICE = 1, //捐贈
  EC_PAY_INVOICE = 2, //綠界載具
  CITIZEN_DIGITAL_CERTIFICATE = 3, //自然人憑證
  PHONE_CARRIER = 4, //載具碼載具
}

export enum GameCode {
  Poker = 1001,
  Fish = 2001,
  Mahjong = 3001,
  Niuniu = 4001,
  Lottery = 5001,
  Lottery_777 = 5002,
  Lottery_Mahjong = 5003,
  Lottery_Jackpot = 5004,
}

export enum GameIntro {
  Basic,
  Score,
  Win,
  Odds,
}

export enum Platform {
  IOS = 'IOS',
  Android = 'Android',
}
