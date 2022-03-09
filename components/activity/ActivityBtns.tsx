import { activityList } from '@/lib/activity'
import { useStore } from '@/store/useStore'
import useCdnUrl from '@/hooks/useCdnUrl'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import React from 'react'
import cs from 'classnames'

type Props = {
  id: number | string
}
function ActivityBtns({ id }: Props) {
  const toCdnUrl = useCdnUrl()
  const canRecharge = useStore((s) => s.clientEnv.canRecharge)
  return (
    <div className="mb-10 py-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-7 max-w-[800px] mx-auto justify-center">
        {activityList.map((t, i) => {
          if (t.disable) {
            return (
              <img
                src={toCdnUrl(
                  `/event/tabs/disable/${
                    canRecharge ? t.name : t.bossName
                  }.png`,
                )}
                alt=""
                className="cursor-not-allowed"
              />
            )
          } else if (t.id === id) {
            return (
              <img
                src={toCdnUrl(
                  `/event/tabs/selected/${
                    canRecharge ? t.name : t.bossName
                  }.png`,
                )}
                alt=""
              />
            )
          }
          return (
            <Link key={t.id} passHref href={t.id.toString()}>
              <img
                src={toCdnUrl(
                  `/event/tabs/default/${
                    canRecharge ? t.name : t.bossName
                  }.png`,
                )}
                alt=""
                className="cursor-pointer transition-all hover:scale-110"
              />
            </Link>
          )
        })}
        {/* {activityList.map((t, i) => (
          <Link key={t.id} passHref href={t.id.toString()}>
            <div
              key={i}
              className={cs(
                'text-white h-28 rounded-3xl text-xl md:text-3xl flex flex-col justify-center items-center border-4 border-black/20 transition-all  hover:relative hover:z-10 -rotate-6 font-medium shadow-md',
                t.id === id
                  ? 'bg-yellow-700 cursor-default'
                  : 'bg-purple-900 hover:scale-110 cursor-pointer',
              )}
            >
              {canRecharge ? t.name : t.bossName}
              <div className="text-yellow-300/80 text-2xl mt-1">{t.date}</div>
            </div>
          </Link>
        ))} */}
      </div>
    </div>
  )
}

export default ActivityBtns
