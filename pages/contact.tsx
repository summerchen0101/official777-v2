import LogoBox from '@/components/LogoBox'
import PageLayout from '@/components/PageLayout'
import useCdnUrl from '@/hooks/useCdnUrl'
import { reportCategory } from '@/lib/report'
import useMe from '@/services/useMe'
import useTicketCreate from '@/services/useTicketCreate'
import useTicketFields from '@/services/useTicketFields'
import { useRouter } from 'next/dist/client/router'
import { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'

function ContactPage() {
  const toCdnUrl = useCdnUrl()
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
      router.push('/contact-ok')
    }
  })
  return (
    <PageLayout>
      <header
        className="header-box wow fadeIn"
        data-wow-duration="2s"
        data-wow-delay="0.2s"
        id="header-box"
      >
        <LogoBox />
        <div className="content-box">
          <img
            src="/images/service/header_service.jpg"
            alt=""
            className="img-responsive center-block hidden-xs"
          />
          <img
            src="/images/service/header_phone_service.jpg"
            alt=""
            className="img-responsive center-block hidden visible-xs"
          />
        </div>
        <hr className="float-none" />
        <div className="gold-line-mini" />
        <div className="black-line" />
        <div className="gold-line" />
      </header>
      <div className="content">
        <div className="content-title-box">
          <img
            src="/images/service/title_contact.png"
            alt=""
            className="img-responsive center-block"
          />
        </div>
        <div className="tab-content-box">
          <div className="ranking-box">
            <div className="ranking-box-gold">
              <div className="ranking-box-goldline">
                <div className="ranking-box-black">
                  <div className="content-box">
                    <form role="form" ref={formRef}>
                      {formFields
                        .sort((a, b) => a.position - b.position)
                        .map((t, i) => (
                          <div
                            key={i}
                            className="form-group col-lg-12 input-group-lg"
                          >
                            <label htmlFor="" className="control-label">
                              {t.required && (
                                <span className="text-danger">*</span>
                              )}
                              {t.name}
                            </label>
                            {t.type === 'select' && (
                              <select
                                className="form-control input-lg"
                                {...register(t.itemID.toString(), {
                                  required: t.required ? '不可為空' : undefined,
                                  value: t.options?.find((t) => t.default)
                                    ?.name,
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
                                className="form-control"
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
                                <label className="sr-only" htmlFor="inputfile">
                                  選擇檔案
                                </label>
                                <input
                                  type="file"
                                  id="inputfile"
                                  className="btn  btn-default btn-lg btn-block"
                                  {...register(t.itemID.toString(), {
                                    required: t.required
                                      ? '不可為空'
                                      : undefined,
                                  })}
                                  accept="image/*"
                                  multiple={t.dataType === 'multiple'}
                                />
                                <div
                                  hidden={!t.description}
                                  className="text-muted"
                                >
                                  {t.description}
                                </div>
                              </>
                            )}
                            {t.type === 'textarea' && (
                              <textarea
                                className="form-control"
                                rows={5}
                                defaultValue=""
                                {...register(t.itemID.toString(), {
                                  required: t.required ? '不可為空' : undefined,
                                })}
                                placeholder={t.description}
                              />
                            )}

                            {errors[t.itemID] && (
                              <div className="text-sm text-danger">
                                {errors[t.itemID].message}
                              </div>
                            )}
                          </div>
                        ))}

                      <div className="button-center-box text-center">
                        <button
                          type="button"
                          className="btn btn-default btn-lg btn-center"
                          onClick={onSubmit}
                          disabled={isLoading}
                        >
                          確認送出
                        </button>
                      </div>
                    </form>
                    <hr className="float-none" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="float-none" />
      </div>
    </PageLayout>
  )
}

export default ContactPage
