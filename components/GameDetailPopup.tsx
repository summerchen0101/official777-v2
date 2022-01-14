import { gameIntroImgsMap } from '@/lib/games'
import { gameMap } from '@/lib/map'
import { useStore } from '@/store/useStore'
import { toImgPath } from '@/utils'
import React, { useState } from 'react'
import Popup from './Popup'

interface MajongInto {
  type: string
  tai: string
  desc: string
  note?: string
}

const majongIntros: MajongInto[] = [
  {
    type: '莊家',
    tai: '1',
    desc: '當莊的玩家，不論胡牌還是放炮都多1台。',
    note: '胡牌、放炮',
  },
  {
    type: '連莊',
    tai: '2N',
    desc: '莊家胡牌及可連莊，連莊上限為9次！',
  },
  {
    type: '自摸',
    tai: '1',
    desc: '自己摸到自己胡牌的牌',
  },
  {
    type: '門清',
    tai: '1',
    desc: '不吃、不碰、不槓，全部16張的都在自已牌內。',
    note: '可暗槓',
  },
  {
    type: '花牌',
    tai: '1',
    desc: '以開門計算，東【春、梅-1花】、南【夏、蘭-2花】、西【秋、菊-3花】、北【冬、竹-4花】。',
    note: '如果東家拿到春又拿到梅，就可累計成二台。',
  },
  {
    type: '獨聽',
    tai: '1',
    desc: '只聽一張牌',
    note: '中洞、偏張',
  },
  {
    type: '搶槓',
    tai: '1',
    desc: '當別家喊槓，正巧補槓的牌，為自已所要胡的牌，就可搶槓胡牌。',
    note: '算明槓',
  },
  {
    type: '三元台',
    tai: '1',
    desc: '中發白任一刻子或是槓子',
  },
  {
    type: '圈風台',
    tai: '1',
    desc: '目前是東風圈，拿到東風刻子',
  },
  {
    type: '門風台',
    tai: '1',
    desc: '依自已的坐風，比方坐北，拿到北風的刻子',
  },
  {
    type: '槓上開花',
    tai: '1',
    desc: '摸到花牌或槓牌後，經過補牌而胡牌者。',
  },
  {
    type: '海底撈月',
    tai: '1',
    desc: '摸到牌局最後一張，恰巧為所要的胡牌棋子',
    note: '自摸才算',
  },
  {
    type: '海底撈魚',
    tai: '1',
    desc: '摸到海底最後一張，丟出去放槍被胡. 【胡別人打出的牌】',
    note: '自摸就是海底撈月，胡別人的就是海底撈魚',
  },
  {
    type: '半求人',
    tai: '1',
    desc: '胡牌時，手牌皆以吃、碰、明槓、加槓外，只剩一張牌在手，並自摸。',
    note: '自摸才算',
  },
  {
    type: '宣告聽牌',
    tai: '1',
    desc: '宣告聽牌後，不可換牌，胡多1台，但是不能看牌',
  },
  {
    type: '春夏秋冬',
    tai: '2',
    desc: '胡牌時，牌前有四張花牌 【春、夏、秋、冬】',
  },
  {
    type: '梅蘭竹菊',
    tai: '2',
    desc: '胡牌時，牌前有四張花牌 【梅、蘭、竹、菊】',
  },
  {
    type: '平胡',
    tai: '2',
    desc: '牌中由五組順子 + 一組將、聽雙洞；需無字無花',
    note: '自摸不算，胡別人的才算',
  },
  {
    type: '全求人',
    tai: '2',
    desc: '胡牌時，手牌皆以吃、碰、明槓、加槓外，只剩一張牌在手，並由任一家放砲。',
    note: '自摸不算，胡別人的才算',
  },
  {
    type: '三暗坎',
    tai: '2',
    desc: '牌中有三組刻子，沒碰出去，全在自已的牌內',
    note: '包含暗槓',
  },
  {
    type: '門清自摸',
    tai: '3',
    desc: '門清又自摸，不計自摸台和門清台 【門清一摸三】',
    note: '門清兩台、自摸一台，合計三台。算一個type',
  },
  {
    type: '碰碰胡',
    tai: '4',
    desc: '牌中全都是對子所組成，沒有任何的順子',
    note: '碰、槓、自己摸都可以',
  },
  {
    type: '混一色',
    tai: '4',
    desc: '牌中只有字牌【東南西北】 + 一種花色【萬、筒、條則一】',
    note: '可與其他type並存',
  },
  {
    type: '小三元',
    tai: '4',
    desc: '牌中有，中、發、白所組合的刻子，但其中一組為對子',
    note: '1. tai不計:三元台',
  },
  {
    type: '配牌花胡',
    tai: '4',
    desc: `起手配牌本家
    1. 獲得7張花牌，第一巡胡牌=>七搶一+配牌花胡
    2. 起手8張花牌=>八仙過海+配牌花湖`,
    note: '有配牌花胡基本上就是12台起跳',
  },
  {
    type: '地聽',
    tai: '4',
    desc: '第一輪無發生吃、碰、槓並選擇聽牌即為地聽',
    note: '1. tai不計:門清、自摸、聽牌\n 2. 不管過幾輪都算是地聽成功',
  },
  {
    type: '四暗坎',
    tai: '5',
    desc: '牌中有四組刻子【暗槓】，沒碰出去，全在自已的牌內',
    note: '可以跟碰碰胡、暗槓、門風、圈風累計tai',
  },
  {
    type: '五暗坎',
    tai: '8',
    desc: '牌中有五組刻子【暗槓】，沒碰出去，全在自已的牌內',
    note: '可以跟碰碰胡、門風、圈風、暗槓累計tai',
  },
  {
    type: '清一色',
    tai: '8',
    desc: '牌中只由一種花色所組合',
    note: '花牌不影響清一色的type',
  },
  {
    type: '字一色',
    tai: '8',
    desc: '牌中由「東南西北中發白」字牌所組成。',
    note: '1. tai不計:碰碰胡\n 2. 可累計圈風台、門風台、三元台、小三元、大三元、小四喜、大四喜',
  },
  {
    type: '大三元',
    tai: '8',
    desc: '牌中有，中、發、白所組合的刻子。 【無論是碰到的，還是自已摸進來皆可算】',
    note: '混一色 可累計。',
  },
  {
    type: '小四喜',
    tai: '8',
    desc: '牌中一樣由東、南、西、北所組成，但其中一組只有對子',
    note: '1. tai不計:圈風、門風',
  },
  {
    type: '七搶一',
    tai: '8',
    desc: '拿齊7張花牌，當其中一家，拿到另一張花牌時，即可胡那一家',
    note: '1. tai不計:花牌【已包含】、門清\n2. 莊連拉照算\n3. 不算宣告聽牌\n4. 如果起手中七花，其餘牌也聽牌，可以選擇宣告聽牌，如玩家胡下家是花，就是七搶一不計宣告聽牌；胡一般牌就是照一般type算。',
  },
  {
    type: '八對半',
    tai: '8',
    desc: '將7個將與1個坎組成，必須門清，不能暗槓',
    note: 'tai不計:門清、自摸、暗槓',
  },
  {
    type: '八仙過海',
    tai: '8',
    desc: '拿齊8張花牌【春、夏、秋、冬、梅、蘭、竹、菊】即可胡牌。',
    note: '1. tai不計:花牌 【已包含】、門清 \n2. 莊連拉照算\n3. 可累計 : 補牌是槓上開花、自摸',
  },
  {
    type: '四槓子',
    tai: '8',
    desc: '一人有4個槓，明暗皆可，算自摸8台，不計自摸台',
    note: '1. tai不計:自摸【已包含】\n2. 必定與對對胡複合',
  },
  {
    type: '天聽',
    tai: '8',
    desc: '起手尚未補牌前選擇聽牌即為天聽。不計門清和門清自摸',
    note: 'tai不計:自摸、門清、門清自摸',
  },
  {
    type: '大四喜',
    tai: '16',
    desc: '牌中有東、南、西、北4組刻子。',
    note: 'tai不計:圈風、門風【已包含】',
  },
  {
    type: '地胡',
    tai: '16',
    desc: '子家的特權，配完牌後第一次自摸就胡牌，稱為地胡',
    note: 'tai不計:自摸、門清',
  },
  {
    type: '天胡',
    tai: '24',
    desc: '莊家的特權，配完牌後莊家尚未打出第一張牌時，手內的牌已經完成胡牌type，稱為天胡',
    note: 'tai不計:自摸、門清、門清自摸',
  },
]

