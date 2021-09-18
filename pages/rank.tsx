import GoldRankTable from '@/components/GoldRankTable'
import Layout from '@/components/layout/Layout'
import PageBanner from '@/components/layout/PageBanner'
import SlotRankTable from '@/components/SlotRankTable'
import TabGroup from '@/components/TabGroup'
import React, { useMemo, useState } from 'react'

const tabsMap = {
  1: '金幣榜',
  2: 'SLOT榜',
}

const tableMap: Record<string, () => JSX.Element> = {
  1: GoldRankTable,
  2: SlotRankTable,
}

function RankPage() {
  const [activeTab, setActiveTab] = useState('1')
  const TableComp = tableMap[activeTab]

  return (
    <Layout>
      <PageBanner />
      <section>
        <div className="w-[860px] mx-auto py-10">
          <h1 className="text-3xl mb-6 text-white text-center tracking-widest">
            排行榜
          </h1>
          <div className="flex justify-center mb-4">
            <TabGroup map={tabsMap} value={activeTab} onChange={setActiveTab} />
          </div>
          <TableComp />
        </div>
      </section>
    </Layout>
  )
}

export default RankPage
