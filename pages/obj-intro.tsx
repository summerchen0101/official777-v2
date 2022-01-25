import Layout from '@/components/layout/Layout'
import PageBanner from '@/components/layout/PageBanner'
import PicIntro from '@/components/PicIntro'
import { toCdnUrl } from '@/utils'
import React from 'react'

const objList = [
  {
    name: '一星超級卡',
    desc: `獲得一次老虎機，押注100的免費遊戲`,
    img: '/event/items/FG_LV3_1.png',
  },
  {
    name: '三星超級卡',
    desc: `獲得一次老虎機，押注1000的免費遊戲`,
    img: '/event/items/FG_LV3_3.png',
  },
  {
    name: '五星超級卡',
    desc: `獲得一次老虎機，押注10000的免費遊戲`,
    img: '/event/items/FG_LV3_5.png',
  },
  {
    name: '一星威力卡',
    desc: `獲得一次老虎機，押注100的免費遊戲`,
    img: '/event/items/FG_LV2_1.png',
  },
  {
    name: '三星威力卡',
    desc: `獲得一次老虎機，押注1000的免費遊戲`,
    img: '/event/items/FG_LV2_3.png',
  },
  {
    name: '五星威力卡',
    desc: `獲得一次老虎機，押注10000的免費遊戲`,
    img: '/event/items/FG_LV2_5.png',
  },
  {
    name: '一星獎勵卡',
    desc: `獲得一次老虎機，押注100的免費遊戲`,
    img: '/event/items/FG_LV1_1.png',
  },
  {
    name: '三星獎勵卡',
    desc: `獲得一次老虎機，押注1000的免費遊戲`,
    img: '/event/items/FG_LV1_3.png',
  },
  {
    name: '五星獎勵卡',
    desc: `獲得一次老虎機，押注10000的免費遊戲`,
    img: '/event/items/FG_LV1_5.png',
  },

  // {
  //   name: '一星超級卡碎片',
  //   desc: `收集10張可以獲得一次老虎機，押注100的免費遊戲`,
  //   img: '/obj/item_item_Scratch_LV1.png',
  // },
  // {
  //   name: '三星超級卡碎片',
  //   desc: `收集10張可以獲得一次老虎機，押注1000的免費遊戲`,
  //   img: '/obj/item_item_Scratch_LV2.png',
  // },
  // {
  //   name: '五星超級卡碎片',
  //   desc: `收集10張可以獲得一次老虎機，押注10000的免費遊戲`,
  //   img: '/obj/item_item_Scratch_LV2.png',
  // },
  // {
  //   name: '一星威力卡碎片',
  //   desc: `收集10張可以獲得一次老虎機，押注100的免費遊戲`,
  //   img: '/obj/item_item_Scratch_LV1.png',
  // },
  // {
  //   name: '三星威力卡碎片',
  //   desc: `收集10張可以獲得一次老虎機，押注1000的免費遊戲`,
  //   img: '/obj/item_item_Scratch_LV2.png',
  // },
  // {
  //   name: '五星威力卡碎片',
  //   desc: `收集10張可以獲得一次老虎機，押注10000的免費遊戲`,
  //   img: '/obj/item_item_Scratch_LV2.png',
  // },
  // {
  //   name: '一星獎勵卡碎片',
  //   desc: `收集10張可以獲得一次老虎機，押注100的免費遊戲`,
  //   img: '/obj/item_item_Scratch_LV1.png',
  // },
  // {
  //   name: '三星獎勵卡碎片',
  //   desc: `收集10張可以獲得一次老虎機，押注1000的免費遊戲`,
  //   img: '/obj/item_item_Scratch_LV2.png',
  // },
  // {
  //   name: '五星獎勵卡碎片',
  //   desc: `收集10張可以獲得一次老虎機，押注10000的免費遊戲`,
  //   img: '/obj/item_item_Scratch_LV2.png',
  // },

  // {
  //   name: '1000金幣券碎片',
  //   desc: `收集10張，使用後可以直接獲得1000金幣`,
  //   img: '/obj/item_item_Scratch_LV2.png',
  // },
  // {
  //   name: '10000金幣券碎片',
  //   desc: `收集10張，使用後可以直接獲得10000金幣`,
  //   img: '/obj/item_item_Scratch_LV2.png',
  // },
  // {
  //   name: '100000金幣券碎片',
  //   desc: `收集10張，使用後可以直接獲得100000金幣`,
  //   img: '/obj/item_item_Scratch_LV2.png',
  // },
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
          <PicIntro
            img="/appintro/item_01.png"
            intro="步驟1、從大廳的背包按鈕開啟背包"
          />
          <PicIntro
            img="/appintro/item_02.png"
            intro="步驟2、選擇要使用的道具，要特別注意使用期限"
          />
          <PicIntro
            img="/appintro/item_03.png"
            intro="步驟3、點擊使用就可以進行獎勵遊戲或者直接獲得金幣！
"
          />
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
