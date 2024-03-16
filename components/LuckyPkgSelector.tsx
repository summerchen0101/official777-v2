import { toCurrency } from '@/utils'
import { takeRight } from 'lodash'
import { FieldValues, useController, UseControllerProps } from 'react-hook-form'

interface Props<T extends FieldValues> extends UseControllerProps<T> {}

const gifts = [
  {
    id: 5374,
    img: '/images/recharge/lucky01.png',
    title: '寶貝開運包',
    price: 2998,
    content: `一星威利卡X1`,
    coinRates: [
      { amount: 330000, multiply: 110, rate: 30 },
      { amount: 360000, multiply: 120, rate: 25 },
      { amount: 390000, multiply: 130, rate: 20 },
      { amount: 450000, multiply: 150, rate: 15 },
      { amount: 600000, multiply: 200, rate: 7.5 },
      { amount: 900000, multiply: 300, rate: 2.4 },
      { amount: 1500000, multiply: 500, rate: 0.1 },
    ],
  },
  {
    id: 5375,
    img: '/images/recharge/lucky02.png',
    title: '九尾傾城包',
    price: 19998,
    content: `一星超級卡X1`,
    coinRates: [
      { amount: 2200000, multiply: 110, rate: 30 },
      { amount: 2400000, multiply: 120, rate: 25 },
      { amount: 2600000, multiply: 130, rate: 20 },
      { amount: 3000000, multiply: 150, rate: 15 },
      { amount: 4000000, multiply: 200, rate: 7.5 },
      { amount: 6000000, multiply: 300, rate: 2.4 },
      { amount: 10000000, multiply: 500, rate: 0.1 },
    ],
  },
  {
    id: 5376,
    img: '/images/recharge/lucky03.png',
    title: '雷神降臨包',
    price: 49998,
    content: `一星超級卡X1`,
    coinRates: [
      { amount: 5500000, multiply: 110, rate: 30 },
      { amount: 6000000, multiply: 120, rate: 25 },
      { amount: 6500000, multiply: 130, rate: 20 },
      { amount: 7500000, multiply: 150, rate: 15 },
      { amount: 10000000, multiply: 200, rate: 7.5 },
      { amount: 15000000, multiply: 300, rate: 2.4 },
      { amount: 25000000, multiply: 500, rate: 0.1 },
    ],
  },
]
function LuckyPkgSelector<T extends FieldValues>({ ...restProps }: Props<T>) {
  const {
    field,
    fieldState: { error },
  } = useController(restProps)

  return (
    <div className="sub_content_all">
      {gifts.map((g) => (
        <div
          className="crad-box-new"
          key={g.title}
          hidden={field.value && g.id !== field.value}
        >
          <div className="gift-img">
            <img src={g.img} alt="" className="img-responsive center-block" />
          </div>
          <div className="gift-text">
            <div className="title-left">
              <h4>{g.title}</h4>
            </div>
            {/* <div className="title-right">
              <img
                src="/images/recharge/gift_tag.png"
                alt=""
                className="img-responsive pull-right"
              />
            </div> */}
            <hr className="float-none" />
            <hr />
            <p>
              售價：{g.price} <br />
              內容物：
              <div>{g.content}</div>
              <div>
                隨機數量的金幣({toCurrency(g.coinRates[0]?.amount, 0)}~
                {toCurrency(g.coinRates[g.coinRates.length - 1]?.amount, 0)})
              </div>
              <br />
              詳細資訊：
              <div>
                {g.coinRates.map(
                  (t, i) =>
                    (i !== 0 ? '、' : '') +
                    `${toCurrency(t.amount, 0)}金幣(${t.rate}%)`,
                )}
              </div>
            </p>
            <br />
            {!field.value ? (
              <button
                type="button"
                className="btn btn-default btn-lg btn-100"
                onClick={() => field.onChange(g.id)}
              >
                立即購買
              </button>
            ) : null}
          </div>
          <hr className="float-none" />
        </div>
      ))}

      <hr className="float-none" />
      {error?.message && <div className="text-danger">{error?.message}</div>}
    </div>
  )
}

export default LuckyPkgSelector
