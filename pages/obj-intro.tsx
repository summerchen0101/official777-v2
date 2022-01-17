import Layout from '@/components/layout/Layout'
import PageBanner from '@/components/layout/PageBanner'
import { toCdnUrl } from '@/utils'
import React from 'react'

const objList = [
  {
    name: '免費遊戲注額卷 100(碎片)',
    desc: `收集10張可以獲得一次SLOT GAME，注額100的免費遊戲`,
    img: '/obj/item_FG_piecesLV1.png',
  },
  {
    name: '免費遊戲注額卷 1,000(碎片)',
    desc: `收集10張可以獲得一次SLOT GAME，注額1000的免費遊戲`,
    img: '/obj/item_FG_piecesLV2.png',
  },
  {
    name: '免費遊戲注額卷 10,000(碎片)',
    desc: `收集10張可以獲得一次SLOT GAME，注額10000的免費遊戲`,
    img: '/obj/item_FG_piecesLV3.png',
  },
  {
    name: '免費遊戲注額卷 100',
    desc: `獲得一次SLOT GAME，注額100的免費遊戲`,
    img: '/obj/item_FG_LV1.png',
  },
  {
    name: '免費遊戲注額卷 1,000',
    desc: `獲得一次SLOT GAME，注額1000的免費遊戲`,
    img: '/obj/item_FG_LV2.png',
  },
  {
    name: '免費遊戲注額卷 10,000',
    desc: `獲得一次SLOT GAME，注額10000的免費遊戲`,
    img: '/obj/item_FG_LV3.png',
  },
  {
    name: '金幣卷 100(碎片)',
    desc: `收集10張，使用後可以直接獲得100金幣`,
    img: '/obj/item_piecesGold100.png',
  },
  {
    name: '金幣卷 1,000(碎片)',
    desc: `收集10張，使用後可以直接獲得1000金幣`,
    img: '/obj/item_piecesGold1000.png',
  },
  {
    name: '金幣卷 10,000(碎片)',
    desc: `收集10張張，使用後可以直接獲得10000金幣`,
    img: '/obj/item_piecesGold10000.png',
  },
  {
    name: '普通刮刮卡',
    desc: `使用後可以進行普通刮刮樂遊戲一次`,
    img: '/obj/item_item_Scratch_LV1.png',
  },
  {
    name: '高級刮刮卡',
    desc: `使用後可以進行高級刮刮樂遊戲一次`,
    img: '/obj/item_item_Scratch_LV2.png',
  },
]

function ObjIntro() {
  return (
    <Layout>
      <PageBanner />
      <section className="px-4">
        <div className="lg:w-[860px] mx-auto">
          <div className="mb-8 flex justify-center lg:justify-start">
            <img
              src={toCdnUrl('/title_obj_intro.png')}
              alt="道具說明"
              className="h-10"
            />
          </div>
          <div className="space-y-6">
            {objList.map((t, i) => (
              <div
                key={i}
                className="flex flex-col lg:flex-row bg-black/50 shadow-md rounded-lg overflow-hidden py-3 lg:py-0 border-2 border-purple-600/60"
              >
                <div className="p-3 lg:h-auto flex justify-center items-center">
                  <img
                    src={toCdnUrl(t.img)}
                    className="object-contain h-40 rounded-l-xl"
                    alt={t.name}
                  />
                </div>
                <div className="flex-1 p-5">
                  <p className="text-2xl font-semibold text-gold-500 pt-1 pb-3 mb-4 border-b border-gold-500/30 tracking-wide">
                    {t.name}
                  </p>
                  <div className="text-white/80 leading-8 whitespace-pre-line text-lg">
                    {t.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ObjIntro
