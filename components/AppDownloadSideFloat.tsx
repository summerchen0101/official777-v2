import { toImgPath } from '@/utils'
import cs from 'classnames'
import { useState } from 'react'

function AppDownloadSideFloat() {
  const [isShowSidebar, setIsShowSidebar] = useState(false)
  const toggleSidebar = () => setIsShowSidebar((val) => !val)
  return (
    <div
      className={cs(
        'w-48 hidden lg:flex flex-col p-3 fixed top-0 right-0 mt-[120px] shadow-md transition-all gold-box rounded-l-xl z-30',
        isShowSidebar ? 'translate-x-0' : 'translate-x-[192px]',
      )}
    >
      <img src={toImgPath('/qrcode.png')} alt="" className="mb-3" />
      <img src={toImgPath('/scan_download.png')} alt="" />
      <div className="space-y-1">
        <img src={toImgPath('/google_play.png')} alt="" className="" />
        <img src={toImgPath('/app_store.png')} alt="" className="" />
        <img src={toImgPath('/apk.png')} alt="" className="" />
        <img src={toImgPath('/win10.png')} alt="" className="" />
      </div>
      <div
        className="absolute top-0 left-0 mt-4 cursor-pointer w-12 h-44 -m-12 gold-box flex items-center justify-center rounded-l-xl"
        onClick={toggleSidebar}
      >
        <img src={toImgPath('/float-drawer-text.png')} alt="" />
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
