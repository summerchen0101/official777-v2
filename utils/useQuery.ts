import { useEffect, useState } from 'react'

const useQuery = () => {
  const [query, setQuery] = useState<URLSearchParams | null>(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setQuery(new URLSearchParams(window.location.search))
    }
  }, [])

  return query
}

export default useQuery
