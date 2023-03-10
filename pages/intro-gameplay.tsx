import LogoBox from '@/components/LogoBox'
import PageLayout from '@/components/PageLayout'
import { useEffect } from 'react'

function IntroGamePlayPage() {
  useEffect(() => {
    var _showTab = 0
    $('.sub-tab li').eq(_showTab).addClass('active')
    $('.sub-tab-content').hide().eq(_showTab).show()
    $('.sub-tab li')
      .click(function () {
        var $this = $(this),
          _clickTab = $this.find('a').attr('href')
        $this.addClass('active').siblings('.active').removeClass('active')
        $(_clickTab).stop(false, true).fadeIn().siblings().hide()
        return false
      })
      .find('a')
      .focus(function () {
        this.blur()
      })
    //
    $('.sub-menu-dt').on('click', this, function () {
      if ($(this).hasClass('open')) {
        $(this).toggleClass('sub-menu-dt2')
        $(this).next().slideToggle(200)
        $(this).removeClass('open')
      } else {
        $(this).toggleClass('sub-menu-dt2')
        $(this).next().slideToggle(200)
        $(this).addClass('open')
      }
    })
    $('.sub-menu-dd').addClass('dt-hide')
    $('.sub-menu-dd').on('click', this, function () {
      $(this).prev().removeClass('open')
      $(this).slideToggle(200)
      $(this).prev().toggleClass('sub-menu-dt2')
    })
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
        <div className="content-box">
          <img
            src="/images/novice/header_novice.jpg"
            alt=""
            className="img-responsive center-block hidden-xs"
          />
          <img
            src="/images/novice/header_phone_service.jpg"
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
            src="/images/novice/title_gameplay.png"
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
                    <ul className="sub-tab">
                      <li>
                        <a href="#sub-tab-1">老虎機</a>
                      </li>
                      <li>
                        <a href="#sub-tab-2">牌桌遊戲 </a>
                      </li>
                      <li>
                        <a href="#sub-tab-3">其他類型</a>
                      </li>
                    </ul>
                    <hr className="float-none" />
                    <hr />
                    <div className="sub_content_all">
                      <div id="sub-tab-1" className="sub-tab-content">
                        <h2 className="text-center">老虎機</h2>
                        <hr />
                        <div className="crad-box">
                          <div className="card-img">
                            <img
                              src="/images/novice/gameplay/gameplay_slot_img01.jpg"
                              alt=""
                              className="img-responsive img-rounded"
                            />
                          </div>
                          <div className="card-text">
                            <h4>年年有瑜</h4>
                            <a
                              className="card-btn"
                              href="/gameplay/slot01"
                              target="_blank"
                            >
                              遊戲介紹
                            </a>
                            <hr className="float-none" />
                            <hr />
                            <p>
                              位移百搭超好開，
                              <br />
                              金幣事件顯百搭，
                              <br />
                              跟著韓瑜贏全盤！
                            </p>
                          </div>
                          <hr className="float-none" />
                        </div>
                        <div className="crad-box">
                          <div className="card-img">
                            <img
                              src="/images/novice/gameplay/gameplay_slot_img26.jpg"
                              alt=""
                              className="img-responsive img-rounded"
                            />
                          </div>
                          <div className="card-text">
                            <h4>3D魔龍傳奇</h4>
                            <a
                              className="card-btn"
                              href="/gameplay/slot26"
                              target="_blank"
                            >
                              遊戲介紹
                            </a>
                            <hr className="float-none" />
                            <hr />
                            <p>
                              冰火雙龍的傳奇對決，
                              <br />
                              機率降落隕石變百搭，
                              <br />
                              隨機觸發彩金大寶箱！
                            </p>
                          </div>
                          <hr className="float-none" />
                        </div>
                        <div className="crad-box">
                          <div className="card-img">
                            <img
                              src="/images/novice/gameplay/gameplay_slot_img03.jpg"
                              alt=""
                              className="img-responsive img-rounded"
                            />
                          </div>
                          <div className="card-text">
                            <h4>九尾狐</h4>
                            <a
                              className="card-btn"
                              href="/gameplay/slot03"
                              target="_blank"
                            >
                              遊戲介紹
                            </a>
                            <hr className="float-none" />
                            <hr />
                            <p>
                              最美乘倍老虎機，
                              <br />
                              開運達摩放大百搭，
                              <br />
                              萬倍賠率最高開出上億彩金！
                            </p>
                          </div>
                          <hr className="float-none" />
                        </div>
                        <div className="crad-box">
                          <div className="card-img">
                            <img
                              src="/images/novice/gameplay/gameplay_slot_img28.jpg"
                              alt=""
                              className="img-responsive img-rounded"
                            />
                          </div>
                          <div className="card-text">
                            <h4>芭絲特</h4>
                            <a
                              className="card-btn"
                              href="/gameplay/slot28"
                              target="_blank"
                            >
                              遊戲介紹
                            </a>
                            <hr className="float-none" />
                            <hr />
                            <p>
                              埃及奇艷貓之女神，
                              <br />
                              豐收＆財富之眼，
                              <br />
                              爆破百搭與大量彩金！
                            </p>
                          </div>
                          <hr className="float-none" />
                        </div>
                        <div className="crad-box">
                          <div className="card-img">
                            <img
                              src="/images/novice/gameplay/gameplay_slot_img14.jpg"
                              alt=""
                              className="img-responsive img-rounded"
                            />
                          </div>
                          <div className="card-text">
                            <h4>恭喜發財</h4>
                            <a
                              className="card-btn"
                              href="/gameplay/slot14"
                              target="_blank"
                            >
                              遊戲介紹
                            </a>
                            <hr className="float-none" />
                            <hr />
                            <p>
                              招財進寶財神到，
                              <br />
                              隨機圖標變百搭，
                              <br />
                              三種免遊抽抽趣！
                            </p>
                          </div>
                          <hr className="float-none" />
                        </div>
                        <div className="crad-box">
                          <div className="card-img">
                            <img
                              src="/images/novice/gameplay/gameplay_slot_img27.jpg"
                              alt=""
                              className="img-responsive img-rounded"
                            />
                          </div>
                          <div className="card-text">
                            <h4>招財聚寶</h4>
                            <a
                              className="card-btn"
                              href="/gameplay/slot27"
                              target="_blank"
                            >
                              遊戲介紹
                            </a>
                            <hr className="float-none" />
                            <hr />
                            <p>
                              恭賀招財廣聚寶盆，
                              <br />
                              機率大獎彩金遊戲，
                              <br />
                              五福同壽高分免遊！
                            </p>
                          </div>
                          <hr className="float-none" />
                        </div>
                        <div className="crad-box">
                          <div className="card-img">
                            <img
                              src="/images/novice/gameplay/gameplay_slot_img30.jpg"
                              alt=""
                              className="img-responsive img-rounded"
                            />
                          </div>
                          <div className="card-text">
                            <h4>歡樂聖誕</h4>
                            <a
                              className="card-btn"
                              href="/gameplay/slot30"
                              target="_blank"
                            >
                              遊戲介紹
                            </a>
                            <hr className="float-none" />
                            <hr />
                            <p>
                              冬日歡樂聖誕派對，
                              <br />
                              禮物與鈴鐺絕妙配，
                              <br />
                              額外百搭大獲彩金！
                            </p>
                          </div>
                          <hr className="float-none" />
                        </div>
                        <div className="crad-box">
                          <div className="card-img">
                            <img
                              src="/images/novice/gameplay/gameplay_slot_img06.jpg"
                              alt=""
                              className="img-responsive img-rounded"
                            />
                          </div>
                          <div className="card-text">
                            <h4>西部牛仔</h4>
                            <a
                              className="card-btn"
                              href="/gameplay/slot06"
                              target="_blank"
                            >
                              遊戲介紹
                            </a>
                            <hr className="float-none" />
                            <hr />
                            <p>
                              西部槍戰風格，
                              <br />
                              牛仔事件百搭加免轉，
                              <br />
                              免遊多種百搭與牛仔集結！
                            </p>
                          </div>
                          <hr className="float-none" />
                        </div>
                        <div className="crad-box">
                          <div className="card-img">
                            <img
                              src="/images/novice/gameplay/gameplay_slot_img02.jpg"
                              alt=""
                              className="img-responsive img-rounded"
                            />
                          </div>
                          <div className="card-text">
                            <h4>夜上海</h4>
                            <a
                              className="card-btn"
                              href="/gameplay/slot02"
                              target="_blank"
                            >
                              遊戲介紹
                            </a>
                            <hr className="float-none" />
                            <hr />
                            <p>
                              絕美上海灘，
                              <br />
                              大型圖標佔滿屏，
                              <br />
                              連線贏分彩金！
                            </p>
                          </div>
                          <hr className="float-none" />
                        </div>
                        <div className="crad-box">
                          <div className="card-img">
                            <img
                              src="/images/novice/gameplay/gameplay_slot_img04.jpg"
                              alt=""
                              className="img-responsive img-rounded"
                            />
                          </div>
                          <div className="card-text">
                            <h4>頭家夜總會</h4>
                            <a
                              className="card-btn"
                              href="/gameplay/slot04"
                              target="_blank"
                            >
                              遊戲介紹
                            </a>
                            <hr className="float-none" />
                            <hr />
                            <p>
                              ５位美女陪你玩，
                              <br />
                              SHOW TIME事件，
                              <br />
                              為你集氣下一轉！
                            </p>
                          </div>
                          <hr className="float-none" />
                        </div>
                        <div className="crad-box">
                          <div className="card-img">
                            <img
                              src="/images/novice/gameplay/gameplay_slot_img07.jpg"
                              alt=""
                              className="img-responsive img-rounded"
                            />
                          </div>
                          <div className="card-text">
                            <h4>超級777</h4>
                            <a
                              className="card-btn"
                              href="/gameplay/slot07"
                              target="_blank"
                            >
                              遊戲介紹
                            </a>
                            <hr className="float-none" />
                            <hr />
                            <p>
                              集齊７個以上【777】，
                              <br />
                              全盤事件高彩獎，
                              <br />
                              幸運大獎就歸你！
                            </p>
                          </div>
                          <hr className="float-none" />
                        </div>
                        <div className="crad-box">
                          <div className="card-img">
                            <img
                              src="/images/novice/gameplay/gameplay_slot_img19.jpg"
                              alt=""
                              className="img-responsive img-rounded"
                            />
                          </div>
                          <div className="card-text">
                            <h4>經典777</h4>
                            <a
                              className="card-btn"
                              href="/gameplay/slot19"
                              target="_blank"
                            >
                              遊戲介紹
                            </a>
                            <hr className="float-none" />
                            <hr />
                            <p>
                              超寫實模擬經典重現，
                              <br />
                              多色７７７絢麗得分，
                              <br />
                              免遊每轉得分再加倍！
                            </p>
                          </div>
                          <hr className="float-none" />
                        </div>
                        <div className="crad-box">
                          <div className="card-img">
                            <img
                              src="/images/novice/gameplay/gameplay_slot_img22.jpg"
                              alt=""
                              className="img-responsive img-rounded"
                            />
                          </div>
                          <div className="card-text">
                            <h4>深海拉拉樂</h4>
                            <a
                              className="card-btn"
                              href="/gameplay/slot22"
                              target="_blank"
                            >
                              遊戲介紹
                            </a>
                            <hr className="float-none" />
                            <hr />
                            <p>
                              深海祕寶等你挖，
                              <br />
                              連消得分高百搭，
                              <br />
                              免遊十萬伏特強！
                            </p>
                          </div>
                          <hr className="float-none" />
                        </div>
                        <div className="crad-box">
                          <div className="card-img">
                            <img
                              src="/images/novice/gameplay/gameplay_slot_img20.jpg"
                              alt=""
                              className="img-responsive img-rounded"
                            />
                          </div>
                          <div className="card-text">
                            <h4>麻將拉拉樂</h4>
                            <a
                              className="card-btn"
                              href="/gameplay/slot20"
                              target="_blank"
                            >
                              遊戲介紹
                            </a>
                            <hr className="float-none" />
                            <hr />
                            <p>
                              趣味麻將連消得分，
                              <br />
                              搓牌事件盤面變牌，
                              <br />
                              黏性百搭超級好搭！
                            </p>
                          </div>
                          <hr className="float-none" />
                        </div>
                        <div className="crad-box">
                          <div className="card-img">
                            <img
                              src="/images/novice/gameplay/gameplay_slot_img09.jpg"
                              alt=""
                              className="img-responsive img-rounded"
                            />
                          </div>
                          <div className="card-text">
                            <h4>沙灘派對</h4>
                            <a
                              className="card-btn"
                              href="/gameplay/slot09"
                              target="_blank"
                            >
                              遊戲介紹
                            </a>
                            <hr className="float-none" />
                            <hr />
                            <p>
                              狂野的整輪百搭，
                              <br />
                              大量的高分美女，
                              <br />
                              贏分直上、乘倍連消！
                            </p>
                          </div>
                          <hr className="float-none" />
                        </div>
                        <div className="crad-box">
                          <div className="card-img">
                            <img
                              src="/images/novice/gameplay/gameplay_slot_img10.jpg"
                              alt=""
                              className="img-responsive img-rounded"
                            />
                          </div>
                          <div className="card-text">
                            <h4>埃及豔后</h4>
                            <a
                              className="card-btn"
                              href="/gameplay/slot10"
                              target="_blank"
                            >
                              遊戲介紹
                            </a>
                            <hr className="float-none" />
                            <hr />
                            <p>
                              神秘埃及風格，
                              <br />
                              得分消除低分標誌，
                              <br />
                              免遊聖甲蟲指定標誌得分加倍！
                            </p>
                          </div>
                          <hr className="float-none" />
                        </div>
                        <div className="crad-box">
                          <div className="card-img">
                            <img
                              src="/images/novice/gameplay/gameplay_slot_img13.jpg"
                              alt=""
                              className="img-responsive img-rounded"
                            />
                          </div>
                          <div className="card-text">
                            <h4>女僕咖啡廳</h4>
                            <a
                              className="card-btn"
                              href="/gameplay/slot13"
                              target="_blank"
                            >
                              遊戲介紹
                            </a>
                            <hr className="float-none" />
                            <hr />
                            <p>
                              超萌女僕等候主人來，
                              <br />
                              連消得分與鬆餅百搭，
                              <br />
                              元氣咖啡彩金超加倍！
                            </p>
                          </div>
                          <hr className="float-none" />
                        </div>
                        <div className="crad-box">
                          <div className="card-img">
                            <img
                              src="/images/novice/gameplay/gameplay_slot_img11.jpg"
                              alt=""
                              className="img-responsive img-rounded"
                            />
                          </div>
                          <div className="card-text">
                            <h4>呆萌鳥</h4>
                            <a
                              className="card-btn"
                              href="/gameplay/slot11"
                              target="_blank"
                            >
                              遊戲介紹
                            </a>
                            <hr className="float-none" />
                            <hr />
                            <p>
                              最狂百搭遊戲，
                              <br />
                              擴散百搭消除超容易，
                              <br />
                              免遊加倍百搭金幣拿不停！
                            </p>
                          </div>
                          <hr className="float-none" />
                        </div>
                        <div className="crad-box">
                          <div className="card-img">
                            <img
                              src="/images/novice/gameplay/gameplay_slot_img16.jpg"
                              alt=""
                              className="img-responsive img-rounded"
                            />
                          </div>
                          <div className="card-text">
                            <h4>開心動物園</h4>
                            <a
                              className="card-btn"
                              href="/gameplay/slot16"
                              target="_blank"
                            >
                              遊戲介紹
                            </a>
                            <hr className="float-none" />
                            <hr />
                            <p>
                              超Ｑ小動物無限賣萌，
                              <br />
                              巨大圖標連線不會斷，
                              <br />
                              免遊放大盤面機會多！
                            </p>
                          </div>
                          <hr className="float-none" />
                        </div>
                        <div className="crad-box">
                          <div className="card-img">
                            <img
                              src="/images/novice/gameplay/gameplay_slot_img21.jpg"
                              alt=""
                              className="img-responsive img-rounded"
                            />
                          </div>
                          <div className="card-text">
                            <h4>昆蟲樂園</h4>
                            <a
                              className="card-btn"
                              href="/gameplay/slot21"
                              target="_blank"
                            >
                              遊戲介紹
                            </a>
                            <hr className="float-none" />
                            <hr />
                            <p>
                              蟲蟲不危機、隨機變百搭，
                              <br />
                              三種免遊、三種趣味，
                              <br />
                              快來樂園得大彩！
                            </p>
                          </div>
                          <hr className="float-none" />
                        </div>
                        <div className="crad-box">
                          <div className="card-img">
                            <img
                              src="/images/novice/gameplay/gameplay_slot_img05.jpg"
                              alt=""
                              className="img-responsive img-rounded"
                            />
                          </div>
                          <div className="card-text">
                            <h4>糖果消消樂</h4>
                            <a
                              className="card-btn"
                              href="/gameplay/slot05"
                              target="_blank"
                            >
                              遊戲介紹
                            </a>
                            <hr className="float-none" />
                            <hr />
                            <p>
                              能量糖果釋放combo技，
                              <br />
                              連開爆消無上限，
                              <br />
                              贏分加倍再加倍！
                            </p>
                          </div>
                          <hr className="float-none" />
                        </div>
                        <div className="crad-box">
                          <div className="card-img">
                            <img
                              src="/images/novice/gameplay/gameplay_slot_img29.jpg"
                              alt=""
                              className="img-responsive img-rounded"
                            />
                          </div>
                          <div className="card-text">
                            <h4>魔法消消樂</h4>
                            <a
                              className="card-btn"
                              href="/gameplay/slot29"
                              target="_blank"
                            >
                              遊戲介紹
                            </a>
                            <hr className="float-none" />
                            <hr />
                            <p>
                              迷幻小魔女法力無邊，
                              <br />
                              連消搭配全盤面變化，
                              <br />
                              四種魔法助你得彩金！
                            </p>
                          </div>
                          <hr className="float-none" />
                        </div>
                        <div className="crad-box">
                          <div className="card-img">
                            <img
                              src="/images/novice/gameplay/gameplay_slot_img08.jpg"
                              alt=""
                              className="img-responsive img-rounded"
                            />
                          </div>
                          <div className="card-text">
                            <h4>舞姬貂蟬</h4>
                            <a
                              className="card-btn"
                              href="/gameplay/slot08"
                              target="_blank"
                            >
                              遊戲介紹
                            </a>
                            <hr className="float-none" />
                            <hr />
                            <p>
                              貂蟬舞出多百搭，
                              <br />
                              全盤事件高彩獎，
                              <br />
                              免遊位移百搭好贏分！
                            </p>
                          </div>
                          <hr className="float-none" />
                        </div>
                        <div className="crad-box">
                          <div className="card-img">
                            <img
                              src="/images/novice/gameplay/gameplay_slot_img12.jpg"
                              alt=""
                              className="img-responsive img-rounded"
                            />
                          </div>
                          <div className="card-text">
                            <h4>三國之義薄雲天</h4>
                            <a
                              className="card-btn"
                              href="/gameplay/slot12"
                              target="_blank"
                            >
                              遊戲介紹
                            </a>
                            <hr className="float-none" />
                            <hr />
                            <p>
                              最經典傳奇三國朝代，
                              <br />
                              累積集氣發動大絕招，
                              <br />
                              斬殺敵將取加碼獎金！
                            </p>
                          </div>
                          <hr className="float-none" />
                        </div>
                        <div className="crad-box">
                          <div className="card-img">
                            <img
                              src="/images/novice/gameplay/gameplay_slot_img15.jpg"
                              alt=""
                              className="img-responsive img-rounded"
                            />
                          </div>
                          <div className="card-text">
                            <h4>甜心護士</h4>
                            <a
                              className="card-btn"
                              href="/gameplay/slot15"
                              target="_blank"
                            >
                              遊戲介紹
                            </a>
                            <hr className="float-none" />
                            <hr />
                            <p>
                              美麗甜心護士照顧你，
                              <br />
                              護士事件機會出百搭，
                              <br />
                              免遊大膠囊爆倍彩金！
                            </p>
                          </div>
                          <hr className="float-none" />
                        </div>
                        <div className="crad-box">
                          <div className="card-img">
                            <img
                              src="/images/novice/gameplay/gameplay_slot_img23.jpg"
                              alt=""
                              className="img-responsive img-rounded"
                            />
                          </div>
                          <div className="card-text">
                            <h4>神燈精靈</h4>
                            <a
                              className="card-btn"
                              href="/gameplay/slot23"
                              target="_blank"
                            >
                              遊戲介紹
                            </a>
                            <hr className="float-none" />
                            <hr />
                            <p>
                              奇幻阿拉丁神燈故事，
                              <br />
                              精靈事件加飛毯事件，
                              <br />
                              免遊大寶石爆倍彩金！
                            </p>
                          </div>
                          <hr className="float-none" />
                        </div>
                        <div className="crad-box">
                          <div className="card-img">
                            <img
                              src="/images/novice/gameplay/gameplay_slot_img17.jpg"
                              alt=""
                              className="img-responsive img-rounded"
                            />
                          </div>
                          <div className="card-text">
                            <h4>嘻哈時代</h4>
                            <a
                              className="card-btn"
                              href="/gameplay/slot17"
                              target="_blank"
                            >
                              遊戲介紹
                            </a>
                            <hr className="float-none" />
                            <hr />
                            <p>
                              嘻哈嗨翻天、HIPPOP不停歇，
                              <br />
                              隨機事件經常有，
                              <br />
                              成為大頭家不是夢！
                            </p>
                          </div>
                          <hr className="float-none" />
                        </div>
                        <div className="crad-box">
                          <div className="card-img">
                            <img
                              src="/images/novice/gameplay/gameplay_slot_img18.jpg"
                              alt=""
                              className="img-responsive img-rounded"
                            />
                          </div>
                          <div className="card-text">
                            <h4>鋼鐵超人</h4>
                            <a
                              className="card-btn"
                              href="/gameplay/slot18"
                              target="_blank"
                            >
                              遊戲介紹
                            </a>
                            <hr className="float-none" />
                            <hr />
                            <p>
                              鋼鐵機械風格，
                              <br />
                              集滿能量召喚免遊巨型機器人，
                              <br />
                              趣味特殊黏性百搭得彩金！
                            </p>
                          </div>
                          <hr className="float-none" />
                        </div>
                        <div className="crad-box">
                          <div className="card-img">
                            <img
                              src="/images/novice/gameplay/gameplay_slot_img24.jpg"
                              alt=""
                              className="img-responsive img-rounded"
                            />
                          </div>
                          <div className="card-text">
                            <h4>巨龍家族</h4>
                            <a
                              className="card-btn"
                              href="/gameplay/slot24"
                              target="_blank"
                            >
                              遊戲介紹
                            </a>
                            <hr className="float-none" />
                            <hr />
                            <p>
                              中世紀魔幻巨龍藏寶，
                              <br />
                              連消得分加龍蛋事件，
                              <br />
                              免遊巨龍火焰變百搭！
                            </p>
                          </div>
                          <hr className="float-none" />
                        </div>
                        <div className="crad-box">
                          <div className="card-img">
                            <img
                              src="/images/novice/gameplay/gameplay_slot_img25.jpg"
                              alt=""
                              className="img-responsive img-rounded"
                            />
                          </div>
                          <div className="card-text">
                            <h4>海盜傳奇</h4>
                            <a
                              className="card-btn"
                              href="/gameplay/slot25"
                              target="_blank"
                            >
                              遊戲介紹
                            </a>
                            <hr className="float-none" />
                            <hr />
                            <p>
                              勇闖加勒比海域，
                              <br />
                              砲擊最後排再轉，
                              <br />
                              三種免遊衝彩金！
                            </p>
                          </div>
                          <hr className="float-none" />
                        </div>
                        <hr className="float-none" />
                      </div>
                      <div id="sub-tab-2" className="sub-tab-content">
                        <h2 className="text-center">牌桌遊戲</h2>
                        <hr />
                        <div className="crad-box">
                          <div className="card-img">
                            <img
                              src="/images/novice/gameplay/gameplay_gamble_img01.jpg"
                              alt=""
                              className="img-responsive img-rounded"
                            />
                          </div>
                          <div className="card-text">
                            <h4>百人妞妞</h4>
                            <a
                              className="card-btn"
                              href="/gameplay/gamble01"
                              target="_blank"
                            >
                              遊戲介紹
                            </a>
                            <hr className="float-none" />
                            <hr />
                            <p>
                              自由上莊輸贏結果全憑手氣，
                              <br />
                              區塊鏈驗證 100% 公正透明，
                              <br />
                              網路隨時翻查無人操控竄改！
                            </p>
                          </div>
                          <hr className="float-none" />
                        </div>
                        <div className="crad-box">
                          <div className="card-img">
                            <img
                              src="/images/novice/gameplay/gameplay_gamble_img03.jpg"
                              alt=""
                              className="img-responsive img-rounded"
                            />
                          </div>
                          <div className="card-text">
                            <h4>搶莊妞妞</h4>
                            <a
                              className="card-btn"
                              href="/gameplay/gamble03"
                              target="_blank"
                            >
                              遊戲介紹
                            </a>
                            <hr className="float-none" />
                            <hr />
                            <p>
                              判牌倍數搶莊，
                              <br />
                              獨創JP百家獲彩金，
                              <br />
                              多桌下注一次滿足！
                            </p>
                          </div>
                          <hr className="float-none" />
                        </div>
                        <div className="crad-box">
                          <div className="card-img">
                            <img
                              src="/images/novice/gameplay/gameplay_gamble_img04.jpg"
                              alt=""
                              className="img-responsive img-rounded"
                            />
                          </div>
                          <div className="card-text">
                            <h4>百人射龍門</h4>
                            <a
                              className="card-btn"
                              href="/gameplay/gamble04"
                              target="_blank"
                            >
                              遊戲介紹
                            </a>
                            <hr className="float-none" />
                            <hr />
                            <p>
                              經典足球射龍門簡單又好玩，
                              <br />
                              區塊鏈驗證 100% 公正透明，
                              <br />
                              網路隨時翻查無人操控竄改！
                            </p>
                          </div>
                          <hr className="float-none" />
                        </div>
                        <div className="crad-box">
                          <div className="card-img">
                            <img
                              src="/images/novice/gameplay/gameplay_gamble_img06.jpg"
                              alt=""
                              className="img-responsive img-rounded"
                            />
                          </div>
                          <div className="card-text">
                            <h4>百人推筒子</h4>
                            <a
                              className="card-btn"
                              href="/gameplay/gamble06"
                              target="_blank"
                            >
                              遊戲介紹
                            </a>
                            <hr className="float-none" />
                            <hr />
                            <p>
                              趣味麻將咪牌比大小真EASY，
                              <br />
                              區塊鏈驗證 100% 公正透明，
                              <br />
                              網路隨時翻查無人操控竄改！
                            </p>
                          </div>
                          <hr className="float-none" />
                        </div>
                        <div className="crad-box">
                          <div className="card-img">
                            <img
                              src="/images/novice/gameplay/gameplay_gamble_img02.jpg"
                              alt=""
                              className="img-responsive img-rounded"
                            />
                          </div>
                          <div className="card-text">
                            <h4>視訊百家樂</h4>
                            <a
                              className="card-btn"
                              href="/gameplay/gamble02"
                              target="_blank"
                            >
                              遊戲介紹
                            </a>
                            <hr className="float-none" />
                            <hr />
                            <p>
                              真人視訊美女荷官，
                              <br />
                              獨創JP百家獲彩金，
                              <br />
                              多桌下注一次滿足！
                            </p>
                          </div>
                          <hr className="float-none" />
                        </div>
                        <div className="crad-box">
                          <div className="card-img">
                            <img
                              src="/images/novice/gameplay/gameplay_gamble_img05.jpg"
                              alt=""
                              className="img-responsive img-rounded"
                            />
                          </div>
                          <div className="card-text">
                            <h4>3D高倍21點</h4>
                            <a
                              className="card-btn"
                              href="/gameplay/gamble05"
                              target="_blank"
                            >
                              遊戲介紹
                            </a>
                            <hr className="float-none" />
                            <hr />
                            <p>
                              擬真 3D 撲克牌桌畫面 ，<br />
                              黃金 21 點高倍彩金，
                              <br />
                              成為決勝 BlackJack 王！
                            </p>
                          </div>
                          <hr className="float-none" />
                        </div>
                        <div className="crad-box">
                          <div className="card-img">
                            <img
                              src="/images/novice/gameplay/gameplay_gamble_img07.jpg"
                              alt=""
                              className="img-responsive img-rounded"
                            />
                          </div>
                          <div className="card-text">
                            <h4>發財麻將</h4>
                            <a
                              className="card-btn"
                              href="/gameplay/gamble07"
                              target="_blank"
                            >
                              遊戲介紹
                            </a>
                            <hr className="float-none" />
                            <hr />
                            <p>
                              道地台灣麻將最好玩最對味，
                              <br />
                              區塊鏈驗證 100% 公正透明，
                              <br />
                              網路隨時翻查無人操控竄改！
                            </p>
                          </div>
                          <hr className="float-none" />
                        </div>
                        <hr className="float-none" />
                      </div>
                      <div id="sub-tab-3" className="sub-tab-content">
                        <h2 className="text-center">其他類型</h2>
                        <hr />
                        <div className="crad-box">
                          <div className="card-img">
                            <img
                              src="/images/novice/gameplay/gameplay_other_img01.jpg"
                              alt=""
                              className="img-responsive img-rounded"
                            />
                          </div>
                          <div className="card-text">
                            <h4>深海魔龍傳</h4>
                            <a
                              className="card-btn"
                              href="gameplay/novice_gameplay_other01"
                              target="_blank"
                            >
                              遊戲介紹
                            </a>
                            <hr className="float-none" />
                            <hr />
                            <p>
                              火魔龍 VS 章魚王雙BOSS，
                              <br />
                              多種超高攻擊能力特殊魚種，
                              <br />
                              金幣籌碼寶箱高爆大量彩金！
                            </p>
                          </div>
                          <hr className="float-none" />
                        </div>
                        <div className="crad-box">
                          <div className="card-img">
                            <img
                              src="/images/novice/gameplay/gameplay_other_img02.jpg"
                              alt=""
                              className="img-responsive img-rounded"
                            />
                          </div>
                          <div className="card-text">
                            <h4>3D深海總動員</h4>
                            <a
                              className="card-btn"
                              href="gameplay/novice_gameplay_other02"
                              target="_blank"
                            >
                              遊戲介紹
                            </a>
                            <hr className="float-none" />
                            <hr />
                            <p>
                              深海大魷皇BOSS爆屏出現，
                              <br />
                              多種3D魚種玲瑯滿目超逗趣，
                              <br />
                              特殊效果魚種爆出大量彩金！
                            </p>
                          </div>
                          <hr className="float-none" />
                        </div>
                        <div className="crad-box">
                          <div className="card-img">
                            <img
                              src="/images/novice/gameplay/gameplay_other_img03.jpg"
                              alt=""
                              className="img-responsive img-rounded"
                            />
                          </div>
                          <div className="card-text">
                            <h4>7PK</h4>
                            <a
                              className="card-btn"
                              href="gameplay/novice_gameplay_other03"
                              target="_blank"
                            >
                              遊戲介紹
                            </a>
                            <hr className="float-none" />
                            <hr />
                            <p>
                              判牌真功夫加倍下注得大獎，
                              <br />
                              區塊鏈驗證 100% 公正透明，
                              <br />
                              網路隨時翻查無人操控竄改！
                            </p>
                          </div>
                          <hr className="float-none" />
                        </div>
                        <div className="crad-box">
                          <div className="card-img">
                            <img
                              src="/images/novice/gameplay/gameplay_other_img04.jpg"
                              alt=""
                              className="img-responsive img-rounded"
                            />
                          </div>
                          <div className="card-text">
                            <h4>小瑪莉</h4>
                            <a
                              className="card-btn"
                              href="gameplay/novice_gameplay_other04"
                              target="_blank"
                            >
                              遊戲介紹
                            </a>
                            <hr className="float-none" />
                            <hr />
                            <p>
                              骨灰級經典轉盤跳燈麻仔台，
                              <br />
                              大BAR小BAR＆ONCEMORE，
                              <br />
                              送燈火車燈大滿貫敢就拚大小！
                            </p>
                          </div>
                          <hr className="float-none" />
                        </div>
                        <div className="crad-box">
                          <div className="card-img">
                            <img
                              src="/images/novice/gameplay/gameplay_other_img05.jpg"
                              alt=""
                              className="img-responsive img-rounded"
                            />
                          </div>
                          <div className="card-text">
                            <h4>幸運大輪盤</h4>
                            <a
                              className="card-btn"
                              href="gameplay/novice_gameplay_other05"
                              target="_blank"
                            >
                              遊戲介紹
                            </a>
                            <hr className="float-none" />
                            <hr />
                            <p>
                              轉吧轉吧五彩霓虹幸運盤，
                              <br />
                              自由下注鍾愛顏色拚彩格，
                              <br />
                              三連彩格幸運超高爆倍率！
                            </p>
                          </div>
                          <hr className="float-none" />
                        </div>
                        <div className="crad-box">
                          <div className="card-img">
                            <img
                              src="/images/novice/gameplay/gameplay_other_img06.jpg"
                              alt=""
                              className="img-responsive img-rounded"
                            />
                          </div>
                          <div className="card-text">
                            <h4>刮刮樂</h4>
                            <a
                              className="card-btn"
                              href="gameplay/novice_gameplay_other06"
                              target="_blank"
                            >
                              遊戲介紹
                            </a>
                            <hr className="float-none" />
                            <hr />
                            <p>-</p>
                          </div>
                          <hr className="float-none" />
                        </div>
                        <div className="crad-box">
                          <div className="card-img">
                            <img
                              src="/images/novice/gameplay/gameplay_other_img07.jpg"
                              alt=""
                              className="img-responsive img-rounded"
                            />
                          </div>
                          <div className="card-text">
                            <h4>彈珠PK10</h4>
                            <a
                              className="card-btn"
                              href="gameplay/novice_gameplay_other07"
                              target="_blank"
                            >
                              遊戲介紹
                            </a>
                            <hr className="float-none" />
                            <hr />
                            <p>
                              極速炫煥華麗彈珠拚名次，
                              <br />
                              全憑喜好多種下注得彩金，
                              <br />
                              最佳預測高手高手高高手！
                            </p>
                          </div>
                          <hr className="float-none" />
                        </div>
                        <div className="crad-box">
                          <div className="card-img">
                            <img
                              src="/images/novice/gameplay/gameplay_other_img08.jpg"
                              alt=""
                              className="img-responsive img-rounded"
                            />
                          </div>
                          <div className="card-text">
                            <h4>賭場</h4>
                            <a
                              className="card-btn"
                              href="gameplay/novice_gameplay_other08"
                              target="_blank"
                            >
                              遊戲介紹
                            </a>
                            <hr className="float-none" />
                            <hr />
                            <p>
                              想當大頭家就在這裡，
                              <br />
                              經營式模擬賭城玩法，
                              <br />
                              升級設備享受日營收！
                            </p>
                          </div>
                          <hr className="float-none" />
                        </div>
                        <hr className="float-none" />
                      </div>
                    </div>
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

export default IntroGamePlayPage
