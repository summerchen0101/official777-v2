import Layout from '@/components/layout/Layout'
import PageBanner from '@/components/layout/PageBanner'
import useAuth from '@/hooks/useAuth'
import usePwUpdate from '@/services/usePwUpdate'
import React from 'react'
import { useForm } from 'react-hook-form'

type Inputs = {
  old_pw: string
  new_pw: string
  new_pw_confirm: string
  code: string
}
function UserPw() {
  useAuth()
  const { handler: doUpdate, isLoading } = usePwUpdate()
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<Inputs>()
  const onSubmit = handleSubmit(async (d) => {
    try {
      const res = await doUpdate({
        old_password: d.old_pw,
        new_password: d.new_pw,
      })
      if (res?.ok) {
        alert('二次密碼更新成功')
      }
      reset()
    } catch (err) {
      console.log(err)
    }
  })
  return (
    <Layout>
      <PageBanner />
      <section>
        <div className="lg:w-[860px] mx-auto">
          <div className="mb-6 flex justify-center lg:justify-start">
            <img src="/title_pw.png" alt="修改二次密碼" className="h-10" />
          </div>
          <div className="form-box">
            <form noValidate className="space-y-5">
              <div className="flex flex-col lg:flex-row lg:space-x-4 lg:items-center">
                <label
                  htmlFor=""
                  className="mb-2 w-36 lg:text-right text-gray-200"
                >
                  舊密碼
                </label>
                <input
                  type="password"
                  className="rounded-sm border-none bg-gray-100 flex-1 h-9 lg:w-72"
                  {...register('old_pw', {
                    required: { value: true, message: '不可為空' },
                  })}
                />
                {errors.old_pw && (
                  <div className="text-sm text-red-500">
                    {errors.old_pw.message}
                  </div>
                )}
              </div>
              <div className="flex flex-col lg:flex-row lg:space-x-4 lg:items-center">
                <label
                  htmlFor=""
                  className="mb-2 w-36 lg:text-right text-gray-200"
                >
                  新密碼
                </label>
                <input
                  type="password"
                  className="rounded-sm border-none bg-gray-100 flex-1 h-9 lg:w-72"
                  {...register('new_pw', {
                    required: { value: true, message: '不可為空' },
                    pattern: {
                      value: /^\w{6,12}$/,
                      message: '須為中英文6~12位',
                    },
                  })}
                />
                <p className="text-gold-400 text-sm mt-2 lg:mt-0">
                  ＊中英文6~12位
                </p>
                {errors.new_pw && (
                  <div className="text-sm text-red-500">
                    {errors.new_pw.message}
                  </div>
                )}
              </div>

              <div className="flex flex-col lg:flex-row lg:space-x-4 lg:items-center">
                <label
                  htmlFor=""
                  className="mb-2 w-36 lg:text-right text-gray-200"
                >
                  新密碼確認
                </label>
                <input
                  type="password"
                  className="rounded-sm border-none bg-gray-100 flex-1 h-9 lg:w-72"
                  {...register('new_pw_confirm', {
                    required: { value: true, message: '不可為空' },
                    validate: (val) => {
                      const ok = val === watch('new_pw')
                      return ok ? ok : '與新密碼不同'
                    },
                  })}
                />
                {errors.new_pw_confirm && (
                  <div className="text-sm text-red-500">
                    {errors.new_pw_confirm.message}
                  </div>
                )}
              </div>

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
                      // onClick={onSendSms}
                    >
                      發送驗證碼
                    </button>
                  </div>
                </div>
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
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default UserPw
