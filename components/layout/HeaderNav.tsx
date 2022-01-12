import { menu } from '@/lib/menu'
import usePopupStore from '@/store/usePopupStore'
import { useStore } from '@/store/useStore'
import { useUserStore } from '@/store/useUserStore'
import { Menu } from '@/types'
import { toImgPath } from '@/utils'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import MobileHeader from './MobileHeader'

function HeaderNav() {
  const router = useRouter()
  const token = useUserStore((s) => s.tokenInfo?.accessToken)
  const onToggle = usePopupStore((s) => s.login.onToggle)
  const canRecharge = useStore((s) => s.canRecharge)

  const fixedMenu = menu.map((m) => {
    if (!canRecharge && m.subs) {
      m.subs = m.subs.filter((t) => !t.isRecharge)
    }
    return m
  })

  const handleAuthLogin = (menu: Menu) => {
    router.replace({ query: { to: menu.path } })
    onToggle()
  }
  return (
    <>
      <header className="hidden lg:block group fixed top-0 w-full z-30">
        <div className="bg-gradient-to-b from-purple-darkeset to-purple-dark relative z-20 h-20 flex items-center justify-center">
          <div className="bg-gradient-to-b from-purple-dark to-purple-dark/0 w-screen h-12 absolute bottom-0 -mb-12"></div>
          <div className="flex justify-center relative pl-32">
            <img
              src="/img/logo.png"
              alt=""
              className="cursor-pointer absolute lg:h-40 z-50 left-0 top-0 lg:-ml-20 xl:-ml-28 -mt-6 p-3"
              onClick={() => router.push('/')}
            />
            <div className="flex space-x-2 relative -bottom-5">
              {fixedMenu.map((m, i) => (
                <div
                  key={i}
                  className="text-2xl font-mono text-white cursor-pointer text-center w-36"
                >
                  {m.label}
                </div>
              ))}
            </div>
          </div>
          {/* Hover展開的內容 */}
          <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 w-full absolute top-0 cursor-pointer transition-all -translate-y-12 duration-400 group-hover:translate-y-0 mt-12 z-10">
            <div className="bg-gradient-to-t from-black to-black/0 opacity-95 flex justify-center relative pl-32 space-x-2 py-10">
              {/* <div className="w-52"></div> */}
              {fixedMenu.map((m, m_i) => (
                <div key={m_i} className="space-y-2 w-36">
                  {m.subs?.map((t, i) => (
                    <div
                      key={i}
                      className="text-gray-100 hover:text-yellow-200 text-center"
                      onClick={t.onClick}
                    >
                      {t.path && t.needAuth && !token ? (
                        <a onClick={() => handleAuthLogin(t)}>{t.label}</a>
                      ) : t.path && t.needAuth && token ? (
                        <Link href={t.path}>{t.label}</Link>
                      ) : t.path && !t.needAuth ? (
                        <Link href={t.path}>{t.label}</Link>
                      ) : (
                        t.label
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex space-x-3 absolute top-0 right-0 xl:m-3 z-30 lg:scale-75">
          <img src={toImgPath('/fb.png')} className="cursor-pointer" alt="" />
          <img src={toImgPath('/line.png')} className="cursor-pointer" alt="" />
          <img
            src={toImgPath('/youtube.png')}
            className="cursor-pointer"
            alt=""
          />
        </div>
      </header>
      <MobileHeader />
    </>
  )
}

export default HeaderNav
