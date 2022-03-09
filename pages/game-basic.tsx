import IntroGameDashboard from '@/components/appIntro/GameDashboard'
import IntroGameSelect from '@/components/appIntro/GameSelect'
import IntroLobby from '@/components/appIntro/Lobby'
import Layout from '@/components/layout/Layout'
import PageBanner from '@/components/layout/PageBanner'
import TabGroup from '@/components/TabGroup'
import useCdnUrl from '@/hooks/useCdnUrl'
import React, { ReactNode, useState } from 'react'

const tabsMap = {
  1: '遊戲大廳',
  2: '選擇遊戲',
  3: '操作說明',
}

function GameBasic() {
  const toCdnUrl = useCdnUrl()
  const [activeTab, setActiveTab] = useState('1')
  const compMap: Record<string, ReactNode> = {
    1: <IntroLobby />,
    2: <IntroGameSelect />,
    3: <IntroGameDashboard />,
  }
  return (
    <Layout>
      <PageBanner />
      <section className="px-4">
        <div className="lg:w-[860px] mx-auto">
          <div className="mb-6 flex justify-center lg:justify-start">
            <img
              src={toCdnUrl('/title_basic.png')}
              alt="基本介紹"
              className="h-10"
            />
          </div>
          <div className="hidden lg:flex justify-center mb-6">
            <TabGroup map={tabsMap} value={activeTab} onChange={setActiveTab} />
          </div>
          <select
            className="tab-selector block lg:hidden mb-3"
            onChange={(e) => setActiveTab(e.target.value)}
          >
            {Object.entries(tabsMap).map(([key, label]) => (
              <option key={key} value={key}>
                {label}
              </option>
            ))}
          </select>
          {compMap[activeTab]}
        </div>
      </section>
    </Layout>
  )
}

export default GameBasic
