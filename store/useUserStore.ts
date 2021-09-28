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
  tokenInfo: TokenInfo | null
  setTokenInfo: (tokenInfo: TokenInfo) => void

  user: User | null
  setUser: (user: User) => void
  clearUser: () => void
}>(
  persist(
    (set, get) => ({
      tokenInfo: null,
      setTokenInfo: (tokenInfo) =>
        set({
          tokenInfo,
        }),
      user: null,
      setUser: (user) => set({ user }),
      clearUser: () => set({ user: null }),
    }),
    {
      name: 'user-storage', // unique name
      getStorage: () => sessionStorage, // (optional) by default the 'localStorage' is used
    },
  ),
)
