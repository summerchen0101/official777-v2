import create from 'zustand'

interface IState {
  isShowSidebar: boolean
  toggleSidebar: () => void
  isShowMbMenu: boolean
  toggleMbMenu: () => void
  closeMbMenu: () => void
}

export const useStore = create<IState>((set) => ({
  isShowSidebar: false,
  toggleSidebar: () =>
    set((state) => ({ isShowSidebar: !state.isShowSidebar })),
  isShowMbMenu: false,
  toggleMbMenu: () => set((state) => ({ isShowMbMenu: !state.isShowMbMenu })),
  closeMbMenu: () => set((state) => ({ isShowMbMenu: false })),
}))
