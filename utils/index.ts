import { OptionType } from '@/types/index'
import { format } from 'date-fns'
import { StringMap } from '@/types'
import numeral from 'numeral'
import { imgBaseUrl } from '@/lib/config'

export const toDate = (time: number, isUnix?: boolean) =>
  time && format(isUnix ? time * 1000 : time, 'yyyy-MM-dd')

export const toDateTime = (time: number, isUnix?: boolean) =>
  time && format(isUnix ? time * 1000 : time, 'yyyy-MM-dd HH:mm:ss')

export const optsToMap = (opts: OptionType[]) => {
  const map: Record<string, string> = {}
  opts?.forEach((t) => {
    map[t.value] = t.label
  })
  return map
}

export const mapToOpts = function <T>(map: StringMap): OptionType<T>[] {
  return Object.entries(map).map(([value, label]) => ({
    label,
    value: (isNaN(+value) ? value : +value) as unknown as T,
  }))
}

export const toCurrency = (num: number, decimal: number = 0) =>
  numeral(num).format(
    decimal ? `0,0.${Array(decimal).fill('0').join('')}` : '0,0',
  )
export const fileToDataUrl = async (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (!file) {
      return
    }
    const reader = new FileReader()
    reader.onload = () => {
      resolve(reader.result as string)
    }
    reader.onerror = () => {
      reject(reader.error)
    }
    reader.readAsDataURL(file)
  })
}

export const reviewBase64Img = (base64Str: string) => {
  const img = new Image()
  img.src = base64Str
  const newWin = window.open('', '_blank')
  newWin?.document.write(img.outerHTML)
  newWin?.document.close()
}

export const toImgPath = (path: string) => {
  return imgBaseUrl + path
}
