import create from 'zustand'

interface IState {
  isShowSidebar: boolean
  toggleSidebar: () => void
  isShowRechargeFloat: boolean
  toggleRechargeFloat: () => void
  isShowMbMenu: boolean
  toggleMbMenu: () => void
  closeMbMenu: () => void
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
  closeMbMenu: () => set((state) => ({ isShowMbMenu: false })),
}))
