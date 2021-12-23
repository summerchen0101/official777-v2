import ActivitySection from '@/components/activity/Section'
import SubTitle from '@/components/activity/SubTitle'
import ContentText from '@/components/activity/ContentText'
import { activityList } from '@/lib/activity'
import { toImgPath } from '@/utils'
import cs from 'classnames'
import React, { useState } from 'react'
import ActivityBtns from '@/components/activity/ActivityBtns'
import { useForm } from 'react-hook-form'

type Inputs = {
  nickname: string
  sn: string
}
export default function Activity_02() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<Inputs>()
  const [tab, setTab] = useState(0)
  return (
    <div className="p-6 sm:px-10">
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
            <ul className="list-decimal list-inside">
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
            </ul>
            <div className="form-box my-5 sm:mx-12">
              <form noValidate className="space-y-5">
                <div className="flex flex-col lg:flex-row lg:space-x-4 lg:items-center">
                  <label
                    htmlFor=""
                    className="w-44 mb-2 lg:text-right text-gray-200"
                  >
                    暱稱
                  </label>
                  <input
                    className="rounded-sm border-none bg-gray-100 h-9 lg:w-[400px] px-2"
                    placeholder="請輸入暱稱"
                    {...register('nickname', {
                      required: { value: true, message: '不可為空' },
                    })}
                  />
                </div>
                <div className="flex flex-col lg:flex-row lg:space-x-4 lg:items-center">
                  <label
                    htmlFor=""
                    className="w-44 mb-2 lg:text-right text-gray-200"
                  >
                    序號
                  </label>
                  <input
                    className="rounded-sm border-none bg-gray-100 h-9 lg:w-[400px] px-2"
                    placeholder="請輸入序號"
                    {...register('nickname', {
                      required: { value: true, message: '不可為空' },
                    })}
                  />
                </div>
                <div className="pt-3 text-center space-x-5 flex justify-center">
                  <button className="btn w-40" onClick={() => reset()}>
                    取消修改
                  </button>
                  <button className="btn active w-40">確認修改</button>
                </div>
              </form>
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
    </div>
  )
}
