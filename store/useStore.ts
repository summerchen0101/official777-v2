import create from 'zustand'

interface IState {
  isShowSidebar: boolean
  toggleSidebar: () => void
}

export const useStore = create<IState>((set) => ({
  isShowSidebar: false,
  toggleSidebar: () =>
    set((state) => ({ isShowSidebar: !state.isShowSidebar })),
  // toggleSidebar: () => set({ bears: 0 }),
}))
