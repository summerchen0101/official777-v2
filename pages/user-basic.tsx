import Layout from '@/components/layout/Layout'
import PageBanner from '@/components/layout/PageBanner'
import useMe from '@/services/useMe'

function UserBasic() {
  const { data } = useMe()
  return (
    <Layout>
      <PageBanner />
      <section>
        <div className="lg:w-[860px] mx-auto">
          <div className="mb-6 flex justify-center lg:justify-start">
            <img src="/title_member.png" alt="會員資料" className="h-10" />
          </div>
          <div className="form-box">
            <form className="space-y-5">
              <div className="flex flex-col lg:flex-row lg:space-x-4 lg:items-center">
                <label
                  htmlFor=""
                  className="mb-2 w-36 lg:text-right text-gray-200"
                >
                  玩家暱稱
                </label>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    className="rounded-sm border-none bg-gray-100 flex-1 h-9 lg:w-72"
                  />
                  <div className="w-24">
                    <button className="btn w-full">復原</button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row lg:space-x-4 lg:items-center">
                <label
                  htmlFor=""
                  className="mb-2 w-36 lg:text-right text-gray-200"
                >
                  手機號碼綁定
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    className="rounded-sm border-none bg-gray-100 flex-1 h-9 lg:w-72"
                  />
                  <div className="w-24">
                    <span className="text-green-500 ">已綁定</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row lg:space-x-4 lg:items-center">
                <label
                  htmlFor=""
                  className="mb-2 w-36 lg:text-right text-gray-200"
                >
                  電子信箱
                </label>
                <input
                  type="email"
                  className="rounded-sm border-none bg-gray-100 flex-1 h-9"
                />
                <div className="w-24"></div>
              </div>
              <div className="flex flex-col lg:flex-row lg:space-x-4 lg:items-center">
                <label
                  htmlFor=""
                  className="mb-2 w-36 lg:text-right text-gray-200"
                >
                  二次密碼
                </label>
                <input
                  type="password"
                  className="rounded-sm border-none bg-gray-100 flex-1 h-9"
                />
                <div className="w-24"></div>
              </div>
              <div className="pt-3 text-center space-x-5 flex justify-center">
                <button className="btn w-40">取消修改</button>
                <button className="btn active w-40">確認修改</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default UserBasic
