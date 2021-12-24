import Layout from '@/components/layout/Layout'
import PageBanner from '@/components/layout/PageBanner'
import { reportCategory } from '@/lib/report'
import useMe from '@/services/useMe'
import useTicketCreate from '@/services/useTicketCreate'
import { fileToDataUrl, toImgPath } from '@/utils'
import { useRouter } from 'next/dist/client/router'
import React, { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { BiCloudUpload } from 'react-icons/bi'
import { CgSpinner } from 'react-icons/cg'

const categorys = ['帳號', '儲值', '遊戲', '活動', '意見', '其他', '檢舉']

type Inputs = {
  subject: string
  comment: string
  category: string
  email: string
  phone: string
  attachment: File
}

function Contact() {
  const router = useRouter()

  const formRef = useRef<HTMLFormElement>(null)
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Inputs>()
  useEffect(() => {
    const query = router.query
    let str = ''
    if (query.content) {
      setValue('category', '檢舉')
      setValue(
        'comment',
        str +
          `＊檢舉${
            +(query.private as unknown as string) ? '玩家' : '群組'
          }: ID ${query.id}\n＊原因: ${
            reportCategory[query.content as string]
          }\n＊補充說明: -`,
      )
    }
  }, [router.query])
  const { handler: doCreate, isLoading } = useTicketCreate()
  const { data } = useMe()
  const [reviewImg, setReviewImg] = useState('')
  const onSubmit = handleSubmit(async (d) => {
    const formData = new FormData(formRef.current || undefined)
    if (!d.attachment) {
      formData.delete('attachment')
    }
    const res = await doCreate(formData)
    if (res?.ok) {
      setReviewImg('')
      formRef.current?.reset()
      alert('您的問題已送出')
    }
  })
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.[0]) return
    const dataStr = await fileToDataUrl(e.target.files[0])
    setReviewImg(dataStr)
  }
  return (
    <section className="mt-16">
      <div className="lg:w-[860px] mx-auto">
        <div className="mb-6 flex justify-center lg:justify-start">
          <img
            src={toImgPath('/title_service.png')}
            alt="聯繫客服"
            className="h-10"
          />
        </div>
        <div className="form-box">
          <form className="space-y-5" ref={formRef}>
            <input hidden name="requester_id" value={data?.id} />
            <div className="flex flex-col lg:flex-row lg:space-x-4 lg:items-center gap-y-2">
              <label htmlFor="" className="w-28 lg:text-right text-gray-200">
                <span className="text-red-500">*</span>
                問題類型
              </label>
              <select
                className="rounded-sm border-none bg-gray-100 lg:w-96 h-9"
                {...register('category', { required: '不可為空' })}
              >
                <option value="">請選擇問題類型</option>
                {categorys.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
              {errors.category && (
                <div className="text-sm text-red-500">
                  {errors.category.message}
                </div>
              )}
            </div>
            <div className="flex flex-col lg:flex-row lg:space-x-4 lg:items-center gap-y-2">
              <label htmlFor="" className="w-28 lg:text-right text-gray-200">
                <span className="text-red-500">*</span>
                意見標題
              </label>
              <input
                type="text"
                className="rounded-sm border-none bg-gray-100 h-9 lg:w-96"
                {...register('subject', { required: '不可為空' })}
              />
              {errors.subject && (
                <div className="text-sm text-red-500">
                  {errors.subject.message}
                </div>
              )}
            </div>
            <div className="flex flex-col lg:flex-row lg:space-x-4 lg:items-center gap-y-2">
              <label htmlFor="" className="w-28 lg:text-right text-gray-200">
                <span className="text-red-500">*</span>
                Email
              </label>
              <input
                type="email"
                className="rounded-sm border-none bg-gray-100 h-9 lg:w-96"
                {...register('email', { required: '不可為空' })}
              />
              {errors.email && (
                <div className="text-sm text-red-500">
                  {errors.email.message}
                </div>
              )}
            </div>
            <div className="flex flex-col lg:flex-row lg:space-x-4 lg:items-center gap-y-2">
              <label htmlFor="" className="w-28 lg:text-right text-gray-200">
                手機
              </label>
              <input
                type="text"
                className="rounded-sm border-none bg-gray-100 h-9 lg:w-96"
                {...register('phone')}
                placeholder="填寫有機會較快收到客服回饋"
              />
              {errors.phone && (
                <div className="text-sm text-red-500">
                  {errors.phone.message}
                </div>
              )}
            </div>
            <div className="flex flex-col lg:flex-row lg:space-x-4 lg:items-center gap-y-2">
              <label htmlFor="" className="w-28 lg:text-right text-gray-200">
                <span className="text-red-500">*</span>
                意見內容
              </label>
              <textarea
                className="rounded-sm border-none bg-gray-100 flex-1 h-28"
                {...register('comment', { required: '不可為空' })}
              />
              {errors.comment && (
                <div className="text-sm text-red-500">
                  {errors.comment.message}
                </div>
              )}
            </div>
            <div className="flex flex-col lg:flex-row lg:space-x-4 lg:items-center gap-y-2">
              <label htmlFor="" className="w-28 lg:text-right text-gray-200">
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
                onClick={onSubmit}
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
  )
}

function ContactPage() {
  const router = useRouter()
  if (router.query.layout) {
    return (
      <Layout>
        <PageBanner />
        <Contact />
      </Layout>
    )
  }
  return <Contact />
}

export default ContactPage
