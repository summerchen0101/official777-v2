import Layout from '@/components/layout/Layout'
import PageBanner from '@/components/layout/PageBanner'
import Loading from '@/components/Loading'
import LoadingCover from '@/components/LoadingCover'
import MySelect from '@/components/MySelect'
import TabGroup from '@/components/TabGroup'
import { RewardReceiveType, RewardStatus } from '@/lib/enums'
import { rewardsTypeMap } from '@/lib/map'
import useRewardList, { Record } from '@/services/useRewardList'
import useRewardRecevie from '@/services/useRewardReceive'
import { toDateTime } from '@/utils'
import { groupBy } from 'lodash'
import { useRouter } from 'next/dist/client/router'
import React, { useEffect, useMemo, useState } from 'react'

function RewardsPage() {
  const router = useRouter()
  // const { data: user } = useMe()
  const { list, isLoading } = useRewardList({
    // userID: user?.id.valueOf(),
    page: 1,
    perPage: 100,
  })
  const [activeTab, setActiveTab] = useState(
    (router.query.tab as string) || '1',
  )

  const recordByType = useMemo(
    () => groupBy(list, (t) => t.reward.type),
    [list],
  )
  const currentList = recordByType[activeTab]

  const { handler: doReceive } = useRewardRecevie()

  const handleReceive = async (d: Record, type: RewardReceiveType) => {
    const res = await doReceive({
      type,
      userID: d.userID,
      recordId: d.id,
    })
    if (res?.isSuccess) {
      alert(`${d.reward.name}已發至您的遊戲帳號`)
    }
  }

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
          <LoadingCover isLoading={isLoading}>
            <table className="w-full text-gray-500 shadow">
              <thead>
                <tr>
                  <th className="w-1/3 text-center">領獎期限</th>
                  <th>中獎獎項</th>
                  <th className="w-1/3">領獎方式</th>
                </tr>
              </thead>
              {list?.length === 0 || currentList?.length === 0 ? (
                <tbody>
                  <tr>
                    <td colSpan={3}>尚無資料</td>
                  </tr>
                </tbody>
              ) : (
                <tbody>
                  {currentList?.map((t, i) => (
                    <tr key={i}>
                      <td className="text-center">
                        {toDateTime(t.receiveDate)}
                      </td>
                      <td>{t.reward.name}</td>
                      {t.rewardStatus === RewardStatus.Processing ? (
                        <td>客服受理中</td>
                      ) : t.rewardStatus === RewardStatus.Received ? (
                        <td>
                          <button
                            className="btn btn-sm active"
                            onClick={() =>
                              handleReceive(t, RewardReceiveType.Normal)
                            }
                          >
                            領取
                          </button>
                        </td>
                      ) : (
                        <td className="flex space-x-2">
                          <button className="btn btn-sm">下載領獎單</button>
                          <button
                            className="btn btn-sm active"
                            onClick={() =>
                              handleReceive(t, RewardReceiveType.GameCoin)
                            }
                          >
                            換成遊戲幣
                          </button>
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              )}
            </table>
          </LoadingCover>
        </div>
      </section>
    </Layout>
  )
}

export default RewardsPage
