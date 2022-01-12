import { activityList } from '@/lib/activity'
import { toImgPath } from '@/utils'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import React from 'react'

type Props = {
  id: number
}
function ActivityBtns({ id }: Props) {
  const router = useRouter()
  return (
    <div className="mb-10 py-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-5 gap-x-3 max-w-[800px] mx-auto justify-center">
        {activityList.map((t, i) => {
          if (t.disable) {
            return (
              <img
                src={toImgPath(`/event/tabs/disable/${t.name}.png`)}
                alt=""
                className="cursor-not-allowed"
              />
            )
          } else if (t.id === id) {
            return (
              <img
                src={toImgPath(`/event/tabs/selected/${t.name}.png`)}
                alt=""
              />
            )
          }
          return (
            <Link key={t.id} passHref href={t.id.toString()}>
              <img
                src={toImgPath(`/event/tabs/default/${t.name}.png`)}
                alt=""
                className="cursor-pointer transition-all hover:scale-110"
              />
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default ActivityBtns
