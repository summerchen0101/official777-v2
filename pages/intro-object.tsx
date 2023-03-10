import LogoBox from '@/components/LogoBox'
import PageLayout from '@/components/PageLayout'
import { useEffect } from 'react'

function IntroObjectPage() {
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
            src="/images/novice/title_obj.png"
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
                        <a href="#sub-tab-1">使用流程</a>
                      </li>
                      <li>
                        <a href="#sub-tab-2">免費遊戲券 </a>
                      </li>
                      <li>
                        <a href="#sub-tab-3">免費遊戲券碎片</a>
                      </li>
                      <li>
                        <a href="#sub-tab-4">金幣券</a>
                      </li>
                      <li>
                        <a href="#sub-tab-5">金幣券碎片 </a>
                      </li>
                      <li>
                        <a href="#sub-tab-6">角色碎片</a>
                      </li>
                    </ul>
                    <hr className="float-none" />
                    <hr />
                    <div className="sub_content_all">
                      <div id="sub-tab-1" className="sub-tab-content">
                        <h2 className="text-center">使用流程</h2>
                        <hr />
                        <h4>步驟1. 遊戲大廳中，點擊「道具」</h4>
                        <img
                          src="/images/novice/obj/obj_img01.jpg"
                          alt=""
                          className="img-responsive center-block"
                        />
                        <h4>
                          步驟2. 選擇要使用的道具後，點擊「使用道具」即可使用
                        </h4>
                        <img
                          src="/images/novice/obj/obj_img02.jpg"
                          alt=""
                          className="img-responsive center-block"
                        />
                        <p className="text-center">
                          ※所有道具(含碎片)皆有使用期限。
                        </p>
                        <hr className="float-none" />
                      </div>
                      <div id="sub-tab-2" className="sub-tab-content">
                        <h2 className="text-center">免費遊戲券</h2>
                        <hr />
                        <p>
                          共9種免費遊戲券，等級共分為「獎勵卡」、「威力卡、「超級卡」三個等級，又各有一星、三星、五星
                        </p>
                        <div className="crad-box">
                          <div className="card-img">
                            <img
                              src="/images/novice/obj/obj_img_lv1_1.png"
                              alt=""
                              className="img-responsive"
                            />
                          </div>
                          <div className="card-text">
                            <h4>一星獎勵卡</h4>
                            <hr className="float-none" />
                            <hr />
                            <p>可獲得１次押注100的老虎機免費遊戲</p>
                          </div>
                          <hr className="float-none" />
                        </div>
                        <div className="crad-box">
                          <div className="card-img">
                            <img
                              src="/images/novice/obj/obj_img_lv1_3.png"
                              alt=""
                              className="img-responsive"
                            />
                          </div>
                          <div className="card-text">
                            <h4>三星獎勵卡</h4>
                            <hr className="float-none" />
                            <hr />
                            <p>可獲得１次押注1,000的老虎機免費遊戲</p>
                          </div>
                          <hr className="float-none" />
                        </div>
                        <div className="crad-box">
                          <div className="card-img">
                            <img
                              src="/images/novice/obj/obj_img_lv1_5.png"
                              alt=""
                              className="img-responsive"
                            />
                          </div>
                          <div className="card-text">
                            <h4>五星獎勵卡</h4>
                            <hr className="float-none" />
                            <hr />
                            <p>可獲得１次押注10,000的老虎機免費遊戲</p>
                          </div>
                          <hr className="float-none" />
                        </div>
                        <div className="crad-box">
                          <div className="card-img">
                            <img
                              src="/images/novice/obj/obj_img_lv2_1.png"
                              alt=""
                              className="img-responsive"
                            />
                          </div>
                          <div className="card-text">
                            <h4>一星威力卡</h4>
                            <hr className="float-none" />
                            <hr />
                            <p>
                              可獲得１次押注100的老虎機<span>高機率大獎</span>
                              免費遊戲
                            </p>
                          </div>
                          <hr className="float-none" />
                        </div>
                        <div className="crad-box">
                          <div className="card-img">
                            <img
                              src="/images/novice/obj/obj_img_lv2_3.png"
                              alt=""
                              className="img-responsive"
                            />
                          </div>
                          <div className="card-text">
                            <h4>三星威力卡</h4>
                            <hr className="float-none" />
                            <hr />
                            <p>
                              可獲得１次押注1,000的老虎機<span>高機率大獎</span>
                              免費遊戲
                            </p>
                          </div>
                          <hr className="float-none" />
                        </div>
                        <div className="crad-box">
                          <div className="card-img">
                            <img
                              src="/images/novice/obj/obj_img_lv2_5.png"
                              alt=""
                              className="img-responsive"
                            />
                          </div>
                          <div className="card-text">
                            <h4>五星威力卡</h4>
                            <hr className="float-none" />
                            <hr />
                            <p>
                              可獲得１次押注10,000的老虎機
                              <span>高機率大獎</span>
                              免費遊戲
                            </p>
                          </div>
                          <hr className="float-none" />
                        </div>
                        <div className="crad-box">
                          <div className="card-img">
                            <img
                              src="/images/novice/obj/obj_img_lv3_1.png"
                              alt=""
                              className="img-responsive"
                            />
                          </div>
                          <div className="card-text">
                            <h4>一星超級卡</h4>
                            <hr className="float-none" />
                            <hr />
                            <p>
                              可獲得１次押注100的老虎機<span>超高機率大獎</span>
                              免費遊戲
                            </p>
                          </div>
                          <hr className="float-none" />
                        </div>
                        <div className="crad-box">
                          <div className="card-img">
                            <img
                              src="/images/novice/obj/obj_img_lv3_3.png"
                              alt=""
                              className="img-responsive"
                            />
                          </div>
                          <div className="card-text">
                            <h4>三星超級卡</h4>
                            <hr className="float-none" />
                            <hr />
                            <p>
                              可獲得１次押注1,000的老虎機
                              <span>超高機率大獎</span>
                              免費遊戲
                            </p>
                          </div>
                          <hr className="float-none" />
                        </div>
                        <div className="crad-box">
                          <div className="card-img">
                            <img
                              src="/images/novice/obj/obj_img_lv3_5.png"
                              alt=""
                              className="img-responsive"
                            />
                          </div>
                          <div className="card-text">
                            <h4>五星超級卡</h4>
                            <hr className="float-none" />
                            <hr />
                            <p>
                              可獲得１次押注10,000的老虎機
                              <span>超高機率大獎</span>
                              免費遊戲
                            </p>
                          </div>
                          <hr className="float-none" />
                        </div>
                        <hr className="float-none" />
                      </div>
                      <div id="sub-tab-3" className="sub-tab-content">
                        <h2 className="text-center">免費遊戲券碎片</h2>
                        <hr />
                        <p>
                          集滿１０張相同的免費遊戲券碎片，可視為１張免費遊戲券使用。
                          <br />
                          共９種免費遊戲券，等級共分為「獎勵卡」、「威力卡、「超級卡」三個等級，又各有一星、三星、五星
                        </p>
                        <div className="crad-box">
                          <div className="card-img">
                            <img
                              src="/images/novice/obj/FG_LV1_1_puzzle.png"
                              alt=""
                              className="img-responsive"
                            />
                          </div>
                          <div className="card-text">
                            <h4>一星獎勵卡碎片</h4>
                            <hr className="float-none" />
                            <hr />
                            <p>
                              集滿１０張碎片，可獲得1次押注100的老虎機免費遊戲
                            </p>
                          </div>
                          <hr className="float-none" />
                        </div>
                        <div className="crad-box">
                          <div className="card-img">
                            <img
                              src="/images/novice/obj/FG_LV1_3_puzzle.png"
                              alt=""
                              className="img-responsive"
                            />
                          </div>
                          <div className="card-text">
                            <h4>三星獎勵卡碎片</h4>
                            <hr className="float-none" />
                            <hr />
                            <p>
                              集滿１０張碎片，可獲得1次押注1,000的老虎機免費遊戲
                            </p>
                          </div>
                          <hr className="float-none" />
                        </div>
                        <div className="crad-box">
                          <div className="card-img">
                            <img
                              src="/images/novice/obj/FG_LV1_5_puzzle.png"
                              alt=""
                              className="img-responsive"
                            />
                          </div>
                          <div className="card-text">
                            <h4>五星獎勵卡碎片</h4>
                            <hr className="float-none" />
                            <hr />
                            <p>
                              集滿１０張碎片，可獲得1次押注10,000的老虎機免費遊戲
                            </p>
                          </div>
                          <hr className="float-none" />
                        </div>
                        <div className="crad-box">
                          <div className="card-img">
                            <img
                              src="/images/novice/obj/FG_LV2_1_puzzle.png"
                              alt=""
                              className="img-responsive"
                            />
                          </div>
                          <div className="card-text">
                            <h4>一星威力卡碎片</h4>
                            <hr className="float-none" />
                            <hr />
                            <p>
                              集滿１０張碎片，可獲得1次押注100的老虎機高機率大獎免費遊戲
                            </p>
                          </div>
                          <hr className="float-none" />
                        </div>
                        <div className="crad-box">
                          <div className="card-img">
                            <img
                              src="/images/novice/obj/FG_LV2_3_puzzle.png"
                              alt=""
                              className="img-responsive"
                            />
                          </div>
                          <div className="card-text">
                            <h4>三星威力卡碎片</h4>
                            <hr className="float-none" />
                            <hr />
                            <p>
                              集滿１０張碎片，可獲得1次押注1,000的老虎機
                              <span>高機率大獎</span>免費遊戲
                            </p>
                          </div>
                          <hr className="float-none" />
                        </div>
                        <div className="crad-box">
                          <div className="card-img">
                            <img
                              src="/images/novice/obj/FG_LV2_5_puzzle.png"
                              alt=""
                              className="img-responsive"
                            />
                          </div>
                          <div className="card-text">
                            <h4>五星威力卡碎片</h4>
                            <hr className="float-none" />
                            <hr />
                            <p>
                              集滿１０張碎片，可獲得1次押注10,000的老虎機
                              <span>高機率大獎</span>免費遊戲
                            </p>
                          </div>
                          <hr className="float-none" />
                        </div>
                        <div className="crad-box">
                          <div className="card-img">
                            <img
                              src="/images/novice/obj/FG_LV3_1_puzzle.png"
                              alt=""
                              className="img-responsive"
                            />
                          </div>
                          <div className="card-text">
                            <h4>一星超級卡碎片</h4>
                            <hr className="float-none" />
                            <hr />
                            <p>
                              集滿１０張碎片，可獲得1次押注100的老虎機
                              <span>超高機率大獎</span>免費遊戲
                            </p>
                          </div>
                          <hr className="float-none" />
                        </div>
                        <div className="crad-box">
                          <div className="card-img">
                            <img
                              src="/images/novice/obj/FG_LV3_3_puzzle.png"
                              alt=""
                              className="img-responsive"
                            />
                          </div>
                          <div className="card-text">
                            <h4>三星超級卡碎片</h4>
                            <hr className="float-none" />
                            <hr />
                            <p>
                              集滿１０張碎片，可獲得1次押注1,000的老虎機
                              <span>超高機率大獎</span>免費遊戲
                            </p>
                          </div>
                          <hr className="float-none" />
                        </div>
                        <div className="crad-box">
                          <div className="card-img">
                            <img
                              src="/images/novice/obj/FG_LV3_5_puzzle.png"
                              alt=""
                              className="img-responsive"
                            />
                          </div>
                          <div className="card-text">
                            <h4>五星超級卡碎片</h4>
                            <hr className="float-none" />
                            <hr />
                            <p>
                              集滿１０張碎片，可獲得1次押注10,000的老虎機
                              <span>超高機率大獎</span>免費遊戲
                            </p>
                          </div>
                          <hr className="float-none" />
                        </div>
                        <hr className="float-none" />
                      </div>
                      <div id="sub-tab-4" className="sub-tab-content">
                        <h2 className="text-center">金幣券</h2>
                        <hr />
                        <p className="text-center">
                          點擊【使用道具】後，可兌換指定金額的金幣
                        </p>
                        <div className="crad-box">
                          <div className="card-img">
                            <img
                              src="/images/novice/obj/obj_gold.png"
                              alt=""
                              className="img-responsive"
                            />
                          </div>
                          <div className="card-text">
                            <h2>金幣券道具卡</h2>
                            <hr className="float-none" />
                            <hr />
                            <p>
                              不同金幣數量的金幣券，使用後即可獲得對應金幣數量，請於效期內盡速兌換。
                            </p>
                          </div>
                          <hr className="float-none" />
                        </div>
                        <hr className="float-none" />
                      </div>
                      <div id="sub-tab-5" className="sub-tab-content">
                        <h2 className="text-center">金幣券碎片</h2>
                        <hr />
                        <p className="text-center">
                          集滿10張金幣券碎片，可兌換指定金額的金幣
                        </p>
                        <div className="crad-box">
                          <div className="card-img">
                            <img
                              src="/images/novice/obj/obj_gold_puzzle.png"
                              alt=""
                              className="img-responsive"
                            />
                          </div>
                          <div className="card-text">
                            <h4>金幣券碎片</h4>
                            <hr className="float-none" />
                            <hr />
                            <p>
                              不同金幣數量的金幣券碎片，集滿１０張即可兌換一張金幣券道具卡。
                            </p>
                          </div>
                          <hr className="float-none" />
                        </div>
                        <hr className="float-none" />
                      </div>
                      <div id="sub-tab-6" className="sub-tab-content">
                        <h2 className="text-center">角色碎片</h2>
                        <p className="text-center">
                          集滿10張指定角色碎片，可免費兌換該角色及其角色頭像。
                        </p>
                        <div className="crad-box-2">
                          <img
                            src="/images/novice/obj/item_AthenaCowboy_Frag.png"
                            alt=""
                            className="img-responsive center-block"
                          />
                          <p className="text-center">荒野牛仔</p>
                        </div>
                        <div className="crad-box-2">
                          <img
                            src="/images/novice/obj/item_DiaoChan_Frag.png"
                            alt=""
                            className="img-responsive center-block"
                          />
                          <p className="text-center">舞姬貂蟬</p>
                        </div>
                        <div className="crad-box-2">
                          <img
                            src="/images/novice/obj/item_Jasmine_Frag.png"
                            alt=""
                            className="img-responsive center-block"
                          />
                          <p className="text-center">茉莉公主</p>
                        </div>
                        <div className="crad-box-2">
                          <img
                            src="/images/novice/obj/item_HanYuCheongsam_Frag.png"
                            alt=""
                            className="img-responsive center-block"
                          />
                          <p className="text-center">韓瑜</p>
                        </div>
                        <div className="crad-box-2">
                          <img
                            src="/images/novice/obj/item_DongZhuo_Frag.png"
                            alt=""
                            className="img-responsive center-block"
                          />
                          <p className="text-center">暴虐董卓</p>
                        </div>
                        <div className="crad-box-2">
                          <img
                            src="/images/novice/obj/item_LuBu_Frag.png"
                            alt=""
                            className="img-responsive center-block"
                          />
                          <p className="text-center">呂布</p>
                        </div>
                        <div className="crad-box-2">
                          <img
                            src="/images/novice/obj/item_GuanYu_Frag.png"
                            alt=""
                            className="img-responsive center-block"
                          />
                          <p className="text-center">武聖關羽</p>
                        </div>
                        <div className="crad-box-2">
                          <img
                            src="/images/novice/obj/item_Bastet_Frag.png"
                            alt=""
                            className="img-responsive center-block"
                          />
                          <p className="text-center">貓女芭絲特</p>
                        </div>
                        <div className="crad-box-2">
                          <img
                            src="/images/novice/obj/item_DiaoChanNurse_Frag.png"
                            alt=""
                            className="img-responsive center-block"
                          />
                          <p className="text-center">甜心護士</p>
                        </div>
                        <div className="crad-box-2">
                          <img
                            src="/images/novice/obj/item_Cleopatra_Frag.png"
                            alt=""
                            className="img-responsive center-block"
                          />
                          <p className="text-center">克麗奧佩脫拉</p>
                        </div>
                        <div className="crad-box-2">
                          <img
                            src="/images/novice/obj/item_ShihTzuSorceress_Frag.png"
                            alt=""
                            className="img-responsive center-block"
                          />
                          <p className="text-center">小魔女</p>
                        </div>
                        <div className="crad-box-2">
                          <img
                            src="/images/novice/obj/item_Aladdin_Frag.png"
                            alt=""
                            className="img-responsive center-block"
                          />
                          <p className="text-center">阿拉丁</p>
                        </div>
                        <div className="crad-box-2">
                          <img
                            src="/images/novice/obj/item_NanaGirl_Frag.png"
                            alt=""
                            className="img-responsive center-block"
                          />
                          <p className="text-center">娜小編</p>
                        </div>
                        <div className="crad-box-2">
                          <img
                            src="/images/novice/obj/item_DijiFox_Frag.png"
                            alt=""
                            className="img-responsive center-block"
                          />
                          <p className="text-center">九尾狐</p>
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

export default IntroObjectPage
