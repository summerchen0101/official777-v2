import { Goods } from '@/services/useGoodsList'
import { toCurrency } from '@/utils'
import { useMemo } from 'react'
import { FieldValues, useController, UseControllerProps } from 'react-hook-form'

interface Props<T extends FieldValues> extends UseControllerProps<T> {
  list?: Goods[]
}

function RechargePointSelector<T extends FieldValues>({
  list,
  ...restProps
}: Props<T>) {
  const {
    field,
    fieldState: { error },
  } = useController(restProps)

  const listWithPlus = useMemo(() => {
    return list?.map((t) => ({
      ...t,
      plusPercent: Math.round(((t.UseValue - t.Price) / t.Price) * 100) - 5,
    }))
  }, [list])

  return (
    <div className="table-responsive">
      <table className="table table-dark table-striped table-hover">
        <thead>
          <tr>
            <th>品項</th>
            <th>金額</th>
            <th>頭家點</th>
            <th>金幣</th>
          </tr>
        </thead>
        <tbody>
          {listWithPlus?.map((t) => (
            <tr key={t.ItemId} onClick={() => field.onChange(t.ItemId)}>
              <td>
                <input
                  type="radio"
                  checked={t.ItemId === field.value}
                  onChange={() => {}}
                />
              </td>
              <td>${toCurrency(t.Price)}</td>
              <td>{toCurrency(t.UseValue)}</td>
              <td>
                {toCurrency(t.UseValue * 100)}(105%
                {t.plusPercent > 0 ? `+${t.plusPercent}%` : ''})
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {error?.message && <div className="text-danger">{error?.message}</div>}
    </div>
  )
}

export default RechargePointSelector
