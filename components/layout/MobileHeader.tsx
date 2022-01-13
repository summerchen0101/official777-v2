import { useStore } from '@/store/useStore'
import { toImgPath } from '@/utils'
import cs from 'classnames'
import { useRouter } from 'next/dist/client/router'
import { useEffect } from 'react'
import { HiMenu } from 'react-icons/hi'
import MobileMenu from './MobileMenu'

function MobileHeader() {
  const router = useRouter()
  const toggleMbMenu = useStore((s) => s.toggleMbMenu)
  const isShowMbMenu = useStore((s) => s.isShowMbMenu)

  useEffect(() => {
    if (isShowMbMenu) {
      document.querySelector('body')?.classList.add('lock')
    } else {
      document.querySelector('body')?.classList.remove('lock')
    }
  }, [isShowMbMenu])

  return (
    <>
      <header className="block lg:hidden group fixed top-0 w-full h-16 z-30 bg-purple-dark">
        <div className="bg-gradient-to-b from-purple-darkeset to-purple-dark/0 w-screen h-6 absolute bottom-0 -mb-6"></div>
        <img
          src="/img/logo.png"
          alt=""
          className="cursor-pointer h-16 absolute m-2"
          onClick={() => router.push('/')}
        />
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
