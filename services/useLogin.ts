import { ResBase } from '@/types'
import useRequest from '@/hooks/useRequest'
import { useState } from 'react'
import { useUserStore } from '@/store/useUserStore'
import { LoginProvider } from '@/lib/enums'

export interface LoginReq {
  cellphone: string
  password: string
  type: number
}

export interface LoginRes extends ResBase {
  accessToken: string
  refreshToken: string
  tokenType: string
  expiresIn: number
}

export default function useLogin() {
  const request = useRequest()
  const [isLoading, setIsLoading] = useState(false)
  const handler = async (data: LoginReq) => {
    setIsLoading(true)
    const res = await request<LoginRes, LoginReq>({
      method: 'post',
      url: `api/v1/login`,
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
