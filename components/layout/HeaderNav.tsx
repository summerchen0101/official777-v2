import { menu } from '@/lib/menu'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'

function HeaderNav() {
  const router = useRouter()

  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-30">
      <div className="h-[80px] mx-auto flex items-center px-5">
        <div
          className="text-3xl text-indigo-500 font-semibold cursor-pointer px-8 py-2"
          onClick={() => router.push('/')}
        >
          LOGO
        </div>
        <div className="flex-1 group flex flex-col items-center">
          <div className="flex px-5">
            {menu.map((m, i) => (
              <div key={i} className="nav">
                {m.label}
              </div>
            ))}
          </div>
          <div className="pt-[80px] invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute top-0 cursor-pointer transition-all">
            <div className=" bg-gradient-to-b from-gray-900 via-gray-800 opacity-95 py-5 px-5 flex space-x- justify-center h-56">
              {menu.map((m, m_i) => (
                <div key={m_i} className="space-y-2 w-36">
                  {m.subs?.map((t, i) => (
                    <div key={i} className="nav-link" onClick={t.onClick}>
                      {t.path ? <Link href={t.path}>{t.label}</Link> : t.label}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default HeaderNav
