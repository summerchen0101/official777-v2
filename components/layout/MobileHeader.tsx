import useCdnUrl from '@/hooks/useCdnUrl'
import useMe from '@/services/useMe'
import usePopupStore from '@/store/usePopupStore'
import { useStore } from '@/store/useStore'
import { useUserStore } from '@/store/useUserStore'
import { toCurrency } from '@/utils'
import cs from 'classnames'
import { useRouter } from 'next/dist/client/router'
import { useEffect } from 'react'
import { HiMenu } from 'react-icons/hi'
import MobileMenu from './MobileMenu'

function MobileHeader() {
  const toCdnUrl = useCdnUrl()
  const router = useRouter()
  const toggleMbMenu = useStore((s) => s.toggleMbMenu)
  const isShowMbMenu = useStore((s) => s.isShowMbMenu)
  const { data: user } = useMe()
  const clearUser = useUserStore((s) => s.clearUser)
  const onToggle = usePopupStore((s) => s.login.onToggle)

  const handleLogout = () => {
    clearUser()
    alert('登出成功')
  }

  useEffect(() => {
    if (isShowMbMenu) {
      document.querySelector('body')?.classList.add('lock')
    } else {
      document.querySelector('body')?.classList.remove('lock')
    }
  }, [isShowMbMenu])

  return (
    <>
      <header className="lg:hidden group fixed top-0 w-full z-30 bg-purple-dark flex gap-x-2 py-1 px-2 items-center">
        <img
          src="/img/logo.png"
          alt=""
          className="cursor-pointer h-14"
          onClick={() => router.push('/')}
        />
        <div className="w-48">
          {user ? (
            <div className="silver-btn" onClick={handleLogout}>
              登出
            </div>
          ) : (
            <div className="">
              <div className="gold-btn" onClick={onToggle}>
                登入
              </div>
            </div>
          )}
        </div>

        <div
          className="text-white/80 active:text-gold-500 absolute right-0 top-1 p-4"
          onClick={toggleMbMenu}
        >
          <HiMenu className="text-3xl" />
        </div>
      </header>
      <MobileMenu
        className={cs(
          'transition-all',
          isShowMbMenu ? 'translate-x-0' : 'translate-x-full',
        )}
      />
    </>
  )
}

export default MobileHeader
