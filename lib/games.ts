import { Slide } from '@/components/SectionSlider'
import { GameCode, GameIntro } from './enums'

export const mediumGameSlides: Slide[] = [
  {
    gameID: GameCode.Poker,
    path: '/game/banner/480x320/banner_Blackjack_480x320.jpg',
  },
  {
    gameID: 2,
    path: '/game/banner/480x320/banner_BugsFamily_480x320.jpg',
  },
  {
    gameID: 13,
    path: '/game/banner/480x320/banner_CrystalSorceress_480x320.jpg',
  },
  {
    gameID: 8,
    path: '/game/banner/480x320/banner_DragonClan_480x320.jpg',
  },
  {
    gameID: 9,
    path: '/game/banner/480x320/banner_EgyptLegends_480x320.jpg',
  },
  {
    gameID: 17,
    path: '/game/banner/480x320/banner_GuanYu_480x320.jpg',
  },
  {
    gameID: 12,
    path: '/game/banner/480x320/banner_SweetheartNurse_480x320.jpg',
  },
]

export const largeGameSlides: Slide[] = [
  {
    gameID: GameCode.Fish,
    path: '/game/banner/480x320/banner_KingFishing_480x320.jpg',
  },
  {
    gameID: 3,
    path: '/game/banner/480x320/banner_AnimalPark_480x320.jpg',
  },
  {
    gameID: 5,
    path: '/game/banner/480x320/banner_SuperRobot_480x320.jpg',
  },
  {
    gameID: GameCode.Fish,
    path: '/game/banner/480x320/banner_KingFishing_480x320.jpg',
  },
  {
    gameID: 3,
    path: '/game/banner/480x320/banner_AnimalPark_480x320.jpg',
  },
]

export const gameIntroImgsMap: Record<number, Record<number, string[]>> = {
  1: {
    [GameIntro.Basic]: ['GameInfo_1_1.png'],
    [GameIntro.Score]: ['GameInfo_1_2.png'],
    [GameIntro.Win]: ['GameInfo_1_3.png'],
    [GameIntro.Odds]: ['GameInfo_1_4.png', 'GameInfo_1_5.png'],
  },
  2: {
    [GameIntro.Basic]: ['GameInfo_2_1.png'],
    [GameIntro.Score]: ['GameInfo_2_2.png'],
    [GameIntro.Odds]: ['GameInfo_2_3.png', 'GameInfo_2_4.png'],
  },
  3: {
    [GameIntro.Basic]: ['GameInfo_3_1.png'],
    [GameIntro.Score]: ['GameInfo_3_2.png'],
    [GameIntro.Odds]: ['GameInfo_3_3.png', 'GameInfo_3_4.png'],
  },
  5: {
    [GameIntro.Basic]: ['GameInfo_5_1.png'],
    [GameIntro.Score]: ['GameInfo_5_2.png'],
    [GameIntro.Odds]: ['GameInfo_5_3.png', 'GameInfo_5_4.png'],
  },
  6: {
    [GameIntro.Basic]: ['GameInfo_6_1.png'],
    [GameIntro.Score]: ['GameInfo_6_2.png'],
    [GameIntro.Odds]: ['GameInfo_6_3.png', 'GameInfo_6_4.png'],
  },
  8: {
    [GameIntro.Basic]: ['GameInfo_8_1.png'],
    [GameIntro.Score]: ['GameInfo_8_2.png'],
    [GameIntro.Odds]: ['GameInfo_8_3.png', 'GameInfo_8_4.png'],
  },
  9: {
    [GameIntro.Basic]: ['GameInfo_9_1.png'],
    [GameIntro.Score]: ['GameInfo_9_2.png'],
    [GameIntro.Odds]: ['GameInfo_9_3.png', 'GameInfo_9_4.png'],
  },
  11: {
    [GameIntro.Basic]: ['GameInfo_11_1.png'],
    [GameIntro.Score]: ['GameInfo_11_2.png'],
    [GameIntro.Odds]: ['GameInfo_11_3.png', 'GameInfo_11_4.png'],
  },
  12: {
    [GameIntro.Basic]: ['GameInfo_12_1.png'],
    [GameIntro.Score]: ['GameInfo_12_2.png'],
    [GameIntro.Odds]: ['GameInfo_12_3.png', 'GameInfo_12_4.png'],
  },
  13: {
    [GameIntro.Basic]: ['GameInfo_13_1.png'],
    [GameIntro.Score]: ['GameInfo_13_2.png'],
    [GameIntro.Odds]: ['GameInfo_13_3.png', 'GameInfo_13_4.png'],
  },
  16: {
    [GameIntro.Basic]: ['GameInfo_16_1.png'],
    [GameIntro.Score]: ['GameInfo_16_2.png'],
    [GameIntro.Odds]: ['GameInfo_16_3.png', 'GameInfo_16_4.png'],
  },
  17: {
    [GameIntro.Basic]: ['GameInfo_17_1.png'],
    [GameIntro.Score]: ['GameInfo_17_2.png'],
    [GameIntro.Odds]: ['GameInfo_17_3.png', 'GameInfo_17_4.png'],
  },
  21: {
    [GameIntro.Basic]: ['GameInfo_21_1.png'],
    [GameIntro.Score]: ['GameInfo_21_2.png'],
    [GameIntro.Odds]: ['GameInfo_21_3.png', 'GameInfo_21_4.png'],
  },
  27: {
    [GameIntro.Basic]: ['GameInfo_27_1.png'],
    [GameIntro.Score]: ['GameInfo_27_2.png'],
    [GameIntro.Odds]: ['GameInfo_27_3.png', 'GameInfo_27_4.png'],
  },
}
