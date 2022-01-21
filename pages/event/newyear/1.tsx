import ActivityBtns from '@/components/activity/ActivityBtns'
import ContentText from '@/components/activity/ContentText'
import PageWrapper from '@/components/activity/PageWrapper'
import ActivitySection from '@/components/activity/Section'
import SubTitle from '@/components/activity/SubTitle'
import { toCurrency, toCdnUrl } from '@/utils'
import cs from 'classnames'
import React, { useState } from 'react'

const vipsTickets = [
  { vip: '鑽石會員', amount: 1, icon: '金' },
  { vip: '紅鑽會員', amount: 1, icon: '銀' },
  { vip: '黃金會員', amount: 1, icon: '銀' },
  { vip: '白銀會員', amount: 1, icon: '銀' },
  { vip: '青銅會員', amount: 1, icon: '銅' },
  { vip: '正式會員', amount: 1, icon: '銅' },
]

interface Rule {
  game: string
  min: number
  max?: number
}

interface TicketRule {
  icon: string
  score: number
  rules: Rule[]
}
const ticketsRule: TicketRule[] = [
  {
    icon: '金',
    score: 800000,
    rules: [
      { game: '老虎機', min: 20000 },
      { game: '魚機', min: 2000 },
    ],
  },
  {
    icon: '銀',
    score: 200000,
    rules: [
      { game: '老虎機', min: 4000, max: 10000 },
      { game: '魚機', min: 400, max: 1000 },
    ],
  },
  {
    icon: '銅',
    score: 40000,
    rules: [
      { game: '老虎機', min: 1000, max: 3000 },
      { game: '魚機', min: 100, max: 300 },
    ],
  },
]

interface TicketWinner {
  ticket: string
  icon: string
  current: number
  max: number
  winners: string[]
}

const ticketWinnerList: TicketWinner[] = [
  {
    ticket: '金',
    icon: '金',
    current: 1000,
    max: 20000,
    winners: ['1112-2333-3444', '1112-2333-3444'],
  },
  {
    ticket: '銀',
    icon: '銀',
    current: 1000,
    max: 20000,
    winners: ['1112-2333-3444', '1112-2333-3444'],
  },
  {
    ticket: '銅',
    icon: '銅',
    current: 1000,
    max: 20000,
    winners: ['1112-2333-3444', '1112-2333-3444'],
  },
]

interface Gift {
  name: string
  icon: string
  amount: number
  gold: number
}

interface TicketGift {
  ticket: string
  gifts: Gift[]
}

const ticketGifts: TicketGift[] = [
  {
    ticket: '金',
    gifts: [
      {
        name: '賓士名車卡',
        icon: '禮品卡片-car.png',
        amount: 2,
        gold: 158000000,
      },
      {
        name: '勞力士卡',
        icon: '禮品卡片-watch.png',
        amount: 2,
        gold: 158000000,
      },
      {
        name: '勞力士卡',
        icon: '禮品卡片-watch.png',
        amount: 2,
        gold: 158000000,
      },
      {
        name: '勞力士卡',
        icon: '禮品卡片-watch.png',
        amount: 2,
        gold: 158000000,
      },
    ],
  },
  {
    ticket: '銀',
    gifts: [
      {
        name: '賓士名車卡',
        icon: '禮品卡片-car.png',
        amount: 2,
        gold: 158000000,
      },
      {
        name: '勞力士卡',
        icon: '禮品卡片-watch.png',
        amount: 2,
        gold: 158000000,
      },
    ],
  },
  {
    ticket: '銅',
    gifts: [
      {
        name: '賓士名車卡',
        icon: '禮品卡片-car.png',
        amount: 2,
        gold: 158000000,
      },
    ],
  },
]

