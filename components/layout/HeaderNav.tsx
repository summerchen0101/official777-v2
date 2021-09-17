import { menu } from '@/lib/menu'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import Image from 'next/image'

function HeaderNav() {
  const router = useRouter()

  return (
    <header className="bg-gradient-to-b from-purple-800 via-purple-700 fixed top-0 w-full z-30 h-[120px] flex items-center px-5">
      <img
        src="/logo.png"
        alt=""
        className="cursor-pointer h-36 absolute top-0"
        onClick={() => router.push('/')}
      />
      <div className="flex-1 group flex flex-col items-center">
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
        {/* Hover展開的內容 */}
        <div className="pt-[80px] invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute top-0 cursor-pointer transition-all">
          <div className=" bg-gradient-to-t from-gray-900 via-gray-900 opacity-95 py-5 px-5 pt-10 flex space-x- justify-center h-56 -mt-3">
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
      </div>
      <div className="flex space-x-3 absolute top-0 right-0 m-3">
        <img src="/fb.png" alt="" />
        <img src="/line.png" alt="" />
        <img src="/youtube.png" alt="" />
      </div>
    </header>
  )
}

export default HeaderNav
