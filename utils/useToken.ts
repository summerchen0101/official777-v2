import useStorage from './useStorage'

export default function useToken() {
  const [token, setToken] = useStorage('token', '')

  return { token, setToken }
}
