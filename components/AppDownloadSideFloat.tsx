import cs from 'classnames'
import { useState } from 'react'
import { BiChevronsLeft, BiX } from 'react-icons/bi'
import { FaFacebookF, FaLine, FaYoutube } from 'react-icons/fa'

function AppDownloadSideFloat() {
  const [isShowSidebar, setIsShowSidebar] = useState(false)
  const toggleSidebar = () => setIsShowSidebar((val) => !val)
  return (
    <div
      className={cs(
        'w-48 flex flex-col p-3 fixed top-0 right-0 mt-[120px] shadow-md transition-all gold-box rounded-l-xl',
        isShowSidebar ? 'translate-x-0' : 'translate-x-[192px]',
      )}
    >
      <img src="/qrcode.png" alt="" className="mb-3" />
      <img src="/scan_download.png" alt="" />
      <div className="space-y-1">
        <img src="/google_play.png" alt="" className="" />
        <img src="/app_store.png" alt="" className="" />
        <img src="/apk.png" alt="" className="" />
        <img src="/win10.png" alt="" className="" />
      </div>
      <div
        className="absolute top-0 left-0 mt-4 cursor-pointer w-12 h-44 -m-12 gold-box flex items-center justify-center rounded-l-xl"
        onClick={toggleSidebar}
      >
        <img src="/float-drawer-text.png" alt="" />
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
