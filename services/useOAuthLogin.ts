import { LoginProvider, OAuthChannel, YesNo } from '@/lib/enums'
import { ResBase } from '@/types'
import useRequest from '@/hooks/useRequest'
import { useState } from 'react'
import { useUserStore } from '@/store/useUserStore'

export interface OAuthLoginReq {
  autoRedirect: YesNo.No
  backUrl: string
}

export interface OAuthLoginRes extends ResBase {
  data: string
}

export default function useOAuthLogin() {
  const request = useRequest()
  const [isLoading, setIsLoading] = useState(false)
  const handler = async (channel: OAuthChannel, data: OAuthLoginReq) => {
    setIsLoading(true)
    const res = await request<OAuthLoginRes>({
      method: 'get',
      url: `api/v1/${channel}/link`,
      config: { params: data },
    })
    setIsLoading(false)
    return res
  }
  return {
    isLoading,
    handler,
  }
}
