import React from 'react'

type Props = {
  page: number
  onPageChange: (page: number) => void
  totalPage: number
}
function Pagination({ page, onPageChange, totalPage }: Props) {
  return (
    <form role="form" className="form-box">
      <div className="form-group">
        <div className="form-btn-left">
          <button
            type="button"
            className="btn btn-default"
            disabled={page === 1}
            onClick={() => onPageChange(page > 1 ? page - 1 : 1)}
          >
            上一頁
          </button>
        </div>
        <select
          className="form-control form-center"
          onChange={(e) => onPageChange(+e.target.value)}
          value={page}
        >
          {[...Array(totalPage)].map((_, i) => (
            <option key={i}>{i + 1}</option>
          ))}
        </select>
        <div className="form-btn-right">
          <button
            type="button"
            className="btn btn-default"
            disabled={page >= totalPage}
            onClick={() => onPageChange(page < totalPage ? page + 1 : page)}
          >
            下一頁
          </button>
        </div>
      </div>
      <hr className="float-none" />
    </form>
  )
}

export default Pagination
