import ActivityBtns from '@/components/activity/ActivityBtns'
import ContentText from '@/components/activity/ContentText'
import ListWrapper from '@/components/activity/ListWrapper'
import PageWrapper from '@/components/activity/PageWrapper'
import ActivitySection from '@/components/activity/Section'
import SubTitle from '@/components/activity/SubTitle'
import { toImgPath } from '@/utils'
import React from 'react'

export default function Activity_05() {
  return (
    <PageWrapper>
      <ActivityBtns id={4} />
      <ActivitySection title="衝等大挑戰">
        <div>
          <SubTitle>活動時間</SubTitle>
          <ContentText>
            2022/1/29(五) 中午12:00 – 2022/2/8(二) 晚上11:59
          </ContentText>
        </div>
        <div>
          <SubTitle>活動對象</SubTitle>
          <ContentText>大頭家娛樂城-限15級以上玩家</ContentText>
        </div>
        <div>
          <SubTitle>活動說明</SubTitle>
          <ContentText>
            <ListWrapper>
              <li>活動期間內，累積提升等級數達對應門檻，可獲得指定道具卡。</li>
              <li>獎勵依累積提升等級數，擇優發送卡片獎勵一張。</li>
              <li>獎勵將統一於2022/2/9 (三)晚上6：00前發送。</li>
              <li>
                1000級以上及1000級以下不重複累計
                <p>
                  範例1.小明從1000級提升至1265級，共累積提升265級，因此可領取5星威力卡1張。
                  <br />
                  範例2.小明從900級提升至1200級，共累積提升300級，因中間有跨到1000級必須分開計算，1000級以下累積提升100級，1000級以上累積提升200級，因此可領取1星超級卡1張及5星威力卡1張。
                </p>
              </li>
            </ListWrapper>
          </ContentText>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {[...Array(2)].map((g, g_i) => (
            <table key={g_i} className="rounded-lg overflow-hidden">
              <thead>
                <tr>
                  <th colSpan={2} className="text-center text-xl">
                    1000級以上玩家
                  </th>
                </tr>
                <tr>
                  <th className="text-center">累積提升等級數</th>
                  <th className="text-center">獎勵內容</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(7)].map((t, i) => (
                  <tr key={i} className="">
                    <td className="text-center text-xl text-gold-700 font-medium">
                      500級
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
      </ActivitySection>
    </PageWrapper>
  )
}
