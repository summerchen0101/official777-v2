import Layout from '@/components/layout/Layout'
import PageBanner from '@/components/layout/PageBanner'
import useCdnUrl from '@/hooks/useCdnUrl'
import React from 'react'
import { BiFile } from 'react-icons/bi'

const downloads = [
  {
    name: '領獎單',
    path: '/download/兆豐遊戲全球科技_領獎單.pdf',
  },
  {
    name: '手機號碼暨玩家名稱修改申請單',
    path: '/download/兆豐遊戲全球科技_手機號碼暨玩家名稱修改申請單.pdf',
  },
  {
    name: '帳號證明暨遊戲歷程申請單',
    path: '/download/兆豐遊戲全球科技_帳號證明暨遊戲歷程申請單.pdf',
  },
]

function FilesPage() {
  const toCdnUrl = useCdnUrl()
  return (
    <Layout>
      <PageBanner />
      <section className="mt-5">
        <div className="lg:w-[860px] min-h-[400px] mx-auto lg:py-20">
          <div className="mb-6 flex justify-center lg:justify-start">
            <img
              src={toCdnUrl('/title_download.png')}
              alt="表單下載"
              className="h-10"
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-3 gap-x-4 px-4">
            {downloads.map((t, i) => (
              <a
                key={i}
                className="cursor-pointer flex items-center space-x-4 text-gray-200 bg-black/50 rounded-md p-3 text-lg h-20"
                href={toCdnUrl(t.path)}
                target="_blank"
                download={t.name}
                rel="noreferrer"
              >
                <BiFile className="text-3xl text-gold-500" />
                <span>{t.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default FilesPage
