import { toCdnUrl } from '@/utils'
import React from 'react'
import PicFloatIntro from '../PicFloatIntro'
import PicIntro from '../PicIntro'

const floatIntro = [
  {
    no: 1,
    x: 5,
    y: 90,
    intro: `機率表：點擊開啟機率表介面，白銀會員特權。可以知道這台老虎機全部的機台機率，包含未開免費遊戲次數、回報率、30日內大獎次數、30日內巨獎次數和是否有玩家正在遊玩。`,
  },
  {
    no: 2,
    x: 27,
    y: 87,
    intro: `保留機台資訊：點擊開啟保留機台的機率表介面，如果您有保留機台，這裡可以跟您說保留機台的機率表和保留機台的剩餘時間，還可以快速進入此機台。`,
  },
  {
    no: 3,
    x: 85,
    y: 90,
    intro: `快速遊玩：點擊快速遊玩，系統將提您準備一台機檯，讓您馬上進行遊戲，不需要進行機台選擇。`,
  },
  {
    no: 4,
    x: 72,
    y: 40,
    intro: `空機台：機台上沒有玩家頭像，表示此機台沒有人進行遊戲，機台下方的編號是此機台專屬編號，可以讓您打造您的專屬機台。`,
  },
  {
    no: 5,
    x: 90,
    y: 40,
    intro: `滿機台：機台上有玩家頭像，表示此機台有人進行遊戲，無法選擇這個機台進行遊戲。`,
  },
  {
    no: 6,
    x: 95,
    y: 45,
    intro: `切換機台：當這一面沒有您喜歡的號碼或是想玩的機台，就只能切到下一頁繼續尋找了，不過您放心大頭家娛樂城一定會有您喜歡的遊戲根機台號碼的。`,
  },
]

function IntroGameSelect() {
  return (
    <>
      <PicIntro
        img="/appintro/main_02.png"
        intro="在大廳可以進行遊戲選擇，像左滑可以選擇更多遊戲"
      />
      <div className="bg-black flex items-center justify-center rounded-lg border border-gray-700 relative lg:mb-10">
        <img
          src={toCdnUrl('/appintro/main_03.png')}
          alt=""
          className="w-full h-full object-fill rounded-lg"
        />
        {floatIntro.map((t) => (
          <PicFloatIntro key={t.no} {...t} />
        ))}
      </div>
      <div className="space-y-4 mt-10 h-60 lg:h-auto overflow-y-auto bg-black p-3 rounded-lg">
        {floatIntro.map((t) => (
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
    </>
  )
}

export default IntroGameSelect
