import { activityList } from '@/lib/activity'
import React from 'react'
import cs from 'classnames'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'

type Props = {
  id: number
}
function ActivityBtns({ id }: Props) {
  const router = useRouter()
  return (
    <div className="mb-10 py-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-5 gap-x-3 max-w-[800px] mx-auto justify-center">
        {activityList.map((t, i) => (
          <Link key={t.id} passHref href={t.id.toString()}>
            <div
              key={i}
              className={cs(
                'bg-gray-800 text-gray-300 h-28 rounded-3xl text-xl sm:text-2xl flex flex-col justify-center items-center border-4 border-black/40  cursor-pointer transition-all hover:scale-105 hover:relative hover:z-10 -rotate-6 font-medium shadow-md',
                { 'bg-gold-700': t.id === id },
              )}
            >
              {t.name}
              <div className="text-white/50 text-lg mt-1">{t.date}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ActivityBtns
