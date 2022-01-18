import { OAuthChannel, YesNo } from '@/lib/enums'
import useLogin from '@/services/useLogin'
import useOAuthLogin from '@/services/useOAuthLogin'
import usePopupStore from '@/store/usePopupStore'
import { useUserStore } from '@/store/useUserStore'
import { toCdnUrl } from '@/utils'
import useStorage from '@/utils/useStorage'
import cs from 'classnames'
import { useRouter } from 'next/dist/client/router'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import qs from 'query-string'
import useAppleState from '@/services/useAppleState'
import AppleLogin from 'react-apple-login'
import { useStore } from '@/store/useStore'
import Link from 'next/link'
import LoadingCover from './LoadingCover'
import { CgSpinnerTwo } from 'react-icons/cg'

type Inputs = {
  phone: string
  pw: string
}

export default function LoginPopup() {
  const [appleState, setAppleState] = useState('')
  const { handler: login, isLoading } = useLogin()
  const apiBaseUrl = useStore((s) => s.apiBaseUrl)
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

  const isShow = usePopupStore((s) => s.login.isShow)
  const onToggle = usePopupStore((s) => s.login.onToggle)
  const { handler: doOAuthLogin } = useOAuthLogin()
  const { handler: doGetAppleState } = useAppleState()

  const backUrl = `${location.protocol}//${location.host}?${qs.stringify({
    to: router.query.to,
  })}`

  useEffect(() => {
    if (isShow) {
      setValue('phone', cacheAcc)
    }
  }, [cacheAcc, setValue, isShow])

  const setTokenInfo = useUserStore((s) => s.setTokenInfo)
  const handleAppleLogin = async () => {
    const res = await doGetAppleState({
      backUrl,
    })
    if (res?.data) {
      setAppleState(res.data)
      setTimeout(() => {
        const btn = document.querySelector('#appleid-signin') as HTMLDivElement
        btn.click()
      })
    }
  }
  const handleOAuthLogin = async (channel: OAuthChannel) => {
    // const backUrl = `${location.protocol}//${location.host}/${router.query.to}`

    const res = await doOAuthLogin(channel, {
      autoRedirect: YesNo.No,
      backUrl,
    })
    if (res?.ok) {
      location.href = res?.data
    }
  }
  const onSubmit = handleSubmit(async (d) => {
    const res = await login({
      cellphone: `886-${d.phone.substring(1)}`,
      password: d.pw,
      type: 1,
    })
    if (res && !res.code) {
      setCacheAcc(isRemember ? d.phone : '')
      setTokenInfo({
        accessToken: res.accessToken,
        refreshToken: res.refreshToken,
        expiresIn: res.expiresIn,
      })
      reset({ phone: '', pw: '' })
      onToggle()
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
        isShow ? 'visible opacity-100' : 'invisible opacity-0',
      )}
      onMouseDown={onToggle}
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
            {/* <div
              className="border border-gray-500 rounded px-2 h-10 flex items-center cursor-pointer bg-purple-100 hover:bg-purple-200"
              onClick={() => handleOAuthLogin(OAuthChannel.Google)}
            >
              <img src={toCdnUrl('/icon_loginGoogle.png')} alt="" />
              <div className="flex-1 text-center">Google登入</div>
            </div> */}
            <div
              className="border border-gray-500 rounded px-2 h-10 flex items-center cursor-pointer bg-purple-100 hover:bg-purple-200"
              // onClick={() => handleOAuthLogin(OAuthChannel.Google)}
            >
              <img src={toCdnUrl('/icon_loginApple.png')} alt="" />
              <div className="flex-1 text-center" onClick={handleAppleLogin}>
                Apple ID登入
              </div>
              <div hidden>
                <AppleLogin
                  clientId="com.Rich.MegaRich.Service"
                  redirectURI={`${apiBaseUrl}/api/v1/apple/auth`}
                  scope="email name"
                  state={appleState}
                  usePopup={false}
                  responseMode="form_post"
                />
              </div>
            </div>
            <div
              className="border border-gray-500 rounded px-2 h-10 flex items-center cursor-pointer bg-purple-100 hover:bg-purple-200"
              onClick={() => handleOAuthLogin(OAuthChannel.Facebook)}
            >
              <img src={toCdnUrl('/icon_loginFacebook.png')} alt="" />
              <div className="flex-1 text-center">facebook登入</div>
            </div>
            <div
              className="border border-gray-500 rounded px-2 h-10 flex items-center cursor-pointer bg-purple-100 hover:bg-purple-200"
              onClick={() => handleOAuthLogin(OAuthChannel.Line)}
            >
              <img src={toCdnUrl('/icon_loginLine.png')} alt="" />
              <div className="flex-1 text-center">Line登入</div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex flex-col">
              <label htmlFor="">手機號碼</label>
              <div className="flex gap-2">
                <select className="rounded py-1.5">
                  <option>886</option>
                </select>
                <input
                  type="text"
                  className="rounded py-1.5 flex-1"
                  {...register('phone', {
                    required: { value: true, message: '不可為空' },
                    pattern: {
                      value: /^09\d{2}(\d{6}|-\d{3}-\d{3})$/,
                      message: '格式不符, ex: 0921222333',
                    },
                  })}
                />
              </div>
              {errors.phone && (
                <div className="text-sm text-red-500">
                  {errors.phone.message}
                </div>
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
              <Link href="/forget-pw">
                <a className="underline hover:no-underline">忘記密碼</a>
              </Link>
            </div>
            <div className="pt-5 space-y-2 lg:space-y-0">
              {isLoading ? (
                <button className="btn active w-full" disabled>
                  登入中 <CgSpinnerTwo className="animate-spin ml-2" />
                </button>
              ) : (
                <button className="btn active w-full" onClick={onSubmit}>
                  登入
                </button>
              )}

              <button className="btn w-full lg:hidden" onClick={onToggle}>
                取消
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
