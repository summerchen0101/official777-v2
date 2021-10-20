import useOAuthLogin from '@/services/useOAuthLogin'
import useLogin from '@/services/useLogin'
import { useStore } from '@/store/useStore'
import { useUserStore } from '@/store/useUserStore'
import cs from 'classnames'
import { useRouter } from 'next/dist/client/router'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { OAuthChannel } from '@/lib/enums'
import { toCdnImgPath } from '@/utils'
import useStorage from '@/utils/useStorage'

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
    reset,
    setValue,
  } = useForm<Inputs>()
  const router = useRouter()
  const [isRemember, setIsRemember] = useStorage('isRemember', false)
  const [cacheAcc, setCacheAcc] = useStorage('cacheAcc', '')

  const isShowLoginPopup = useStore((s) => s.isShowLoginPopup)
  const toggleLoginPopup = useStore((s) => s.toggleLoginPopup)
  const { handler: doOAuthLogin } = useOAuthLogin()

  useEffect(() => {
    if (isShowLoginPopup) {
      setValue('acc', cacheAcc)
    }
  }, [cacheAcc, setValue, isShowLoginPopup])

  const setTokenInfo = useUserStore((s) => s.setTokenInfo)
  const handleOAuthLogin = async (channel: OAuthChannel) => {
    const res = await doOAuthLogin(channel)
    if (res?.ok) {
      location.href = res?.data
    }
  }
  const onSubmit = handleSubmit(async (d) => {
    const res = await login({
      email: d.acc,
      password: d.pw,
      type: 1,
    })
    if (res && !res.code) {
      setCacheAcc(isRemember ? d.acc : '')
      setTokenInfo({
        accessToken: res.accessToken,
        refreshToken: res.refreshToken,
        expiresIn: res.expiresIn,
      })
      reset({ acc: '', pw: '' })
      toggleLoginPopup()
      alert('登入成功')
      if (router.query.to) {
        router.push(router.query.to as string)
      }
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
            <div
              className="border border-gray-500 rounded px-2 h-10 flex items-center cursor-pointer bg-purple-100 hover:bg-purple-200"
              onClick={() => handleOAuthLogin(OAuthChannel.Google)}
            >
              <img src={toCdnImgPath('/icon_loginGoogle.png')} alt="" />
              <div className="flex-1 text-center">Google登入</div>
            </div>
            <div
              className="border border-gray-500 rounded px-2 h-10 flex items-center cursor-pointer bg-purple-100 hover:bg-purple-200"
              // onClick={() => handleOAuthLogin(OAuthChannel.Google)}
            >
              <img src={toCdnImgPath('/icon_loginApple.png')} alt="" />
              <div className="flex-1 text-center">Apple ID登入</div>
            </div>
            <div
              className="border border-gray-500 rounded px-2 h-10 flex items-center cursor-pointer bg-purple-100 hover:bg-purple-200"
              onClick={() => handleOAuthLogin(OAuthChannel.Facebook)}
            >
              <img src={toCdnImgPath('/icon_loginFacebook.png')} alt="" />
              <div className="flex-1 text-center">facebook登入</div>
            </div>
            <div
              className="border border-gray-500 rounded px-2 h-10 flex items-center cursor-pointer bg-purple-100 hover:bg-purple-200"
              onClick={() => handleOAuthLogin(OAuthChannel.Line)}
            >
              <img src={toCdnImgPath('/icon_loginLine.png')} alt="" />
              <div className="flex-1 text-center">Line登入</div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex flex-col">
              <label htmlFor="">會員帳號</label>
              <input
                type="email"
                className="rounded py-1.5"
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
                <input
                  type="checkbox"
                  className="rounded"
                  checked={isRemember}
                  onChange={(e) => setIsRemember(e.target.checked)}
                />
                <span className="text-sm">記住我的帳號</span>
              </label>
              <div className="underline cursor-pointer hover:no-underline">
                忘記密碼
              </div>
            </div>
            <div className="pt-5 space-y-2 lg:space-y-0">
              <button className="btn active w-full" onClick={onSubmit}>
                登入
              </button>
              <button
                className="btn w-full lg:hidden"
                onClick={toggleLoginPopup}
              >
                取消
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
