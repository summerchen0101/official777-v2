function FooterNav() {
  return (
    <footer className="bg-black/60">
      <div className="w-[860px] mx-auto py-4">
        <div className="flex divide-x divide-gray-500 tracking-wider text-gray-200 justify-center">
          <div className="px-5 hover:text-gray-400 cursor-pointer">
            使用者合約
          </div>
          <div className="px-5 hover:text-gray-400 cursor-pointer">
            隱私權保護
          </div>
          <div className="px-5 hover:text-gray-400 cursor-pointer">
            需求配備
          </div>
          <div className="px-5 hover:text-gray-400 cursor-pointer">
            合作提案
          </div>
          <div className="px-5 hover:text-gray-400 cursor-pointer">
            聯絡我們
          </div>
        </div>
        <div className="text-white text-sm leading-loose mt-5 text-center">
          <p>
            ＊遊戲為免費使用，遊戲內另提供購買虛擬遊戲幣、物品等付費服務。請注意遊戲時間，避免沈迷。
          </p>
          <p>
            ＊本遊戲提供之機會中獎商品，消費者購買或參加活動不代表即可獲得特定商品。
          </p>
          <p>
            ＊本遊戲情節涉及棋牌益智及娛樂，非現金交易賭博，使用者請勿進行非法遊戲幣交易。
          </p>
          <p>例行維護時間 08/25(三) 09:00~12:00 客服專線：02-2298-9739</p>
        </div>
      </div>
    </footer>
  )
}

export default FooterNav
