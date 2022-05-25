import useEventGroup from '@/services/useEventGroup'
import cs from 'classnames'
import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import React, { memo, ReactNode } from 'react'
import AppDownloadSideFloat from '../AppDownloadSideFloat'
import FooterNav from '../layout/FooterNav'
import LoginPopup from '../LoginPopup'
import SideBox from '../SideBox'
import EventTabs from './EventTabs'
import MobileFooter from './MobileFooter'

type Props = {
  group_code?: string
  current?: string
  children?: ReactNode
}
function EventWrapper({ group_code, current, children }: Props) {
  const router = useRouter()
  const { data } = useEventGroup(group_code)
  return (
    <div
      className={cs('bg-no-repeat bg-top', data?.theme)}
      style={{
        backgroundImage: `url(${data?.banner})`,
        backgroundSize: '150%',
      }}
    >
      <Head>
        <title>大頭家娛樂城 | {data?.name}</title>
      </Head>
      <img
        src="/img/logo.png"
        alt=""
        className="hidden sm:block cursor-pointer h-24 mt-2 fixed top-0 drop-shadow-lg"
        onClick={() => router.push('/')}
      />
      {/* <PageBanner /> */}
      <SideBox />
      <AppDownloadSideFloat />

      <div className="flex flex-col items-center sm:w-[1000px] max-w-full mx-auto">
        {/* 頁籤按鈕 */}
        <EventTabs current={current} group_code={group_code} />
        <div className="mt-20"></div>
        {/* 內容區塊 */}
        {children}
        <div className="mt-16"></div>
      </div>
      <LoginPopup />
      <MobileFooter />
      <FooterNav />
    </div>
  )
}

export default memo(EventWrapper)
