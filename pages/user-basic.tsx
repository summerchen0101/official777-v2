import Layout from '@/components/layout/Layout'
import PageBanner from '@/components/layout/PageBanner'
import useAuth from '@/hooks/useAuth'
import { YesNo } from '@/lib/enums'
import useMe from '@/services/useMe'
import useProfileUpdate from '@/services/useProfileUpdate'
import useSms from '@/services/useSms'
import { toImgPath } from '@/utils'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

type Inputs = {
  nickname: string
  phone: string
  phone_code: string
  email: string
  code: string
}

function UserBasic() {
  useAuth()
  const { data } = useMe()
  const { handler: doUpdate, isLoading } = useProfileUpdate()
  const { handler: sendSms, isLoading: isSmsLoading } = useSms()
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    getValues,
    reset,
  } = useForm<Inputs>()

  const onSubmit = handleSubmit(async (d) => {
    try {
      const res = await doUpdate({
        answer: d.code,
        nickname: d.nickname,
        newCountryCode: d.phone_code,
        newCellphone: d.phone,
        email: d.email,
      })
      if (res?.ok) {
        alert('會員資料更新成功')
      }
      reset()
    } catch (err) {
      console.log(err)
    }
  })

  useEffect(() => {
    reset({
      nickname: data?.nickname,
      phone: data?.cellphone,
      phone_code: data?.countryCode,
      email: data?.email,
    })
  }, [data, reset])

  const onSendSms = async () => {
    const res = await sendSms({
      // userID: 0,
      newCountryCode: '886',
      newCellphone: getValues('phone'),
    })
    if (res?.sendSuccess) {
      alert('簡訊已發送')
    }
  }
  return (
    <Layout>
      <PageBanner />
      <section>
        <div className="lg:w-[860px] mx-auto">
          <div className="mb-6 flex justify-center lg:justify-start">
            <img
              src={toImgPath('/title_member.png')}
              alt="會員資料"
              className="h-10"
            />
          </div>
          <div className="form-box">
            <form className="space-y-5">
              <div className="flex flex-col lg:flex-row lg:space-x-4 lg:items-center">
                <label
                  htmlFor=""
                  className="mb-2 w-44 lg:text-right text-gray-200"
                >
                  玩家暱稱
                </label>
                <input
                  type="text"
                  className="rounded-sm border-none bg-gray-100 h-9 lg:w-96"
                  {...register('nickname', {
                    required: { value: true, message: '不可為空' },
                  })}
                />
                {errors.nickname && (
                  <div className="text-sm text-red-500">
                    {errors.nickname.message}
                  </div>
                )}
              </div>
              <div className="flex flex-col lg:flex-row lg:space-x-4 lg:items-center">
                <label
                  htmlFor=""
                  className="mb-2 w-44 lg:text-right text-gray-200"
                >
                  手機號碼綁定
                </label>
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-2 flex-1 lg:w-96">
                    <select
                      className="rounded-sm border-none bg-gray-100 h-9 w-1/3"
                      {...register('phone_code', {
                        required: { value: true, message: '不可為空' },
                      })}
                    >
                      <option>886</option>
                    </select>
                    <input
                      type="text"
                      className="rounded-sm border-none bg-gray-100 h-9 flex-1"
                      {...register('phone', {
                        required: { value: true, message: '不可為空' },
                      })}
                    />
                  </div>
                  <p
                    hidden={data?.phoneVerified === YesNo.No}
                    className="bg-purple-600 rounded px-1 text-white"
                  >
                    已綁定
                  </p>
                </div>
                {errors.phone && (
                  <div className="text-sm text-red-500">
                    {errors.phone.message}
                  </div>
                )}
              </div>

              <div className="flex flex-col lg:flex-row lg:space-x-4 lg:items-center">
                <label
                  htmlFor=""
                  className="mb-2 w-44 lg:text-right text-gray-200"
                >
                  驗證碼
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    className="rounded-sm border-none bg-gray-100 h-9 lg:w-96"
                    {...register('code', {
                      required: { value: true, message: '不可為空' },
                    })}
                    placeholder="請輸入驗證碼"
                  />
                  <div>
                    <button
                      type="button"
                      className="btn btn-sm"
                      onClick={onSendSms}
                    >
                      發送驗證碼
                    </button>
                  </div>
                </div>
                {errors.code && (
                  <div className="text-sm text-red-500">
                    {errors.code.message}
                  </div>
                )}
              </div>

              <div className="flex flex-col lg:flex-row lg:space-x-4 lg:items-center">
                <label
                  htmlFor=""
                  className="mb-2 w-44 lg:text-right text-gray-200"
                >
                  電子信箱
                </label>
                <input
                  type="text"
                  className="rounded-sm border-none bg-gray-100 h-9 lg:w-96"
                  {...register('email', {
                    required: { value: true, message: '不可為空' },
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

              <div className="pt-3 text-center space-x-5 flex justify-center">
                <button className="btn w-40">取消修改</button>
                <button className="btn active w-40" onClick={onSubmit}>
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
