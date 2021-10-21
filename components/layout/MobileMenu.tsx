import { menu } from '@/lib/menu'
import useMe from '@/services/useMe'
import { useStore } from '@/store/useStore'
import { useUserStore } from '@/store/useUserStore'
import { toCurrency } from '@/utils'
import cs from 'classnames'
import { useRouter } from 'next/dist/client/router'
import React from 'react'
import { FaUser } from 'react-icons/fa'
import { HiCurrencyDollar } from 'react-icons/hi'

function MobileMenu({ className }: { className?: string }) {
  const router = useRouter()
  const closeMbMenu = useStore((s) => s.closeMbMenu)
  const { data: user, isLoading } = useMe()
  const clearUser = useUserStore((s) => s.clearUser)
  const toggleLoginPopup = useStore((s) => s.toggleLoginPopup)
  const handleLogout = () => {
    clearUser()
    alert('登出成功')
    router.push('/mb/home')
  }
  return (
    <div
      className={cs(
        'block lg:hidden bg-black/90 h-screen w-screen fixed right-0 z-20 pt-12 overflow-y-auto',
        className,
      )}
    >
      {/* {user ? (
        <div className="grid grid-cols-2 gap-2 mb-4 mx-4">
          <div className="space-y-2 flex flex-col">
            <div className="flex justify-between border border-gray-500 rounded items-center px-2 flex-1">
              <FaUser className="text-xl text-purple-500" />
              <div className="text-gray-300 font-medium">{user?.nickname}</div>
            </div>
            <div className="flex justify-between border border-gray-500 rounded items-center px-2 flex-1">
              <HiCurrencyDollar className="text-2xl text-gold-500 -ml-1" />
              <div className="text-gray-300 font-medium">
                {toCurrency(user?.coin || 0, 0)}
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <div className="btn active">我要儲值</div>
            <div className="btn" onClick={handleLogout}>
              登 出
            </div>
          </div>
        </div>
      ) : (
        <div className="px-4 mb-6">
          <button className="gold-btn w-full" onClick={toggleLoginPopup}>
            登入
          </button>
        </div>
      )} */}

      <div className="">
        {menu.map((m, i) => (
          <div key={i}>
            <div className="text-white bg-gray-600/80 py-3 px-3 border-b border-white/30 flex items-center">
              {/* <BiCircle /> */}
              {m.label}
            </div>
            {m.subs && (
              <div className="">
                {m.subs && (
                  <div className="">
                    {m.subs.map((m2, i2) => (
                      <div
                        key={i2}
                        className="text-white active:text-gold-300 bg-gray-800/80 py-3 px-3 border-b border-white/10"
                        onClick={() =>
                          m2.path && router.push(m2.path) && closeMbMenu()
                        }
                      >
                        {m2.label}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default MobileMenu
