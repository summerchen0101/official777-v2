import useCdnUrl from '@/hooks/useCdnUrl'
import React from 'react'
import PicFloatIntro from '../PicFloatIntro'

const floatIntro = [
  {
    no: 1,
    x: 15,
    y: 5,
    intro: `玩家資訊：此位置顯示玩家的頭像和會員等級，點擊進入可以修改暱稱、玩家角色、玩家頭像、留言短語。\n點擊對方頭像，可以送禮、加為好友和加黑名單。`,
  },
  {
    no: 2,
    x: 30,
    y: 5,
    intro: `大頭家金幣：說明玩家目前大頭家金幣餘額，進商城會了解更多優惠方案。`,
  },
  {
    no: 3,
    x: 50,
    y: 5,
    intro: `商城：點擊可以進入商城介面，可以購買頭家點和將頭家點兌換成金幣。`,
  },
  {
    no: 4,
    x: 72,
    y: 5,
    intro: `道具：點擊開啟道具介面。遊戲中獲得到道具和碎片都會放在這裡。可以使用不同押注的免費遊戲券和兌換金幣。`,
  },
  {
    no: 5,
    x: 82,
    y: 5,
    intro: `聊天：點擊開啟聊天介面，可以進行頻道聊天、群組聊天和玩家私聊。還可以發紅包玩玩小遊戲成為最受人注意的焦點！`,
  },
  {
    no: 6,
    x: 90,
    y: 5,
    intro: `設定：點擊開啟設定介面，可以進行帳號綁定、音樂、音效、震動、大獎推送和金幣顯示的設定，也包含了服務條款和隱私權政策。`,
  },
  {
    no: 7,
    x: 95,
    y: 5,
    intro: `電量和網路：在遊戲中可以看到手機電量和網路訊號。`,
  },
  {
    no: 8,
    x: 10,
    y: 15,
    intro: `玩家賭場：點擊開啟賭場介面，每12小時可以領一次金幣，根據機台的等級金幣會越領越多。`,
  },
  {
    no: 9,
    x: 10,
    y: 50,
    intro: `大廳分頁：顯示大廳遊戲分頁的地方，目前分別有【熱門】、【老虎機】、【牌桌】、【其他】4種。`,
  },
  {
    no: 10,
    x: 65,
    y: 18,
    intro: `遊戲看板：羅列所有遊戲供玩家選擇。`,
  },
  {
    no: 11,
    x: 10,
    y: 90,
    intro: `公告：點擊開啟公告介面，可以了解更多官方好康，也可以瀏覽相關政策及官方提醒。每天看完公告還可以領取1個華麗禮物盒。`,
  },
  {
    no: 12,
    x: 20,
    y: 90,
    intro: `好友：點擊開啟好友介面，可以跟現實好友互相加朋友的地方，還有機會找到志同道合的朋友喔，有好友一起進行遊戲遊戲會更有意思喔。`,
  },
  {
    no: 13,
    x: 30,
    y: 90,
    intro: `卡牌：點擊開啟卡牌介面，在各遊戲或是十連抽開啟禮物盒就有機會可以收集到卡牌，每收集滿1組就可以領取高額獎金。`,
  },
  {
    no: 14,
    x: 40,
    y: 90,
    intro: `排行榜：點擊開啟排行榜介面，目前有金幣榜 和老虎機榮譽榜，還可以重播最高倍率的老虎機喔。`,
  },
  {
    no: 15,
    x: 50,
    y: 90,
    intro: `角色：點擊開啟角色介面，可以看到所有的老虎機角色和一些限定角色，有沒有覺得非常精緻呢？趕快到商城抽看看試試自己的運氣吧。`,
  },
  {
    no: 16,
    x: 60,
    y: 90,
    intro: `俱樂部：點擊開啟俱樂部介面，有沒有在大頭家娛樂城遇到好朋友呢？一起組的俱樂部吧！不但贏的金幣可以給俱樂部成員分紅，還有機會拿到總會長的超大紅包喔！`,
  },
  {
    no: 17,
    x: 70,
    y: 90,
    intro: `活動：點擊開啟活動介面，可以看現在正在行的活動，大頭家娛樂城會時時刻刻安排好活動，讓您賺上加賺荷包滿滿！`,
  },
  {
    no: 18,
    x: 80,
    y: 90,
    intro: `保險箱：點擊開啟保險箱介面，存入金幣和取出金幣，存入和取出都需要二次密碼驗證，讓您的帳號更加安全！`,
  },
  {
    no: 19,
    x: 93,
    y: 90,
    intro: `客服：點擊開啟客服介面，遇到任何問題和疑難雜症點客服就對了！`,
  },
]

function IntroLobby() {
  const toCdnUrl = useCdnUrl()
  return (
    <>
      <div className="bg-black flex items-center justify-center rounded-lg border border-gray-700 relative lg:mb-10">
        <img
          src={toCdnUrl('/appintro/main_01.png')}
          alt=""
          className="w-full h-full object-fill rounded-lg"
        />
        {floatIntro.map((t) => (
          <PicFloatIntro key={t.no} {...t} />
        ))}
      </div>
      <div className="space-y-4 mt-4 h-60 lg:h-auto overflow-y-auto bg-black p-3 rounded-lg">
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

export default IntroLobby
