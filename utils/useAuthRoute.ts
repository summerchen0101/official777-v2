import useMe from '@/services/useMe'
import { useRouter } from 'next/dist/client/router'

function useAuthRoute() {
  const router = useRouter()
  const { data: user } = useMe()
  // 若未登入則改路徑query 會自動跳登入匡
  return (path: string) => {
    user
      ? router.push(path)
      : router.replace({
          query: { to: `${path}?t=${new Date().getTime()}` },
        })
  }
}

export default useAuthRoute
