import { appUrlMap } from './../lib/map'
import { Platform } from './../lib/enums'
import { OptionType } from '@/types/index'
import { format } from 'date-fns'
import { StringMap } from '@/types'
import numeral from 'numeral'

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

export const toCurrency = (num: number = 0, decimal: number = 0) =>
  numeral(num).format(
    decimal ? `0,0.${Array(decimal).fill('0').join('')}` : '0,0',
  )
export const getFileInfo = async (
  file: File,
): Promise<{ dataUrl: string; size: number }> => {
  return new Promise((resolve, reject) => {
    if (!file) {
      return
    }
    const reader = new FileReader()
    reader.onload = () => {
      resolve({ dataUrl: reader.result as string, size: file.size })
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

export function checkPlatform() {
  const isIOS =
    [
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod',
    ].includes(navigator.platform) ||
    // iPad on iOS 13 detection
    (navigator.userAgent.includes('Mac') && 'ontouchend' in document)
  return isIOS ? Platform.IOS : Platform.Android
}

export function localOpen(appUrl: string) {
  window.location.replace(appUrl)
  const appDownloadUrl = appUrlMap[checkPlatform()]
  setTimeout(function () {
    window.location.replace(appDownloadUrl)
  }, 2000)
}

export function showLoginPopup() {
  const layer = $('#hw-layer02')
  const layerwrap = layer.find(
    '.hw-layer-wrap , .hw-layer-wrap2 , .hw-layer-wrap3',
  )
  layer.fadeIn()
  //屏幕居中
  layerwrap.css({
    'margin-top': -layerwrap.outerHeight() / 2,
  })
}
