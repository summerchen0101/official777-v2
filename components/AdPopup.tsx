import { useRouter } from 'next/dist/client/router'

function AdPopup() {
  const router = useRouter()

  return (
    <div className="gift-pop hw-overlay2" id="adPopup">
      <div
        className="gift-pop-content"
        style={{ cursor: 'pointer' }}
        onClick={() => {
          router.push('/recharge-gift?id=6001')
          $('#adPopup').fadeOut()
        }}
      >
        <span
          className="glyphicon glyphicon-remove hwLayer-close2"
          onClick={(e) => {
            e.stopPropagation()
            $('#adPopup').fadeOut()
          }}
        />
        <div className="hw-content2">
          <img
            src="/images/pop.png"
            alt=""
            className="img-responsive center-block"
          />
        </div>
      </div>
    </div>
  )
}

export default AdPopup
