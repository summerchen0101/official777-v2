import { menu } from '@/lib/menu'
import useMe from '@/services/useMe'
import usePopupStore from '@/store/usePopupStore'
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
  const onToggle = usePopupStore((s) => s.login.onToggle)
  const handleLogout = () => {
    clearUser()
    alert('登出成功')
    router.push('/mb/home')
  }
  return (
    <div
      className={cs(
        'block lg:hidden bg-black/90 h-screen w-screen fixed right-0 z-20 pt-12 overflow-y-auto max-h-[calc(100%-80px)]',
        className,
      )}
    >
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
