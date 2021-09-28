import create from 'zustand'

interface News {
  title: string
  date: string
  content: string
}

interface User {
  name: string
  level: number
  points: number
}
interface IState {
  isShowSidebar: boolean
  toggleSidebar: () => void
  isShowRechargeFloat: boolean
  toggleRechargeFloat: () => void
  isShowMbMenu: boolean
  toggleMbMenu: () => void
  closeMbMenu: () => void
  isShowNewsPopup: boolean
  newsInfo: News | null
  showNews: (news: News) => void
  closeNews: () => void
  user: User | null
  setUser: (user: User) => void
  clearUser: () => void
  isShowLoginPopup: boolean
  toggleLoginPopup: () => void
}

export const useStore = create<IState>((set) => ({
  isShowSidebar: false,
  toggleSidebar: () =>
    set((state) => ({ isShowSidebar: !state.isShowSidebar })),
  isShowRechargeFloat: true,
  toggleRechargeFloat: () =>
    set((state) => ({ isShowRechargeFloat: !state.isShowRechargeFloat })),
  isShowMbMenu: false,
  toggleMbMenu: () => set((state) => ({ isShowMbMenu: !state.isShowMbMenu })),
  closeMbMenu: () => set({ isShowMbMenu: false }),
  isShowNewsPopup: false,
  newsInfo: null,
  showNews: (newsInfo: News) => set({ isShowNewsPopup: true, newsInfo }),
  closeNews: () => set({ isShowNewsPopup: false }),
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
  isShowLoginPopup: false,
  toggleLoginPopup: () =>
    set((state) => ({ isShowLoginPopup: !state.isShowLoginPopup })),
}))
