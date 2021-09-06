import cs from 'classnames'
import React from 'react'

function TabGroup({
  map,
  value,
  onChange,
}: {
  map: Record<string, string>
  value: string
  onChange: (val: string) => void
}) {
  return (
    <div className="flex space-x-4">
      {Object.entries(map).map(([key, label]) => (
        <div
          key={key}
          className={cs('tab', { active: key === value })}
          onClick={() => onChange(key)}
        >
          {label}
        </div>
      ))}
    </div>
  )
}

export default TabGroup
