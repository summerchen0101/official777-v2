function FooterNav() {
  return (
    <footer>
      <div className="bg-black/50">
        <div className="lg:w-[860px] mx-auto">
          <div className="grid grid-cols-2 gap-y-3 lg:flex justify-center lg:divide-x divide-gray-500 text-gray-300 py-4 px-8">
            <div className="cursor-pointer px-4 hover:text-gold-300">
              使用者合約
            </div>
            <div className="cursor-pointer px-4 hover:text-gold-300">
              隱私權保護
            </div>
            <div className="cursor-pointer px-4 hover:text-gold-300">
              需求配備
            </div>
            <div className="cursor-pointer px-4 hover:text-gold-300">
              合作提案
            </div>
            <div className="cursor-pointer px-4 hover:text-gold-300">
              聯絡我們
            </div>
          </div>
        </div>
        <div className="bg-black/80">
          <div className="text-white text-sm lg:leading-loose lg:text-center space-y-2 lg:space-y-0 p-4">
            <p>
              ＊遊戲為免費使用，遊戲內另提供購買虛擬遊戲幣、物品等付費服務。請注意遊戲時間，避免沉迷。
            </p>
            <p>
              ＊本遊戲提供之機會中獎商品，消費者購買或參加活動不代表即可獲得特定商品。
            </p>
            <p>
              ＊本遊戲情節涉及棋牌益智及娛樂，非現金交易賭博，使用者請勿進行非法遊戲幣交易。
            </p>
            <p className="text-yellow-200">
              例行維護時間 星期三 09：00 ~ 12：00
            </p>
            <div className="pt-3">
              <div className="bg-white lg:w-48 h-14 p-2 rounded-sm flex items-center justify-center mx-auto">
                <img src="/company_logo.png" className="h-full" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterNav
