import Layout from '@/components/layout/Layout'
import PageBanner from '@/components/layout/PageBanner'
import { VipLevel } from '@/lib/enums'
import { vipLevelMap } from '@/lib/map'
import useCdnUrl from '@/hooks/useCdnUrl'
import React, { useState } from 'react'
import cs from 'classnames'
import PicIntro from '@/components/PicIntro'

const vipIntro = [
  {
    項目: 'VIP點數需求',
    [VipLevel.LV1]: '-',
    [VipLevel.LV2]: '60',
    [VipLevel.LV3]: '1,000',
    [VipLevel.LV4]: '5,000',
    [VipLevel.LV5]: '20,000',
    [VipLevel.LV6]: '100,000',
  },
  {
    項目: '累積押注',
    [VipLevel.LV1]: '-',
    [VipLevel.LV2]: '-',
    [VipLevel.LV3]: '5,000,000',
    [VipLevel.LV4]: '25,000,000',
    [VipLevel.LV5]: '100,000,000',
    [VipLevel.LV6]: '500,000,000',
  },
  {
    項目: '聊天名字顏色',
    [VipLevel.LV1]: '無色',
    [VipLevel.LV2]: '無色',
    [VipLevel.LV3]: '無色',
    [VipLevel.LV4]: '無色',
    [VipLevel.LV5]: '紅色',
    [VipLevel.LV6]: '彩色',
  },
  {
    項目: '房間保留時間/分',
    [VipLevel.LV1]: '30',
    [VipLevel.LV2]: '180',
    [VipLevel.LV3]: '360',
    [VipLevel.LV4]: '720',
    [VipLevel.LV5]: '1,440',
    [VipLevel.LV6]: '2,880',
  },
  {
    項目: '頭相框',
    [VipLevel.LV1]: '黑色',
    [VipLevel.LV2]: '銅色',
    [VipLevel.LV3]: '銀色',
    [VipLevel.LV4]: '金色',
    [VipLevel.LV5]: '紅色',
    [VipLevel.LV6]: '彩色',
  },
  {
    項目: 'SLOT注額上限',
    [VipLevel.LV1]: '100',
    [VipLevel.LV2]: '10,000',
    [VipLevel.LV3]: '20,000',
    [VipLevel.LV4]: '30,000',
    [VipLevel.LV5]: '50,000',
    [VipLevel.LV6]: '100,000',
  },
  {
    項目: '發紅包',
    [VipLevel.LV1]: '-',
    [VipLevel.LV2]: '有',
    [VipLevel.LV3]: '有',
    [VipLevel.LV4]: '有',
    [VipLevel.LV5]: '有',
    [VipLevel.LV6]: '有',
  },
  {
    項目: '紅包服務費',
    [VipLevel.LV1]: '-',
    [VipLevel.LV2]: '1%',
    [VipLevel.LV3]: '0.50%',
    [VipLevel.LV4]: '免費',
    [VipLevel.LV5]: '免費',
    [VipLevel.LV6]: '免費',
  },
  {
    項目: '各遊戲高注額',
    [VipLevel.LV1]: '-',
    [VipLevel.LV2]: '有',
    [VipLevel.LV3]: '有',
    [VipLevel.LV4]: '有',
    [VipLevel.LV5]: '有',
    [VipLevel.LV6]: '有',
  },
  {
    項目: '私人房',
    [VipLevel.LV1]: '-',
    [VipLevel.LV2]: '有',
    [VipLevel.LV3]: '有',
    [VipLevel.LV4]: '有',
    [VipLevel.LV5]: '有',
    [VipLevel.LV6]: '有',
  },
  {
    項目: '保險箱',
    [VipLevel.LV1]: '-',
    [VipLevel.LV2]: '有',
    [VipLevel.LV3]: '有',
    [VipLevel.LV4]: '有',
    [VipLevel.LV5]: '有',
    [VipLevel.LV6]: '有',
  },
  {
    項目: '機率表',
    [VipLevel.LV1]: '-',
    [VipLevel.LV2]: '-',
    [VipLevel.LV3]: '有',
    [VipLevel.LV4]: '有',
    [VipLevel.LV5]: '有',
    [VipLevel.LV6]: '有',
  },
  {
    項目: '購買免費遊戲',
    [VipLevel.LV1]: '-',
    [VipLevel.LV2]: '-',
    [VipLevel.LV3]: '-',
    [VipLevel.LV4]: '有',
    [VipLevel.LV5]: '有',
    [VipLevel.LV6]: '有',
  },
  {
    項目: '專屬客服',
    [VipLevel.LV1]: '-',
    [VipLevel.LV2]: '-',
    [VipLevel.LV3]: '-',
    [VipLevel.LV4]: '-',
    [VipLevel.LV5]: '有',
    [VipLevel.LV6]: '有',
  },
  {
    項目: '專屬經理',
    [VipLevel.LV1]: '-',
    [VipLevel.LV2]: '-',
    [VipLevel.LV3]: '-',
    [VipLevel.LV4]: '-',
    [VipLevel.LV5]: '-',
    [VipLevel.LV6]: '有',
  },
  {
    項目: '會員卡期限',
    [VipLevel.LV1]: '永久',
    [VipLevel.LV2]: '永久',
    [VipLevel.LV3]: '60天',
    [VipLevel.LV4]: '60天',
    [VipLevel.LV5]: '60天',
    [VipLevel.LV6]: '60天',
  },
]

