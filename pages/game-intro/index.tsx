import GameDetailPopup from '@/components/GameDetailPopup'
import Layout from '@/components/layout/Layout'
import PageBanner from '@/components/layout/PageBanner'
import TabGroup from '@/components/TabGroup'
import { gameMap } from '@/lib/map'
import { useStore } from '@/store/useStore'
import useCdnUrl from '@/hooks/useCdnUrl'
import React, { useMemo, useState } from 'react'

const tabsMap = {
  1: '推薦遊戲',
  2: '老虎機',
  3: '其他',
}

interface Game {
  gameID: number
  category: number[]
}

const list: Game[] = [
  {
    gameID: 1,
    category: [1, 2],
  },
  {
    gameID: 2,
    category: [2],
  },
  {
    gameID: 3,
    category: [2],
  },
  {
    gameID: 5,
    category: [2],
  },
  {
    gameID: 6,
    category: [2],
  },
  {
    gameID: 8,
    category: [2],
  },
  {
    gameID: 9,
    category: [1, 2],
  },
  {
    gameID: 11,
    category: [2],
  },

  {
    gameID: 12,
    category: [1, 2],
  },
  {
    gameID: 13,
    category: [1, 2],
  },
  {
    gameID: 16,
    category: [1, 2],
  },
  {
    gameID: 17,
    category: [2],
  },
  {
    gameID: 18,
    category: [1, 2],
  },
  {
    gameID: 21,
    category: [2],
  },
  {
    gameID: 27,
    category: [2],
  },
  {
    gameID: 28,
    category: [1, 2],
  },
  {
    gameID: 1001,
    category: [1, 3],
  },
  {
    gameID: 2001,
    category: [1, 3],
  },
  {
    gameID: 3001,
    category: [1, 3],
  },
  {
    gameID: 4001,
    category: [1, 3],
  },
  {
    gameID: 5001,
    category: [1, 3],
  },
]

function GameIntro() {
  const toCdnUrl = useCdnUrl()
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
              src={toCdnUrl('/title_game_intro.png')}
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
                onClick={() => showGamePopup(t.gameID)}
              >
                <img
                  src={toCdnUrl(`/game/banner/290x290/${t.gameID}.jpg`)}
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
