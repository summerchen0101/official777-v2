import { RankType } from '@/lib/enums'
import useRankList from '@/services/useRankList'
import { toCurrency } from '@/utils'
import Loading from './Loading'

function GoldRankTable() {
  const { list, isLoading, paginator } = useRankList({
    rankType: RankType.Gold,
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
          <th className="w-1/3">金幣</th>
        </tr>
      </thead>
      <tbody>
        {list?.map((t, i) => (
          <tr key={i}>
            <td className="text-center">{t.rank}</td>
            <td>{t.nickname}</td>
            <td>${toCurrency(t.gold, 0)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default GoldRankTable
