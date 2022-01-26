import { Record } from './useRewardList'
import { ResBase } from '@/types'
import useRequest, { apiPath } from '@/hooks/useRequest'
import { useState } from 'react'

export interface RewardRecevieReq {
  type: number
  userID: number
  recordId: number
}

export interface RewardRecevieRes extends ResBase {
  isSuccess: number
  record: Record
}

export default function useRewardRecevie() {
  const request = useRequest()
  const [isLoading, setIsLoading] = useState(false)
  const handler = async (data: RewardRecevieReq) => {
    setIsLoading(true)
    const res = await request<RewardRecevieRes, RewardRecevieReq>({
      method: 'post',
      url: `${apiPath}/member/reward/exchange`,
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
