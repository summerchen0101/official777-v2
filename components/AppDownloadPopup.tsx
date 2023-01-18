import React from 'react'

function AppDownloadPopup() {
  return (
    <div
      className="hw-overlay2"
      id="appPopup"
      onClick={() => {
        $('#appPopup').fadeOut()
      }}
    >
      <div className="hw-layer-wrap2">
        <span className="glyphicon glyphicon-remove hwLayer-close2" />
        <div className="hw-layer-wrap2-header">
          <h1 className="text-center">請選擇遊戲平台</h1>
        </div>
        <div
          className="hw-content2"
          onClick={(e) => {
            e.stopPropagation()
          }}
        >
          <div className="app-box">
            <a
              href="https://apps.apple.com/tw/app/%E5%A4%A7%E9%A0%AD%E5%AE%B6%E5%A8%9B%E6%A8%82%E5%9F%8E/id1595039719"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="images/window_apple.png"
                alt=""
                className="img-responsive center-block"
              />
            </a>
            <br />
            <a
              href="https://play.google.com/store/apps/details?id=com.Rich.MegaRich&hl=zh_TW"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="images/window_google.png"
                alt=""
                className="img-responsive center-block"
              />
            </a>
            <br />
            <a
              href="https://resource-cdn.bigboss101.com/official/game.apk"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="images/window_apk.png"
                alt=""
                className="img-responsive center-block"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppDownloadPopup
