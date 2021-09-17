function FooterNav() {
  return (
    <footer className="bg-black/60">
      <div className="w-[860px] mx-auto py-4">
        <div className="flex divide-x divide-gray-500 text-sm text-gray-200 justify-center">
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
      </div>
    </footer>
  )
}

export default FooterNav
