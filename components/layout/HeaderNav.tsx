import { menu } from '@/lib/menu'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import MobileHeader from './MobileHeader'

function HeaderNav() {
  const router = useRouter()

  return (
    <>
      <header className="hidden lg:block group fixed top-0 w-full z-30">
        <div className="bg-purple-900 h-12 relative z-20 before:bg-gradient-to-b before:from-purple-900 before:absolute before:bottom-0 before:w-screen before:h-12 before:content-[''] before:-mb-12 before:-z-1">
          <div className="flex items-center justify-center">
            <img
              src="/logo.png"
              alt=""
              className="cursor-pointer w-52"
              onClick={() => router.push('/')}
            />
            <div className="flex px-5 -mt-16">
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
        </div>
        {/* Hover展開的內容 */}
        <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 w-full absolute top-0 cursor-pointer transition-all -translate-y-12 duration-400 group-hover:translate-y-0 mt-12 z-30">
          <div className="bg-gradient-to-t from-black opacity-95 p-5 pb-10 flex space-x- justify-center relative z-10 pt-10">
            <div className="w-52"></div>
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
