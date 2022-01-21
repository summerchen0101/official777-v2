import ActivityBtns from '@/components/activity/ActivityBtns'
import ContentText from '@/components/activity/ContentText'
import ListWrapper from '@/components/activity/ListWrapper'
import PageWrapper from '@/components/activity/PageWrapper'
import ActivitySection from '@/components/activity/Section'
import SubTitle from '@/components/activity/SubTitle'
import React from 'react'

export default function Activity_03() {
  return (
    <PageWrapper>
      <ActivityBtns id={3} />
      <ActivitySection title="注意事項">
        <ListWrapper>
          <li>
            活動所獲得獎項統一於活動結束後7個工作日內進行配獎，領獎期限為配獎後14日內，請於官網領獎中心領取，並填寫領獎單，如未於該指定期間完成上述事項則視同放棄。
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
          <li>活動獎勵會依照官方採購流程進行，交貨時間依實際狀況而定。</li>
          <li>
            參賽玩家需保證所有填寫或提出之資料均為真實且正確，如有盜用不實或不正確資訊，本公司將取消其中獎資格，並得就其損害主辦單位或任何第三人權益之事，提出一切民、刑事訴追。
          </li>
          <li>
            參賽玩家視為同意本公司於本活動目的及期限內蒐集、處理及利用您的個人資料，若您不提供、提供不完整或不正確的資料將使您無法參加本活動。若您日後不同意本公司處理及利用您的個人資料或您得獎後不願意為完成本贈獎處理相關事宜而另行提供其他必要（例如稅法之相關規定）之個人資料（姓名、身分證統一編號、地址、聯絡電話等），將使您失去獲獎資格。
          </li>
          <li>
            參賽玩家於參加本活動之同時，即同意接受本活動之活動辦法與注意事項之規範，如不同意或有違反，應視為無參加資格，或本公司得取消其得獎資格，如因此有致生損害於本公司或其他任何第三人，本公司得向參賽玩家請求損害賠償，參賽玩家應負一切相關責任。
          </li>
          <li>
            本公司保留更換等值獎品以及變更活動內容或終止活動的權利，以官網公告訊息為主。
          </li>
          <li>
            本公司員工均不得參加本次活動，以示公允；若經查證為本公司員工，立即取消抽獎資格。
          </li>
        </ListWrapper>
      </ActivitySection>
    </PageWrapper>
  )
}
