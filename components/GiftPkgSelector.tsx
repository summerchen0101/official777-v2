import { FieldValues, useController, UseControllerProps } from 'react-hook-form'

interface Props<T extends FieldValues> extends UseControllerProps<T> {}

function GiftPkgSelector<T extends FieldValues>({ ...restProps }: Props<T>) {
  const {
    field,
    fieldState: { error },
  } = useController(restProps)

  return (
    <div className="sub_content_all">
      <div className="crad-box-new" onClick={() => field.onChange(5371)}>
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
          {/* <button type="button" className="btn btn-default btn-lg btn-100">
            立即購買
          </button> */}
          <div className="text-right">
            <input
              type="radio"
              checked={5371 === field.value}
              onChange={() => {}}
            />
          </div>
        </div>
        <hr className="float-none" />
      </div>
      <div className="crad-box-new" onClick={() => field.onChange(5372)}>
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
          {/* <button type="button" className="btn btn-default btn-lg btn-100">
            立即購買
          </button> */}
          <div className="text-right">
            <input
              type="radio"
              checked={5372 === field.value}
              onChange={() => {}}
            />
          </div>
        </div>
        <hr className="float-none" />
      </div>
      <div className="crad-box-new" onClick={() => field.onChange(5373)}>
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
          {/* <button type="button" className="btn btn-default btn-lg btn-100">
            立即購買
          </button> */}
          <div className="text-right">
            <input
              type="radio"
              checked={5373 === field.value}
              onChange={() => {}}
            />
          </div>
        </div>
        <hr className="float-none" />
      </div>
      <hr className="float-none" />
      {error?.message && <div className="text-danger">{error?.message}</div>}
    </div>
  )
}

export default GiftPkgSelector
