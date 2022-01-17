import Layout from '@/components/layout/Layout'
import PageBanner from '@/components/layout/PageBanner'
import { reportCategory } from '@/lib/report'
import useMe from '@/services/useMe'
import useTicketCreate from '@/services/useTicketCreate'
import useTicketFields from '@/services/useTicketFields'
import { getFileInfo, toCdnUrl } from '@/utils'
import { useRouter } from 'next/dist/client/router'
import React, { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { CgSpinner } from 'react-icons/cg'

function Contact() {
  const router = useRouter()
  // const { list: ticketOpts } = useTicketOpts()
  const { list: formFields } = useTicketFields()
  const formRef = useRef<HTMLFormElement>(null)
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm()
  console.log(errors)
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
      // formRef.current?.reset()
      reset()
      alert('您的問題已送出')
    }
  })
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.[0]) return
    const { dataUrl, size } = await getFileInfo(e.target.files[0])
    if (size / 1024 / 1024 > 2) {
      alert('圖片大小請勿超過2M')
      setValue('attachment', null)
      setReviewImg('')
      return
    }
    setReviewImg(dataUrl)
  }
  return (
    <section className="mt-16">
      <div className="lg:w-[860px] mx-auto">
        <div className="mb-6 flex justify-center lg:justify-start">
          <img
            src={toCdnUrl('/title_service.png')}
            alt="聯繫客服"
            className="h-10"
          />
        </div>
        <div className="form-box">
          <form className="space-y-5" ref={formRef}>
            {formFields
              .sort((a, b) => a.position - b.position)
              .map((t, i) => (
                <div
                  key={i}
                  className="flex flex-col lg:flex-row lg:space-x-4 lg:items-center gap-y-2"
                >
                  <label
                    htmlFor=""
                    className="sm:w-28 lg:text-right text-gray-200"
                  >
                    {t.required && <span className="text-red-500">*</span>}
                    {t.name}
                  </label>
                  {t.type === 'select' && (
                    <select
                      className="rounded-sm border-none bg-gray-100 lg:w-96 h-9"
                      {...register(t.itemID.toString(), {
                        required: t.required ? '不可為空' : undefined,
                        value: t.options?.find((t) => t.default)?.name,
                      })}
                    >
                      <option value="">{t.description}</option>
                      {t.options?.map((opt) => (
                        <option key={opt.name}>{opt.name}</option>
                      ))}
                    </select>
                  )}
                  {t.type === 'text' && (
                    <input
                      type="text"
                      className="rounded-sm border-none bg-gray-100 h-9 lg:w-96"
                      {...register(t.itemID.toString(), {
                        required: t.required ? '不可為空' : undefined,
                        pattern: {
                          value: new RegExp(
                            t.regexp_for_validation
                              .replace(`\\A`, '^')
                              .replace(`\\z`, '$'),
                          ),
                          message: '請填寫正確格式',
                        },
                      })}
                      placeholder={t.description}
                    />
                  )}
                  {t.type === 'file' && (
                    <>
                      <input
                        type="file"
                        {...register(t.itemID.toString(), {
                          required: t.required ? '不可為空' : undefined,
                        })}
                        accept="image/*"
                        multiple={t.dataType === 'multiple'}
                        className="rounded-sm border-none bg-gray-100 h-9 lg:w-96"
                      />
                      <div hidden={!t.description} className="text-gray-400">
                        {t.description}
                      </div>
                    </>
                  )}
                  {t.type === 'textarea' && (
                    <textarea
                      className="rounded-sm border-none bg-gray-100 flex-1 h-28"
                      {...register(t.itemID.toString(), {
                        required: t.required ? '不可為空' : undefined,
                      })}
                      placeholder={t.description}
                    />
                  )}

                  {errors[t.itemID] && (
                    <div className="text-sm text-red-500">
                      {errors[t.itemID].message}
                    </div>
                  )}
                </div>
              ))}
            {/* <input hidden name="requester_id" value={data?.id} /> */}

            {/* <div className="flex flex-col lg:flex-row lg:space-x-4 lg:items-center gap-y-2">
              <label htmlFor="" className="sm:w-28 lg:text-right text-gray-200">
                相關截圖 <span className="sm:block">(上限2M)</span>
              </label>
              <div className="relative h-40 rounded bg-white/10 flex justify-center items-center hover:cursor-pointer flex-1">
                <div className="absolute">
                  <div className="flex flex-col items-center ">
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
                  {...register('attachment')}
                  accept="image/*"
                  className="h-48 lg:h-full w-full opacity-0 cursor-pointer"
                  onChange={handleFileUpload}
                />
              </div>
            </div> */}

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
