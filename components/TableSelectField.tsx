import { Goods } from '@/services/useGoodsList'
import { toCurrency } from '@/utils'
import { FieldValues, useController, UseControllerProps } from 'react-hook-form'

interface Props<T extends FieldValues> extends UseControllerProps<T> {
  list?: Goods[]
  disabled?: boolean
}

function TableSelectField<T extends FieldValues>({
  list,
  ...restProps
}: Props<T>) {
  const {
    field,
    fieldState: { error },
  } = useController(restProps)
  return (
    <>
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
          {list?.map((t) => (
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
                {toCurrency(t.UseValue * 100)}(
                {Math.round(((t.UseValue - t.Price) / t.Price) * 100)}%)
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {error?.message && <div className="text-danger">{error?.message}</div>}
    </>
  )
}

export default TableSelectField
