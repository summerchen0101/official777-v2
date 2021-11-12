import { News } from './../services/useNewsList'
import create from 'zustand'

interface Game {
  title: string
  content: string
}

interface IState {
  apiBaseUrl: string
  setApiBaseUrl: (url: string) => void
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
  isShowGamePopup: boolean
  gameInfo: Game | null
  showGamePopup: (gameInfo: Game) => void
  closeGamePopup: () => void

  isShowLoginPopup: boolean
  toggleLoginPopup: () => void
}

export const useStore = create<IState>((set) => ({
  apiBaseUrl: '',
  setApiBaseUrl: (apiBaseUrl) => set({ apiBaseUrl }),
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
  showNews: (newsInfo) => set({ isShowNewsPopup: true, newsInfo }),
  closeNews: () => set({ isShowNewsPopup: false }),

  isShowGamePopup: false,
  gameInfo: null,
  showGamePopup: (gameInfo) => set({ isShowGamePopup: true, gameInfo }),
  closeGamePopup: () => set({ isShowGamePopup: false }),

  isShowLoginPopup: false,
  toggleLoginPopup: () =>
    set((state) => ({ isShowLoginPopup: !state.isShowLoginPopup })),
}))
