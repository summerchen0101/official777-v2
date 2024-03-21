import useMe from '@/services/useMe'
import { scheduleAction } from '@/utils'
import { useRouter } from 'next/dist/client/router'
import { useEffect } from 'react'

function AdPopup() {
  const router = useRouter()
  const { data: user } = useMe()
  useEffect(() => {
    scheduleAction(4, () => {
      if (user) {
        $('#adPopup').fadeIn()
      }
    })
  }, [user])
  return (
    <div className="gift-pop hw-overlay2" id="adPopup">
      <div
        className="gift-pop-content"
        style={{ cursor: 'pointer' }}
        onClick={() => {
          router.push('/recharge-gift?id=6001')
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
