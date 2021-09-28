import GoldRankTable from '@/components/GoldRankTable'
import Layout from '@/components/layout/Layout'
import PageBanner from '@/components/layout/PageBanner'
import SlotRankTable from '@/components/SlotRankTable'
import TabGroup from '@/components/TabGroup'
import { useRouter } from 'next/dist/client/router'
import React, { useEffect, useState } from 'react'

const tabsMap = {
  1: '金幣榜',
  2: 'SLOT榜',
}

const tableMap: Record<string, () => JSX.Element> = {
  1: GoldRankTable,
  2: SlotRankTable,
}

function RankPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState(
    (router.query.tab as string) || '1',
  )
  const TableComp = tableMap[activeTab]

  useEffect(() => {
    setActiveTab((router.query.tab as string) || '1')
  }, [router.query.tab])

  return (
    <Layout>
      <PageBanner />
      <section className="px-4">
        <div className="lg:w-[860px] mx-auto">
          <div className="flex justify-center mb-6">
            <TabGroup map={tabsMap} value={activeTab} onChange={setActiveTab} />
          </div>
          <div>
            <TableComp />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default RankPage
