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
        'bg-gray-200 w-48 flex flex-col p-3 fixed top-0 right-0 mt-[120px] space-y-3 shadow-md transition-all',
        isShowSidebar ? 'translate-x-0' : 'translate-x-[192px]',
      )}
    >
      <img src="https://fakeimg.pl/200?text=QRCode" alt="" />
      <div className="text-gray-500 text-lg text-center">掃描下載</div>
      <div className="space-y-2">
        <button className="btn block w-full h-12">Google Play</button>
        <button className="btn block w-full h-12">Apple Store</button>
        <button className="btn block w-full h-12">APK下載</button>
        <button className="btn block w-full h-12">PC下載</button>
      </div>
      <div className="flex justify-around space-x-4 text-3xl text-gray-700 py-2">
        <FaFacebookF />
        <FaYoutube />
        <FaLine />
      </div>
      <div
        className="bg-indigo-500 text-white w-8 h-8 flex items-center justify-center absolute top-0 left-0 -ml-8 cursor-pointer hover:bg-indigo-400"
        onClick={toggleSidebar}
      >
        {isShowSidebar ? (
          <BiX className="text-3xl" />
        ) : (
          <BiChevronsLeft className="text-3xl" />
        )}
      </div>
    </div>
  )
}

export default AppDownloadSideFloat
