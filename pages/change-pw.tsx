import LogoBox from '@/components/LogoBox'
import PageLayout from '@/components/PageLayout'
import useAuth from '@/hooks/useAuth'
import usePwUpdate from '@/services/usePwUpdate'
import useSms from '@/services/useSms'
import useAuthPage from '@/utils/useAuthPage'
import { trim } from 'lodash'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useInterval } from 'usehooks-ts'

type Inputs = {
  pwType: 'login' | 'trade'
  code: string
  new_pw: string
  new_pw_confirm: string
}

function ChangePwPage() {
  const user = useAuthPage()

  const [count, setCount] = useState(0)
  useInterval(() => {
    if (count > 0) {
      setCount((c) => c - 1)
    }
  }, 1000)
  useAuth()
  const { handler: doUpdate, isLoading } = usePwUpdate()

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
      userID: user?.id,
    })
    if (!res?.ok) {
      if (res?.code === '403001') {
        return alert('帳號無手機')
      }
      return alert('發送失敗')
    }
    if (res?.sendSuccess) {
      alert('簡訊已發送')
      setCount(60)
    }
  }
  const onSubmit = handleSubmit(async (d) => {
    try {
      const res = await doUpdate({
        answer: trim(d.code),
        [d.pwType === 'login' ? 'newPassword' : 'newSecondPassword']: trim(
          d.new_pw,
        ),
      })
      if (res?.ok) {
        alert('密碼更新成功')
        reset()
      } else {
        alert('更新失敗')
      }
    } catch (err) {
      console.log(err)
    }
  })
  return (
    <PageLayout>
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
            src="/images/member/title_user.png"
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
                        <label htmlFor="Password" className="control-label">
                          請選擇要修改的密碼
                        </label>
                        <br />
                        {/* <label className="radio-inline">
                          <input
                            type="radio"
                            id="optionsRadios1"
                            value="login"
                            {...register('pwType', { required: '不可為空' })}
                            defaultChecked
                          />
                          修改密碼
                        </label> */}
                        <label className="radio-inline">
                          <input
                            type="radio"
                            id="optionsRadios2"
                            value="trade"
                            {...register('pwType', { required: '不可為空' })}
                            defaultChecked
                          />{' '}
                          修改二次密碼
                        </label>
                        <hr />
                        <label htmlFor="Password" className="control-label">
                          請設置8-12位新密碼，支援英文及數字
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="Password"
                          placeholder="請設置8-12位新密碼，支援英文及數字"
                          {...register('new_pw', {
                            required: { value: true, message: '不可為空' },
                            pattern: {
                              value: /^\w{8,12}$/,
                              message: '須為中英文8~12位',
                            },
                          })}
                        />
                        {errors.new_pw && (
                          <div className="text-danger">
                            {errors.new_pw.message}
                          </div>
                        )}
                        <label htmlFor="Password2" className="control-label">
                          請再次輸入新密碼
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="Password2"
                          placeholder="請再次輸入新密碼"
                          {...register('new_pw_confirm', {
                            required: { value: true, message: '不可為空' },
                            validate: (val) => {
                              const ok = val === watch('new_pw')
                              return ok ? ok : '與新密碼不同'
                            },
                          })}
                        />
                        {errors.new_pw_confirm && (
                          <div className="text-danger">
                            {errors.new_pw_confirm.message}
                          </div>
                        )}
                        <label htmlFor="verify" className="control-label">
                          簡訊驗證碼
                        </label>
                        <br />
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
                          <span hidden={!count}>({count}s)</span>
                        </button>
                        {errors.code && (
                          <div className="text-danger">
                            {errors.code.message}
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
                        取消修改
                      </button>
                      <button
                        type="button"
                        className="btn btn-default btn-lg btn-50"
                        onClick={onSubmit}
                      >
                        確認修改
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
      </div>
    </PageLayout>
  )
}

export default ChangePwPage
