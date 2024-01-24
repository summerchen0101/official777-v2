import LogoBox from '@/components/LogoBox'
import PageLayout from '@/components/PageLayout'
import useSWSerialExchange from '@/services/useSWSerialExchange'
import useAuthPage from '@/utils/useAuthPage'
import { useForm } from 'react-hook-form'

type Inputs = {
  serialNum: string
  password: string
}

function RechargeGiftPage() {
  useAuthPage()
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
            src="/images/recharge/title_gift.png"
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
                    <hr className="float-none" />
                    <div className="sub_content_all">
                      <div className="crad-box-new">
                        <div className="gift-img">
                          <img
                            src="/images/recharge/gift01.png"
                            alt=""
                            className="img-responsive center-block"
                          />
                        </div>
                        <div className="gift-text">
                          <div className="title-left">
                            <h4>大頭家歡樂包</h4>
                          </div>
                          <div className="title-right">
                            <img
                              src="/images/recharge/gift_tag.png"
                              alt=""
                              className="img-responsive pull-right"
                            />
                          </div>
                          <hr className="float-none" />
                          <hr />
                          <p>
                            售價：3888 <br />
                            內容物：
                            <br />
                            金龙碎片*5
                            <br />
                            官將首角色
                          </p>
                          <br />
                          <button
                            type="button"
                            className="btn btn-default btn-lg btn-100"
                          >
                            立即購買
                          </button>
                        </div>
                        <hr className="float-none" />
                      </div>
                      <div className="crad-box-new">
                        <div className="gift-img">
                          <img
                            src="/images/recharge/gift02.png"
                            alt=""
                            className="img-responsive center-block"
                          />
                        </div>
                        <div className="gift-text">
                          <div className="title-left">
                            <h4>超值豪爽包</h4>
                          </div>
                          <div className="title-right">
                            <img
                              src="/images/recharge/gift_tag.png"
                              alt=""
                              className="img-responsive pull-right"
                            />
                          </div>
                          <hr className="float-none" />
                          <hr />
                          <p>
                            售價：8880
                            <br />
                            內容物：
                            <br />
                            金龙碎片*11
                            <br />
                            1 星超級卡
                            <br />
                            雷神角色
                          </p>
                          <br />
                          <button
                            type="button"
                            className="btn btn-default btn-lg btn-100"
                          >
                            立即購買
                          </button>
                        </div>
                        <hr className="float-none" />
                      </div>
                      <div className="crad-box-new">
                        <div className="gift-img">
                          <img
                            src="/images/recharge/gift03.png"
                            alt=""
                            className="img-responsive center-block"
                          />
                        </div>
                        <div className="gift-text">
                          <div className="title-left">
                            <h4>金龍豐收包</h4>
                          </div>
                          <div className="title-right">
                            <img
                              src="/images/recharge/gift_tag.png"
                              alt=""
                              className="img-responsive pull-right"
                            />
                          </div>
                          <hr className="float-none" />
                          <hr />
                          <p>
                            售價：16800
                            <br />
                            內容物：
                            <br />
                            金龙碎片*22
                            <br />
                            1 星超級卡
                            <br />
                            趙雲角色
                          </p>
                          <br />
                          <button
                            type="button"
                            className="btn btn-default btn-lg btn-100"
                          >
                            立即購買
                          </button>
                        </div>
                        <hr className="float-none" />
                      </div>
                      <hr className="float-none" />
                    </div>
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

export default RechargeGiftPage
