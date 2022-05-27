import { useStore } from '@/store/useStore'
import axios from 'axios'

const useMyAxios = () => {
  const summerApiPath = useStore((s) => s.clientEnv.summerApiPath)

  const myAxios = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SUMMER_API_PATH || summerApiPath,
  })

  return myAxios
}

export default useMyAxios
