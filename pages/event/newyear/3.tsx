import ActivityBtns from '@/components/activity/ActivityBtns'
import ContentText from '@/components/activity/ContentText'
import ListWrapper from '@/components/activity/ListWrapper'
import PageWrapper from '@/components/activity/PageWrapper'
import ActivitySection from '@/components/activity/Section'
import SubTitle from '@/components/activity/SubTitle'
import LoginPopup from '@/components/LoginPopup'
import useMe from '@/services/useMe'
import useSnExchange from '@/services/useSnExchange'
import useLoginFirst from '@/hooks/useLoginFirst'
import { useRouter } from 'next/dist/client/router'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

type Inputs = {
  userID: string
  serial: string
}

const ticketRules = [
  { ticket: '銅', amount: 1, score: 20000 },
  { ticket: '銀', amount: 1, score: 100000 },
  { ticket: '金', amount: 1, score: 400000 },
]
export default function Activity_02() {
  const { data } = useMe()
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
  const handleLoginFirst = useLoginFirst()

  const onSubmit = handleSubmit(async (d) => {
    const res = await doSnExchange({
      userID: BigInt(d.userID),
      serial: d.serial,
    })
  })
  return (
    <PageWrapper>
      <ActivityBtns id={3} />
      <ActivitySection title="新年送紅包">
        <div>
          <SubTitle>活動時間</SubTitle>
          <ContentText>2022/1/29(六) 12:00 – 2022/2/13(日) 23:59</ContentText>
        </div>
        <div>
          <SubTitle>活動說明</SubTitle>
          <ContentText>
            活動期間內，若有拿到實體紅包袋，於下方輸入遊戲暱稱和紅包袋背面序號，即可獲得一張「銅獎券」，並有機會抽中iPhone
            13！
          </ContentText>

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
              <button className="btn active mx-auto" onClick={handleLoginFirst}>
                兌換序號請先登入會員
              </button>
            )}
          </div>
        </div>
      </ActivitySection>
      <LoginPopup />
    </PageWrapper>
  )
}
