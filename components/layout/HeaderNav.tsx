import { useRouter } from 'next/dist/client/router'
import React from 'react'

function HeaderNav() {
  const router = useRouter()
  return (
    <header className="bg-white shadow-md fixed top-0 w-full">
      <div className="w-[860px] h-[80px] mx-auto flex justify-evenly items-center">
        <div className="text-3xl text-indigo-500 font-semibold">LOGO</div>
        <div className="nav" onClick={() => router.push('#news')}>
          最新消息
        </div>
        <div className="nav" onClick={() => router.push('#game')}>
          遊戲介紹
        </div>
        <div className="nav">會員專區</div>
        <div className="nav">排行榜</div>
        <div className="nav">客服中心</div>
      </div>
    </header>
  )
}

export default HeaderNav
