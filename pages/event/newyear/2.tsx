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
import { useRouter } from 'next/dist/client/router'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

type Inputs = {
  userID: string
  serial: string
}
export default function Activity_02() {
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
      <ActivityBtns id={2} />
      <ActivitySection title="新年送紅包">
        <div>
          <SubTitle>活動時間</SubTitle>
          <ContentText>
            2022/1/14(三) 中午12:00 – 2022/2/12(二) 晚上11:59
          </ContentText>
        </div>
        <div>
          <SubTitle>活動說明一</SubTitle>
          <ContentText>
            <ListWrapper>
              <li>
                活動期間內，到肯德基購買XXX多人分享餐(舉例)，即可獲得大頭家娛樂城實體紅包袋。
              </li>
              <li>
                於下方輸入遊戲暱稱和紅包袋背面序號，即可獲得一張「銅獎券」，並有機會抽中iPhone
                13。
              </li>
              {/* <li>
                遊戲中輸入序號方式：遊戲大廳 → 點擊左下方「公告」→
                點擊序號廣告，即可輸入序號喔！
              </li> */}
            </ListWrapper>
            <div className="form-box my-5 -mx-4 sm:mx-12">
              {data ? (
                <form noValidate className="space-y-5">
                  <div className="flex flex-col lg:flex-row lg:space-x-4 lg:items-center">
                    <label
                      htmlFor=""
                      className="w-44 mb-2 lg:text-right text-gray-200"
                    >
                      會員資訊
                    </label>
                    <p className="text-yellow-200 bg-black/20 p-2 rounded-sm">
                      {data?.id.toString()} ({data?.nickname})
                    </p>
                  </div>
                  <div className="flex flex-col lg:flex-row lg:space-x-4 lg:items-center">
                    <label
                      htmlFor=""
                      className="w-44 mb-2 lg:text-right text-gray-200"
                    >
                      序號
                    </label>
                    <input
                      className="rounded-sm border-none bg-gray-100 h-9 lg:w-[400px] px-2 text-gray-800"
                      placeholder="請輸入序號"
                      {...register('serial', {
                        required: { value: true, message: '不可為空' },
                      })}
                    />
                  </div>
                  <div className="pt-3 text-center space-x-5 flex justify-center">
                    <button className="btn w-40" onClick={() => reset()}>
                      取消修改
                    </button>
                    <button className="btn active w-40" onClick={onSubmit}>
                      確認修改
                    </button>
                  </div>
                </form>
              ) : (
                <button
                  className="btn active mx-auto"
                  onClick={handleLoginFirst}
                >
                  兌換序號請先登入會員
                </button>
              )}
            </div>
          </ContentText>
        </div>
        <div>
          <SubTitle>活動說明二</SubTitle>
          <ContentText>
            遊玩老虎機或魚機遊戲，達成指定贏分門檻，再加碼贈送更多抽獎券，有機會抽中更多大獎喔！
            <br />
            (獎品詳請可見 → 名車抽起來活動頁內)
          </ContentText>
          <div className="mt-5 sm:mx-12">
            <div className="text-2xl bg-gray-600 rounded-xl py-2 text-center mb-4">
              抽獎券條件
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[...Array(3)].map((t, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center bg-gray-800 p-3 rounded-lg"
                >
                  <div className="mb-2 text-xl font-medium text-yellow-400">
                    贏分20,000
                  </div>
                  <div className="mb-2 text-xl text-yellow-600">銅獎券 x 1</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ActivitySection>
      <LoginPopup />
    </PageWrapper>
  )
}
