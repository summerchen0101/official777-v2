import { toCurrency } from '@/utils'
import { takeRight } from 'lodash'
import { FieldValues, useController, UseControllerProps } from 'react-hook-form'

export interface LuckyPkg {
  id: number
  img: string
  title: string
  price: number
  content: string
  coinRates: {
    amount: number
    multiply: number
    rate: number
  }[]
}
interface Props<T extends FieldValues> extends UseControllerProps<T> {
  list: LuckyPkg[]
}

function LuckyPkgSelector<T extends FieldValues>({
  list = [],
  ...restProps
}: Props<T>) {
  const {
    field,
    fieldState: { error },
  } = useController(restProps)

  return (
    <div className="sub_content_all">
      {list.map((g) => (
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
