import { FieldValues, useController, UseControllerProps } from 'react-hook-form'

interface Props<T extends FieldValues> extends UseControllerProps<T> {}

const gifts = [
  {
    id: 5377,
    img: '/images/recharge/gift04.jpg',
    title: '頭家財金包',
    price: 880,
    content: `
    新角色*1--雷神
    抽 金幣 50000 到 200000不等`,
  },
  {
    id: 5378,
    img: '/images/recharge/gift05.jpg',
    title: '有錢真旺包',
    price: 2880,
    content: `
    新角色*1--美人魚
    抽 金幣100000 到 1000000`,
  },
  {
    id: 5379,
    img: '/images/recharge/gift06.jpg',
    title: '財運滿袋包',
    price: 5880,
    content: `
    新角色*1--趙雲
    抽 金幣200000 到 2500000`,
  },
]
function GiftPkgSelector<T extends FieldValues>({ ...restProps }: Props<T>) {
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
              售價：{g.price} <br />
              內容物：
              <span className="whitespace-pre-wrap">{g.content}</span>
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

export default GiftPkgSelector
