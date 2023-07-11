import LogoBox from '@/components/LogoBox'
import PageLayout from '@/components/PageLayout'
import useAuth from '@/hooks/useAuth'
import usePwUpdate from '@/services/usePwUpdate'
import useSms from '@/services/useSms'
import useUserDelete from '@/services/useUserDelete'
import { useUserStore } from '@/store/useUserStore'
import useAuthPage from '@/utils/useAuthPage'
import { trim } from 'lodash'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useInterval } from 'usehooks-ts'

type Inputs = {
  nickname: string
  uid: string
  confirm: boolean
}

function DeleteAccPage() {
  const user = useAuthPage()
  const token = useUserStore((s) => s.tokenInfo?.accessToken)

  const [count, setCount] = useState(0)
  useInterval(() => {
    if (count > 0) {
      setCount((c) => c - 1)
    }
  }, 1000)
  useAuth()
  const { handler: doDelete, isLoading } = useUserDelete()

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<Inputs>()
  const onSubmit = handleSubmit(async (d) => {
    try {
      const res = await doDelete({
        provider: '1',
        accessToken: token || '',
      })
      if (res?.ok) {
        alert('帳號已刪除')
        reset()
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
                        <label htmlFor="nickname" className="control-label">
                          玩家暱稱
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="nickname"
                          placeholder="請輸入玩家暱稱"
                          {...register('nickname', {
                            required: { value: true, message: '不可為空' },
                          })}
                        />
                        {errors.nickname && (
                          <div className="text-danger">
                            {errors.nickname.message}
                          </div>
                        )}
                        <label htmlFor="uid" className="control-label">
                          UID
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="uid"
                          placeholder="請輸入UID"
                          {...register('uid', {
                            required: { value: true, message: '不可為空' },
                          })}
                        />
                        {errors.uid && (
                          <div className="text-danger">
                            {errors.uid.message}
                          </div>
                        )}
                        <br />
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
      </div>
    </PageLayout>
  )
}

export default DeleteAccPage
