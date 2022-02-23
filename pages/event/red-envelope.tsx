import ContentText from '@/components/activity/ContentText'
import ListWrapper from '@/components/activity/ListWrapper'
import SubTitle from '@/components/activity/SubTitle'
import LoginPopup from '@/components/LoginPopup'
import TabGroup from '@/components/TabGroup'
import { StringMap } from '@/types'
import { toCdnUrl } from '@/utils'
import { useRouter } from 'next/dist/client/router'
import React, { useState } from 'react'
import cs from 'classnames'

const tabMap: StringMap = {
  intro: '活動介紹',
  tips: '注意事項',
}

export default function RechargeActivity() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('intro')
  return (
    <div>
      <div className="mb-4 sm:mb-10 w-full">
        <img
          src={toCdnUrl('/event/recharge_banner.jpg')}
          alt=""
          className="object-contain w-full object-top"
        />
      </div>
      <div className="p-4">
        <div className="mb-10">
          <div className="bg-[#3f0f0f] rounded-full font-medium text-3xl sm:text-4xl tracking-wider text-center w-[560px] max-w-[calc(100%-30px)] mx-auto py-3 sm:py-5 relative z-10 shadow-xl -mb-6 sm:-mb-8 p-2 border-4 border-red-800 text-yellow-400">
            全民發紅包
          </div>
          <div className="rounded-3xl text-white min-h-[500px] max-w-[960px] mx-auto p-2 bg-red-900">
            <div className="border-yellow-600 border-2 rounded-2xl p-4 sm:p-10">
              <div className="flex gap-4 mb-8 mt-5">
                {Object.entries(tabMap).map(([code, label]) => (
                  <div
                    key={code}
                    className={cs(
                      'rounded-full h-12 w-36 flex items-center justify-center text-xl text-gray-200 cursor-pointer',
                      code === activeTab
                        ? 'bg-yellow-500 text-black font-medium'
                        : 'bg-[#3f0f0f]',
                    )}
                    onClick={() => setActiveTab(code)}
                  >
                    {label}
                  </div>
                ))}
              </div>

              <div className="space-y-8" hidden={activeTab !== 'intro'}>
                <div>
                  <SubTitle>活動時間</SubTitle>
                  <ContentText>
                    2022/2/25(五) 18:00 ~ 2022/3/24(四) 23:59
                  </ContentText>
                </div>
                <div>
                  <SubTitle>活動對象</SubTitle>
                  <ContentText>大頭家娛樂城玩家</ContentText>
                </div>
                <div>
                  <SubTitle>活動說明</SubTitle>
                  <ContentText>
                    <ListWrapper>
                      <li>每發一次祝福紅包即具抽獎資格，發越多抽獎機會越多</li>
                      <li>每次紅包金額最少發10,000金幣</li>
                      <li>
                        每週五抽前一週有符合資格的玩家，未抽中的玩家抽獎資格即失效，需重新取得抽獎資格
                        <div className="mt-2">
                          例1：華安於2/26發了2次10,000金幣的紅包，3/4的第一週抽獎未中獎，且3/4到3/10間華安都沒發紅包，3/11抽獎時華安就不具抽獎資格
                          <br />
                          例1：石榴於2/26發了3次10,000金幣的紅包，3/4的第一週抽獎未中獎，且3/8石榴又發了1次10,000金幣的紅包，3/11抽獎時石榴就有抽獎資格
                          <br />
                        </div>
                      </li>
                    </ListWrapper>
                  </ContentText>
                </div>
                <div>
                  <SubTitle>獎項內容</SubTitle>
                  <div className="text-center bg-black/50 sm:w-96 mx-auto rounded-xl py-4 border-4 border-red-800 shadow-lg">
                    <div className="text-red-300 text-2xl mb-3 tracking-wider">
                      週週抽
                    </div>
                    <div className="text-yellow-500 text-3xl sm:text-4xl font-medium pb-2">
                      西堤餐券卡 10名
                      <div className="text-xl text-gray-300 mt-2">
                        價值131,600金幣
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <SubTitle>抽獎日期</SubTitle>
                  <ContentText>
                    <div className="space-y-2">
                      <div className="">第一週：2022/3/4</div>
                      <div className="">第二週：2022/3/11</div>
                      <div className="">第三週：2022/3/18</div>
                      <div className="">第四週：2022/3/25</div>
                    </div>
                    <br />
                    ※各週抽獎日當天18:00前會於大頭家官網、大頭家粉絲專頁公布中獎名單
                  </ContentText>
                </div>
              </div>
              <div hidden={activeTab !== 'tips'}>
                <SubTitle>注意事項</SubTitle>
                <ContentText>
                  <ListWrapper>
                    <li>
                      各週中獎玩家請於該週中獎名單公布後7天內至大頭家粉絲專頁私訊小編領獎，並填寫領獎單回傳，如未於該指定期間完成前述事項則視同放棄。
                    </li>
                    <li>
                      獎品寄送以台灣地區為限定範圍；如得獎人為離島玩家（如：澎湖、金門、馬祖等地區），請於實體獎項線上建單時，提供台灣友人的寄送地址。
                    </li>
                    <li>
                      活動中若有舞弊行為，經系統查核屬實，依遊戲規範處理，將取消玩家活動及獲獎資格，所有判決將依據官方公告為準。
                    </li>
                    <li>
                      如有因個人網路環境因素、未依遊戲設定完整操作、伺服器維護導致斷線、連接失敗等問題，本公司恕不負任何責任，活動照常舉行，不另做補償。
                    </li>
                    <li>
                      玩家若於活動獎項贈出前違反任何服務條款或遊戲規章經官方認定屬實，將失去參與活動/領獎之資格。開獎時若抽出上述違規玩家獎券號碼，則視為無效券號碼，獎項保留續抽；如得獎後始違規者，其抽中之獎項一律取消，不得異議。
                    </li>
                    <li>
                      活動中獲得獎勵為機會中獎商品，消費者購買或參加活動不代表即可獲得特定商品。
                    </li>
                    <li>
                      根據中華民國稅法規定，本活動獎項須納入得獎玩家年度所得報繳所得稅。若獎項所得總額超過新台幣20,000元，應由本公司依法辦理扣繳10%所得稅；中獎玩家如非屬非我國境內之居住人，則應由本公司依法辦理扣繳20%所得稅。上述應辦理扣繳之得獎玩家須繳交身分證明文件正反面影本予本公司；若不願意配合者，則視為自動棄權，喪失領獎資格。
                    </li>
                    <li>
                      玩家若獲得活動獎項，本公司只提供該活動獎項；獎項不包含額外產生之費用(如:稅金等項目)。
                    </li>
                    <li>
                      申請領獎之玩家未滿20歲者，需附上申請人及法定代理人的新式身分證正反面影本，以進行驗證。若您尚未申辦身份證，請用戶口名簿影本取代身份證。
                    </li>
                    <li>
                      活動獎勵會依照官方採購流程進行，交貨時間依實際狀況而定。
                    </li>
                    <li>
                      玩家需保證所有填寫或提出之資料均為真實且正確，如有盜用不實或不正確資訊，本公司將取消其中獎資格，並得就其損害主辦單位或任何第三人權益之事，提出一切民、刑事訴追。
                    </li>
                    <li>
                      玩家視為同意本公司於本活動目的及期限內蒐集、處理及利用您的個人資料，若您不提供、提供不完整或不正確的資料將使您無法參加本活動。若您日後不同意本公司處理及利用您的個人資料或您得獎後不願意為完成本贈獎處理相關事宜而另行提供其他必要（例如稅法之相關規定）之個人資料（姓名、身分證統一編號、地址、聯絡電話等），將使您失去獲獎資格。
                    </li>
                    <li>
                      玩家於參加本活動之同時，即同意接受本活動之活動辦法與注意事項之規範，如不同意或有違反，應視為無參加資格，或本公司得取消其得獎資格，如因此有致生損害於本公司或其他任何第三人，本公司得向參賽玩家請求損害賠償，參賽玩家應負一切相關責任。
                    </li>
                    <li>
                      本公司保留更換等值獎品以及變更活動內容或終止活動的權利，以官網公告訊息為主。
                    </li>
                    <li>
                      本公司員工均不得參加本次活動，以示公允；若經查證為本公司員工，立即取消抽獎資格。
                    </li>
                  </ListWrapper>
                </ContentText>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LoginPopup />
    </div>
  )
}
