import Layout from '@/components/layout/Layout'
import PageBanner from '@/components/layout/PageBanner'
import useTicketCreate from '@/services/useTicketCreate'
import { fileToDataUrl, toCdnImgPath } from '@/utils'
import React, { useRef, useState } from 'react'
import { BiCloudUpload } from 'react-icons/bi'
import { CgSpinner } from 'react-icons/cg'

function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null)
  const { handler: doCreate, isLoading } = useTicketCreate()
  const [reviewImg, setReviewImg] = useState('')
  const handleSubmit = async () => {
    const formData = new FormData(formRef.current || undefined)
    const res = await doCreate(formData)
    if (res?.ok) {
      setReviewImg('')
      formRef.current?.reset()
      alert('您的問題已送出')
    }
  }
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.[0]) return
    const dataStr = await fileToDataUrl(e.target.files[0])
    setReviewImg(dataStr)
  }
  return (
    <Layout>
      <PageBanner />
      <section>
        <div className="lg:w-[860px] mx-auto">
          <div className="mb-6 flex justify-center lg:justify-start">
            <img
              src={toCdnImgPath('/title_service.png')}
              alt="聯繫客服"
              className="h-10"
            />
          </div>
          <div className="form-box">
            <form className="space-y-5" ref={formRef}>
              <input hidden name="requester_id" defaultValue="111" />
              {/* <input name="description" value="一點描述" /> */}
              <div className="flex flex-col lg:flex-row lg:space-x-4 lg:items-center">
                <label
                  htmlFor=""
                  className="mb-2 w-28 lg:text-right text-gray-200"
                >
                  問題類型
                </label>
                <select
                  name="subject"
                  className="rounded-sm border-none bg-gray-100 lg:w-1/3 h-9"
                >
                  <option value={1}>儲值相關</option>
                  <option value={2}>帳號相關</option>
                  <option value={3}>遊戲相關</option>
                </select>
              </div>
              <div className="flex flex-col lg:flex-row lg:space-x-4 lg:items-center">
                <label
                  htmlFor=""
                  className="mb-2 w-28 lg:text-right text-gray-200"
                >
                  意見內容
                </label>
                <textarea
                  name="description"
                  className="rounded-sm border-none bg-gray-100 flex-1 h-28"
                />
              </div>
              <div className="flex flex-col lg:flex-row lg:space-x-4 lg:items-center">
                <label
                  htmlFor=""
                  className="mb-2 w-28 lg:text-right text-gray-200"
                >
                  相關截圖
                </label>
                <div className="relative h-40 rounded bg-gray-400 flex justify-center items-center hover:cursor-pointer flex-1">
                  <div className="absolute">
                    <div className="flex flex-col items-center ">
                      {/* <i className="fa fa-cloud-upload fa-3x text-gray-200" /> */}
                      <BiCloudUpload size="100px" className="text-gray-300" />
                    </div>
                  </div>
                  <img
                    hidden={!reviewImg}
                    src={reviewImg}
                    alt=""
                    className="h-full w-full object-contain absolute"
                  />
                  <input
                    type="file"
                    name="attachment"
                    className="h-48 lg:h-full w-full opacity-0 cursor-pointer"
                    onChange={handleFileUpload}
                  />
                </div>
              </div>

              <div className="pt-3 flex justify-center">
                <button
                  className="btn active w-40"
                  type="button"
                  onClick={handleSubmit}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      處理中 <CgSpinner className="animate-spin text-xl ml-1" />
                    </>
                  ) : (
                    '確認送出'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ContactPage
