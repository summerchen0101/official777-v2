import ActivityBtns from '@/components/activity/ActivityBtns'
import ContentText from '@/components/activity/ContentText'
import PageWrapper from '@/components/activity/PageWrapper'
import ActivitySection from '@/components/activity/Section'
import SubTitle from '@/components/activity/SubTitle'
import VoucherAwardsPopup from '@/components/VoucherAwardsPopup'
import { VoucherType } from '@/lib/enums'
import { voucherTypeMap } from '@/lib/map'
import useEventList, { Event } from '@/services/useEventList'
import useEventOverview from '@/services/useEventOverview'
import useMe from '@/services/useMe'
import usePopupStore from '@/store/usePopupStore'
import { toCurrency, toCdnUrl } from '@/utils'
import useBodyLock from '@/hooks/useBodyLock'
import useLoginFirst from '@/hooks/useLoginFirst'
import cs from 'classnames'
import { keyBy } from 'lodash'
import React, { useMemo, useState } from 'react'

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
  voucher: VoucherType
  icon: string
  score: number
  rules: Rule[]
}
const ticketsRule: TicketRule[] = [
  {
    voucher: VoucherType.Golden,
    icon: '金',
    score: 800000,
    rules: [
      { game: '老虎機', min: 20000 },
      { game: '魚機', min: 2000 },
    ],
  },
  {
    voucher: VoucherType.Silver,
    icon: '銀',
    score: 200000,
    rules: [
      { game: '老虎機', min: 4000, max: 10000 },
      { game: '魚機', min: 400, max: 1000 },
    ],
  },
  {
    voucher: VoucherType.Copper,
    icon: '銅',
    score: 40000,
    rules: [
      { game: '老虎機', min: 1000, max: 3000 },
      { game: '魚機', min: 100, max: 300 },
    ],
  },
]

interface TicketWinner {
  voucher: VoucherType
  icon: string
  current: number
  max: number
}

const ticketWinnerList: TicketWinner[] = [
  {
    voucher: VoucherType.Golden,
    icon: '金',
    current: 1000,
    max: 20000,
  },
  {
    voucher: VoucherType.Silver,
    icon: '銀',
    current: 1000,
    max: 20000,
  },
  {
    voucher: VoucherType.Copper,
    icon: '銅',
    current: 1000,
    max: 20000,
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
        amount: 1,
        gold: 23300000,
      },
      {
        name: 'iPhone 13 Pro Max卡',
        icon: '禮品卡片-iphone13Pro.png',
        amount: 10,
        gold: 3690000,
      },
      {
        name: '金幣100,000',
        icon: '金幣100k.png',
        amount: 10,
        gold: 0,
      },
      {
        name: '金幣50,000',
        icon: '金幣50k.png',
        amount: 30,
        gold: 0,
      },
      {
        name: '金幣10,000',
        icon: '金幣10k.png',
        amount: 50,
        gold: 0,
      },
      {
        name: '金幣5,000',
        icon: '金幣5000.png',
        amount: 100,
        gold: 0,
      },
    ],
  },
  {
    ticket: '銀',
    gifts: [
      {
        name: 'Yamaha R3卡',
        icon: '禮品卡片-yamaha.png',
        amount: 1,
        gold: 24700000,
      },
      {
        name: '一台兩黃金卡',
        icon: '禮品卡片-golden.png',
        amount: 1,
        gold: 7020000,
      },
      {
        name: 'iPhone 13卡',
        icon: '禮品卡片-iphone13.png',
        amount: 10,
        gold: 2590000,
      },
      {
        name: '金幣5,000',
        icon: '金幣5000.png',
        amount: 20,
        gold: 0,
      },
      {
        name: '金幣3,000',
        icon: '金幣3000.png',
        amount: 40,
        gold: 0,
      },
      {
        name: '金幣1,000',
        icon: '金幣1000.png',
        amount: 70,
        gold: 0,
      },
      {
        name: '金幣800',
        icon: '金幣800.png',
        amount: 100,
        gold: 0,
      },
    ],
  },
  {
    ticket: '銅',
    gifts: [
      {
        name: 'iPhone 13卡',
        icon: '禮品卡片-iphone13.png',
        amount: 20,
        gold: 2590000,
      },
      {
        name: '金幣1,000',
        icon: '金幣1000.png',
        amount: 30,
        gold: 0,
      },
      {
        name: '金幣800',
        icon: '金幣800.png',
        amount: 50,
        gold: 0,
      },
      {
        name: '金幣500',
        icon: '金幣500.png',
        amount: 80,
        gold: 0,
      },
      {
        name: '金幣300',
        icon: '金幣300.png',
        amount: 120,
        gold: 0,
      },
    ],
  },
]