function VipIntro() {
  const toCdnUrl = useCdnUrl()
  const [activeVip, setActiveVip] = useState(VipLevel.LV1)
  return (
    <Layout>
      <PageBanner />
      <section className="px-4">
        <div className="lg:w-[860px] mx-auto">
          <div className="mb-8 flex justify-center lg:justify-start">
            <img
              src={toCdnUrl('/title_vip.png')}
              alt="VIP說明"
              className="h-10"
            />
          </div>
          <div className="py-5 text-white rounded text-lg my-3">
            儲值和押注都可以提升會員等級，
            會員等級提高可以提升注額並且享受更尊爵的服務！
          </div>
          <PicIntro
            img="/appintro/vip_01.png"
            intro="步驟1、從大廳的點擊購買按鈕"
          />
          <PicIntro
            img="/appintro/vip_02.png"
            intro="步驟2、查看會員進度和特權"
          />
          <PicIntro
            img="/appintro/vip_03.png"
            intro="步驟3、對比會員特權和查看會員階級"
          />

          <select
            onChange={(e) => setActiveVip(+e.target.value)}
            className="lg:hidden rounded text-gray-800 text-lg w-full sm:w-48 border-0 mb-4"
          >
            {Object.entries(vipLevelMap).map(([code, label]) => (
              <option key={code} value={code}>
                {label}
              </option>
            ))}
          </select>
          <div className="flex lg:hidden justify-center items-center py-8">
            <img src={toCdnUrl(`/vip/${vipLevelMap[activeVip]}.png`)} alt="" />
          </div>
          <div className="flex text-white rounded-md overflow-hidden">
            <div className="bg-black w-40">
              <div className="p-2 text-gray-400 h-32 hidden lg:block"></div>
              {vipIntro.map((t, i) => (
                <div key={i} className="p-2 text-gray-400">
                  {t.項目}
                </div>
              ))}
            </div>
            {Object.entries(vipLevelMap).map(([code, label]) => (
              <div
                key={code}
                className={cs('flex-1 lg:block', {
                  hidden: activeVip !== +code,
                })}
              >
                <div className="bg-black text-gray-200 text-center p-2 h-32 hidden lg:block">
                  <div className="">{label}</div>
                  <img
                    src={toCdnUrl(`/vip/${label}.png`)}
                    alt=""
                    className="object-center w-24 mt-3"
                  />
                </div>
                {vipIntro.map((t, i) => (
                  <div key={i} className="bg-purple-900 p-2">
                    {t[+code as unknown as VipLevel]}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default VipIntro
