import ActivityBtns from '@/components/activity/ActivityBtns'
import ContentText from '@/components/activity/ContentText'
import PageWrapper from '@/components/activity/PageWrapper'
import ActivitySection from '@/components/activity/Section'
import SubTitle from '@/components/activity/SubTitle'
import { toCurrency, toCdnUrl } from '@/utils'
import React from 'react'

const awardList = [
  { times: 5, gifts: [{ name: '金幣', amount: 1000, icon: '金幣.png' }] },
  {
    times: 10,
    gifts: [{ name: '一星獎勵卡', amount: 1, icon: 'FG_LV1_1.png' }],
  },
]

export default function Activity_04() {
  return (
    <PageWrapper>
      <ActivityBtns id={4} />
      <ActivitySection title="十連抽加碼送">
        <div>
          <SubTitle>活動時間</SubTitle>
          <ContentText>
            2022/01/19(三) 中午12:00 – 2022/01/28(五) 上午11:59
          </ContentText>
        </div>
        <div>
          <SubTitle>活動對象</SubTitle>
          <ContentText>大頭家娛樂城全玩家</ContentText>
        </div>
        <div>
          <SubTitle>活動說明</SubTitle>
          <ContentText>
            活動期間玩十連抽達指定次數可獲得加碼獎勵，獎勵將於1/28下午6點前發送
          </ContentText>
        </div>
        <table className="max-w-[450px] mx-auto sm:w-full rounded-lg overflow-hidden">
          <thead>
            <tr>
              <th className="text-center">玩十連抽次數</th>
              <th className="text-center">活動獎勵</th>
            </tr>
          </thead>
          <tbody>
            {awardList.map((t, i) => (
              <tr key={i} className="">
                <td className="text-center text-xl text-gold-700 font-medium">
                  {t.times} 次
                </td>
                <td>
                  {t.gifts.map((g, g_i) => (
                    <div
                      key={g_i}
                      className="flex items-center gap-3 justify-center font-medium"
                    >
                      <img
                        src={toCdnUrl(`/event/items/${g.icon}`)}
                        alt=""
                        className="w-12 hidden sm:block"
                      />
                      {g.name} × {toCurrency(g.amount)}
                    </div>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </ActivitySection>
    </PageWrapper>
  )
}
