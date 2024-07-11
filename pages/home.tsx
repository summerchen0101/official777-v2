import EventBanners from '@/components/home/EventBanners'
import GameBanners from '@/components/home/GameBanners'
import HomeBanners from '@/components/home/HomeBanners'
import NewsBox from '@/components/home/NewsBox'
import RechargeBtns from '@/components/home/RechargeBtns'
import VideoBanners from '@/components/home/VideoBanners'
import LogoBox from '@/components/LogoBox'
import PageLayout from '@/components/PageLayout'
import { useStore } from '@/store/useStore'
import { useEffect } from 'react'

function HomePage() {
  const { canRecharge } = useStore((s) => s.clientEnv)

  useEffect(() => {
    var wow = new WOW({
      boxClass: 'wow', // 欲套用wow.js的class                      (預設wow)
      animateClass: 'animated', // 欲修改設定animat.css 的類別名稱            (預設animated)
      offset: 100, // 當用戶滾動並到達這個距離時才開始執行動畫      (預設是0)
      mobile: false, // 是否在行動裝置上執行動畫                   (預設是true)
      live: true, // 非同步產生的內容是否要套用                 (預設是true)
    })
    wow.init()
  }, [])
  return (
    <PageLayout>
      <header
        className="header-box wow fadeIn"
        data-wow-duration="2s"
        data-wow-delay="0.2s"
        id="header-box"
      >
        <LogoBox />
        <HomeBanners />
        <hr className="float-none" />
        <div className="gold-line-mini" />
        <div className="black-line" />
        <div className="gold-line" />
      </header>
      <div className="absolute w-full">
        <div className="arrow-box arrow-animate hidden-xs">
          <i className="arrow " />
        </div>
      </div>
      <div className="bg-gradient-to-b from-[var(--color2)] via-[var(--color11)] to-[var(--color2)] container shadow-xl relative pb-20">
        <div className="vertical-gold-line absolute left-0 top-0 w-2 min-h-full"></div>
        <div className="vertical-gold-line absolute right-0 top-0 w-2 min-h-full"></div>
        {canRecharge ? <RechargeBtns /> : null}

        <NewsBox />
        <EventBanners />
        <GameBanners />
        <VideoBanners />
        {/* <FeatureBanners /> */}
      </div>
    </PageLayout>
  )
}

export default HomePage
