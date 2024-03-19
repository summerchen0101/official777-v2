import { useStore } from '@/store/useStore'
import { useRouter } from 'next/dist/client/router'
import React from 'react'

function AdPopup() {
  const router = useRouter()
  return (
    <div className="gift-pop" id="adPopup">
      <div
        className="gift-pop-content"
        style={{ cursor: 'pointer' }}
        onClick={() => {
          router.push('/recharge-gift')
        }}
      >
        <span
          className="glyphicon glyphicon-remove hwLayer-close2"
          onClick={() => {
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
