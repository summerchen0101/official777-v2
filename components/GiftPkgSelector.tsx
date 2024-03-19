import { FieldValues, useController, UseControllerProps } from 'react-hook-form'

interface Props<T extends FieldValues> extends UseControllerProps<T> {}

const gifts = [
  {
    id: 5371,
    img: '/images/recharge/gift01.png',
    title: '大頭家歡樂包',
    price: 3888,
    content: `
    金龍碎片*5
    官將首角色`,
  },
  {
    id: 5372,
    img: '/images/recharge/gift02.png',
    title: '超值豪爽包',
    price: 8880,
    content: `
    金龍碎片*11
    1星超級卡
    雷神角色`,
  },
  {
    id: 5373,
    img: '/images/recharge/gift03.png',
    title: '金龍豐收包',
    price: 16800,
    content: `
    金龍碎片*22
    1星超級卡
    趙雲角色`,
  },
  {
    id: 6002,
    img: '/images/recharge/gift04.jpg',
    title: '頭家財金包',
    price: 880,
    content: `
    新角色*1--雷神
    抽 金幣 50000 到 200000不等`,
  },
  {
    id: 6003,
    img: '/images/recharge/gift05.jpg',
    title: '有錢真旺包',
    price: 2880,
    content: `
    新角色*1--美人魚
    抽 金幣100000 到 1000000`,
  },
  {
    id: 6004,
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
