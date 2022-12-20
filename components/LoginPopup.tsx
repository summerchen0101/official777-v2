import useCdnUrl from '@/hooks/useCdnUrl'
import useStorage from '@/hooks/useStorage'
import { OAuthChannel, YesNo } from '@/lib/enums'
import useAppleState from '@/services/useAppleState'
import useOAuthLogin from '@/services/useOAuthLogin'
import useSendSms from '@/services/useSendSms'
import useSmsLogin from '@/services/useSmsLogin'
import usePopupStore from '@/store/usePopupStore'
import { useStore } from '@/store/useStore'
import { useUserStore } from '@/store/useUserStore'
import { StringMap } from '@/types'
import cs from 'classnames'
import { trimStart } from 'lodash'
import { useRouter } from 'next/dist/client/router'
import qs from 'query-string'
import { useEffect, useState } from 'react'
import AppleLogin from 'react-apple-login'
import { useForm } from 'react-hook-form'
import { useInterval } from 'usehooks-ts'
import LoadingCover from './LoadingCover'

type Inputs = {
  phoneCode: string
  phone: string
  code: string
}
{
  /* 1 (美國)
                    60 (馬來西亞)
                    852 (香港) */
}
const phoneCodeMap: StringMap = {
  1: '1(美國)',
  60: '60(馬來西亞)',
  852: '852(香港)',
  886: '886(台灣)',
}

export default function LoginPopup() {
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
  } = useForm<Inputs>()
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

  const { handler: login, isLoading } = useSmsLogin()
  const onSubmit = handleSubmit(async (d) => {
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
      if (router.query.to) {
        router.push(router.query.to as string)
      }
    } else {
      alert('登入失敗')
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
        className="w-full h-full lg:h-auto lg:w-[400px] bg-white lg:rounded-xl overflow-hidden border border-purple-800/90"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="text-white text-2xl bg-purple-800 text-center py-2">
          登入
        </div>
        <LoadingCover
          isLoading={isLoading || isOAuthLoading || isAppleStateLoading}
        >
          <div className="p-4 grid grid-cols-1 gap-4 items-center">
            <div className="space-y-2 p-6">
              <div className="border border-gray-500 rounded px-2 h-10 flex items-center cursor-pointer bg-purple-100 hover:bg-purple-200">
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
              {/* <div
                className="border border-gray-500 rounded px-2 h-10 flex items-center cursor-pointer bg-purple-100 hover:bg-purple-200"
                onClick={() => handleOAuthLogin(OAuthChannel.Facebook)}
              >
                <img src={toCdnUrl('/icon_loginFacebook.png')} alt="" />
                <div className="flex-1 text-center">facebook登入</div>
              </div> */}
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
                  <select
                    className="rounded py-1.5"
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
                  <input
                    type="text"
                    className="rounded py-1.5 flex-1"
                    {...register('phone', {
                      required: { value: true, message: '不可為空' },
                      // pattern: {
                      //   value: /^09\d{2}(\d{6}|-\d{3}-\d{3})$/,
                      //   message: '格式不符, ex: 0921222333',
                      // },
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
                <label htmlFor="">簡訊驗證碼</label>
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    className="rounded py-1.5 flex-1 w-32"
                    {...register('code', {
                      required: { value: true, message: '不可為空' },
                    })}
                    placeholder="請輸入驗證碼"
                  />
                  <div>
                    <button
                      type="button"
                      className="btn btn-sm w-max"
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
                {/* <Link href="/forget-pw">
                  <a className="underline hover:no-underline">忘記密碼</a>
                </Link> */}
              </div>
              <div className="pt-5 space-y-2 lg:space-y-0">
                <button className="btn active w-full" onClick={onSubmit}>
                  登入
                </button>
                <button className="btn w-full lg:hidden" onClick={onToggle}>
                  取消
                </button>
              </div>
            </div>
          </div>
        </LoadingCover>
      </div>
    </div>
  )
}
