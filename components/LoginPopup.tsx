import { StringMap } from '@/types'
import React from 'react'
import useCdnUrl from '@/hooks/useCdnUrl'
import useStorage from '@/hooks/useStorage'
import { LoginViaType, OAuthChannel, YesNo } from '@/lib/enums'
import useAppleState from '@/services/useAppleState'
import useOAuthLogin from '@/services/useOAuthLogin'
import useSendSms from '@/services/useSendSms'
import useSmsLogin from '@/services/useSmsLogin'
import usePopupStore from '@/store/usePopupStore'
import { useStore } from '@/store/useStore'
import { useUserStore } from '@/store/useUserStore'
import cs from 'classnames'
import { trimStart } from 'lodash'
import { useRouter } from 'next/dist/client/router'
import qs from 'query-string'
import { useEffect, useState } from 'react'
import AppleLogin from 'react-apple-login'
import { useForm } from 'react-hook-form'
import { useInterval } from 'usehooks-ts'

type LoginInputs = {
  phoneCode: string
  phone: string
  code: string
}

function LoginPopup() {
  const phoneCodeMap: StringMap = {
    1: '1(美國)',
    60: '60(馬來西亞)',
    852: '852(香港)',
    886: '886(台灣)',
  }

  const toCdnUrl = useCdnUrl()
  const [count, setCount] = useState(0)
  const { handler: sendSms, isLoading: isSmsLoading } = useSendSms()
  useInterval(() => {
    if (count > 0) {
      setCount((c) => c - 1)
    }
  }, 1000)
  const [appleState, setAppleState] = useState('')
  const apiBaseUrl = useStore((s) => s.clientEnv.apiBaseUrl)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    getValues,
    trigger,
  } = useForm<LoginInputs>()
  const router = useRouter()
  const [isRemember, setIsRemember] = useStorage('isRemember', false)
  const [cacheAcc, setCacheAcc] = useStorage('cacheAcc', '')

  const isShow = usePopupStore((s) => s.login.isShow)
  const onToggle = usePopupStore((s) => s.login.onToggle)
  const { handler: doOAuthLogin, isLoading: isOAuthLoading } = useOAuthLogin()
  const { handler: doGetAppleState, isLoading: isAppleStateLoading } =
    useAppleState()

  const backUrl = `${location.protocol}//${location.host}?${qs.stringify({
    to: router.query.to,
  })}`

  useEffect(() => {
    if (isShow) {
      reset({
        phone: cacheAcc,
        code: '',
      })
    }
  }, [cacheAcc, setValue, isShow])

  const setLoginViaType = useUserStore((s) => s.setLoginViaType)
  const setTokenInfo = useUserStore((s) => s.setTokenInfo)
  const handleAppleLogin = async () => {
    setLoginViaType(LoginViaType.APPLE)
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
    setLoginViaType(LoginViaType.LINE)
    const res = await doOAuthLogin(channel, {
      autoRedirect: YesNo.No,
      backUrl,
    })
    if (res?.ok) {
      router.push(res?.data)
    }
  }

  const onSendSms = async () => {
    const result = await trigger(['phone', 'phoneCode'], { shouldFocus: true })
    if (!result) return
    const res = await sendSms({
      countryCode: getValues('phoneCode'),
      cellphone: trimStart(getValues('phone'), '0'),
    })
    if (res?.ok) {
      alert('簡訊已發送')
      setCount(60)
    } else {
      alert('發送失敗')
    }
  }

  const closePopup = () => {
    setCount(0)
    $('#loginPopup').fadeOut()
  }

  const { handler: login, isLoading } = useSmsLogin()
  const onSubmit = handleSubmit(async (d) => {
    setLoginViaType(LoginViaType.PHONE)
    const res = await login({
      countryCode: d.phoneCode,
      cellphone: d.phone.replace(/^0+/, ''),
      digitCode: d.code,
      type: 1,
    })
    if (res?.ok) {
      setCacheAcc(isRemember ? d.phone : '')
      setTokenInfo({
        accessToken: res.accessToken,
        refreshToken: res.refreshToken,
        expiresIn: res.expiresIn,
      })
      reset({ phone: '' })
      onToggle()
      alert('登入成功')
      closePopup()
      if (router.query.to) {
        router.push(router.query.to as string)
      }
    } else {
      alert('登入失敗')
    }
  })

  return (
    <div className="hw-overlay2" id="loginPopup" onClick={() => closePopup()}>
      <div className="hw-layer-wrap2">
        <span className="glyphicon glyphicon-remove hwLayer-close2" />
        <div className="hw-layer-wrap2-header">
          <h1 className="text-center">登入</h1>
        </div>
        <div
          className="hw-content2"
          onClick={(e) => {
            e.stopPropagation()
          }}
        >
          <button
            type="button"
            className="btn btn-default pop-btn-lg"
            onClick={handleAppleLogin}
          >
            <img src="/images/icon_loginApple.png" alt="" />
            Apple ID登入
          </button>
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
          <button
            type="button"
            className="btn btn-default pop-btn-lg"
            onClick={() => handleOAuthLogin(OAuthChannel.Line)}
          >
            <img src="/images/icon_loginLine.png" alt="" />
            Line登入
          </button>
          <form className="form-horizontal" role="form">
            <div className="input-group pop-btn-lg2">
              <div className="input-group-btn2">
                <select
                  className="form-control2"
                  defaultValue="886"
                  {...register('phoneCode', {
                    required: { value: true, message: '不可為空' },
                  })}
                >
                  {Object.entries(phoneCodeMap).map(([key, label]) => (
                    <option key={key} value={key}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>
              {/* /btn-group */}
              <input
                type="text"
                className="input-group-btn3"
                {...register('phone', {
                  required: { value: true, message: '不可為空' },
                  // pattern: {
                  //   value: /^09\d{2}(\d{6}|-\d{3}-\d{3})$/,
                  //   message: '格式不符, ex: 0921222333',
                  // },
                })}
              />
              {errors.phone && (
                <div className="text-sm text-red-500">
                  {errors.phone.message}
                </div>
              )}
              <hr className="float-none" />
            </div>
            {/* /input-group */}
            <div className="pop-form-group">
              <label htmlFor="verify" className="col-lg-12 control-label">
                簡訊驗證碼
              </label>
              <div className="col-lg-12">
                <input
                  type="text"
                  className="form-control input-lg form-verify"
                  id="verify"
                  placeholder="請輸簡訊驗證碼"
                  {...register('code', {
                    required: { value: true, message: '不可為空' },
                  })}
                />
                <button
                  type="button"
                  className="btn btn-default btn-lg btn-verify"
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
                <hr className="float-none" />
              </div>
            </div>
            <button
              type="button"
              className="btn btn-default pop-btn-login btn-lg"
              onClick={onSubmit}
            >
              登入
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPopup
