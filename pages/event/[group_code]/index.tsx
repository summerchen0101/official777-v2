import useEventGroup from '@/services/useEventGroup'
import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import React, { useEffect } from 'react'
import { CgSpinnerTwo } from 'react-icons/cg'

function EventGroupPage() {
  const router = useRouter()
  const { data } = useEventGroup(router.query.group_code as string)
  useEffect(() => {
    if (data?.events[0]) {
      router.push(`${router.query.group_code}/${data?.events[0]?.code}`)
    }
  }, [data?.events])
  return (
    <div className="flex flex-col justify-center items-center  h-full">
      <CgSpinnerTwo className="text-white/30 animate-spin text-8xl" />
    </div>
  )
}

export default EventGroupPage
