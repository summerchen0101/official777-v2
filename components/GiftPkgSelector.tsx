import { FieldValues, useController, UseControllerProps } from 'react-hook-form'

export interface GiftPkg {
  id: number
  img: string
  title: string
  price: number
  content: string
  hidden?: boolean
}
interface Props<T extends FieldValues> extends UseControllerProps<T> {
  list: GiftPkg[]
}

function GiftPkgSelector<T extends FieldValues>({
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
