import { ResBase } from '@/types'
import useRequest, { apiPath } from '@/hooks/useRequest'
import { useState } from 'react'

export interface TicketListReq {
  requester_id: string
  subject: string
  description: string
  comment: string
  attachment: File
}

export interface TicketListRes extends ResBase {}

function useTicketCreate() {
  const request = useRequest()
  const [isLoading, setIsLoading] = useState(false)
  const handler = async (data: FormData) => {
    setIsLoading(true)
    const res = await request({
      method: 'post',
      url: `${apiPath}/cs/ticket`,
      data,
    })
    setIsLoading(false)
    return res
  }
  return {
    isLoading,
    handler,
  }
}

export default useTicketCreate
