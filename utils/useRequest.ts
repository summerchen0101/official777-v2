import { ResBase } from '@/types'
import { useUserStore } from '@/store/useUserStore'
import Axios, { AxiosError, AxiosRequestConfig, Method } from 'axios'
import JSONbig from 'json-bigint'
import { useCallback } from 'react'
import useErrorHandler from './useErrorHandler'

export const apiPath = 'apis/v1'
export const publicApiPath = 'public/apis/v1'

const useRequest = () => {
  const token = useUserStore((s) => s.tokenInfo?.accessToken)

  const { apiErrHandler } = useErrorHandler()
  return useCallback(
    async function <Res extends ResBase, Req extends {} = {}>({
      method,
      url,
      data,
      config,
    }: {
      method: Method
      url: string
      data?: Req
      config?: AxiosRequestConfig
    }) {
      try {
        const res = await Axios.request<Res>({
          method,
          url,
          data,
          baseURL: '/api',
          validateStatus: function (status) {
            return (status >= 200 && status < 300) || status === 422
          },
          transformResponse: [(data) => (data ? JSONbig.parse(data) : data)],
          transformRequest: [
            (data: any, headers: any) => {
              headers['Content-Type'] = 'application/json'
              return JSONbig.stringify(data)
            },
          ],
          headers: {
            Authorization: `Bearer ${token}`,
          },
          ...config,
        })
        // const newToken = res.headers.authorization?.replace('Bearer ', '')
        // if (newToken) {
        //   setToken(newToken)
        //   console.log(`
        //     Refresh Token at ${new Date().toLocaleTimeString()}
        //     old: ...${token.slice(-3)}
        //     new: ...${newToken.slice(-3)}
        //   `)
        // }
        if (res.data.code) {
          console.log(res.data)
          throw Error(res.data?.message || '错误发生')
        }
        // console.log(JSONbig.parse(res.data))
        return { ok: true, ...res.data }
      } catch (err) {
        console.log(err)
        apiErrHandler(err as AxiosError<any>)
      }
      return null
    },
    [apiErrHandler, token],
  )
}

export default useRequest
