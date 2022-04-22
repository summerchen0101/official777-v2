import { GameSlide } from '@/components/SectionSlider'
import { GameCode, GameIntro } from './enums'

export const mediumGameSlides: GameSlide[] = [
  {
    gameID: GameCode.Poker,
  },
  {
    gameID: 2,
  },
  {
    gameID: 13,
  },
  {
    gameID: 8,
  },
  {
    gameID: 9,
  },
  {
    gameID: 17,
  },
  {
    gameID: 12,
  },
]

export const largeGameSlides: GameSlide[] = [
  {
    gameID: GameCode.Fish,
  },
  {
    gameID: 3,
  },
  {
    gameID: 5,
  },
  {
    gameID: GameCode.Fish,
  },
  {
    gameID: 3,
  },
]

export const gameIntroImgsMap: Record<number, Record<string, string[]>> = {
  1: {
    基本介紹: ['GameInfo_1_1.png'],
    得分方式: ['GameInfo_1_2.png'],
    贏分走線: ['GameInfo_1_3.png'],
    賠率表: ['GameInfo_1_4.png', 'GameInfo_1_5.png'],
  },
  2: {
    基本介紹: ['GameInfo_2_1.png'],
    得分方式: ['GameInfo_2_2.png'],
    賠率表: ['GameInfo_2_3.png', 'GameInfo_2_4.png'],
  },
  3: {
    基本介紹: ['GameInfo_3_1.png'],
    得分方式: ['GameInfo_3_2.png'],
    賠率表: ['GameInfo_3_3.png', 'GameInfo_3_4.png'],
  },
  5: {
    基本介紹: ['GameInfo_5_1.png'],
    得分方式: ['GameInfo_5_2.png'],
    賠率表: ['GameInfo_5_3.png', 'GameInfo_5_4.png'],
  },
  6: {
    基本介紹: ['GameInfo_6_1.png'],
    得分方式: ['GameInfo_6_2.png'],
    賠率表: ['GameInfo_6_3.png', 'GameInfo_6_4.png'],
  },
  8: {
    基本介紹: ['GameInfo_8_1.png'],
    得分方式: ['GameInfo_8_2.png'],
    賠率表: ['GameInfo_8_3.png', 'GameInfo_8_4.png'],
  },
  9: {
    基本介紹: ['GameInfo_9_1.png'],
    得分方式: ['GameInfo_9_2.png'],
    賠率表: ['GameInfo_9_3.png', 'GameInfo_9_4.png'],
  },
  11: {
    基本介紹: ['GameInfo_11_1.png'],
    得分方式: ['GameInfo_11_2.png'],
    賠率表: ['GameInfo_11_3.png', 'GameInfo_11_4.png'],
  },
  12: {
    基本介紹: ['GameInfo_12_1.png'],
    得分方式: ['GameInfo_12_2.png'],
    賠率表: ['GameInfo_12_3.png', 'GameInfo_12_4.png'],
  },
  13: {
    基本介紹: ['GameInfo_13_1.png'],
    得分方式: ['GameInfo_13_2.png'],
    賠率表: ['GameInfo_13_3.png', 'GameInfo_13_4.png'],
  },
  16: {
    基本介紹: ['GameInfo_16_1.png'],
    得分方式: ['GameInfo_16_2.png'],
    賠率表: ['GameInfo_16_3.png', 'GameInfo_16_4.png'],
  },
  17: {
    基本介紹: ['GameInfo_17_1.png'],
    得分方式: ['GameInfo_17_2.png'],
    賠率表: ['GameInfo_17_3.png', 'GameInfo_17_4.png'],
  },
  18: {
    基本介紹: ['GameInfo_18_1.png'],
    得分方式: ['GameInfo_18_2.png'],
    賠率表: ['GameInfo_18_3.png', 'GameInfo_18_4.png'],
  },
  21: {
    基本介紹: ['GameInfo_21_1.png'],
    得分方式: ['GameInfo_21_2.png'],
    賠率表: ['GameInfo_21_3.png', 'GameInfo_21_4.png'],
  },
  27: {
    基本介紹: ['GameInfo_27_1.png'],
    得分方式: ['GameInfo_27_2.png'],
    賠率表: ['GameInfo_27_3.png', 'GameInfo_27_4.png'],
  },
  28: {
    基本介紹: ['GameInfo_28_1.png'],
    得分方式: ['GameInfo_28_2.png'],
    賠率表: ['GameInfo_28_3.png', 'GameInfo_28_4.png'],
  },
  32: {
    基本介紹: ['GameInfo_32_1.png'],
    得分方式: ['GameInfo_32_2.png'],
    賠率表: ['GameInfo_32_3.png', 'GameInfo_32_4.png'],
  },
  1001: {
    基本介紹: ['GameInfo_1001_1.png'],
  },
  2001: {
    魚的倍率: ['GameInfo_2001_1.png', 'GameInfo_2001_2.png'],
    特殊魚種: ['GameInfo_2001_3.png', 'GameInfo_2001_4.png'],
    操作說明: ['GameInfo_2001_5', 'GameInfo_2001_6.png'],
  },
  3001: {
    基本介紹: ['GameInfo_3001_1.png'],
    麻將術語: [
      'GameInfo_3001_2.png',
      'GameInfo_3001_3.png',
      'GameInfo_3001_4.png',
    ],
  },
  4001: {
    基本規則: ['GameInfo_4001_1.png'],
    牌型介紹: ['GameInfo_4001_2.png', 'GameInfo_4001_3.png'],
    牌型倍數: ['GameInfo_4001_4.png'],
    鬼牌牛牛: ['GameInfo_4001_5.png'],
    結算規則: ['GameInfo_4001_6.png'],
  },
  5001: {
    基本介紹: ['GameInfo_5001_1.png', 'GameInfo_5001_2.png'],
    幸運777: ['GameInfo_5001_3.png'],
    摸麻將: ['GameInfo_5001_4.png', 'GameInfo_5001_5.png'],
    超級紅包: ['GameInfo_5001_6.png', 'GameInfo_5001_7.png'],
  },
}
