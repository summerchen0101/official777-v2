import { useUserStore } from '@/store/useUserStore'
import { AxiosError } from 'axios'
import httpStatus from 'http-status'
import { useRouter } from 'next/dist/client/router'
import { useCallback } from 'react'

function useErrorHandler() {
  const router = useRouter()
  const clearUser = useUserStore((s) => s.clearUser)
  const apiErrHandler = useCallback(
    (error: AxiosError<any>) => {
      console.log(error.message)
      if (error.response) {
        // 错误来自回传参数
        let msg = '錯誤發生'
        const statusErrMsg = httpStatus[error.response.status] as string

        if (statusErrMsg) {
          msg = httpStatus[error.response.status] as string
          console.log(msg)
        }
        if (error.response.status === 401) {
          router.push('/')
          clearUser()
        }
        if (error.response.data.message) {
          msg = error.response.data.message
          console.log(msg)
        }
        alert(msg)
      } else if (error.request) {
        // 错误来自请求参数
        console.log(error.request)
        alert('請求錯誤')
      } else if (error.message) {
        // 错误来自其他因素
        alert(error.message)
      }
      // console.log(error.config)
    },
    [clearUser, router],
  )
  return {
    apiErrHandler,
  }
}

export default useErrorHandler
