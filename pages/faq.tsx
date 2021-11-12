import Layout from '@/components/layout/Layout'
import PageBanner from '@/components/layout/PageBanner'
import { StringMap } from '@/types'
import React from 'react'
import _ from 'lodash'
import {
  HiOutlineQuestionMarkCircle,
  HiQuestionMarkCircle,
} from 'react-icons/hi'
import { toImgPath } from '@/utils'

enum FaqCategory {
  Game = 1,
  Login = 2,
  Deposit = 3,
  Validation = 4,
  Scam = 5,
}

const faqCategoryMap: StringMap = {
  [FaqCategory.Game]: '遊戲問題',
  [FaqCategory.Login]: '登入問題',
  [FaqCategory.Deposit]: '儲值問題',
  [FaqCategory.Validation]: '認證問題',
  [FaqCategory.Scam]: '詐騙問題',
}

const faqList = [
  {
    title: '如何儲值購點？',
    content:
      '請先完成手機認證，並參考『儲值購點』頁面，點擊您需要的儲值渠道的『支付說明』，以便了解如何儲值。',
    category: FaqCategory.Deposit,
  },
  {
    title: '有建議的手機規格嗎？',
    content: `1.Android 系統版本 5.1 以上
    2.iOS 系統版本 11 以上
    3.記憶體2GB以上
    4.保留空間512MB以上`,
    category: FaqCategory.Game,
  },
  {
    title: '玩到一半突然斷線分數會怎麼算？',
    content:
      '當網路連線異常或斷線時，當局遊戲會進入託管並停止遊戲。再次登入時，會自動結算託管遊戲的輸贏，並將結算資訊發送到玩家的信箱。',
    category: FaqCategory.Game,
  },
  {
    title: '玩到一半突然斷線機台會保留嗎？',
    content:
      '當網路連線異常或斷線時，當局遊戲會進入託管並停止遊戲而機台將自動保留15分鐘。於15分鐘內再次登入時，會自動進入該機台。',
    category: FaqCategory.Game,
  },
  {
    title: '如何修改暱稱，修改暱稱有限制嗎？',
    content:
      '玩家首次登入遊戲後可以修改一次暱稱，自該次修改後半年內將無法再次變更，如須變更暱稱請至表單下載區下載申請表單，填妥表單並支付工本費新台幣貳百元後聯繫客服人員處理。',
    category: FaqCategory.Game,
  },
  {
    title: '忘記密碼該怎麼辦？',
    content:
      '自行創建的帳號，點選『忘記密碼』，填妥驗證資料後送出，系統將會發送一組新的密碼至您手機。',
    category: FaqCategory.Login,
  },
  {
    title: '用Facebook、Line或Gmail等其他登入方式',
    content:
      '請依登入方式與對方公司聯繫，本公司不會持有玩家密碼，亦無法補發新密碼。',
    category: FaqCategory.Login,
  },
  {
    title: '如何儲值購點？',
    content:
      '請先完成手機認證，並參考『儲值購點』頁面，點擊您需要的儲值渠道的『支付說明』，以便了解如何儲值。',
    category: FaqCategory.Deposit,
  },
  {
    title: '如何查詢儲值購點的入帳紀錄？',
    content:
      '至遊戲內『銀行』查詢儲值紀錄或或登入官方網站後，點擊『會員專區』後至『銀行』查詢儲值紀錄。',
    category: FaqCategory.Deposit,
  },
  {
    title: '儲值未入帳該怎麼辦？',
    content: `請先重開遊戲再次確認是否有入帳，若仍未入帳請立即聯繫客服人員並附上以下資訊以利客服人員迅速排查
    1.玩家資訊
    2.儲值時間
    3.儲值方式(含儲值平台)
    4.儲值品項
    5.儲值單據
    `,
    category: FaqCategory.Deposit,
  },
  {
    title: '帳號被盜了該怎麼辦？',
    content: `1. 請立即回報客服人員
      2. 客服人員將會驗證您的帳號
      3. 驗證完成後請玩家申請停權並向警察局報案 (填寫報案三聯單)
      4. 取得報案證明 (三聯單的第二聯) 後，將影本 e-mail (或傳真、私訊至粉絲團) 回傳給客服人員
      5. 客服收到檢警來函後會配合調查，會盡快協助您找回被盜取的物品
     `,
    category: FaqCategory.Deposit,
  },
  {
    title: '為何要完成手機認證？',
    content: `1.當帳號或密碼遺失時，可以透過手機號碼尋回
    2.帳號安全更有保障，不用擔心遊戲資產被有心人士盜用
     `,
    category: FaqCategory.Validation,
  },
  {
    title: '一直沒收到手機認證的驗證碼該怎麼辦？',
    content: `1.檢查手機收訊是否良好
    2.所屬電信公司是否有阻擋『商業簡訊』的服務
    3.手機簡訊的容量是否不夠
    4.過多用戶使用簡訊驗證功能，導致線路忙碌
     `,
    category: FaqCategory.Validation,
  },
  {
    title: '手機號碼有換了，能否綁定新的號碼？',
    content: `於遊戲內點擊『玩家資訊』可以修改手機號碼，自該次修改後半年內將無法再次變更，如須變更暱稱請至表單下載區下載申請表單，填妥表單並支付工本費新台幣貳百元後聯繫客服人員處理。`,
    category: FaqCategory.Validation,
  },
  {
    title: '有自稱是大頭家娛樂城的客服人員要求提供帳號及密碼，我該提供嗎？',
    content: `客服人員不會要玩家提供帳號及密碼，如遇此情事，請聯繫官方客服人員查證`,
    category: FaqCategory.Scam,
  },
]

const faqListByCategory = _(faqList)
  .orderBy((t) => t.category)
  .groupBy((t) => t.category)
  .value()
function FaqPage() {
  return (
    <Layout>
      <PageBanner />
      <section className="px-4">
        <div className="lg:w-[860px] mx-auto">
          <div className="mb-8 flex justify-center lg:justify-start">
            <img
              src={toImgPath('/title_faq.png')}
              alt="常見問題"
              className="h-10"
            />
          </div>
          {Object.entries(faqListByCategory).map(([category, list]) => (
            <div key={category} className="mb-8">
              <div className="text-yellow-300 font-semibold text-3xl text-shadow-lg tracking-wider mb-3 flex items-center">
                <HiOutlineQuestionMarkCircle className="text-4xl mr-1" />
                {faqCategoryMap[category]}
              </div>
              <div className="space-y-4">
                {list.map((t, i) => (
                  <div
                    key={i}
                    className="text-lg bg-black/30 p-4 border border-gold-500/30 rounded-lg "
                  >
                    <p className="text-gold-500 font-semibold mb-1">
                      Q: {t.title}
                    </p>
                    <div className="text-gray-300 whitespace-pre-line">
                      {t.content}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default FaqPage
