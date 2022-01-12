import GameDetailPopup from '@/components/GameDetailPopup'
import Layout from '@/components/layout/Layout'
import PageBanner from '@/components/layout/PageBanner'
import TabGroup from '@/components/TabGroup'
import { GameCode } from '@/lib/enums'
import { gameMap } from '@/lib/map'
import { useStore } from '@/store/useStore'
import { toImgPath } from '@/utils'
import { groupBy } from 'lodash'
import React, { useMemo, useState } from 'react'

const tabsMap = {
  1: '推薦遊戲',
  2: '老虎機',
  3: '其他',
}

interface Game {
  gameID: number
  path: string
  category: number[]
}

const list: Game[] = [
  {
    gameID: GameCode.Poker,
    path: '/game/banner/290x290/banner_Blackjack_290x290.jpg',
    category: [1, 2],
  },
  {
    gameID: 2,
    path: '/game/banner/290x290/banner_BugsFamily_290x290.jpg',
    category: [1, 3],
  },
  {
    gameID: 13,
    path: '/game/banner/290x290/banner_CrystalSorceress_290x290.jpg',
    category: [1, 3],
  },
  {
    gameID: 8,
    path: '/game/banner/290x290/banner_DragonClan_290x290.jpg',
    category: [2],
  },
  {
    gameID: 9,
    path: '/game/banner/290x290/banner_EgyptLegends_290x290.jpg',
    category: [1, 2],
  },
  {
    gameID: 17,
    path: '/game/banner/290x290/banner_GuanYu_290x290.jpg',
    category: [2],
  },
  {
    gameID: GameCode.Fish,
    path: '/game/banner/290x290/banner_KingFishing_290x290.jpg',
    category: [1, 2],
  },
  // { gameID: '大頭家麻將', path: '/game/banner/290x290/banner_Mahjong_290x290.jpg' },
  {
    gameID: 3,
    path: '/game/banner/290x290/banner_AnimalPark_290x290.jpg',
    category: [2],
  },
  {
    gameID: 5,
    path: '/game/banner/290x290/banner_SuperRobot_290x290.jpg',
    category: [2],
  },
  {
    gameID: 12,
    path: '/game/banner/290x290/banner_SweetheartNurse_290x290.jpg',
    category: [1, 2],
  },
]

function GameIntro() {
  const [activeTab, setActiveTab] = useState(1)
  const showGamePopup = useStore((s) => s.showGamePopup)

  const listByCategory = useMemo(
    () =>
      Object.keys(tabsMap).reduce((obj: Record<number, Game[]>, key) => {
        obj[+key] = list.filter((t) => t.category.includes(+key))
        return obj
      }, {}),
    [],
  )

  return (
    <Layout>
      <PageBanner />
      <section className="px-4">
        <div className="lg:w-[860px] mx-auto">
          <div className="mb-6 flex justify-center lg:justify-start">
            <img
              src={toImgPath('/title_game_intro.png')}
              alt="遊戲說明"
              className="h-10"
            />
          </div>
          <div className="hidden lg:flex justify-center mb-6">
            <TabGroup
              map={tabsMap}
              value={activeTab.toString()}
              onChange={(v) => setActiveTab(+v)}
            />
          </div>
          <select className="tab-selector block lg:hidden mb-3">
            {Object.entries(tabsMap).map(([key, label]) => (
              <option key={key} value={key}>
                {label}
              </option>
            ))}
          </select>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {listByCategory[activeTab].map((t, i) => (
              <div
                key={i}
                className="group relative overflow-hidden cursor-pointer aspect-w-1 aspect-h-1 frame"
                onClick={() =>
                  showGamePopup({ title: gameMap[t.gameID], content: '' })
                }
              >
                <img
                  src={toImgPath(t.path)}
                  className="object-cover object-center group-hover:scale-110 h-full w-full transition-all"
                  alt={gameMap[t.gameID]}
                />
                <div className="bg-gradient-to-b from-gold-700/0 via-gold-700 to-gold-700/0 text-white py-1 px-2 transition-all lg:translate-y-4 lg:opacity-0 group-hover:-translate-y-0 group-hover:opacity-100 absolute w-full top-2/3 h-16 flex items-center justify-center text-3xl lg:text-lg">
                  {gameMap[t.gameID]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <GameDetailPopup />
    </Layout>
  )
}

export default GameIntro
