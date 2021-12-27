import { useStore } from '@/store/useStore'
import { ResBase } from '@/types'
import useSWR from 'swr'

export interface MeRes extends ResBase {
  id: number
  nickname: string
  avatarID: number
  coin: number
  vipLevel: number
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

function useMaintenance() {
  const apiBaseUrl = useStore((s) => s.apiBaseUrl)
  const { data, isValidating, mutate } = useSWR(
    [`${apiBaseUrl}/json/billboard.json`],
    (url) => fetch(url).then((res) => res.json()),
  )

  return { data, isLoading: isValidating, mutate }
}

export default useMaintenance