export default function Activity_01() {
  const [tab, setTab] = useState(0)
  const { data } = useMe()
  const { list, isLoading } = useEventList()
  const eventData = useMemo<Event | null>(() => list?.[0] || null, [list])
  const { data: eventOverview } = useEventOverview({ eventId: eventData?.id })
  const voucherAmountMap = keyBy(
    eventOverview?.voucherInfo.infos,
    (t) => t.item_id,
  )

  const { onShow } = usePopupStore((s) => s.voucherAwards)
  const [activeVoucher, setActiveVoucher] = useState<VoucherType>()

  const handleVoucherClicked = (voucher: VoucherType) => {
    setActiveVoucher(voucher)
    onShow()
  }

  const handleLoginFirst = useLoginFirst()

  return (
    <PageWrapper>
      <ActivityBtns id={1} />
      <ActivitySection title="名車抽起來">
        <div>
          <SubTitle>活動時間</SubTitle>
          <ContentText>2022/1/26(三) 12:00 - 2022/2/19(六) 23:59</ContentText>
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
                    className="flex flex-col items-center bg-gray-900 p-1.5 rounded-md"
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
                2.使用指定押注獲得的贏分即為積分，積分累積達指定門檻可獲得對應抽獎券，購買Free
                Game及道具卡所獲得之贏分不列入計算
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {ticketsRule.map((t, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center bg-gray-900 p-3 rounded-md"
                  >
                    <div className="mb-2 text-xl font-medium text-yellow-600 flex gap-3">
                      <img
                        src={toCdnUrl(`/event/tickets/${t.icon}.jpg`)}
                        alt=""
                        className="w-10"
                      />
                      {toCurrency(t.score)}
                      分/張
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
          <div className="text-2xl bg-gold-600/90 rounded-t-md py-2 text-center">
            持有彩券
          </div>
          <div className="bg-gray-900 rounded-b-md">
            {data?.id ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {ticketWinnerList.map((t, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center p-3 rounded-md"
                  >
                    <div className="mb-2 text-xl font-medium text-yellow-400 flex gap-2">
                      <img
                        src={toCdnUrl(`/event/tickets/${t.icon}.jpg`)}
                        alt=""
                        className="w-10"
                      />
                      {voucherTypeMap[t.voucher]}抽獎券
                    </div>
                    <div className="mb-2 text-xl font-medium text-yellow-600">
                      {toCurrency(t.current)} / {toCurrency(t.max)}
                    </div>

                    <div
                      className="text-gray-400 font-medium mb-2 cursor-pointer underline hover:no-underline"
                      onClick={() => handleVoucherClicked(t.voucher)}
                    >
                      獲得獎券號碼
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-4">
                <button
                  className="btn active mx-auto"
                  onClick={handleLoginFirst}
                >
                  請先登入會員
                </button>
              </div>
            )}
          </div>
        </div>
      </ActivitySection>
      <ActivitySection title="直播抽獎">
        <div>
          <SubTitle>活動時間</SubTitle>
          <ContentText>2022/2/20(日) 19:00</ContentText>
        </div>
        <div>
          <SubTitle>直播平台</SubTitle>
          <ContentText>大頭家娛樂城官方粉絲專頁</ContentText>
        </div>
        <div>
          <SubTitle>名單公告時間</SubTitle>
          <ContentText>2022/2/22(二) 18:00</ContentText>
        </div>

        <div>
          <SubTitle>活動獎項</SubTitle>
          <div className="flex gap-4 justify-center mt-6">
            {ticketGifts.map((t, i) => (
              <div
                key={i}
                className={cs(
                  'text-white bg-gray-600 rounded-full p-3 w-32 text-xl text-center cursor-pointer shadow-md border-4 border-black/30',
                  { 'bg-gold-600 -translate-y-2 scale-105': tab === i },
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
                  'col-span-2 lg:col-span-1 flex flex-col flex-wrap sm:flex-row gap-4 sm:gap-8 items-center p-8 rounded-md justify-center bg-black/50 border-2 border-gold-600/80',
                  i === 0 && 'lg:col-span-2',
                )}
              >
                <img
                  src={toCdnUrl(`/event/items/${g.icon}`)}
                  className="w-28"
                  alt=""
                />
                <div className="text-gray-300 text-lg sm:text-xl text-center leading-7 sm:leading-9">
                  {g.name} 共{g.amount}名
                  <div hidden={!g.gold} className="">
                    價值{' '}
                    <span className="text-yellow-400">
                      {toCurrency(g.gold)}
                    </span>{' '}
                    金幣
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ActivitySection>
      <VoucherAwardsPopup voucher={activeVoucher} eventId={eventData?.id} />
    </PageWrapper>
  )
}
