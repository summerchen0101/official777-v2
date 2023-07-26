import { ResBase } from '@/types'
import { useUserStore } from '@/store/useUserStore'
import Axios, { AxiosError, AxiosRequestConfig, Method } from 'axios'
import JSONbig from 'json-bigint'
import { useCallback } from 'react'
import useErrorHandler from './useErrorHandler'
import { useStore } from '@/store/useStore'
import { errCodes } from '@/lib/errCodes'
import { useRouter } from 'next/dist/client/router'
import axios from 'axios'

export const apiPath = 'apis/v1'
export const publicApiPath = 'public/apis/v1'

const useRequest = () => {
  const token = useUserStore((s) => s.tokenInfo?.accessToken)
  const apiBaseUrl = useStore((s) => s.clientEnv.apiBaseUrl)
  const router = useRouter()
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
          baseURL: apiBaseUrl,
          // validateStatus: function (status) {
          //   return status < 500
          // },
          transformResponse: [(data) => (data ? JSONbig.parse(data) : data)],
          transformRequest: [
            (data: any, headers: any) => {
              if (data?.append && data?.values) {
                // is FormData
                return data
              }
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
          switch (+res.data.code) {
            case 401001:
              router.push('/home')
              break
            case 401003:
              return
            case 403001:
              alert('登入失敗')
              return

            default:
              break
          }

          // throw Error('错误发生')
        }
        // console.log(JSONbig.parse(res.data))
        return { ok: true, ...res.data }
      } catch (err) {
        if (axios.isAxiosError(err)) {
          console.log(err.response?.data)
          console.log(err.response?.status)
          console.log(err.toJSON())
          apiErrHandler(err as AxiosError<any>)
          return { ok: false, ...err.response?.data } as Res
        }
        return { ok: false, message: '', code: 999 } as unknown as Res
      }
    },
    [apiErrHandler, token],
  )
}

export default useRequest
