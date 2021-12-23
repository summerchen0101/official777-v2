import { activityList } from '@/lib/activity'
import React from 'react'
import cs from 'classnames'

type Props = {
  id: number
}
function ActivityBtns({ id }: Props) {
  return (
    <div className="mb-10">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-[800px] mx-auto justify-center">
        {activityList.map((t, i) => (
          <div
            key={i}
            className={cs(
              'bg-gray-600 text-gray-300 h-28 rounded-3xl text-xl sm:text-2xl flex flex-col justify-center items-center border-4 border-black/40  cursor-pointer',
              { 'bg-gold-700': t.id === id },
            )}
          >
            {t.name}
            <div className="text-white/50 text-lg mt-1">{t.date}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ActivityBtns
