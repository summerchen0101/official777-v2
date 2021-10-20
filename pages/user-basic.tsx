import Layout from '@/components/layout/Layout'
import PageBanner from '@/components/layout/PageBanner'
import useAuth from '@/hooks/useAuth'
import { YesNo } from '@/lib/enums'
import useMe from '@/services/useMe'
import useProfileUpdate from '@/services/useProfileUpdate'
import useSms from '@/services/useSms'
import { toCdnImgPath } from '@/utils'
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
              src={toCdnImgPath('/title_member.png')}
              alt="會員資料"
              className="h-10"
            />
          </div>
          <div className="form-box">
            <form className="space-y-5">
              <div className="flex flex-col lg:flex-row lg:space-x-4 lg:items-center">
                <label
                  htmlFor=""
                  className="mb-2 w-36 lg:text-right text-gray-200"
                >
                  玩家暱稱
                </label>
                <div className="flex flex-1 space-x-2">
                  <input
                    type="text"
                    className="rounded-sm border-none bg-gray-100 flex-1 h-9 lg:w-72"
                    {...register('nickname', {
                      required: { value: true, message: '不可為空' },
                    })}
                  />
                  <div className="lg:w-36">
                    <button className="btn btn-sm">復原</button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row lg:space-x-4 lg:items-center">
                <label
                  htmlFor=""
                  className="mb-2 w-36 lg:text-right text-gray-200"
                >
                  手機號碼綁定
                </label>
                <div className="flex flex-col lg:flex-row flex-1 flex-wrap">
                  <div className="flex flex-1 space-x-2">
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
                      className="rounded-sm border-none bg-gray-100 flex-1 h-9"
                      {...register('phone', {
                        required: { value: true, message: '不可為空' },
                      })}
                    />
                  </div>
                  <div className="lg:w-36 mt-2 lg:mt-0 lg:ml-2">
                    {data?.phoneVerified === YesNo.Yes && (
                      <p className="text-green-500">已綁定</p>
                    )}
                  </div>
                </div>
              </div>

              {data?.phoneVerified === YesNo.Yes && (
                <div className="flex flex-col lg:flex-row lg:space-x-4 lg:items-center">
                  <label
                    htmlFor=""
                    className="mb-2 w-36 lg:text-right text-gray-200"
                  >
                    驗證碼
                  </label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="text"
                      className="rounded-sm border-none bg-gray-100 flex-1 h-9 lg:w-72"
                      {...register('code', {
                        required: { value: true, message: '不可為空' },
                      })}
                      placeholder="請輸入驗證碼"
                    />
                    <div className="w-36">
                      <button
                        type="button"
                        className="btn btn-sm"
                        onClick={onSendSms}
                      >
                        發送驗證碼
                      </button>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex flex-col lg:flex-row lg:space-x-4 lg:items-center">
                <label
                  htmlFor=""
                  className="mb-2 w-36 lg:text-right text-gray-200"
                >
                  電子信箱
                </label>
                <input
                  type="text"
                  className="rounded-sm border-none bg-gray-100 flex-1 h-9"
                  {...register('email', {
                    required: { value: true, message: '不可為空' },
                    pattern: {
                      value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                      message: '格式有誤',
                    },
                  })}
                />
                {/* <div className="w-32"></div> */}
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
