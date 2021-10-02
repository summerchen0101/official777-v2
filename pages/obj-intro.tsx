import Layout from '@/components/layout/Layout'
import PageBanner from '@/components/layout/PageBanner'
import React from 'react'

const objList = [
  {
    name: '免費遊戲注額卷 100',
    desc: '道具說明道具說明道具說明，道具說明道具說明道具說明道具說明，道具說明道具說明道具說明道具說明道具說明道具說明道具說明。',
    img: '/gift/img_redEnvelopeLucky.png',
  },
  {
    name: '免費遊戲注額卷 1,000',
    desc: '道具說明道具說明道具說明，道具說明道具說明道具說明道具說明，道具說明道具說明道具說明道具說明道具說明道具說明道具說明。',
    img: '/gift/img_redEnvelopeLucky.png',
  },
  {
    name: '免費遊戲注額卷 10,000',
    desc: '道具說明道具說明道具說明，道具說明道具說明道具說明道具說明，道具說明道具說明道具說明道具說明道具說明道具說明道具說明。',
    img: '/gift/img_redEnvelopeLucky.png',
  },
  {
    name: '普通刮刮卡',
    desc: '道具說明道具說明道具說明，道具說明道具說明道具說明道具說明，道具說明道具說明道具說明道具說明道具說明道具說明道具說明。',
    img: '/gift/img_redEnvelopeLucky.png',
  },
  {
    name: '高級刮刮卡',
    desc: '道具說明道具說明道具說明，道具說明道具說明道具說明道具說明，道具說明道具說明道具說明道具說明道具說明道具說明道具說明。',
    img: '/gift/img_redEnvelopeLucky.png',
  },
]

function ObjIntro() {
  return (
    <Layout>
      <PageBanner />
      <section className="px-4">
        <div className="lg:w-[860px] mx-auto">
          <div className="mb-8 flex justify-center lg:justify-start">
            <img src="/title_obj_intro.png" alt="道具說明" className="h-10" />
          </div>
          <div className="space-y-6">
            {objList.map((t, i) => (
              <div
                key={i}
                className="flex flex-col lg:flex-row bg-black/50 shadow-md rounded-lg overflow-hidden py-3 lg:py-0 border-2 border-purple-600/60"
              >
                <div className="p-3 lg:h-auto flex justify-center items-center">
                  <img
                    src={t.img}
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
