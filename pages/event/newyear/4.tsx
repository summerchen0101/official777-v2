import ActivityBtns from '@/components/activity/ActivityBtns'
import ContentText from '@/components/activity/ContentText'
import ListWrapper from '@/components/activity/ListWrapper'
import PageWrapper from '@/components/activity/PageWrapper'
import ActivitySection from '@/components/activity/Section'
import SubTitle from '@/components/activity/SubTitle'
import { useStore } from '@/store/useStore'
import useCdnUrl from '@/hooks/useCdnUrl'
import React, { useState } from 'react'

const ticketGiftStages = [
  {
    ticket: '金',
    stages: [
      {
        stage: 3,
        count: 500,
        gifts: [{ name: '5星超級卡', icon: 'FG_LV3_5.png', amount: 1 }],
      },
      {
        stage: 2,
        count: 300,
        gifts: [{ name: '5星威力卡', icon: 'FG_LV2_5.png', amount: 1 }],
      },
      {
        stage: 1,
        count: 200,
        gifts: [{ name: '5星獎勵卡', icon: 'FG_LV1_5.png', amount: 1 }],
      },
    ],
  },
  {
    ticket: '銀',
    stages: [
      {
        stage: 3,
        count: 280,
        gifts: [{ name: '3星超級卡', icon: 'FG_LV3_3.png', amount: 1 }],
      },
      {
        stage: 2,
        count: 230,
        gifts: [{ name: '3星威力卡', icon: 'FG_LV2_3.png', amount: 1 }],
      },
      {
        stage: 1,
        count: 180,
        gifts: [{ name: '3星獎勵卡', icon: 'FG_LV1_3.png', amount: 1 }],
      },
    ],
  },
  {
    ticket: '銅',
    stages: [
      {
        stage: 3,
        count: 200,
        gifts: [{ name: '1星超級卡', icon: 'FG_LV3_1.png', amount: 1 }],
      },
      {
        stage: 2,
        count: 150,
        gifts: [{ name: '1星威力卡', icon: 'FG_LV2_1.png', amount: 1 }],
      },
      {
        stage: 1,
        count: 100,
        gifts: [{ name: '1星威力卡', icon: 'FG_LV1_1.png', amount: 1 }],
      },
    ],
  },
]

export default function Activity_06() {
  const toCdnUrl = useCdnUrl()
  const canRecharge = useStore((s) => s.clientEnv.canRecharge)
  return (
    <PageWrapper>
      <ActivityBtns id={4} />
      <ActivitySection title="集獎券送好禮">
        <div>
          <SubTitle>活動時間</SubTitle>
          <ContentText>2022/2/9(三) 12:00 – 2022/2/23(三) 23:59</ContentText>
        </div>
        <div>
          <SubTitle>活動對象</SubTitle>
          <ContentText>大頭家娛樂城全玩家</ContentText>
        </div>
        <div>
          <SubTitle>活動說明</SubTitle>
          <ContentText>
            活動時間內，收集的獎券張數，達到指定門檻，可再獲得加碼獎勵！
          </ContentText>
        </div>
        {/* <div className="mt-5 sm:mx-12">
          <div className="text-2xl bg-gray-600 rounded-xl py-2 text-center mb-4">
            2/9 - 2/12 期間內所獲得的獎券張數
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {ticketGiftStages.map((t, i) => (
              <div
                key={i}
                className="flex flex-col items-center bg-gray-800 p-3 rounded-lg"
              >
                <div className="mb-2 text-xl font-medium text-yellow-400">
                  {t.ticket}獎券
                </div>
                <div className="mb-2 text-xl text-yellow-600">??? 張</div>
              </div>
            ))}
          </div>
        </div> */}
        <div className="space-y-8">
          {ticketGiftStages.map((group, group_i) => (
            <table
              key={group_i}
              className="gold-table rounded-lg overflow-hidden w-full max-w-[800px] mx-auto"
            >
              <thead>
                <tr>
                  <th colSpan={3} className="text-xl">
                    <div className="flex gap-3 items-center justify-center">
                      {/* <img
                        src={toCdnUrl(`/event/tickets/${group.ticket}.jpg`)}
                        alt=""
                        className="w-16"
                      /> */}
                      {group.ticket}獎券門檻
                    </div>
                  </th>
                </tr>
                <tr>
                  <th className="text-center hidden sm:block">門檻階層</th>
                  <th className="text-center">收集達標張數</th>
                  <th className="text-center">達標獎勵</th>
                </tr>
              </thead>
              <tbody>
                {group.stages.map((s, s_i) => (
                  <tr key={s_i} className="">
                    <td className="text-center text-xl text-gold-700 font-medium hidden sm:block">
                      {s.stage}
                    </td>
                    <td className="text-center text-xl text-gold-700 font-medium">
                      {s.count}張
                    </td>
                    <td className="flex items-center gap-3 justify-center font-medium">
                      {s.gifts.map((g, g_i) => (
                        <div
                          key={g_i}
                          className="flex items-center gap-3 justify-center font-medium"
                        >
                          <img
                            src={toCdnUrl(`/event/items/${g.icon}`)}
                            alt=""
                            className="w-12 hidden sm:block"
                          />
                          {g.name}x{g.amount}
                        </div>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ))}
        </div>
        <ContentText>
          範例：
          <ListWrapper>
            <li>
              小明在2/9-2/12活動期間內，獲得金獎300張、銀獎券230張、銅獎券180張，金獎券擇優獲得
              5星超 級卡x1、銀獎券擇優獲得 3星威力卡x1、銅獎券獲得 1星獎勵卡x1。
            </li>
            <li>
              小王在2/9-2/12活動期間內，獲得金獎199張、銀獎券170張、銅獎券90張，因都未達到獎券張數門
            </li>
          </ListWrapper>
          <p className="mt-3">
            ※ 注意事項
            <br />
            加碼獎勵將統一於2022/2/25(五) 18:00前發送，屆時請登入「
            {canRecharge ? '名車抽起來' : '拿券抽金幣'}
            」活動頁面查看獎券及號碼。
          </p>
        </ContentText>
      </ActivitySection>
    </PageWrapper>
  )
}
