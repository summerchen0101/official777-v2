import { Platform } from '@/lib/enums'
import { appUrlMap } from '@/lib/map'
import { toCdnUrl } from '@/utils'
import cs from 'classnames'
import QRCode from 'qrcode'
import { useEffect, useRef, useState } from 'react'

// const appIconMap: StringMap = {
//   IOS: '/app_store.png',
//   Android: '/google_play.png',
// }
function AppDownloadSideFloat() {
  const [isShowSidebar, setIsShowSidebar] = useState(false)
  const toggleSidebar = () => setIsShowSidebar((val) => !val)
  const qrcodeImgSrc = useRef('')
  const createQrcodeImg = async () => {
    qrcodeImgSrc.current = await QRCode.toDataURL(
      `${location.protocol}//${location.host}/app-redirect`,
    )
  }
  useEffect(() => {
    // currentDevice.current = isIOS() ? 'IOS' : 'Android'
    createQrcodeImg()
  }, [])
  return (
    <div
      className={cs(
        'w-48 hidden lg:flex flex-col p-3 fixed top-0 right-0 mt-[120px] shadow-md transition-all gold-box rounded-l-xl z-30',
        isShowSidebar ? 'translate-x-0' : 'translate-x-[192px]',
      )}
    >
      <img src={qrcodeImgSrc.current} alt="" className="mb-3 rounded-lg" />
      <img src={toCdnUrl('/scan_download.png')} alt="" />
      <div className="space-y-1">
        <a
          className="block"
          target="_blank"
          href={appUrlMap[Platform.IOS]}
          rel="noreferrer"
        >
          <img src={toCdnUrl('/app_store.png')} alt="" className="" />
        </a>
        <a
          className="block"
          target="_blank"
          href={appUrlMap[Platform.Android]}
          rel="noreferrer"
        >
          <img src={toCdnUrl('/google_play.png')} alt="" className="" />
        </a>
        {/* <img src={toCdnUrl('/apk.png')} alt="" className="" /> */}
        {/* <img src={toCdnUrl('/win10.png')} alt="" className="" /> */}
      </div>
      <div
        className="absolute top-0 left-0 mt-4 cursor-pointer w-12 h-44 -m-12 gold-box flex items-center justify-center rounded-l-xl"
        onClick={toggleSidebar}
      >
        <img src={toCdnUrl('/float-drawer-text.png')} alt="" />
        {/* {isShowSidebar ? (
          <BiX className="text-3xl" />
        ) : (
          <BiChevronsLeft className="text-3xl" />
        )} */}
      </div>
    </div>
  )
}

export default AppDownloadSideFloat
