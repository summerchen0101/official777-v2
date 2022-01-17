import { useStore } from '@/store/useStore'
import React from 'react'
import GameIntro from './GameIntro'
import Popup from './Popup'

export default function GameDetailPopup() {
  const closeGamePopup = useStore((s) => s.closeGamePopup)
  const isShowGamePopup = useStore((s) => s.isShowGamePopup)
  const popupGameID = useStore((s) => s.popupGameID)
  return (
    <Popup onClose={closeGamePopup} isShow={isShowGamePopup}>
      <GameIntro gameId={popupGameID} />
    </Popup>
  )
}
