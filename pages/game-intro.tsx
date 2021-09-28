import GameDetailPopup from '@/components/GameDetailPopup'
import Layout from '@/components/layout/Layout'
import PageBanner from '@/components/layout/PageBanner'
import TabGroup from '@/components/TabGroup'
import { useStore } from '@/store/useStore'
import React, { useState } from 'react'

const tabsMap = {
  1: '推薦遊戲',
  2: '老虎機',
  3: '其他',
}

function GameIntro() {
  const [activeTab, setActiveTab] = useState('1')
  const showGamePopup = useStore((s) => s.showGamePopup)
  return (
    <Layout>
      <PageBanner />
      <section className="px-4">
        <div className="lg:w-[860px] mx-auto">
          <div className="mb-6 mx-4 flex justify-center lg:justify-start">
            <img src="/title_game_intro.png" alt="遊戲說明" className="h-10" />
          </div>
          <div className="hidden lg:flex justify-center mb-6">
            <TabGroup map={tabsMap} value={activeTab} onChange={setActiveTab} />
          </div>
          <select className="tab-selector block lg:hidden mb-3">
            {Object.entries(tabsMap).map(([key, label]) => (
              <option key={key} value={key}>
                {label}
              </option>
            ))}
          </select>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((t, i) => (
              <div
                key={i}
                className="group relative overflow-hidden cursor-pointer aspect-w-1 aspect-h-1 border border-brown-500"
                onClick={() => showGamePopup({ title: '', content: '' })}
              >
                <img
                  src="/game/blackjack.png"
                  className="object-cover object-center group-hover:scale-110 h-full w-full transition-all"
                  alt=""
                />
                <div className="bg-purple-900/80 text-white py-1 px-2 transition-all translate-y-4 opacity-0 group-hover:-translate-y-0 group-hover:opacity-100 absolute w-full top-2/3 h-10 flex items-center justify-center text-lg">
                  標題
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
