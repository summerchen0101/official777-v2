export interface Menu {
  label: string
  onClick?: () => void
  subs?: Menu[]
  path?: string
  needAuth?: boolean
  isRecharge?: boolean
}

export const menu: Menu[] = [
  {
    label: '最新消息',
    subs: [
      { label: '公告', path: '/news' },
      { label: '懲罰名單', path: '/punishment' },
    ],
  },
  {
    label: '遊戲介紹',
    subs: [
      { label: '基本介紹', path: '/game-basic' },
      { label: '遊戲說明', path: '/game-intro' },
      { label: '道具說明', path: '/obj-intro' },
      { label: '紅包說明', path: '/gift-intro' },
      { label: '會員介紹', path: '/vip-intro' },
    ],
  },
  {
    label: '會員專區',
    subs: [
      // { label: '會員資料', path: '/user-basic', needAuth: true },
      { label: '修改密碼', path: '/user-pw', needAuth: true },
      { label: '修改二次密碼', path: '/user-pw2', needAuth: true },
      {
        label: '儲值購點',
        path: '/recharge',
        needAuth: true,
        isRecharge: true,
      },
      {
        label: '儲值紀錄',
        path: '/recharge-rec',
        needAuth: true,
        isRecharge: true,
      },
      { label: '個人領獎紀錄', path: '/rewards', needAuth: true },
    ],
  },
  {
    label: '排行榜',
    subs: [
      { label: '金幣排行', path: '/rank' },
      { label: 'SLOT賠率排行', path: '/rank?tab=2' },
    ],
  },
  {
    label: '客服中心',
    subs: [
      { label: '常見問題', path: '/faq' },
      { label: '聯繫客服', path: '/contact?layout=1', needAuth: true },
      { label: '表單下載', path: '/files' },
    ],
  },
]