export default function GameDetailPopup() {
  const [activeTab, setActiveTab] = useState(0)
  const closeGamePopup = useStore((s) => s.closeGamePopup)
  const isShowGamePopup = useStore((s) => s.isShowGamePopup)
  const popupGameID = useStore((s) => s.popupGameID)
  return (
    <Popup onClose={closeGamePopup} isShow={isShowGamePopup}>
      <div className="flex justify-center">
        <h1 className="text-4xl text-gold-400 font-medium mb-8">
          {gameMap[popupGameID]}
        </h1>
      </div>

      {gameIntroImgsMap[popupGameID] && (
        <>
          <div className="hidden md:block fixed lg:top-1/3 lg:right-0 space-x-2 lg:space-x-0 lg:space-y-2 lg:flex lg:flex-col">
            {Object.keys(gameIntroImgsMap[popupGameID]).map((label) => (
              <a
                key={label}
                href={`#${label}`}
                className="w-40 border border-white rounded p-2 text-xl transition-all translate-x-5 hover:translate-x-3"
              >
                {label}
              </a>
            ))}
            {popupGameID === 3001 && (
              <a
                href="#台數計算"
                className="w-40 border border-white rounded p-2 text-xl transition-all translate-x-5 hover:translate-x-3"
              >
                台數計算
              </a>
            )}
          </div>
          <section className="lg:w-[860px] mx-auto sm:px-4">
            <div className="bg-[#10111d] py-10 sm:rounded-lg flex flex-col gap-12">
              {Object.entries(gameIntroImgsMap[popupGameID]).map(
                ([introCode, imgs]) => (
                  <div
                    id={introCode}
                    key={introCode}
                    className="flex flex-col gap-6"
                  >
                    {imgs.map((img, img_i) => (
                      <img
                        key={img_i}
                        src={toImgPath(`/game/intro/${popupGameID}/${img}`)}
                        alt=""
                      />
                    ))}
                  </div>
                ),
              )}
            </div>
          </section>
          {popupGameID === 3001 && (
            <section className="lg:w-[860px] mx-auto sm:px-4 mt-5">
              <div className="bg-[#10111d] sm:rounded-lg flex flex-col p-6">
                <div
                  className="text-yellow-600 font-medium text-3xl text-center mb-5"
                  id="台數計算"
                >
                  台數計算
                </div>
                <select
                  onChange={(e) => setActiveTab(+e.target.value)}
                  className="rounded text-gray-800 text-lg w-full sm:w-48 border-0 mb-4"
                >
                  {majongIntros.map((t, i) => (
                    <option key={t.type} value={i}>
                      {t.type}({t.tai}台)
                    </option>
                  ))}
                </select>
                <div className=" text-lg min-h-[200px]">
                  <div className="text-xl mb-3 text-gray-400 font-medium">
                    {majongIntros[activeTab].type} [{' '}
                    {majongIntros[activeTab].tai} 台 ]
                  </div>
                  <div className=" whitespace-pre-wrap">
                    {majongIntros[activeTab].desc}
                  </div>
                  <div className="text-yellow-400 mt-3 text-base">
                    {majongIntros[activeTab].note}
                  </div>
                </div>
              </div>
            </section>
          )}
        </>
      )}
    </Popup>
  )
}
