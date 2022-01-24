import { toCdnUrl } from '@/utils'
import React from 'react'

type Props = {
  intro?: string
  img: string
}
function PicIntro({ intro, img }: Props) {
  return (
    <div className="mb-10">
      <div className="bg-black flex items-center justify-center rounded-lg border border-gray-700 relative">
        <img
          src={toCdnUrl(img)}
          alt=""
          className="w-full h-full object-fill rounded-lg"
        />
      </div>
      <div hidden={!intro} className="p-2 bg-yellow-500 rounded text-lg my-3">
        {intro}
      </div>
    </div>
  )
}

export default PicIntro
