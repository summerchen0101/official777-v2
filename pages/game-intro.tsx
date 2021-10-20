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

  const list = [
    { name: '沙灘派對', path: '/game/banner/sm/banner_BeachParty_290x290.png' },
    { name: '皇家21點', path: '/game/banner/sm/banner_Blackjack_290x290.png' },
    { name: '昆蟲寶貝', path: '/game/banner/sm/banner_BugsFamily_290x290.png' },
    {
      name: '魔法消消樂',
      path: '/game/banner/sm/banner_CrystalSorceress_290x290.png',
    },
    { name: '巨龍家族', path: '/game/banner/sm/banner_DragonClan_290x290.png' },
    {
      name: '埃及傳說',
      path: '/game/banner/sm/banner_EgyptLegends_290x290.png',
    },
    { name: '武聖關羽', path: '/game/banner/sm/banner_GuanYu_290x290.png' },
    {
      name: '帝皇捕魚',
      path: '/game/banner/sm/banner_KingFishing_290x290.png',
    },
    // { name: '大頭家麻將', path: '/game/banner/sm/banner_Mahjong_290x290.png' },
    {
      name: '開心動物園',
      path: '/game/banner/sm/banner_AnimalPark_290x290.png',
    },
    { name: '鋼鐵超人', path: '/game/banner/sm/banner_SuperRobot_290x290.png' },
    {
      name: '俏皮護士',
      path: '/game/banner/sm/banner_SweetheartNurse_290x290.png',
    },
    {
      name: '決戰希臘',
      path: '/game/banner/sm/banner_ZeusVsHades_290x290.png',
    },
  ]
  return (
    <Layout>
      <PageBanner />
      <section className="px-4">
        <div className="lg:w-[860px] mx-auto">
          <div className="mb-6 flex justify-center lg:justify-start">
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
            {list.map((t, i) => (
              <div
                key={i}
                className="group relative overflow-hidden cursor-pointer aspect-w-1 aspect-h-1 frame"
                onClick={() => showGamePopup({ title: t.name, content: '' })}
              >
                <img
                  src={t.path}
                  className="object-cover object-center group-hover:scale-110 h-full w-full transition-all"
                  alt={t.name}
                />
                <div className="bg-gradient-to-b from-gold-700/0 via-gold-700 to-gold-700/0 text-white py-1 px-2 transition-all translate-y-4 opacity-0 group-hover:-translate-y-0 group-hover:opacity-100 absolute w-full top-2/3 h-14 flex items-center justify-center text-lg">
                  {t.name}
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
