import { isAfter, isBefore } from 'date-fns'
import { orderBy, take } from 'lodash'

export interface News {
  id: number
  title: string
  content: string
  category: number
  createdAt: string
  startAt: string
  endAt: string
  isRedirect: Boolean
  sort: number
}

export const newsList: News[] = [
  {
    id: 1,
    title: '大頭家娛樂城即將上線！火熱封測中！',
    content:
      '親愛的玩家<br/><br/>大頭家娛樂城即將上線嘍！目前刪檔封測中！請各位玩家再等等喔！<br/>最刺激好玩的娛樂城即將登場！',
    category: 1,
    createdAt: '2022-01-17',
    startAt: '2022-01-17 12:00',
    endAt: '2023-01-20 12:00',
    isRedirect: false,
    sort: 0,
  },
  {
    id: 2,
    title: '活動序號自1/29開始開放兌換',
    content:
      '親愛的玩家<br/><br/>東森儲值活動序號、實體紅包袋序號、實體撲克牌序號自1/29開始開放兌換。<br/><br/>兌換流程<br/>點擊「會員專區」並選擇儲值購點→選擇「序號/虛擬產包序號兌換」→輸入「序號」→點擊「送出」完成兌換',
    category: 1,
    createdAt: '2022-01-17',
    startAt: '2022-01-17 12:00',
    endAt: '2023-01-20 12:00',
    isRedirect: false,
    sort: 0,
  },
  {
    id: 3,
    title: '實體產包自1/29開始開放兌換',
    content:
      '親愛的玩家<br/><br/>超商販售的實體產包「年年有瑜包」自1/29開始開放兌換。<br/><br/>兌換流程<br/>點擊「會員專區」並選擇儲值購點→選擇「實體產包」→輸入產包上12位數「序號」、「密碼」→點擊「送出」完成兌換',
    category: 1,
    createdAt: '2022-01-22',
    startAt: '2022-01-22 12:00',
    endAt: '2023-01-20 12:00',
    isRedirect: false,
    sort: 1,
  },
  {
    id: 4,
    title: 'MyCard指定通路儲值回饋送',
    content:
      'MyCard指定通路儲值回饋送<br/><br/>活動期間：1/20 12:00 -2/16 12:00<br/> 指定通路：7-11、全家、萊爾富、OK、中華電信、台灣大哥大 活動內容：使用MyCard購買指定面額，並成功儲值至「大頭家娛樂城」內，最高可加碼10%點數！ <br/><br/>儲值3,000點送6%點數<br/> 儲值5,000點送8%點數<br/> 儲值10,000點送10%點數',
    category: 2,
    createdAt: '2022-01-20',
    startAt: '2022-01-20 12:00',
    endAt: '2023-01-20 12:00',

    isRedirect: false,
    sort: 1,
  },
  {
    id: 5,
    title: '大頭家賀虎年！送百萬賓士名車！',
    content: 'https://online539.com/event/newyear',
    category: 2,
    createdAt: '2022-01-22',
    startAt: '2022-01-22 18:00',
    endAt: '2023-01-15 12:00',
    isRedirect: true,
    sort: 1,
  },
  {
    id: 6,
    title: '新年享好禮！累積儲值滿額送！',
    content: 'https://online539.com/event/recharge',
    category: 2,
    createdAt: '2022-01-31',
    startAt: '2022-01-31 12:00',
    endAt: '2023-01-31 12:00',
    isRedirect: true,
    sort: 1,
  },
  {
    id: 7,
    title: '遵守遊戲管理規章',
    content:
      '親愛的玩家您好，<br/>為了維護您的遊戲品質，請遵守遊戲規章的相關規定，切勿於遊戲中進行不當行為，違反者將依照遊戲規章的規定處以遊戲中禁言、取消贈禮服務、停權、凍結帳戶、甚至終止契約等；若玩家於遊戲中從事非法行為，將依照遊戲規章的規定處以停權、凍結帳戶、終止契約，本公司將配合檢警單位調查並採取相關法律途徑處理。 為了保護各位玩家的權益，有關服務條款、遊戲管理規章、隱私條款、可透過官方首頁下方查詢，本公司保有增減或變更相關規定的權利，如有任何更新將會 公佈於官方網站，所有使用者須受最新版本的規定約束之。 大頭家娛樂城 營運團隊 敬上',
    category: 3,
    createdAt: '2022-01-17',
    startAt: '2022-01-17 12:05',
    endAt: '2099',
    isRedirect: false,
    sort: 1,
  },
  {
    id: 8,
    title: '遊戲聲明',
    content:
      '親愛的玩家您好，<br/> 本遊戲以成年人為訴求對象，不提供「現金交易賭博」。遊戲幣一經購入後無法以任何理由退換現金。<br/> 本遊戲情節涉及棋牌益智及娛樂，非現金交易賭博，使用者請勿進行非法遊戲幣交易。若有任何遊戲相關問題，請將問題寄到電子郵件support@online539.com<br/><br/> ※溫馨提醒：請勿過度沉迷遊戲，為了您的健康，請合理控制遊戲時間。<br/><br/> 大頭家娛樂城 營運團隊 敬上',
    category: 3,
    createdAt: '2022-01-17',
    startAt: '2022-01-17 12:05',
    endAt: '2099',
    isRedirect: false,
    sort: 1,
  },
]

export const getNewsList = (category: number) => {
  const periodData = newsList?.filter(
    (t) =>
      isAfter(new Date(), new Date(t.startAt)) &&
      isBefore(new Date(), new Date(t.endAt)),
  )
  // 置頂 -> 日期
  const orderedData = orderBy(periodData, ['startAt', 'sort'])
  if (category === 0) {
    return take(orderedData, 5)
  }
  return orderedData?.filter((t) => t.category === category)
}
