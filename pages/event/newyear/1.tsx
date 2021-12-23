import ActivityBtns from '@/components/activity/ActivityBtns'
import ContentText from '@/components/activity/ContentText'
import PageWrapper from '@/components/activity/PageWrapper'
import ActivitySection from '@/components/activity/Section'
import SubTitle from '@/components/activity/SubTitle'
import { toImgPath } from '@/utils'
import cs from 'classnames'
import React, { useState } from 'react'

export default function Activity_01() {
  const [tab, setTab] = useState(0)
  return (
    <PageWrapper>
      <ActivityBtns id={1} />
      <ActivitySection title="名車抽起來">
        <div>
          <SubTitle>活動時間</SubTitle>
          <ContentText>
            2022/1/14(三) 中午12:00 – 2022/2/8(二) 晚上11:59
          </ContentText>
        </div>
        <div>
          <SubTitle>活動對象</SubTitle>
          <ContentText>大頭家娛樂城全玩家</ContentText>
        </div>
        <div>
          <SubTitle>活動說明</SubTitle>
          <ContentText>
            <div className="mb-6">
              <p className="mb-3">
                1.活動期間達到對應會員層級，可獲得對應數量抽獎券
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {[...Array(6)].map((t, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center bg-gray-800 p-1.5 rounded-lg"
                  >
                    <div className="mb-2 text-lg font-medium">鑽石會員</div>
                    <img
                      src={toImgPath('/vip/VIPcard2.png')}
                      className="w-20"
                      alt=""
                    />
                    <div className="text-xl">x 1</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-6">
              <p className="mb-3">
                2.使用指定押注獲得的贏分即為積分，積分達指定門檻可獲得對應抽獎券
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[...Array(3)].map((t, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center bg-gray-800 p-3 rounded-lg"
                  >
                    <div className="mb-2 text-xl font-medium text-yellow-600">
                      800,000分/張
                    </div>

                    <div className="text-center space-y-1 text-lg">
                      <div>老虎機：押分20,000以上</div>
                      <div>魚機：押分2,000以上</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ContentText>
        </div>

        <div className="">
          <div className="text-2xl bg-gray-600 rounded-xl py-2 text-center mb-4">
            持有彩券
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[...Array(3)].map((t, i) => (
              <div
                key={i}
                className="flex flex-col items-center bg-gray-800 p-3 rounded-lg"
              >
                <div className="mb-2 text-xl font-medium text-yellow-400">
                  金抽獎券
                </div>
                <div className="mb-2 text-xl font-medium text-yellow-600">
                  500,000 / 800,000
                </div>

                <div className="text-gray-400 font-medium mb-2">
                  獲得的獎券號碼
                </div>
                <div className="text-center space-y-1 text-lg w-4/6">
                  {[...Array(5)].map((n, n_i) => (
                    <div
                      key={n_i}
                      className="border-b last-of-type:border-b-0 border-gray-600"
                    >
                      1112-2333-3444
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </ActivitySection>
      <ActivitySection title="直播抽獎">
        <div>
          <SubTitle>活動時間</SubTitle>
          <ContentText>
            2022/1/14(三) 中午12:00 – 2022/2/8(二) 晚上11:59
          </ContentText>
        </div>
        <div>
          <SubTitle>直播平台</SubTitle>
          <ContentText>大頭家娛樂城官方粉絲專頁</ContentText>
        </div>
        <div>
          <SubTitle>名單公告時間</SubTitle>
          <ContentText>2022/2/14(一) 18:00</ContentText>
        </div>

        <div>
          <SubTitle>活動獎項</SubTitle>
          <div className="flex gap-4 justify-center mt-6">
            {[...Array(3)].map((t, i) => (
              <div
                key={i}
                className={cs(
                  'text-white bg-gray-600 rounded-full p-3 w-32 text-xl text-center cursor-pointer shadow-md',
                  { 'bg-gold-600': tab === i },
                )}
                onClick={(e) => setTab(i)}
              >
                金券
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4 mt-6 max-w-[700px] mx-auto">
            <div className="col-span-2 flex flex-col sm:flex-row gap-4 sm:gap-8 items-center p-8 rounded-lg justify-center  bg-gray-800">
              <img
                src={toImgPath('/vip/VIPcard1.png')}
                className="w-28"
                alt=""
              />
              <div className="text-gray-300 text-lg sm:text-xl text-center leading-7 sm:leading-9">
                賓士名車卡 共2名 <br />
                價值 <span className="text-yellow-400">158,000,000</span> 金幣
              </div>
            </div>
            {[...Array(6)].map((t, i) => (
              <div
                key={i}
                className="gap-3 bg-gray-800 p-4 rounded-lg space-y-4 text-center"
              >
                <img
                  src={toImgPath('/vip/VIPcard1.png')}
                  className="w-16 sm:w-28 mx-auto"
                  alt=""
                />
                <div className="text-gray-300 text-xs sm:text-xl leading-5">
                  勞力士卡 共1名
                  <br />
                  價值 <span className="text-yellow-400">23,300,000</span> 金幣
                </div>
              </div>
            ))}
          </div>
        </div>
      </ActivitySection>
    </PageWrapper>
  )
}
