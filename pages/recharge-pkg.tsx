import LogoBox from '@/components/LogoBox'
import PageLayout from '@/components/PageLayout'
import useSWSerialExchange from '@/services/useSWSerialExchange'
import { useForm } from 'react-hook-form'

type Inputs = {
  serialNum: string
  password: string
}

function ContactOkPage() {
  const { handler: doSWExchange, isLoading: isSWLoading } =
    useSWSerialExchange()
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<Inputs>()

  const onReset = () => reset({ serialNum: '', password: '' })

  const onSubmit = handleSubmit(async (d) => {
    try {
      const res = await doSWExchange({
        serialNum: d.serialNum.trim(),
        password: d.password.trim(),
      })
      if (res?.ok) {
        alert('智冠序號兌換成功')
        onReset()
      } else {
        alert('兌換失敗')
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
            src="/images/recharge/header_recharge.jpg"
            alt=""
            className="img-responsive center-block hidden-xs"
          />
          <img
            src="/images/recharge/header_phone_recharge.jpg"
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
            src="/images/recharge/title_giftcard.png"
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
                    <h2 className="text-center">序號開通</h2>
                    <hr />
                    <form className="form-horizontal" role="form">
                      <div className="form-group input-group-lg">
                        <label htmlFor="number" className="control-label">
                          請輸入兌換序號
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="輸入時請留意，序號前不可有空白鍵"
                          id="number"
                          {...register('serialNum', { required: '不可為空' })}
                        />
                        {errors.serialNum && (
                          <div className="text-danger">
                            {errors.serialNum.message}
                          </div>
                        )}
                      </div>
                      <div className="form-group input-group-lg">
                        <label htmlFor="Password" className="control-label">
                          請輸入兌換密碼
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="Password"
                          placeholder="輸入時請留意，密碼前不可有空白鍵"
                          {...register('password', { required: '不可為空' })}
                        />
                        {errors.password && (
                          <div className="text-danger">
                            {errors.password.message}
                          </div>
                        )}
                        <br />
                        <button
                          type="button"
                          className="btn btn-default btn-lg btn-50"
                          onClick={onReset}
                        >
                          取消
                        </button>
                        <button
                          type="button"
                          className="btn btn-default btn-lg btn-50"
                          onClick={onSubmit}
                        >
                          確認兌換
                        </button>
                        <hr className="float-none" />
                      </div>
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

export default ContactOkPage
