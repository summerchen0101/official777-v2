import useSWSerialExchange from '@/services/useSWSerialExchange'
import { useForm } from 'react-hook-form'

type Inputs = {
  serialNum: string
  password: string
}
function PkgSerialNumForm() {
  const { handler: doSWExchange, isLoading: isSWLoading } =
    useSWSerialExchange()
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<Inputs>()

  const onReset = () => reset({ serialNum: '', password: '' })

  const onSubmit = handleSubmit(async (d) => {
    try {
      const res = await doSWExchange({
        serialNum: d.serialNum.trim(),
        password: d.password.trim(),
      })
      if (res?.ok) {
        alert('智冠序號兌換成功')
        onReset()
      } else {
        alert('兌換失敗')
      }
    } catch (err) {
      console.log(err)
    }
  })
  return (
    <form className="form-horizontal" role="form">
      <div className="form-group input-group-lg">
        <label htmlFor="number" className="control-label">
          請輸入兌換序號
        </label>
        <input
          type="text"
          autoComplete="new-password"
          className="form-control"
          placeholder="請輸入兌換序號"
          id="number"
          {...register('serialNum', { required: '不可為空' })}
        />
        {errors.serialNum && (
          <div className="text-danger">{errors.serialNum.message}</div>
        )}
      </div>
      <div className="form-group input-group-lg">
        <label htmlFor="Password" className="control-label">
          請輸入兌換密碼
        </label>
        <input
          type="password"
          autoComplete="new-password"
          className="form-control"
          id="Password"
          placeholder="請輸入兌換密碼"
          {...register('password', { required: '不可為空' })}
        />
        {errors.password && (
          <div className="text-danger">{errors.password.message}</div>
        )}
        <br />
        <button
          type="button"
          className="btn btn-default btn-lg btn-50"
          onClick={onReset}
        >
          取消
        </button>
        <button
          type="button"
          className="btn btn-default btn-lg btn-50"
          onClick={onSubmit}
        >
          確認兌換
        </button>
        <hr className="float-none" />
      </div>
    </form>
  )
}

export default PkgSerialNumForm
