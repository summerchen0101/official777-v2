import { useRouter } from 'next/dist/client/router'

type Props = {
  onClick: () => void
}
function PaymentWinPopup({ onClick }: Props) {
  return (
    <div
      className="hw-overlay2"
      id="paymentWin"
      onClick={() => {
        onClick()
        $('#paymentWin').fadeOut()
      }}
    >
      <div className="hw-layer-wrap2">
        <div className="hw-layer-wrap2-header">
          <h1 className="text-center">開啟支付頁面</h1>
        </div>
        <div className="hw-content2">
          <button
            type="button"
            className="btn btn-default pop-btn-login btn-lg"
          >
            確定
          </button>
        </div>
      </div>
    </div>
  )
}

export default PaymentWinPopup
