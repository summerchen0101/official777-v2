import GoldRankTable from '@/components/GoldRankTable'
import Layout from '@/components/layout/Layout'
import PageBanner from '@/components/layout/PageBanner'
import MySelect from '@/components/MySelect'
import SlotRankTable from '@/components/SlotRankTable'
import TabGroup from '@/components/TabGroup'
import { rewardsTypeMap } from '@/lib/map'
import useRewardList from '@/services/useRewardList'
import { toDateTime } from '@/utils'
import { useRouter } from 'next/dist/client/router'
import React, { useEffect, useState } from 'react'

function RewardsPage() {
  const router = useRouter()
  const { list, isLoading } = useRewardList({ page: 1, perPage: 30 })
  const [activeTab, setActiveTab] = useState(
    (router.query.tab as string) || '1',
  )

  useEffect(() => {
    setActiveTab((router.query.tab as string) || '1')
  }, [router.query.tab])

  return (
    <Layout>
      <PageBanner />
      <section className="px-4">
        <div className="lg:w-[860px] mx-auto">
          <div className="hidden lg:flex justify-center mb-6">
            <TabGroup
              map={rewardsTypeMap}
              value={activeTab}
              onChange={setActiveTab}
            />
          </div>
          <MySelect
            map={rewardsTypeMap}
            value={activeTab}
            onChange={setActiveTab}
          />
          <div>
            <table className="w-full text-gray-500 shadow">
              <thead>
                <tr>
                  <th className="w-1/3 text-center">領獎期限</th>
                  <th>中獎獎項</th>
                  <th className="w-1/3">領獎方式</th>
                </tr>
              </thead>
              <tbody>
                {list?.map((t, i) => (
                  <tr key={i}>
                    <td className="text-center">{toDateTime(t.receiveDate)}</td>
                    <td>{t.reward.name}</td>
                    <td className="space-x-2">
                      <button className="btn btn-sm">下載領獎單</button>
                      <button className="btn btn-sm">換成遊戲幣</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default RewardsPage
