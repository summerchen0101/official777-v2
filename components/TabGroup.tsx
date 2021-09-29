import cs from 'classnames'

type Props = {
  map: Record<string, string>
  value: string
  onChange: (val: string) => void
  className?: string
}

function TabGroup({ map, value, onChange, className }: Props) {
  return (
    <div className={cs('flex space-x-4', className)}>
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
