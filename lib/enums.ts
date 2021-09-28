export enum GameType {
  Tiger = 1,
  FiveSixSeven = 2,
  TwentyOne = 3,
  Mahjong = 4,
  Fish = 5,
}
export enum RewardType {
  SuperMega = 1,
  Mega = 2,
  Major = 3,
  Minor = 4,
  Mini = 5,
}
export enum StatusType {
  On = 1,
  Off = 2,
}

export enum InboxType {
  Ad = 1,
  Gift = 2,
}

export enum ImgType {
  Url = 1,
  File = 2,
}

// 4:沒有動作	 1 網址  2 app內部跳轉 3 商品購買

export enum InboxActionType {
  Url = 1,
  Redirect = 2,
  Purchase = 3,
  None = 4,
}
