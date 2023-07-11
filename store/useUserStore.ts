import { LoginProvider } from '@/lib/enums'
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
  provider: LoginProvider
  tokenInfo: TokenInfo | null
  setProvider: (provider: LoginProvider) => void
  setTokenInfo: (tokenInfo: TokenInfo) => void

  user: User | null
  setUser: (user: User) => void
  clearUser: () => void
}>(
  persist(
    (set, get) => ({
      provider: LoginProvider.MEGA,
      tokenInfo: null,
      setTokenInfo: (tokenInfo) =>
        set({
          tokenInfo,
        }),
      user: null,
      setProvider: (provider) => set({ provider }),
      setUser: (user) => set({ user }),
      clearUser: () => set({ user: null, tokenInfo: null }),
    }),
    {
      name: 'user-storage', // unique name
      getStorage: () => sessionStorage, // (optional) by default the 'localStorage' is used
    },
  ),
)
