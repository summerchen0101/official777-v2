import { useRouter } from 'next/dist/client/router'
import React from 'react'
import HeaderNavItem from '../HeaderNavItem'

function HeaderNav() {
  const router = useRouter()
  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-30">
      <div className="w-[860px] h-[80px] mx-auto flex justify-evenly items-center">
        <div
          className="text-3xl text-indigo-500 font-semibold cursor-pointer"
          onClick={() => router.push('/')}
        >
          LOGO
        </div>
        <HeaderNavItem label="最新消息" onClick={() => router.push('#news')} />
        <HeaderNavItem
          label="遊戲介紹"
          subs={[
            { label: '基本介紹', onClick: () => router.push('/game-basic') },
            { label: '遊戲說明', onClick: () => router.push('/game-intro') },
            { label: '道具說明', onClick: () => router.push('/obj-intro') },
            { label: '紅包說明', onClick: () => router.push('/gift-intro') },
            { label: 'VIP介紹', onClick: () => router.push('/') },
          ]}
        />
        <HeaderNavItem
          label="會員專區"
          subs={[
            { label: '會員資料', onClick: () => router.push('/user-basic') },
            { label: '修改密碼', onClick: () => router.push('/user-pw') },
            { label: '儲值購點', onClick: () => router.push('/') },
            { label: '儲值紀錄', onClick: () => router.push('/') },
          ]}
        />
        <HeaderNavItem label="排行榜" onClick={() => router.push('#news')} />
        <HeaderNavItem
          label="客服中心"
          subs={[
            { label: '常見問題', onClick: () => router.push('/') },
            { label: '聯繫客服', onClick: () => router.push('/') },
            { label: '表單下載', onClick: () => router.push('/') },
          ]}
        />
      </div>
    </header>
  )
}

export default HeaderNav
