import { useStore } from '@/store/useStore'
import { ResBase } from '@/types'
import useSWR from 'swr'

export interface MaintenanceRes extends ResBase {
  content: string
  isOpen: boolean
  isMaintenanceInProgress: boolean
}

function useMaintenance() {
  const apiBaseUrl = useStore((s) => s.apiBaseUrl)
  const { data, isValidating, mutate } = useSWR<MaintenanceRes>(
    [`${apiBaseUrl}/json/billboard.json`],
    (url) => fetch(url).then((res) => res.json()),
  )

  return { data, isLoading: isValidating, mutate }
}

export default useMaintenance
