import Layout from '@/components/layout/Layout'
import PageBanner from '@/components/layout/PageBanner'
import React from 'react'

const list = [
  {
    name: '幸運紅包',
    desc: '說明的文字說明的文字說明的文字，說明的文字說明的文字說明的文字說明的文字，說明的文字說明的文字說明的文字說明的文字說明的文字說明的文字說明的文字。',
    img: '/gift/img_redEnvelopeLucky.png',
  },
  {
    name: '口令紅包',
    desc: '說明的文字說明的文字說明的文字，說明的文字說明的文字說明的文字說明的文字，說明的文字說明的文字說明的文字說明的文字說明的文字說明的文字說明的文字。',
    img: '/gift/img_redEnvelopePassword.png',
  },
  {
    name: '圖片紅包',
    desc: '說明的文字說明的文字說明的文字，說明的文字說明的文字說明的文字說明的文字，說明的文字說明的文字說明的文字說明的文字說明的文字說明的文字說明的文字。',
    img: '/gift/img_redEnvelopePicture.png',
  },
  {
    name: '語音紅包',
    desc: '說明的文字說明的文字說明的文字，說明的文字說明的文字說明的文字說明的文字，說明的文字說明的文字說明的文字說明的文字說明的文字說明的文字說明的文字。',
    img: '/gift/img_redEnvelopeVoice.png',
  },
  {
    name: '影音紅包',
    desc: '說明的文字說明的文字說明的文字，說明的文字說明的文字說明的文字說明的文字，說明的文字說明的文字說明的文字說明的文字說明的文字說明的文字說明的文字。',
    img: '/gift/img_redEnvelopeVideo.png',
  },
]

function GiftIntro() {
  return (
    <Layout>
      <PageBanner />
      <section className="px-4">
        <div className="lg:w-[860px] mx-auto">
          <div className="mb-8 flex justify-center lg:justify-start">
            <img src="/title_gift.png" alt="紅包說明" className="h-10" />
          </div>
          <div className="space-y-6">
            {list.map((t, i) => (
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

export default GiftIntro
