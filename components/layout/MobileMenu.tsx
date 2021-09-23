import { menu } from '@/lib/menu'
import React from 'react'
import { BiCircle } from 'react-icons/bi'
import { FaUser } from 'react-icons/fa'
import { HiCurrencyDollar } from 'react-icons/hi'
import Link from 'next/link'
import cs from 'classnames'

function MobileMenu({ className }: { className?: string }) {
  return (
    <div
      className={cs(
        'block lg:hidden bg-black/90 h-screen w-screen fixed right-0 z-20 pt-24 overflow-y-auto',
        className,
      )}
    >
      <div className="grid grid-cols-2 gap-2 mb-4 mx-4">
        <div className="space-y-2">
          <div className="flex justify-between border border-gray-500 rounded items-center px-2 py-2">
            <FaUser className="text-xl text-purple-500" />
            <div className="text-gray-300 font-medium">我是夏天</div>
          </div>
          <div className="flex justify-between border border-gray-500 rounded items-center px-2 py-2">
            <HiCurrencyDollar className="text-2xl text-gold-500 -ml-1" />
            <div className="text-gray-300 font-medium">100,000</div>
          </div>
        </div>
        <div className="items-center flex justify-center ">
          <div className="gold-btn w-2/3">我要儲值</div>
        </div>
      </div>
      <div className="">
        {menu.map((m, i) => (
          <div key={i}>
            <div className="text-white bg-gray-600/80 py-3 px-3 border-b border-white/30 flex items-center">
              {/* <BiCircle /> */}
              {m.label}
            </div>
            {m.subs && (
              <div className="">
                {m.subs.map((m2, i2) => (
                  <div
                    key={i2}
                    className="text-white bg-gray-800/80 py-3 px-3 border-b border-white/10"
                  >
                    {m2.path ? (
                      <Link href={m2.path}>{m2.label}</Link>
                    ) : (
                      m2.label
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default MobileMenu
