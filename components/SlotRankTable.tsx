import { RankType } from '@/lib/enums'
import useRankList from '@/services/useRankList'
import { toCurrency } from '@/utils'
import Loading from './Loading'
import LoadingCover from './LoadingCover'

function SlotRankTable() {
  const { list, isLoading, paginator } = useRankList({
    rankType: RankType.Slot,
    page: 1,
    perPage: 10,
  })
  return (
    <LoadingCover isLoading={isLoading}>
      <table className="w-full text-gray-500 shadow">
        <thead>
          <tr>
            <th className="w-1/3 text-center">名次</th>
            <th>暱稱</th>
            <th className="w-1/3">倍率</th>
          </tr>
        </thead>
        <tbody>
          {list?.map((t, i) => (
            <tr key={i}>
              <td className="text-center">{t.rank}</td>
              <td>{t.nickname}</td>
              <td>{toCurrency(+t.bettingOdds)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </LoadingCover>
  )
}

export default SlotRankTable
