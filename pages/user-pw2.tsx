import Layout from '@/components/layout/Layout'
import PageBanner from '@/components/layout/PageBanner'
import useAuth from '@/hooks/useAuth'
import useMe from '@/services/useMe'
import usePwUpdate from '@/services/usePwUpdate'
import useSms from '@/services/useSms'
import useCdnUrl from '@/hooks/useCdnUrl'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useInterval } from 'usehooks-ts'

type Inputs = {
  code: string
  new_pw: string
  new_pw_confirm: string
}
function UserPw() {
  const toCdnUrl = useCdnUrl()
  const [count, setCount] = useState(0)
  useInterval(() => {
    if (count > 0) {
      setCount((c) => c - 1)
    }
  }, 1000)
  useAuth()
  const { handler: doUpdate, isLoading } = usePwUpdate()
  const { data } = useMe()
  const { handler: sendSms, isLoading: isSmsLoading } = useSms()
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<Inputs>()
  const onSendSms = async () => {
    const res = await sendSms({
      userID: data?.id,
    })
    if (res?.sendSuccess) {
      alert('簡訊已發送')
      setCount(60)
    }
  }
  const onSubmit = handleSubmit(async (d) => {
    try {
      const res = await doUpdate({
        answer: d.code,
        newSecondPassword: d.new_pw,
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
            <img
              src={toCdnUrl('/title_pw2.png')}
              alt="修改二次密碼"
              className="h-10"
            />
          </div>
          <div className="form-box">
            <form noValidate className="space-y-5">
              <div className="flex flex-col lg:flex-row lg:space-x-4 lg:items-center">
                <label
                  htmlFor=""
                  className="w-44 mb-2 lg:text-right text-gray-200"
                >
                  新密碼
                </label>
                <input
                  type="password"
                  className="rounded-sm border-none bg-gray-100 h-9 lg:w-96"
                  placeholder="請輸入8位數數字"
                  {...register('new_pw', {
                    required: { value: true, message: '不可為空' },
                    pattern: {
                      value: /^\d{8}$/,
                      message: '須為中8位數數字',
                    },
                  })}
                />

                {errors.new_pw && (
                  <div className="text-sm text-red-500">
                    {errors.new_pw.message}
                  </div>
                )}
              </div>

              <div className="flex flex-col lg:flex-row lg:space-x-4 lg:items-center">
                <label
                  htmlFor=""
                  className="mb-2 w-44 lg:text-right text-gray-200"
                >
                  新密碼確認
                </label>
                <input
                  type="password"
                  className="rounded-sm border-none bg-gray-100 h-9 lg:w-96"
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
                  className="mb-2 w-44 lg:text-right text-gray-200"
                >
                  驗證碼
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    className="rounded-sm border-none bg-gray-100 flex-1 h-9 lg:w-96"
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
                      disabled={count > 0}
                    >
                      發送驗證碼
                      <span className="ml-1" hidden={!count}>
                        {count}s
                      </span>
                    </button>
                  </div>
                </div>
                {errors.code && (
                  <div className="text-sm text-red-500">
                    {errors.code.message}
                  </div>
                )}
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
