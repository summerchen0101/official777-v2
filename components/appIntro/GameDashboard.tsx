import { toCdnUrl } from '@/utils'
import React from 'react'
import PicFloatIntro from '../PicFloatIntro'

const floatIntro_1 = [
  {
    no: 1,
    x: 20,
    y: 85,
    intro: `購買FreeGame：點擊開啟購買Fraa Game介面，黃金會員特權。購買Free Game可以讓您立刻獲得一次Free Game的機會！
    `,
  },
  {
    no: 2,
    x: 32,
    y: 85,
    intro: `機台資訊：點擊開啟機台資訊介面，介紹這個機台的特色、連線方式和賠率表！
    `,
  },
  {
    no: 3,
    x: 48,
    y: 85,
    intro: `押注：點擊【+】【-】可以增加和減少押注金額，押注越多有機會得到越高級的禮物盒，20000以上的押注是會員特權！
    `,
  },
  {
    no: 4,
    x: 65,
    y: 85,
    intro: `加速：點擊加速可以加快停輪的速度，絕對是迫不及待的您最好的夥伴！
    `,
  },
  {
    no: 5,
    x: 75,
    y: 85,
    intro: `最大押注：點擊最大押注可以直接押注到上限注額，追求刺激的您一定要試試看！
    `,
  },
  {
    no: 6,
    x: 90,
    y: 85,
    intro: `轉動：點擊轉動可以旋轉盤面一次！當盤面停下來時，就是最刺激的時候！
    `,
  },
]

const floatIntro_2 = [
  {
    no: 7,
    x: 90,
    y: 15,
    intro: `長按轉動：跳出自動旋轉的選擇分為【10次】【50次】【100次】【200次】【無限】【直到Free Game】，自動旋轉會依據現在的押注轉動，直到指定的次數 或是 Free Game才會停止！`,
  },
]

function IntroGameDashboard() {
  return (
    <>
      <div className="mb-8">
        <div className="bg-black flex items-center justify-center rounded-lg border border-gray-700 relative lg:mb-10">
          <img
            src={toCdnUrl('/appintro/main_04.png')}
            alt=""
            className="w-full h-full object-fill rounded-lg"
          />
          {floatIntro_1.map((t) => (
            <PicFloatIntro key={t.no} {...t} />
          ))}
        </div>
        <div className="space-y-4 mt-4 h-60 lg:h-auto overflow-y-auto bg-black p-3 rounded-lg">
          {floatIntro_1.map((t) => (
            <div
              id={t.no.toString()}
              key={t.no}
              className="flex flex-wrap items-start gap-3 text-gray-300 text-lg"
            >
              <div className="bg-yellow-400 text-black font-medium text-lg rounded-full w-6 h-6 flex justify-center items-center border-2 border-black cursor-pointer">
                {t.no}
              </div>
              <div className="whitespace-pre-line flex-1">{t.intro}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="">
        <div className="bg-black flex items-center justify-center rounded-lg border border-gray-700 relative lg:mb-10">
          <img
            src={toCdnUrl('/appintro/main_05.png')}
            alt=""
            className="w-full h-full object-fill rounded-lg"
          />
          {floatIntro_2.map((t) => (
            <PicFloatIntro key={t.no} {...t} />
          ))}
        </div>
        <div className="space-y-4 mt-4 h-60 lg:h-auto overflow-y-auto bg-black p-3 rounded-lg">
          {floatIntro_2.map((t) => (
            <div
              id={t.no.toString()}
              key={t.no}
              className="flex flex-wrap items-start gap-3 text-gray-300 text-lg"
            >
              <div className="bg-yellow-400 text-black font-medium text-lg rounded-full w-6 h-6 flex justify-center items-center border-2 border-black cursor-pointer">
                {t.no}
              </div>
              <div className="whitespace-pre-line flex-1">{t.intro}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default IntroGameDashboard
