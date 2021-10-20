import Layout from '@/components/layout/Layout'
import PageBanner from '@/components/layout/PageBanner'
import useAuth from '@/hooks/useAuth'
import useMe from '@/services/useMe'
import useSms from '@/services/useSms'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

type Inputs = {
  nickname: string
  phone: string
  email: string
}

function UserBasic() {
  useAuth()
  const { data } = useMe()
  const { handler: sendSms, isLoading } = useSms()
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    getValues,
    reset,
  } = useForm<Inputs>()

  const onSubmit = handleSubmit((d) => {
    console.log(d)
  })

  useEffect(() => {
    reset({
      nickname: data?.nickname,
      phone: data?.cellphone,
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
            <img src="/title_member.png" alt="會員資料" className="h-10" />
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
                <div className="flex space-x-2">
                  <input
                    type="text"
                    className="rounded-sm border-none bg-gray-100 flex-1 h-9 lg:w-72"
                    {...register('nickname', {
                      required: { value: true, message: '不可為空' },
                    })}
                  />
                  <div className="w-24">
                    <button className="btn btn-sm w-full">復原</button>
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
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    className="rounded-sm border-none bg-gray-100 flex-1 h-9 lg:w-72"
                    {...register('phone', {
                      required: { value: true, message: '不可為空' },
                    })}
                  />
                  <div className="w-36">
                    {data?.phoneVerified === 1 ? (
                      <span className="text-green-500">已綁定</span>
                    ) : (
                      <button
                        type="button"
                        className="btn btn-sm"
                        onClick={onSendSms}
                      >
                        發送驗證碼
                      </button>
                    )}
                  </div>
                </div>
              </div>

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
                <div className="w-24"></div>
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
