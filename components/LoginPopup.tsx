import React from 'react'
import cs from 'classnames'
import { useStore } from '@/store/useStore'

export default function LoginPopup() {
  const isShowLoginPopup = useStore((s) => s.isShowLoginPopup)
  const toggleLoginPopup = useStore((s) => s.toggleLoginPopup)
  const setUser = useStore((s) => s.setUser)
  const handleLogin = () => {
    setUser({ name: 'Summer', level: 3, points: 32222 })
    toggleLoginPopup()
  }
  return (
    <div
      className={cs(
        'bg-black/20 fixed top-0 left-0 w-full h-full z-50 transition-all flex justify-center items-center',
        isShowLoginPopup ? 'visible opacity-100' : 'invisible opacity-0',
      )}
      onClick={toggleLoginPopup}
    >
      <div
        className="lg:w-[360px] bg-white/90 rounded-xl overflow-hidden border border-purple-800/90"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-white text-2xl bg-purple-800 text-center leading-10">
          登入
        </div>
        <div className="p-4 grid grid-cols-1 gap-4 items-center">
          <div className="space-y-2 px-8">
            <div className="border border-gray-500 rounded px-2 h-10 flex items-center cursor-pointer bg-purple-100 hover:bg-purple-200">
              <img src="/icon_loginGoogle.png" alt="" />
              <div className="flex-1 text-center">Google登入</div>
            </div>
            <div className="border border-gray-500 rounded px-2 h-10 flex items-center cursor-pointer bg-purple-100 hover:bg-purple-200">
              <img src="/icon_loginApple.png" alt="" />
              <div className="flex-1 text-center">Apple ID登入</div>
            </div>
            <div className="border border-gray-500 rounded px-2 h-10 flex items-center cursor-pointer bg-purple-100 hover:bg-purple-200">
              <img src="/icon_loginFacebook.png" alt="" />
              <div className="flex-1 text-center">facebook登入</div>
            </div>
            <div className="border border-gray-500 rounded px-2 h-10 flex items-center cursor-pointer bg-purple-100 hover:bg-purple-200">
              <img src="/icon_loginLine.png" alt="" />
              <div className="flex-1 text-center">Line登入</div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex flex-col">
              <label htmlFor="">會員帳號</label>
              <input type="text" className="rounded py-1.5" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">會員密碼</label>
              <input type="text" className="rounded py-1.5" />
            </div>
            <div className="flex justify-between">
              <label htmlFor="" className="flex items-center space-x-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">記住我的帳號</span>
              </label>
              <div className="underline cursor-pointer hover:no-underline">
                忘記密碼
              </div>
            </div>
            <div className="pt-5">
              <div className="btn active" onClick={handleLogin}>
                登入
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
