import React from 'react'
import cs from 'classnames'
import classNames from 'classnames'

type Props = {
  map: Record<string, string>
  value: string
  onChange: (val: string) => void
  className?: string
}

export default function MySelect({ map, value, onChange }: Props) {
  return (
    <select
      className={cs('tab-selector block lg:hidden mb-3', classNames)}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {Object.entries(map).map(([key, label]) => (
        <option key={key} value={key}>
          {label}
        </option>
      ))}
    </select>
  )
}
