import ActivityBtns from '@/components/activity/ActivityBtns'
import ContentText from '@/components/activity/ContentText'
import ListWrapper from '@/components/activity/ListWrapper'
import PageWrapper from '@/components/activity/PageWrapper'
import ActivitySection from '@/components/activity/Section'
import SubTitle from '@/components/activity/SubTitle'
import LoginPopup from '@/components/LoginPopup'
import useMe from '@/services/useMe'
import useSnExchange from '@/services/useSnExchange'
import usePopupStore from '@/store/usePopupStore'
import { toImgPath } from '@/utils'
import { useRouter } from 'next/dist/client/router'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

type Inputs = {
  userID: string
  serial: string
}
export default function RechargeActivity() {
  const { data } = useMe()
  const onLoginToggle = usePopupStore((s) => s.login.onToggle)
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm<Inputs>()

  useEffect(() => {
    if (data) {
      setValue('userID', data.id.toString())
    }
  }, [data])

  const { handler: doSnExchange, isLoading } = useSnExchange()

  const router = useRouter()

  const handleLoginFirst = () => {
    router.replace({ query: { to: router.asPath } })
    onLoginToggle()
  }

  const onSubmit = handleSubmit(async (d) => {
    const res = await doSnExchange({
      userID: BigInt(d.userID),
      serial: d.serial,
    })
  })

  return (
    <PageWrapper>
      <ActivitySection title="累積儲值滿額送">
        <div>
          <SubTitle>活動時間</SubTitle>
          <ContentText>
            2022/1/31(一) 中午12:00- 2022/2/6 (五) 中午 23:59
          </ContentText>
        </div>
        <div>
          <SubTitle>活動對象</SubTitle>
          <ContentText>大頭家娛樂城玩家</ContentText>
        </div>
        <div>
          <SubTitle>活動說明</SubTitle>
          <ContentText>
            活動期間達到累積儲值金額門檻，即額外贈送遊戲幣、道具或獎券。
          </ContentText>
        </div>
        <div className="text-center bg-black/50 sm:w-96 mx-auto rounded-xl py-4 border-4 border-purple-800 shadow-lg">
          <div className="text-gray-300 text-xl mb-3">目前累積儲值金額</div>
          <div className="text-yellow-500 text-4xl sm:text-5xl font-medium pb-2">
            20,300
          </div>
        </div>
        <div className="flex justify-center">
          <div className="btn active">查看抽獎券數量</div>
        </div>
        <table className="max-w-[700px] mx-auto sm:w-full rounded-lg overflow-hidden">
          <thead>
            <tr>
              <th className="text-center">累積儲值</th>
              <th className="text-center">活動獎勵</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(10)].map((t, i) => (
              <tr key={i} className="">
                <td className="text-center text-lg sm:text-xl text-gold-700 font-medium">
                  2000元
                </td>
                <td className="flex flex-col sm:flex-row items-center gap-y-1 gap-x-3 justify-center font-medium text-sm sm:text-base">
                  {[...Array(2)].map((g, g_i) => (
                    <div key={g_i} className="flex gap-1 items-center">
                      <img
                        src={toImgPath('/gift/img_redEnvelopeLucky.png')}
                        alt=""
                        className="w-10 hidden sm:block"
                      />
                      金幣 × 1,000
                    </div>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-center">
          <div className="btn active">查看抽獎券數量</div>
        </div>
        <ContentText>
          ※注意事項
          <br />
          1.遊戲道具卡使用後可直接進入遊戲的Feature Game。
          <br />
          2.獎券數量請至「跑車抽起來」(網址)查看。
          <br />
          3.本活動商品有儲值金額門檻，請玩家儲值時確認儲值金額。
          <br />
          4.官方有變更活動內容規則或終止活動的權利，以及最終解釋權。
          <br />
          5.活動相關問題請來信至客服信箱：support@online539.com。
        </ContentText>
      </ActivitySection>
      <LoginPopup />
    </PageWrapper>
  )
}