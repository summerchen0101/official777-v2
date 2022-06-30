import EventWrapper from '@/components/event/EventWrapper'
import { CustomColumnType, EventType } from '@/lib/enums'
import useEvent from '@/services/useEvent'
import usePrizeList, { Prize } from '@/services/usePrizeList'
import { toCurrency } from '@/utils'
import { format } from 'date-fns'
import { zhTW } from 'date-fns/locale'
import { useRouter } from 'next/dist/client/router'
import React, { useMemo } from 'react'
import cs from 'classnames'

function EventPage() {
  const router = useRouter()
  const group_code = router.query.group_code as string
  const event_code = router.query.event_code as string
  const { data } = useEvent(event_code)
  const { list: prizeList } = usePrizeList()
  const prizeMap = useMemo<Record<number, Prize>>(
    () =>
      prizeList?.reduce<Record<number, Prize>>((obj, next) => {
        obj[next.id] = next
        return obj
      }, {}) || {},
    [prizeList],
  )
  return (
    <EventWrapper group_code={group_code} current={event_code}>
      <div className="title">{data?.title}</div>

      <div className="section">
        <div hidden={data?.type === EventType.NORMAL}>
          <h2 className="subTitle">
            <span className="align-middle">活動時間</span>
          </h2>
          <div className="subContent">
            {data?.start_at &&
              format(new Date(data?.start_at), 'yyyy-MM-dd(eeeeee) HH:mm', {
                locale: zhTW,
              })}
            {` ~ `}
            {data?.end_at &&
              format(new Date(data?.end_at), 'yyyy-MM-dd(eeeeee) HH:mm', {
                locale: zhTW,
              })}
          </div>
        </div>
        <div hidden={data?.type === EventType.NORMAL}>
          <h2 className="subTitle">活動對象</h2>
          <div className="subContent">{data?.target}</div>
        </div>
        <div hidden={data?.type === EventType.NORMAL}>
          <h2 className="subTitle">活動說明</h2>
          <div
            className="subContent html"
            dangerouslySetInnerHTML={{ __html: data?.content || '' }}
          ></div>
        </div>
        <div hidden={data?.type !== EventType.NORMAL} className="sm:mt-5">
          <div
            className="subContent html"
            dangerouslySetInnerHTML={{ __html: data?.content || '' }}
          ></div>
        </div>

        {/* 衝等 */}
        <div
          className="grid sm:grid-cols-2 gap-8"
          hidden={data?.type !== EventType.LEVEL_PRIZE}
        >
          {data?.groups?.map((group, group_i) => (
            <table key={group_i}>
              <thead>
                <tr>
                  <th colSpan={2}>
                    <h1 className="text-center text-lg">{group.title}</h1>
                  </th>
                </tr>
                <tr>
                  <th>累積提升等級數</th>
                  <th>獎勵內容</th>
                </tr>
              </thead>
              <tbody>
                {group.levels.map((t, i) => (
                  <tr key={i} className="">
                    <td className="w-[43%] sm:w-auto text-center text-xl text-gold-700 font-medium">
                      <h2 className="text-xl sm:text-2xl">{t.level}級</h2>
                    </td>
                    <td>
                      <div className="flex items-center gap-1 sm:text-lg font-medium">
                        <img
                          src={prizeMap[t.prize_id]?.img_path}
                          alt=""
                          className="w-[30%] sm:w-[4.5rem]"
                        />
                        {prizeMap[t.prize_id]?.name} x {t.count}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ))}
        </div>

        {/* 刮刮樂 */}
        <div hidden={data?.type !== EventType.GAME_REBATE} className="">
          <table className="w-full sm:w-[480px] mx-auto">
            <thead>
              <tr className="text-xl">
                <th>遊戲</th>
                <th>回饋%數</th>
              </tr>
            </thead>
            <tbody>
              {data?.rebates?.map((t) => (
                <tr key={t.game} className="text-center">
                  <td className="text-lg font-medium">{t.game}</td>
                  <td
                    key={t.game}
                    className="font-semibold text-2xl text-red-700"
                  >
                    {t.rebate}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 累儲 */}
        <div hidden={data?.type !== EventType.RECHARGE_PRIZE} className="">
          <table className="w-full sm:w-[600px] mx-auto">
            <thead>
              <tr className="text-lg">
                <th>累積儲值金額</th>
                <th>獎勵內容</th>
              </tr>
            </thead>
            <tbody>
              {data?.recharges?.map((t) => (
                <tr key={t.amount} className="">
                  <td className="w-[42%] sm:w-auto text-gold-700 font-medium">
                    <h2 className="text-xl sm:text-2xl text-center">
                      {toCurrency(t.amount)}
                    </h2>
                  </td>
                  <td key={t.amount}>
                    <div className="flex items-center sm:pl-[20%] gap-3 font-medium sm:text-lg">
                      <img
                        src={prizeMap[t.prize_id]?.img_path}
                        alt=""
                        className="w-[30%] sm:w-[4.5rem]"
                      />
                      {prizeMap[t.prize_id]?.name} x {t.count}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 客製化表格 */}
        {data?.custom_tables?.map((tb, i) => (
          <div
            key={i}
            hidden={data?.type !== EventType.CUSTOM_TABLE}
            className="overflow-x-auto"
          >
            <table className="w-full sm:max-w-2xl mx-auto whitespace-nowrap text-center">
              <thead>
                <tr hidden={!tb.title}>
                  <th colSpan={tb.columns.length}>
                    <h1 className="text-center text-lg">{tb.title}</h1>
                  </th>
                </tr>
                <tr>
                  {tb.columns.map((c) => (
                    <th key={c.key}>{c.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tb?.rows?.map((row, row_i) => (
                  <tr key={row_i} className="text-center">
                    {tb.columns.map((c) => (
                      <td key={c.key}>
                        <div
                          className={cs(
                            'font-medium sm:text-lg flex flex-col sm:flex-row gap-x-3 items-center',
                            row[c.key].icon
                              ? 'justify-left sm:pl-8'
                              : 'justify-center',
                            {
                              large: c.type === CustomColumnType.LARGE,
                              highlight: c.type === CustomColumnType.HIGHLIGHT,
                            },
                          )}
                        >
                          {!!row[c.key].icon && (
                            <img
                              src={prizeMap[row[c.key].icon!]?.img_path}
                              alt=""
                              className="w-[30%] sm:w-[4.5rem] align-middle"
                            />
                          )}
                          <div
                            className="align-middle"
                            dangerouslySetInnerHTML={{
                              __html:
                                row[c.key].text?.replace('\\n', '<br/>') || '',
                            }}
                          ></div>
                        </div>
                      </td>
                    ))}
                    {/* <td
                      key={t.game}
                      className="font-semibold text-2xl text-red-700"
                    >
                      {t.rebate}%
                    </td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </EventWrapper>
  )
}

export default EventPage
