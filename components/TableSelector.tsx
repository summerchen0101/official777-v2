import { Goods } from '@/services/useGoodsList'
import { toCurrency } from '@/utils'
import React, { forwardRef, ReactFragment } from 'react'

type Props = {
  list?: Goods[]
  value: number
  onChange: (val: number) => void
}

function TableSelector({ list = [], value, onChange }: Props) {
  return (
    <table className="w-full rounded-lg overflow-hidden">
      <thead>
        <tr>
          <th></th>
          <th>金額</th>
          <th>金幣數量</th>
        </tr>
      </thead>
      <tbody>
        {list?.map((t) => (
          <tr key={t.ItemId}>
            <td>
              <input
                type="radio"
                name="productID"
                checked={value === t.ItemId}
                value={t.ItemId}
                onChange={(e) => onChange(+e.target.value)}
              />
            </td>
            <td>${toCurrency(t.Price)}</td>
            <td>{toCurrency(t.UseValue)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default TableSelector