export default function Activity_01() {
  const [tab, setTab] = useState(0)
  return (
    <PageWrapper>
      <ActivityBtns id={1} />
      <ActivitySection title="名車抽起來">
        <div>
          <SubTitle>活動時間</SubTitle>
          <ContentText>
            2022/1/22(六) 中午12:00 – 2022/2/13(日) 晚上11:59
          </ContentText>
        </div>
        <div>
          <SubTitle>活動對象</SubTitle>
          <ContentText>大頭家娛樂城全玩家</ContentText>
        </div>
        <div>
          <SubTitle>活動說明</SubTitle>
          <ContentText>
            <div className="mb-6">
              <p className="mb-3">
                1.活動期間達到對應會員層級，可獲得對應數量抽獎券
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {vipsTickets.map((t, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center bg-gray-800 p-1.5 rounded-lg"
                  >
                    <div className="mb-2 text-lg font-medium">{t.vip}</div>
                    <img
                      src={toCdnUrl(`/event/tickets/${t.icon}.jpg`)}
                      className="w-20"
                      alt=""
                    />
                    <div className="text-xl">x {t.amount}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-6">
              <p className="mb-3">
                2.使用指定押注獲得的贏分即為積分，積分達指定門檻可獲得對應抽獎券
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {ticketsRule.map((t, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center bg-gray-800 p-3 rounded-lg"
                  >
                    <div className="mb-2 text-xl font-medium text-yellow-600 flex gap-3">
                      <img
                        src={toCdnUrl(`/event/tickets/${t.icon}.jpg`)}
                        alt=""
                        className="w-10"
                      />
                      {toCurrency(t.score)}分/張
                    </div>

                    <div className="text-center space-y-1 text-lg">
                      {t.rules.map((r, r_i) => {
                        if (r.max) {
                          return (
                            <div key={r_i}>
                              {r.game}： 押分 {toCurrency(r.min)}~
                              {toCurrency(r.max)}
                            </div>
                          )
                        }
                        return (
                          <div key={r_i}>
                            {r.game}： 押分 <span>{toCurrency(r.min)}以上</span>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ContentText>
        </div>

        <div className="">
          <div className="text-2xl bg-gray-600 rounded-xl py-2 text-center mb-4">
            持有彩券
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {ticketWinnerList.map((t, i) => (
              <div
                key={i}
                className="flex flex-col items-center bg-gray-800 p-3 rounded-lg"
              >
                <div className="mb-2 text-xl font-medium text-yellow-400 flex gap-2">
                  <img
                    src={toCdnUrl(`/event/tickets/${t.icon}.jpg`)}
                    alt=""
                    className="w-10"
                  />
                  {t.ticket}抽獎券
                </div>
                <div className="mb-2 text-xl font-medium text-yellow-600">
                  {toCurrency(t.current)} / {toCurrency(t.max)}
                </div>

                <div className="text-gray-400 font-medium mb-2">
                  獲得的獎券號碼
                </div>
                <div className="text-center space-y-1 text-lg w-4/6">
                  {t.winners.map((winner, n_i) => (
                    <div
                      key={n_i}
                      className="border-b last-of-type:border-b-0 border-gray-600"
                    >
                      {winner}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </ActivitySection>
      <ActivitySection title="直播抽獎">
        <div>
          <SubTitle>活動時間</SubTitle>
          <ContentText>
            2022/1/22(六) 中午12:00 – 2022/2/13(日) 晚上11:59
          </ContentText>
        </div>
        <div>
          <SubTitle>直播平台</SubTitle>
          <ContentText>大頭家娛樂城官方粉絲專頁</ContentText>
        </div>
        <div>
          <SubTitle>名單公告時間</SubTitle>
          <ContentText>2022/2/14(一) 18:00</ContentText>
        </div>

        <div>
          <SubTitle>活動獎項</SubTitle>
          <div className="flex gap-4 justify-center mt-6">
            {ticketGifts.map((t, i) => (
              <div
                key={i}
                className={cs(
                  'text-white bg-gray-600 rounded-full p-3 w-32 text-xl text-center cursor-pointer shadow-md',
                  { 'bg-gold-600': tab === i },
                )}
                onClick={(e) => setTab(i)}
              >
                {t.ticket}券
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4 mt-6 max-w-[700px] mx-auto">
            {ticketGifts[tab].gifts?.map((g, i) => (
              <div
                key={i}
                className={cs(
                  'flex flex-col flex-wrap sm:flex-row gap-4 sm:gap-8 items-center p-8 rounded-lg justify-center  bg-gray-800',
                  i === 0 && 'col-span-2',
                )}
              >
                <img
                  src={toCdnUrl(`/event/items/${g.icon}`)}
                  className="w-28"
                  alt=""
                />
                <div className="text-gray-300 text-lg sm:text-xl text-center leading-7 sm:leading-9">
                  {g.name} 共{g.amount}名 <br />
                  價值{' '}
                  <span className="text-yellow-400">
                    {toCurrency(g.gold)}
                  </span>{' '}
                  金幣
                </div>
              </div>
            ))}
          </div>
        </div>
      </ActivitySection>
    </PageWrapper>
  )
}
