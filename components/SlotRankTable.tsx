import { RankType } from '@/lib/enums'
import useRankList from '@/services/useRankList'
import Loading from './Loading'

function SlotRankTable() {
  const { list, isLoading, paginator } = useRankList({
    rank_type: RankType.Slot,
    page: 1,
    perPage: 10,
  })
  if (isLoading) {
    return <Loading />
  }
  return (
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
            <td>{t.betting_odds}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default SlotRankTable
