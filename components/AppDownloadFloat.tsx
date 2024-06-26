import React from 'react'
import { showAppPopup } from '@/utils'
import { useStore } from '@/store/useStore'

function AppDownloadFloat() {
  const { canRecharge } = useStore((s) => s.clientEnv)
  return (
    <>
      <div
        className="window-box hidden-xs wow fadeInRight flex items-start justify-center pt-8"
        data-wow-delay="0.4s"
        data-wow-duration="1s"
      >
        <div className="icon-box">
          <img
            src="/images/window_icon.png"
            alt=""
            className="img-responsive center-block"
          />
          <a
            href="https://apps.apple.com/tw/app/%E5%A4%A7%E9%A0%AD%E5%AE%B6%E5%A8%9B%E6%A8%82%E5%9F%8E/id1595039719"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/images/window_apple.png"
              alt=""
              className="img-responsive center-block"
            />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.Rich.MegaRich&hl=zh_TW"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/images/window_google.png"
              alt=""
              className="img-responsive center-block"
            />
          </a>
          {canRecharge ? (
            <a
              href="https://resource-cdn.bigboss101.com/official/game.apk"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/images/window_apk.png"
                alt=""
                className="img-responsive center-block"
              />
            </a>
          ) : null}

          <img
            src="/images/window_qr.png"
            alt=""
            className="img-responsive center-block"
          />
        </div>
      </div>
      <div className="window-box-download hidden visible-xs">
        <a className="show-layer" onClick={() => showAppPopup()}>
          <img
            src="/images/btn_download.png"
            alt=""
            className="img-responsive pull-right"
          />
        </a>
      </div>
    </>
  )
}

export default AppDownloadFloat
