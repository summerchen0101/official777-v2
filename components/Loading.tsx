import React from 'react'
import { CgSpinnerTwo } from 'react-icons/cg'

export default function Loading() {
  return (
    <div className="flex justify-center h-48 items-center">
      <CgSpinnerTwo className="text-white/30 animate-spin text-6xl" />
    </div>
  )
}
