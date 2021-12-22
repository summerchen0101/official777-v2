import { useUserStore } from '@/store/useUserStore'
import { ResBase } from '@/types'
import useRequest, { apiPath } from '@/utils/useRequest'
import { useRouter } from 'next/dist/client/router'
import { useEffect, useState } from 'react'
import useSWR from 'swr'

export interface MaintenanceRes {
  isOpen: boolean
  content: string
}

function useMaintenance() {
  const router = useRouter()
  const { data, isValidating, mutate } = useSWR<MaintenanceRes>(
    '/api/maintain',
    (url) => fetch(url).then((res) => res.json()),
    { revalidateOnFocus: true },
  )

  useEffect(() => {
    if (data?.isOpen) {
      router.push('/maintainance')
    }
  }, [data])

  return { data, isLoading: isValidating, mutate }
}

export default useMaintenance
