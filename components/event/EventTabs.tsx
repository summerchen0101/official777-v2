import useEventGroup from '@/services/useEventGroup'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import React, { memo } from 'react'
import cs from 'classnames'
import { chunk } from 'lodash'

type Props = {
  group_code?: string
  current?: string
}

function EventTabs({ group_code, current }: Props) {
  const router = useRouter()
  const { data } = useEventGroup(group_code)
  return (
    <div className="nav">
      {data?.events.map((t) => (
        <Link key={t.code} href={`/event/${group_code}/${t.code}`} passHref>
          <a className={cs('navBtn', { active: t.code === current })}>
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
