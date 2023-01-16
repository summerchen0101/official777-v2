import PageLayout from '@/components/PageLayout'

function EquipmentPage() {
  return (
    <PageLayout>
      <div className="content2">
        <div className="content-title-box">
          <img
            src="/images/service/title_equipment.png"
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
                    <p className="text-center">
                      OS系統：10以上
                      <br />
                      Android系統： 8.0以上
                      <br />
                      CPU：雙核以上
                      <br />
                      記憶體：2G以上
                      <br />
                      內存空間：1G以上
                    </p>
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

export default EquipmentPage
