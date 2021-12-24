import ActivityBtns from '@/components/activity/ActivityBtns'
import ContentText from '@/components/activity/ContentText'
import ListWrapper from '@/components/activity/ListWrapper'
import PageWrapper from '@/components/activity/PageWrapper'
import ActivitySection from '@/components/activity/Section'
import SubTitle from '@/components/activity/SubTitle'
import { toImgPath } from '@/utils'
import React from 'react'

export default function Activity_06() {
  return (
    <PageWrapper>
      <ActivityBtns id={6} />
      <ActivitySection title="集獎券送好禮">
        <div>
          <SubTitle>活動時間</SubTitle>
          <ContentText>
            2022/02/09(三) 中午12:00 – 2022/02/12(六) 晚上11:59
          </ContentText>
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
        <div className="mt-5 sm:mx-12">
          <div className="text-2xl bg-gray-600 rounded-xl py-2 text-center mb-4">
            2/9 - 2/12 期間內所獲得的獎券張數
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[...Array(3)].map((t, i) => (
              <div
                key={i}
                className="flex flex-col items-center bg-gray-800 p-3 rounded-lg"
              >
                <div className="mb-2 text-xl font-medium text-yellow-400">
                  金獎券
                </div>
                <div className="mb-2 text-xl text-yellow-600">XXX 張</div>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-8">
          {[...Array(3)].map((g, g_i) => (
            <table
              key={g_i}
              className="rounded-lg overflow-hidden w-full max-w-[800px] mx-auto"
            >
              <thead>
                <tr>
                  <th colSpan={3} className="text-center text-xl">
                    金獎券門檻
                  </th>
                </tr>
                <tr>
                  <th className="text-center hidden sm:block">門檻階層</th>
                  <th className="text-center">收集達標張數</th>
                  <th className="text-center">達標獎勵</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(3)].map((t, i) => (
                  <tr key={i} className="">
                    <td className="text-center text-xl text-gold-700 font-medium hidden sm:block">
                      3
                    </td>
                    <td className="text-center text-xl text-gold-700 font-medium">
                      500張
                    </td>
                    <td className="flex items-center gap-3 justify-center font-medium">
                      <img
                        src={toImgPath('/gift/img_redEnvelopeLucky.png')}
                        alt=""
                        className="w-12 hidden sm:block"
                      />
                      五星超級卡x1
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
            加碼獎勵將於活動結束後3個工作日內，發送至玩家背包，屆時請登入遊戲查看。
          </p>
        </ContentText>
      </ActivitySection>
    </PageWrapper>
  )
}
