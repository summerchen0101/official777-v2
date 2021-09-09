import Layout from '@/components/layout/Layout'

function UserBasic() {
  return (
    <Layout>
      <section>
        <div className="w-[860px] h-[200px] mx-auto flex items-center justify-center bg-gray-300">
          Banner
        </div>
      </section>
      <section className="bg-gray-200">
        <div className="w-[860px] mx-auto py-10">
          <h1 className="text-2xl mb-6 text-indigo-600 text-center tracking-widest">
            [ 會員資料 ]
          </h1>
          <div className="bg-gray-300 mt-4 p-7">
            <form className="space-y-5">
              <div className="flex space-x-4 items-center">
                <label htmlFor="" className="w-36 text-right text-gray-600">
                  玩家暱稱
                </label>
                <input
                  type="text"
                  className="rounded-sm border-none bg-gray-100 flex-1 h-9"
                />
                <div className="w-24">
                  <button className="btn w-full">復原</button>
                </div>
              </div>
              <div className="flex space-x-4 items-center">
                <label htmlFor="" className="w-36 text-right text-gray-600">
                  手機號碼綁定
                </label>
                <input
                  type="text"
                  className="rounded-sm border-none bg-gray-100 flex-1 h-9"
                />
                <div className="w-24">
                  <span className="text-green-500 ">已綁定</span>
                </div>
              </div>

              <div className="flex space-x-4 items-center">
                <label htmlFor="" className="w-36 text-right text-gray-600">
                  電子信箱
                </label>
                <input
                  type="email"
                  className="rounded-sm border-none bg-gray-100 flex-1 h-9"
                />
                <div className="w-24"></div>
              </div>
              <div className="flex space-x-4 items-center">
                <label htmlFor="" className="w-36 text-right text-gray-600">
                  二次密碼
                </label>
                <input
                  type="password"
                  className="rounded-sm border-none bg-gray-100 flex-1 h-9"
                />
                <div className="w-24"></div>
              </div>
              <div className="pt-3 text-center space-x-5">
                <button className="btn w-40">取消修改</button>
                <button className="btn primary w-40">確認修改</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default UserBasic
