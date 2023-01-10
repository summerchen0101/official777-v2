import LogoBox from '@/components/LogoBox'
import PageLayout from '@/components/PageLayout'
import RechargePointSelector from '@/components/RechargePointSelector'
import RechargeTelSelector from '@/components/RechargeTelSelector'
import { ItemType, MCPaymentType, PaymentGateway } from '@/lib/enums'
import useGoodsList from '@/services/useGoodsList'
import useMe from '@/services/useMe'
import useOrderCreate from '@/services/useOrderCreate'
import { StringMap } from '@/types'
import { useRouter } from 'next/dist/client/router'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

type Inputs = {
  productID: number
  telPay: number
  // gatewayCode: number
  // userID: number
}

const imgMap: StringMap = {
  [MCPaymentType.IN_GAME]: 'mc_giftcard',
  [MCPaymentType.COST_POINT]: 'mc_transfer',
  [MCPaymentType.ASIA_PACIFIC_MOBILE]: 'mc_tele',
  [MCPaymentType.CREDIT_CARD]: 'mc_credit',
  [MCPaymentType.FREE_POINT]: 'mc_coupon',
}
function ContactOkPage() {
  const [paymentType, setPaymentType] = useState(MCPaymentType.IN_GAME)

  const { list, isLoading: isListLoading } = useGoodsList({
    page: 1,
    perPage: 30,
    itemType: ItemType.All,
    paymentType,
    paymentGateway: PaymentGateway.MyCard,
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
    setValue,
    control,
  } = useForm<Inputs>({
    defaultValues: {
      productID: list?.[0].ItemId,
      telPay: MCPaymentType.ASIA_PACIFIC_MOBILE,
    },
  })

  useEffect(() => {
    if (list?.[0].ItemId) {
      setValue('productID', list?.[0].ItemId)
    }
  }, [list])

  const { data } = useMe()
  const { handler: doCreate, isLoading } = useOrderCreate()

  const router = useRouter()

  useEffect(() => {
    if (router.query.p) {
      setPaymentType(+router.query.p)
    }
  }, [router.query])

  const onSubmit = handleSubmit(async (d) => {
    const product = list?.find((t) => t.ItemId === d.productID)
    if (confirm(`充值 $${product?.Price}元是否確認?`)) {
      const res = await doCreate({
        productID: d.productID,
        gatewayCode: PaymentGateway.MyCard,
        userID: data?.id!,
        paymentType:
          paymentType === MCPaymentType.ASIA_PACIFIC_MOBILE
            ? d.telPay
            : paymentType,
      })
      if (res?.data.requestURL) {
        router.replace({
          pathname: '/',
          query: { to: res?.data.requestURL, msg: '跳轉中請稍候' },
        })
      }
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
        <div className="content-btn-box">
          {Object.entries(imgMap).map(([key, name]) => (
            <div key={key} className="btn-content-mycard">
              <a href="#" onClick={() => setPaymentType(+key as MCPaymentType)}>
                <img
                  src={`/images/recharge/${name}.png`}
                  alt=""
                  className="img-responsive center-block"
                />
              </a>
            </div>
          ))}

          <hr className="float-none" />
        </div>

        <div className="content-title-box">
          <img
            src={`/images/recharge/title_${imgMap[paymentType]}.png`}
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
                    <RechargePointSelector
                      list={list}
                      name="productID"
                      control={control}
                    />
                    <br />
                    {paymentType === MCPaymentType.ASIA_PACIFIC_MOBILE ? (
                      <RechargeTelSelector control={control} name="telPay" />
                    ) : null}

                    <p className="text-center">
                      <span className="glyphicon glyphicon-exclamation-sign" />
                      請注意！系統處理時間約5分鐘 ~
                      1小時才能完成遊戲入點，請耐心等候。
                    </p>
                    <br />
                    <form className="form-horizontal" role="form">
                      <button
                        type="button"
                        className="btn btn-default btn-lg btn-50"
                        onClick={() =>
                          reset({
                            productID: list?.[0].ItemId,
                            telPay: MCPaymentType.ASIA_PACIFIC_MOBILE,
                          })
                        }
                      >
                        取消
                      </button>
                      <button
                        type="button"
                        className="btn btn-default btn-lg btn-50"
                        onClick={onSubmit}
                      >
                        立即購買
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

export default ContactOkPage
