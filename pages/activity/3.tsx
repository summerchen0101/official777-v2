import ActivityBtns from '@/components/activity/ActivityBtns'
import ContentText from '@/components/activity/ContentText'
import PageWrapper from '@/components/activity/PageWrapper'
import ActivitySection from '@/components/activity/Section'
import SubTitle from '@/components/activity/SubTitle'
import React from 'react'

export default function Activity_03() {
  return (
    <PageWrapper>
      <ActivityBtns id={3} />
      <ActivitySection title="道具碎片加倍送">
        <div>
          <SubTitle>活動時間</SubTitle>
          <ContentText>
            2022/01/12(三) 中午12:00 – 2022/01/19(三) 早上9:59
          </ContentText>
        </div>
        <div>
          <SubTitle>活動對象</SubTitle>
          <ContentText>大頭家娛樂城全玩家</ContentText>
        </div>
        <div>
          <SubTitle>活動說明</SubTitle>
          <ContentText>
            <ul className="list-decimal list-inside">
              <li>活動期間每日從押注寶箱開出的道具碎片數量加倍</li>
              <li>押注越高越容易拿到稀有押注寶箱</li>
            </ul>
          </ContentText>
        </div>
      </ActivitySection>
    </PageWrapper>
  )
}
