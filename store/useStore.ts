import { News } from './../services/useNewsList'
import create from 'zustand'

interface Game {
  title: string
  intros: number[]
}

interface IState {
  apiBaseUrl: string
  setApiBaseUrl: (url: string) => void
  canRecharge: boolean
  setCanRecharge: (val: boolean) => void
  isShowSidebar: boolean
  toggleSidebar: () => void
  isShowSideBox: boolean
  toggleSideBox: () => void
  isShowMbMenu: boolean
  toggleMbMenu: () => void
  closeMbMenu: () => void

  isShowNewsPopup: boolean
  newsInfo: News | null
  showNews: (news: News) => void
  closeNews: () => void
  isShowGamePopup: boolean
  popupGameID: number
  showGamePopup: (gameID: number) => void
  closeGamePopup: () => void
}

export const useStore = create<IState>((set) => ({
  apiBaseUrl: '',
  setApiBaseUrl: (apiBaseUrl) => set({ apiBaseUrl }),
  canRecharge: true,
  setCanRecharge: (canRecharge) => set({ canRecharge }),
  isShowSidebar: false,
  toggleSidebar: () =>
    set((state) => ({ isShowSidebar: !state.isShowSidebar })),
  isShowSideBox: true,
  toggleSideBox: () =>
    set((state) => ({ isShowSideBox: !state.isShowSideBox })),
  isShowMbMenu: false,
  toggleMbMenu: () => set((state) => ({ isShowMbMenu: !state.isShowMbMenu })),
  closeMbMenu: () => set({ isShowMbMenu: false }),

  isShowNewsPopup: false,
  newsInfo: null,
  showNews: (newsInfo) => set({ isShowNewsPopup: true, newsInfo }),
  closeNews: () => set({ isShowNewsPopup: false }),

  isShowGamePopup: false,
  popupGameID: 0,
  showGamePopup: (popupGameID) => set({ isShowGamePopup: true, popupGameID }),
  closeGamePopup: () => set({ isShowGamePopup: false }),
}))
