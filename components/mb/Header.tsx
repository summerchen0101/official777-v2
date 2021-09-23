import { useStore } from '@/store/useStore'
import { useRouter } from 'next/dist/client/router'
import { HiMenu } from 'react-icons/hi'

function MobileHeader() {
  const router = useRouter()
  const toggleMbMenu = useStore((s) => s.toggleMbMenu)

  return (
    <header className="group fixed top-0 w-full h-24 z-30 bg-gradient-to-b from-purple-900 via-purple-900 to-purple-900/0">
      <img
        src="/logo.png"
        alt=""
        className="cursor-pointer h-20 absolute"
        onClick={() => router.push('/')}
      />
      <div
        className="text-white/80 active:text-gold-500 absolute right-0 p-4"
        onClick={toggleMbMenu}
      >
        <HiMenu className="text-3xl" />
      </div>
    </header>
  )
}

export default MobileHeader
