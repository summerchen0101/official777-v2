import { menu } from '@/lib/menu'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import Image from 'next/image'
import MobileHeader from './MobileHeader'

function HeaderNav() {
  const router = useRouter()

  return (
    <>
      <header className="hidden lg:block group fixed top-0 w-full z-30">
        <div className="bg-gradient-to-b from-purple-900 via-purple-700 relative flex items-center justify-center px-5 z-20">
          <img
            src="/logo.png"
            alt=""
            className="cursor-pointer h-28 -mb-2"
            onClick={() => router.push('/')}
          />
          <div className="flex px-5">
            {menu.map((m, i) => (
              <div
                key={i}
                className="text-xl text-white cursor-pointer text-center w-36"
              >
                {m.label}
              </div>
            ))}
          </div>
        </div>
        {/* Hover展開的內容 */}
        <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 w-full absolute top-0 cursor-pointer transition-all -translate-y-12 duration-400 group-hover:translate-y-0">
          <div className="pt-[120px] bg-black/75 opacity-95 py-2 px-5 flex space-x- justify-center h-[300px] relative z-10">
            <div className="w-48"></div>
            {menu.map((m, m_i) => (
              <div key={m_i} className="space-y-2 w-36">
                {m.subs?.map((t, i) => (
                  <div
                    key={i}
                    className="text-gray-100 hover:text-yellow-200 text-center"
                    onClick={t.onClick}
                  >
                    {t.path ? <Link href={t.path}>{t.label}</Link> : t.label}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="flex space-x-3 absolute top-0 right-0 xl:m-3 z-30 lg:scale-75">
          <img src="/fb.png" className="cursor-pointer" alt="" />
          <img src="/line.png" className="cursor-pointer" alt="" />
          <img src="/youtube.png" className="cursor-pointer" alt="" />
        </div>
      </header>
      <MobileHeader />
    </>
  )
}

export default HeaderNav
