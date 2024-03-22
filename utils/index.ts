import { appUrlMap } from './../lib/map'
import { Platform } from './../lib/enums'
import { OptionType } from '@/types/index'
import { differenceInMilliseconds, format } from 'date-fns'
import { StringMap } from '@/types'
import numeral from 'numeral'
import qs from 'query-string'

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

function showLayer(id: string) {
  var layer = $('#' + id),
    layerwrap = layer.find('.hw-layer-wrap , .hw-layer-wrap2 , .hw-layer-wrap3')
  layer.fadeIn()
  //屏幕居中
  layerwrap.css({
    'margin-top': -layerwrap.outerHeight() / 2,
  })
}

export function showLoginPopup() {
  showLayer('loginPopup')
}

export function showAppPopup() {
  showLayer('appPopup')
}

export const queryPlusQuery = (
  url: string,
  obj: Record<string, string | number>,
) => {
  const parsed = qs.parseUrl(url)

  Object.entries(obj).map(([key, value]) => {
    parsed.query[key] = value.toString()
  })

  const stringified = qs.stringify(parsed.query)
  return `${parsed.url}?${stringified}`
}

export const handleComingSoon = () => {
  alert('敬請期待～')
}

export const scheduleAction = (hours: number, cb: () => void) => {
  const now = new Date()
  const nextTime = new Date(now)
  const hoursToMilliseconds = hours * 60 * 60 * 1000 // 將小時轉換為毫秒
  nextTime.setTime(
    now.getTime() + hoursToMilliseconds - (now.getTime() % hoursToMilliseconds),
  )

  const delay = differenceInMilliseconds(nextTime, now)

  // 設置定時器
  setTimeout(() => {
    cb()
    scheduleAction(hours, cb) // 重新計畫下一次，使用相同的間隔
  }, delay)
}

export function schedulePeriodAction(
  intervalHours: number,
  durationHours: number,
  cb: () => void,
): void {
  // 计算下一次活动开始的时间
  function calculateNextStartTime(): number {
    const now: Date = new Date()
    const msSinceMidnight: number =
      now.getTime() - new Date(now.toDateString()).getTime()
    const intervalMs: number = intervalHours * 60 * 60 * 1000
    const nextStartDelay: number = intervalMs - (msSinceMidnight % intervalMs)
    return now.getTime() + nextStartDelay
  }

  // 定时检查是否执行回调
  function checkAndScheduleCallback(): void {
    const now: Date = new Date()
    const msSinceMidnight: number =
      now.getTime() - new Date(now.toDateString()).getTime()
    const intervalMs: number = intervalHours * 60 * 60 * 1000
    const positionInCycle: number = msSinceMidnight % intervalMs
    const durationMs: number = durationHours * 60 * 60 * 1000

    if (positionInCycle < durationMs) {
      cb()
    }

    // 计算下一次触发检查的时间
    const nextStartTime: number = calculateNextStartTime()
    setTimeout(checkAndScheduleCallback, nextStartTime - Date.now())
  }

  checkAndScheduleCallback()
}
