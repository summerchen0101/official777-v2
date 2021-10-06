import React from 'react'
import cs from 'classnames'
import { useStore } from '@/store/useStore'
import useLogin from '@/services/useLogin'
import { useForm } from 'react-hook-form'
import { useUserStore } from '@/store/useUserStore'
import { useRouter } from 'next/dist/client/router'

type Inputs = {
  acc: string
  pw: string
}

export default function LoginPopup() {
  const { handler: login, isLoading } = useLogin()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()
  const router = useRouter()
  const isShowLoginPopup = useStore((s) => s.isShowLoginPopup)
  const toggleLoginPopup = useStore((s) => s.toggleLoginPopup)

  const setTokenInfo = useUserStore((s) => s.setTokenInfo)
  const setUser = useUserStore((s) => s.setUser)
  const onSubmit = handleSubmit(async (d) => {
    const res = await login({
      email: d.acc,
      password: d.pw,
      type: 1,
    })
    if (res && !res.code) {
      setTokenInfo({
        accessToken: res.accessToken,
        refreshToken: res.refreshToken,
        expiresIn: res.expiresIn,
      })
      setUser({ name: '我是夏天', level: 3, points: 12800 })
      if (router.query.to) {
        router.push(router.query.to as string)
      }
      toggleLoginPopup()
      alert('登入成功')
    }
  })
  return (
    <div
      className={cs(
        'fixed top-0 left-0 w-full h-full z-50 transition-all flex justify-center items-center',
        isShowLoginPopup ? 'visible opacity-100' : 'invisible opacity-0',
      )}
      onMouseDown={toggleLoginPopup}
    >
      <div
        className="w-full h-full lg:h-auto lg:w-[360px] bg-white lg:rounded-xl overflow-hidden border border-purple-800/90"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="text-white text-2xl bg-purple-800 text-center py-2">
          登入
        </div>
        <div className="p-4 grid grid-cols-1 gap-4 items-center">
          <div className="space-y-2 p-6">
            <div className="border border-gray-500 rounded px-2 h-10 flex items-center cursor-pointer bg-purple-100 hover:bg-purple-200">
              <img src="/icon_loginGoogle.png" alt="" />
              <div className="flex-1 text-center">Google登入</div>
            </div>
            <div className="border border-gray-500 rounded px-2 h-10 flex items-center cursor-pointer bg-purple-100 hover:bg-purple-200">
              <img src="/icon_loginApple.png" alt="" />
              <div className="flex-1 text-center">Apple ID登入</div>
            </div>
            <div className="border border-gray-500 rounded px-2 h-10 flex items-center cursor-pointer bg-purple-100 hover:bg-purple-200">
              <img src="/icon_loginFacebook.png" alt="" />
              <div className="flex-1 text-center">facebook登入</div>
            </div>
            <div className="border border-gray-500 rounded px-2 h-10 flex items-center cursor-pointer bg-purple-100 hover:bg-purple-200">
              <img src="/icon_loginLine.png" alt="" />
              <div className="flex-1 text-center">Line登入</div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex flex-col">
              <label htmlFor="">會員帳號</label>
              <input
                type="email"
                className="rounded py-1.5"
                defaultValue="summer@test.com"
                {...register('acc', {
                  required: { value: true, message: '不可為空' },
                })}
              />
              {errors.acc && (
                <div className="text-sm text-red-500">{errors.acc.message}</div>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="">會員密碼</label>
              <input
                type="password"
                className="rounded py-1.5"
                defaultValue="123456"
                {...register('pw', {
                  required: { value: true, message: '不可為空' },
                })}
              />
              {errors.pw && (
                <div className="text-sm text-red-500">{errors.pw.message}</div>
              )}
            </div>
            <div className="flex justify-between">
              <label htmlFor="" className="flex items-center space-x-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">記住我的帳號</span>
              </label>
              <div className="underline cursor-pointer hover:no-underline">
                忘記密碼
              </div>
            </div>
            <div className="pt-5">
              <button className="btn active w-full" onClick={onSubmit}>
                登入
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
