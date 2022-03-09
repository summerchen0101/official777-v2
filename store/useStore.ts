import { News } from './../services/useNewsList'
import create from 'zustand'

interface Game {
  title: string
  intros: number[]
}

interface ClientEnv {
  apiBaseUrl: string
  cdnBaseUrl: string
  canRecharge: boolean
}

interface IState {
  clientEnv: ClientEnv
  setClientEnv: (env: ClientEnv) => void
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
  clientEnv: {
    apiBaseUrl: '',
    cdnBaseUrl: '',
    canRecharge: true,
  },
  setClientEnv: (clientEnv) => set({ clientEnv }),
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
