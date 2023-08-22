import LogoBox from '@/components/LogoBox'
import PageLayout from '@/components/PageLayout'
import useAuth from '@/hooks/useAuth'
import qs from 'query-string'
import { LoginProvider, LoginViaType, OAuthChannel, YesNo } from '@/lib/enums'
import useAppleState from '@/services/useAppleState'
import useOAuthLogin from '@/services/useOAuthLogin'
import useUserDelete from '@/services/useUserDelete'
import { useStore } from '@/store/useStore'
import { useUserStore } from '@/store/useUserStore'
import useAuthPage from '@/utils/useAuthPage'
import { useRouter } from 'next/dist/client/router'
import { useEffect, useState } from 'react'
import AppleLogin from 'react-apple-login'
import { useForm } from 'react-hook-form'
import { useInterval } from 'usehooks-ts'
import { queryPlusQuery } from '@/utils'

type Inputs = {
  confirm: boolean
}

function DeleteAccPage() {
  const user = useAuthPage()
  const [appleState, setAppleState] = useState('')
  const router = useRouter()
  const token = useUserStore((s) => s.tokenInfo?.accessToken)
  const provider = useUserStore((s) => s.provider)
  const setLoginViaType = useUserStore((s) => s.setLoginViaType)
  const { handler: doOAuthLogin, isLoading: isOAuthLoading } = useOAuthLogin()
  const { handler: doGetAppleState, isLoading: isAppleStateLoading } =
    useAppleState()

  const backUrl = queryPlusQuery(location.href, { confirm: 'yes' })

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

  const [count, setCount] = useState(0)
  useInterval(() => {
    if (count > 0) {
      setCount((c) => c - 1)
    }
  }, 1000)
  useAuth()
  const { handler: doDelete, isLoading } = useUserDelete()
  const clearUser = useUserStore((s) => s.clearUser)
  const apiBaseUrl = useStore((s) => s.clientEnv.apiBaseUrl)
  const urlParams = new URLSearchParams(location.search)
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
    reset,
  } = useForm<Inputs>({
    defaultValues: {
      confirm: urlParams.has('confirm'),
    },
  })

  // useEffect(() => {
  //   if (user) {
  //     setValue('nickname', user.nickname)
  //     setValue('uid', user.id.toString())
  //   }
  // }, [user])
  const loginViaType = useUserStore((s) => s.loginViaType)
  const onSubmit = handleSubmit(async (d) => {
    // if (d.nickname !== user?.nickname || d.uid !== user.id.toString()) {
    //   alert('刪除資訊有誤，請再次確認')
    //   return
    // }

    if (
      loginViaType === LoginViaType.PHONE &&
      provider !== LoginProvider.MEGA
    ) {
      if (provider === LoginProvider.LINE) {
        await handleOAuthLogin(OAuthChannel.Line)
      }
      if (provider === LoginProvider.APPLE) {
        await handleAppleLogin()
      }
      return
    }

    if (!provider) return
    try {
      const res = await doDelete({
        provider: provider,
        accessToken: token || '',
      })
      if (res?.ok) {
        clearUser()
        router.push('/home')
        alert('帳號已刪除')
      } else {
        alert('帳號刪除失敗')
      }
    } catch (err) {
      console.log(err)
    }
  })
  return (
    <PageLayout pure>
      <header
        className="header-box wow fadeIn"
        data-wow-duration="2s"
        data-wow-delay="0.2s"
        id="header-box"
      >
        <LogoBox />
        <div className="content-box">
          <img
            src="/images/member/header_member.jpg"
            alt=""
            className="img-responsive center-block hidden-xs"
          />
          <img
            src="/images/member/header_phone_member.jpg"
            alt=""
            className="img-responsive center-block hidden visible-xs"
          />
        </div>
        <hr className="float-none" />
        <div className="gold-line-mini" />
        <div className="black-line" />
        <div className="gold-line" />
      </header>
      <div className="content">
        <div className="content-title-box">
          <img
            src="/images/member/title_delete.png"
            alt=""
            className="img-responsive center-block"
          />
        </div>
        <div className="tab-content-box">
          <div className="ranking-box">
            <div className="ranking-box-gold">
              <div className="ranking-box-goldline">
                <div className="ranking-box-black">
                  <div className="content-box">
                    <form className="form-horizontal" role="form">
                      <div className="form-group input-group-lg">
                        <label className="checkbox-inline">
                          <input
                            type="checkbox"
                            {...register('confirm', { required: '不可為空' })}
                          />
                          是，刪除用戶帳號及針對該帳號做停用服務；
                          帳號一經刪除後將無法恢復
                        </label>
                        {errors.confirm && (
                          <div className="text-danger">
                            {errors.confirm.message}
                          </div>
                        )}
                      </div>
                      <hr />
                      <br />
                      <button
                        type="button"
                        className="btn btn-default btn-lg btn-50"
                        onClick={() => reset()}
                      >
                        取消刪除
                      </button>
                      <button
                        type="button"
                        className="btn btn-default btn-lg btn-50"
                        onClick={onSubmit}
                      >
                        確認刪除
                      </button>
                      <hr className="float-none" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="float-none" />
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
    </PageLayout>
  )
}

export default DeleteAccPage
