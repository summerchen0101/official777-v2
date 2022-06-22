import React from 'react'
import cs from 'classnames'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'

const tabs = [
  { label: '註冊金幣', code: 'phonenumber' },
  { label: '按讚賺一波', code: 'fanpage' },
  { label: '分享中大獎', code: 'invite' },
  { label: '牌桌見真章', code: 'compitition' },
  { label: '獎勵查詢', code: 'rewards' },
]
function ClubTabs() {
  const router = useRouter()
  return (
    <div className="flex gap-x-2 p-2 ">
      {tabs.map((t) => (
        <Link href={t.code} key={t.code}>
          <a
            className={cs(
              'p-2',
              router.pathname.includes(t.code)
                ? 'bg-yellow-200 text-black'
                : 'bg-black text-white',
            )}
          >
            {t.label}
          </a>
        </Link>
      ))}
    </div>
  )
}

export default ClubTabs
