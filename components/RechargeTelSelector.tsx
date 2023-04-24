import { telePaymentMap } from '@/lib/map'
import { FieldValues, useController, UseControllerProps } from 'react-hook-form'

interface Props<T extends FieldValues> extends UseControllerProps<T> {}

function RechargeTelSelector<T extends FieldValues>(props: Props<T>) {
  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController(props)

  return (
    <div className="table-responsive">
      <table className="table table-dark table-striped table-hover">
        <thead>
          <tr>
            <th colSpan={5}>請選擇電信</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {Object.entries(telePaymentMap).map(([key, label]) => (
              <td key={key} onClick={() => onChange(key)}>
                <label>
                  <input
                    type="radio"
                    checked={+key === +value}
                    onChange={() => {}}
                  />
                  {label}
                </label>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
      {error?.message && <div className="text-danger">{error?.message}</div>}
    </div>
  )
}

export default RechargeTelSelector
