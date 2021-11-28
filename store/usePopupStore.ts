import create from 'zustand'
import produce from 'immer'

interface PopupType {
  isShow: boolean
  onToggle: () => void
  onHide: () => void
  onShow: () => void
  // setVisible: (isShow: boolean) => void
}
interface IState {
  login: PopupType
  transfer: PopupType
  product: PopupType
  giftCard: PopupType
}

const usePopupStore = create<IState>((set) => {
  const createPopupGroup = (key: keyof IState): PopupType => {
    return {
      isShow: false,
      onToggle: () =>
        set(
          produce<IState>((s) => {
            s[key].isShow = !s[key].isShow
          }),
        ),
      onHide: () =>
        set(
          produce<IState>((s) => {
            s[key].isShow = false
          }),
        ),
      onShow: () =>
        set(
          produce<IState>((s) => {
            s[key].isShow = true
          }),
        ),
    }
  }
  return {
    login: createPopupGroup('login'),
    transfer: createPopupGroup('transfer'),
    product: createPopupGroup('product'),
    giftCard: createPopupGroup('giftCard'),
  }
})

export default usePopupStore
