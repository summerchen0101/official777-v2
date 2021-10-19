import { OAuthChannel } from '@/lib/enums'
import { ResBase } from '@/types'
import useRequest from '@/utils/useRequest'
import { useState } from 'react'

export interface LoginReq {
  // email: string
  // password: string
  // type: number
}

export interface OAuthLoginRes extends ResBase {
  data: string
}

export default function useOAuthLogin() {
  const request = useRequest()
  const [isLoading, setIsLoading] = useState(false)
  const handler = async (channel: OAuthChannel) => {
    setIsLoading(true)
    const res = await request<OAuthLoginRes>({
      method: 'get',
      url: `api/v1/${channel}/link`,
    })
    setIsLoading(false)
    return res
  }
  return {
    isLoading,
    handler,
  }
}
