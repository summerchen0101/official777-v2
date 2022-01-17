import GoldRankTable from '@/components/GoldRankTable'
import Layout from '@/components/layout/Layout'
import PageBanner from '@/components/layout/PageBanner'
import LoadingCover from '@/components/LoadingCover'
import MySelect from '@/components/MySelect'
import SlotRankTable from '@/components/SlotRankTable'
import TabGroup from '@/components/TabGroup'
import { rankTypeMap } from '@/lib/map'
import usePunishmentList from '@/services/usePunishmentList'
import { toDateTime, toCdnUrl } from '@/utils'
import { useRouter } from 'next/dist/client/router'
import React, { useEffect, useState } from 'react'

function PunishmentPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState(
    (router.query.tab as string) || '1',
  )

  const { list, isLoading, paginator } = usePunishmentList({
    page: 1,
    perPage: 10,
  })

  useEffect(() => {
    setActiveTab((router.query.tab as string) || '1')
  }, [router.query.tab])

  return (
    <Layout>
      <PageBanner />
      <section className="px-4">
        <div className="lg:w-[860px] mx-auto">
          <div className="mb-6 flex justify-center lg:justify-start">
            <img
              src={toCdnUrl('/title_punishment.png')}
              alt="懲罰名單"
              className="h-10"
            />
          </div>
          <LoadingCover isLoading={isLoading}>
            <table className="w-full text-gray-500 shadow">
              <thead>
                <tr>
                  <th>暱稱</th>
                  <th>開始日期</th>
                  <th>結束日期</th>
                  <th>懲罰原因</th>
                </tr>
              </thead>
              <tbody>
                {list?.map((t, i) => (
                  <tr key={i}>
                    <td>{t.nickName}</td>
                    <td>{toDateTime(t.suspendAtMs)}</td>
                    <td>
                      {t.suspendUntilMs > 0
                        ? toDateTime(t.suspendUntilMs)
                        : '永久'}
                    </td>
                    <td>{t.reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </LoadingCover>
        </div>
      </section>
    </Layout>
  )
}

export default PunishmentPage
