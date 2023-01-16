import { useUserStore } from './../store/useUserStore'
import useRequest, { apiPath } from '@/hooks/useRequest'
import { ResBase } from '@/types'
import useSWR from 'swr'

export interface MeRes extends ResBase {
  id: number
  nickname: string
  avatarID: number
  coin: number
  vipLevel: number
  vipExpAmount: number
  email: string
  countryCode: string
  cellphone: string
  phoneVerified: number
  isSecondPasswordSet: number
  realName: string
  contactPhone: string
  socialID: string
  birthDay: string
  zipCode: string
  address: string
  googleID: string
  appleID: string
  lineID: string
  fbID: string
  gender: number
  nickNameRemainingTimes: number
  paymentPoint: number
}

function useMe() {
  const request = useRequest()
  const token = useUserStore((s) => s.tokenInfo?.accessToken)
  const { data, isValidating, mutate } = useSWR(
    token ? [`${apiPath}/member/me`, token] : null,
    (url, token) =>
      request<MeRes>({
        url,
        method: 'get',
        config: {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      }),
  )

  return { data, isLoading: isValidating, mutate }
}

export default useMe
