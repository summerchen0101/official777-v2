import Layout from '@/components/layout/Layout'
import PageBanner from '@/components/layout/PageBanner'
import useAuth from '@/hooks/useAuth'
import { YesNo } from '@/lib/enums'
import { genderMap } from '@/lib/map'
import useMe from '@/services/useMe'
import useProfileUpdate from '@/services/useProfileUpdate'
import useSms from '@/services/useSms'
import { toCdnUrl } from '@/utils'
import { useEffect, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useInterval } from 'usehooks-ts'

type Inputs = {
  nickname: string
  phone: string
  phone_code: string
  email: string
  code: string
  gender: string
}

function UserBasic() {
  useAuth()
  const { data, mutate } = useMe()
  const [count, setCount] = useState(0)
  const { handler: doUpdate, isLoading } = useProfileUpdate()
  const { handler: sendSms, isLoading: isSmsLoading } = useSms()
  const initData = useMemo(
    () => ({
      nickname: data?.nickname,
      phone: data?.cellphone && '0' + data?.cellphone.replace('886-', ''),
      phone_code: data?.countryCode || '886',
      email: data?.email,
      gender: data?.gender.toString(),
    }),
    [data],
  )
  useInterval(() => {
    if (count > 0) {
      setCount((c) => c - 1)
    }
  }, 1000)
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    getValues,
    reset,
  } = useForm<Inputs>({
    defaultValues: initData,
  })

  const onSubmit = handleSubmit(async (d) => {
    try {
      const res = await doUpdate({
        answer: d.code,
        nickname: d.nickname,
        newCountryCode: d.phone_code,
        newCellphone: d.phone,
        email: d.email,
        gender: +d.gender,
      })
      if (res?.ok) {
        alert('會員資料更新成功')
        mutate()
      }
    } catch (err) {
      console.log(err)
    }
  })

  useEffect(() => {
    reset(initData)
  }, [initData])

  const onSendSms = async () => {
    if (!getValues('phone')) {
      alert('請先輸入電話號碼')
      return
    }
    const res = await sendSms({
      // userID: 0,
      newCountryCode: '886',
      newCellphone: getValues('phone').substring(1),
    })
    if (res?.sendSuccess) {
      alert('簡訊已發送')
      setCount(60)
    }
  }
  return (
    <Layout>
      <PageBanner />
      <section>
        <div className="lg:w-[860px] mx-auto">
          <div className="mb-6 flex justify-center lg:justify-start">
            <img
              src={toCdnUrl('/title_member.png')}
              alt="會員資料"
              className="h-10"
            />
          </div>
          <div className="form-box">
            <form className="space-y-5">
              <div className="flex flex-col lg:flex-row lg:space-x-4 lg:items-center gap-2">
                <label htmlFor="" className="w-44 lg:text-right text-gray-200">
                  玩家暱稱
                </label>
                <input
                  type="text"
                  className="rounded-sm border-none bg-gray-100 h-9 lg:w-96 disabled:text-gray-500"
                  {...register('nickname', {
                    required: { value: true, message: '不可為空' },
                  })}
                  disabled={data?.nickNameRemainingTimes === 0}
                />
                <p
                  hidden={data?.nickNameRemainingTimes! > 0}
                  className="text-gray-400 text-sm"
                >
                  ＊已達修改上限
                </p>
                {errors.nickname && (
                  <div className="text-sm text-red-500">
                    {errors.nickname.message}
                  </div>
                )}
              </div>
              <div className="flex flex-col lg:flex-row lg:space-x-4 lg:items-center gap-2">
                <label htmlFor="" className="w-44 lg:text-right text-gray-200">
                  手機號碼
                </label>
                <input
                  type="text"
                  className="rounded-sm border-none bg-gray-100 h-9 lg:w-96 disabled:text-gray-500"
                  {...register('phone', {
                    required: { value: true, message: '不可為空' },
                  })}
                />
                <p
                  hidden={data?.phoneVerified === YesNo.No}
                  className="text-yellow-400 text-sm"
                >
                  (已綁定)
                </p>
                {errors.phone && (
                  <div className="text-sm text-red-500">
                    {errors.phone.message}
                  </div>
                )}
              </div>
              <div className="flex flex-col lg:flex-row lg:space-x-4 lg:items-center gap-2">
                <label htmlFor="" className="w-44 lg:text-right text-gray-200">
                  驗證碼
                </label>
                <input
                  type="text"
                  className="rounded-sm border-none bg-gray-100 h-9 lg:w-96 disabled:text-gray-500"
                  {...register('code', {
                    required: { value: true, message: '不可為空' },
                  })}
                />
                <button
                  type="button"
                  className="btn btn-sm"
                  onClick={onSendSms}
                  disabled={count > 0}
                >
                  發送驗證碼
                  <span className="ml-1" hidden={!count}>
                    {count}s
                  </span>
                </button>
                {errors.code && (
                  <div className="text-sm text-red-500">
                    {errors.code.message}
                  </div>
                )}
              </div>
              <div className="flex flex-col lg:flex-row lg:space-x-4 lg:items-center gap-2">
                <label htmlFor="" className="w-44 lg:text-right text-gray-200">
                  電子信箱
                </label>
                <input
                  type="text"
                  className="rounded-sm border-none bg-gray-100 h-9 lg:w-96"
                  {...register('email', {
                    // required: { value: true, message: '不可為空' },
                    pattern: {
                      value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                      message: '格式有誤',
                    },
                  })}
                />
                {errors.email && (
                  <div className="text-sm text-red-500">
                    {errors.email.message}
                  </div>
                )}
              </div>
              <div className="flex flex-col lg:flex-row lg:space-x-4 lg:items-center gap-2">
                <label htmlFor="" className="w-44 lg:text-right text-gray-200">
                  性別
                </label>
                <div className="flex gap-3">
                  {Object.entries(genderMap).map(([code, label]) => (
                    <label
                      key={code}
                      className="text-gray-200 flex items-center gap-1"
                    >
                      <input
                        type="radio"
                        value={code}
                        {...register('gender', {
                          required: { value: true, message: '不可為空' },
                        })}
                        disabled={code === '3'}
                        className="disabled:bg-gray-400"
                      />
                      {label}
                    </label>
                  ))}
                </div>
                {errors.gender && (
                  <div className="text-sm text-red-500">
                    {errors.gender.message}
                  </div>
                )}
              </div>

              <div className="pt-3 text-center space-x-5 flex justify-center">
                <button
                  type="button"
                  className="btn w-40"
                  onClick={() => reset()}
                >
                  重整
                </button>
                <button
                  type="button"
                  className="btn active w-40"
                  onClick={onSubmit}
                >
                  確認修改
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default UserBasic
