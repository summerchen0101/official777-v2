import { NewsType } from '@/lib/enums'
import { newsTypeMap } from '@/lib/map'
import useNewsList from '@/services/useNewsList'
import { format } from 'date-fns'
import { keyBy } from 'lodash'
import { memo, useEffect, useMemo, useRef, useState } from 'react'
import Pagination from '../Pagination'
function NewsBox() {
  const popRef = useRef<HTMLDivElement>(null)
  const [type, setType] = useState<NewsType>(NewsType.ALL)
  const [page, setPage] = useState(1)
  const { list: newsList, paginator } = useNewsList({ type, page, perpage: 5 })
  const [currentId, setCurrentId] = useState<string>()
  const newsMap = useMemo(() => {
    return keyBy(newsList, (t) => t.id)
  }, [newsList])

  const news = useMemo(() => {
    if (currentId) return newsMap[currentId]
  }, [newsMap, currentId])

  const showDetail = (id: string) => {
    setCurrentId(id)
    const layer = $('#hw-overlay')
    const layerwrap = layer.find('.hw-layer-wrap')
    layer.fadeIn()
    //屏幕居中
    layerwrap.css({
      'margin-top': -layerwrap.outerHeight() / 2,
    })
  }

  const closeDetail = () => {
    $('#hw-overlay').fadeOut()
  }

  return (
    <section className="news" id="news">
      <div className="title-box wow flipInX" data-wow-duration="1s">
        <img
          src="images/title_news.png"
          alt=""
          className="img-responsive center-block"
        />
      </div>
      <div className="news-content">
        <div
          className="news-box wow bounceInRight"
          data-wow-delay="0.2s"
          data-wow-duration="2s"
        >
          <div className="tabbox">
            <div className="tabs tabs-index">
              <ul className="menubar">
                {Object.entries(newsTypeMap).map(([key, label]) => (
                  <li
                    key={key}
                    onClick={() => setType(key as NewsType)}
                    className={key === type ? 'active' : ''}
                  >
                    <a className="menubtn">{label}</a>
                  </li>
                ))}
              </ul>
              <hr className="float-none" />
              <hr />
              <div className="frame_content_all">
                {/*TAB1最新*/}
                <div className="tab-content">
                  <table>
                    <tbody>
                      {newsList.map((t) => (
                        <tr key={t.id}>
                          <td>
                            <p>【{newsTypeMap[t.type]}】</p>
                          </td>
                          <td>
                            <a onClick={() => showDetail(t.id)}>{t.title}</a>
                          </td>
                          <td>
                            <p>
                              {format(new Date(t.created_at), 'yyyy/MM/dd')}
                            </p>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <Pagination
                    page={page}
                    onPageChange={setPage}
                    totalPage={paginator.totalPage}
                  />
                </div>
              </div>
            </div>
            <hr className="float-none" />
          </div>
        </div>
      </div>

      {newsList.length && (
        <div
          className="hw-overlay"
          id="hw-overlay"
          ref={popRef}
          onClick={() => closeDetail()}
        >
          <div className="hw-layer-wrap">
            <span className="glyphicon glyphicon-remove hwLayer-close" />
            <div
              className="hw-content"
              onClick={(e) => {
                e.stopPropagation()
              }}
            >
              <h6>
                {news?.created_at
                  ? format(new Date(news?.created_at), 'yyyy/MM/dd')
                  : ''}
              </h6>
              <hr />
              <h1>{news?.title}</h1>
              <hr />
              <div
                dangerouslySetInnerHTML={{ __html: news?.content || '' }}
              ></div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default memo(NewsBox)
