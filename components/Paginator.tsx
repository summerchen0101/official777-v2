import { Pagination } from '@/types'
import React from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import ReactPaginate from 'react-paginate'

type Props = {
  paginator?: Pagination
  onPageChange: (page: number) => void
}
function Paginator({ paginator, onPageChange }: Props) {
  return (
    <ReactPaginate
      className="text-white flex justify-center items-center gap-6 text-lg mt-4"
      breakLabel="..."
      // initialPage={paginator?.page}
      nextLabel={<FaAngleRight />}
      onPageChange={({ selected }) => {
        onPageChange(selected + 1)
        window.scrollTo({ top: 0 })
      }}
      pageRangeDisplayed={paginator?.perPage}
      pageCount={paginator?.totalPage || 1}
      previousLabel={<FaAngleLeft />}
      activeLinkClassName="text-gold-500 cursor-not-allowed"
    />
  )
}

export default Paginator
