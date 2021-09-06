import React from 'react'
import cs from 'classnames'

const navLinkMap = {
  news: '最新消息',
  game: '遊戲介紹',
  member: '會員專區',
  rank: '排行榜',
  service: '客服中心',
}

function HeaderNav() {
  return (
    <header className="bg-white shadow-md fixed top-0 w-full">
      <div className="w-[860px] h-[80px] mx-auto flex justify-evenly items-center">
        <div className="text-3xl text-indigo-500 font-semibold">LOGO</div>
        {Object.entries(navLinkMap).map(([key, label]) => (
          <div
            key={key}
            className={cs(
              'text-lg text-gray-500 border-b-4 border-transparent hover:border-indigo-400 pb-1 cursor-pointer -mb-2',
            )}
          >
            {label}
          </div>
        ))}
      </div>
    </header>
  )
}

export default HeaderNav
