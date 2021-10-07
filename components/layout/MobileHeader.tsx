import { useStore } from '@/store/useStore'
import cs from 'classnames'
import { useRouter } from 'next/dist/client/router'
import { HiMenu } from 'react-icons/hi'
import MobileMenu from './MobileMenu'

function MobileHeader() {
  const router = useRouter()
  const toggleMbMenu = useStore((s) => s.toggleMbMenu)
  const isShowMbMenu = useStore((s) => s.isShowMbMenu)

  return (
    <>
      <header className="block lg:hidden group fixed top-0 w-full h-32 z-30 bg-gradient-to-b from-purple-dark via-purple-dark to-purple-dark/0">
        <img
          src="/logo.png"
          alt=""
          className="cursor-pointer h-20 absolute m-2"
          onClick={() => router.push('/')}
        />
        <div
          className="text-white/80 active:text-gold-500 absolute right-0 p-4"
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
