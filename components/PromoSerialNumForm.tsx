import useSerialExchange from '@/services/useSerialExchange'
import React from 'react'
import { useForm } from 'react-hook-form'

type Inputs = {
  serialNum: string
}
function PromoSerialNumForm() {
  const { handler: doExchange, isLoading: isSWLoading } = useSerialExchange()
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<Inputs>()

  const onReset = () => reset({ serialNum: '' })

  const onSubmit = handleSubmit(async (d) => {
    try {
      const res = await doExchange({
        serialNum: d.serialNum.trim(),
      })
      if (res?.ok) {
        alert('序號兌換成功')
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
    </form>
  )
}

export default PromoSerialNumForm
