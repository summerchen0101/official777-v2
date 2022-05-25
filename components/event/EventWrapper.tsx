import useEventGroup from '@/services/useEventGroup'
import { useRouter } from 'next/dist/client/router'
import React, { ReactNode } from 'react'
import cs from 'classnames'
import Head from 'next/head'
import Link from 'next/link'

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
      <div className="flex flex-col items-center sm:w-[1000px] mx-auto">
        <div className="mt-96"></div>
        {/* 頁籤按鈕 */}
        <div className="flex my-10">
          {data?.events.map((t) => (
            <Link key={t.code} href={`/event/${group_code}/${t.code}`} passHref>
              <a
                className={cs(
                  'bg-indigo-600 text-white rounded-xl flex items-center justify-center cursor-pointer text-xl shadow-lg hover:animate-scale',
                  {
                    'bg-yellow-600': t.code === current,
                  },
                )}
              >
                <img
                  src={t.code === current ? t.tab_active_img : t.tab_img}
                  alt=""
                />
              </a>
            </Link>
          ))}
        </div>
        <div className="mt-20"></div>
        {/* 內容區塊 */}
        {children}
      </div>
    </div>
  )
}

export default EventWrapper
