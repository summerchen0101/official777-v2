import React, { ReactNode } from 'react'

type Props = {
  title: string
  children: ReactNode
}
function ActivitySection({ title, children }: Props) {
  return (
    <div className="mb-10">
      <div className="bg-black border-4 border-gold-600 rounded-full text-white text-3xl text-center w-[560px] max-w-[calc(100%-30px)] mx-auto py-5 relative z-10">
        {title}
      </div>
      <div className="-mt-8 bg-black border-4 border-gold-600 rounded-3xl text-white min-h-[500px] max-w-[960px] mx-auto p-6 pt-12 space-y-8">
        {children}
      </div>
    </div>
  )
}

export default ActivitySection
