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
import cs from 'classnames'

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
                    <p>
                      尊貴的頭家：
                      <br />
                      我們十分重視您的到訪，歡迎加入大頭家官方客服LINE：@online539或來信至官方信箱：megagames815@gmail.com，我們將盡快協助。
                    </p>
                    <hr />
                    <br />
                    <div className="row">
                      <div className="col-lg-2 btn-img-hover"></div>
                      <div className="col-lg-4 btn-img-hover">
                        <a
                          href="https://line.me/R/ti/p/@online539"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            src="/images/service/btn_line.png"
                            data-active-src="images/service/btn_line_active.png"
                            alt=""
                            className="img-responsive center-block"
                          />
                        </a>
                      </div>
                      <div className="col-lg-4 btn-img-hover">
                        <a href="mailto:megagames815@gmail.com?subject=問題回報&body=請在這裡描述您的問題...">
                          <img
                            src="/images/service/btn_email.png"
                            data-active-src="images/service/btn_email_active.png"
                            alt="Email"
                            className="img-responsive center-block"
                          />
                        </a>
                      </div>
                      <div className="col-lg-2 btn-img-hover"></div>
                    </div>
                    <br />
                    <br />
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
