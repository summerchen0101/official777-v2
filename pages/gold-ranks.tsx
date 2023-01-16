import LogoBox from '@/components/LogoBox'
import PageLayout from '@/components/PageLayout'
import Pagination from '@/components/Pagination'
import { RankType } from '@/lib/enums'
import useRankList from '@/services/useRankList'
import { toCurrency } from '@/utils'
import { useState } from 'react'

function GoldRanksPage() {
  const [page, setPage] = useState(1)
  const { list, isLoading, paginator } = useRankList({
    rankType: RankType.Gold,
    page,
    perPage: 10,
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
            src="/images/ranking/header_ranking.jpg"
            alt=""
            className="img-responsive center-block hidden-xs"
          />
          <img
            src="/images/ranking/header_phone_ranking.jpg"
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
            src="/images/ranking/title_rank.png"
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
                    <div className="table-responsive">
                      <table className="table table-dark table-striped table-hover">
                        <thead>
                          <tr>
                            <th>名次</th>
                            <th>暱稱</th>
                            <th>金幣餘額</th>
                          </tr>
                        </thead>
                        <tbody>
                          {list?.map((t) => (
                            <tr key={t.rank}>
                              <td className="text-center">{t.rank}</td>
                              <td>{t.nickname}</td>
                              <td>${toCurrency(t.gold)}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <Pagination
                      page={page}
                      onPageChange={setPage}
                      totalPage={paginator?.totalPage || 0}
                    />
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

export default GoldRanksPage
