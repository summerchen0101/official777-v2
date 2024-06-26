import { LoginProvider, LoginViaType } from '@/lib/enums'
import create from 'zustand'
import { persist } from 'zustand/middleware'
interface TokenInfo {
  accessToken: string
  refreshToken: string
  expiresIn: number
}
interface User {
  name: string
  level: number
  points: number
}

export const useUserStore = create<{
  loginViaType: LoginViaType | null
  provider: LoginProvider | null
  tokenInfo: TokenInfo | null
  setLoginViaType: (loginViaType: LoginViaType) => void
  setProvider: (provider: LoginProvider) => void
  setTokenInfo: (tokenInfo: TokenInfo) => void

  user: User | null
  setUser: (user: User) => void
  clearUser: () => void
}>(
  persist(
    (set, get) => ({
      loginViaType: null,
      provider: null,
      tokenInfo: null,
      setTokenInfo: (tokenInfo) =>
        set({
          tokenInfo,
        }),
      user: null,
      setLoginViaType: (loginViaType) => set({ loginViaType }),
      setProvider: (provider) => set({ provider }),
      setUser: (user) => set({ user }),
      clearUser: () => set({ user: null, tokenInfo: null, provider: null }),
    }),
    {
      name: 'user-storage', // unique name
      getStorage: () => sessionStorage, // (optional) by default the 'localStorage' is used
    },
  ),
)
