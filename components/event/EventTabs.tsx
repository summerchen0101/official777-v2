import useEventGroup from '@/services/useEventGroup'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import React, { memo } from 'react'
import cs from 'classnames'

type Props = {
  group_code?: string
  current?: string
}

function EventTabs({ group_code, current }: Props) {
  const router = useRouter()
  const { data } = useEventGroup(group_code)
  return (
    <div className="flex w-[70%] max-w-[627px] mt-[30%]">
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
  )
}

export default memo(EventTabs)
