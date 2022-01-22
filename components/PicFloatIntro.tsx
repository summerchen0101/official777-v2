import React from 'react'

type Props = {
  no: number
  x: number
  y: number
  intro: string
}

function PicFloatIntro({ no, x, y, intro }: Props) {
  return (
    <a
      className="block absolute group -ml-3 -mt-3"
      style={{ top: `${y}%`, left: `${x}%` }}
      href={`#${no}`}
    >
      <div className="bg-yellow-400 text-black font-medium text-lg rounded-full w-6 h-6 flex justify-center items-center border-2 border-black cursor-pointer">
        {no}
      </div>
      <div className="hidden lg:group-hover:block p-3 -ml-16 relative z-10">
        <div className="bg-yellow-400 rounded-lg text-black p-3 whitespace-pre-line w-[300px] border-2 border-black">
          {intro}
        </div>
      </div>
    </a>
  )
}

export default PicFloatIntro
