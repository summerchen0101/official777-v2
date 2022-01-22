interface Activity {
  id: number | string
  name: string
  disable?: boolean
}

export const activityList: Activity[] = [
  { id: 1, name: '名車抽起來' },
  { id: 2, name: '衝等大挑戰' },
  { id: 3, name: '新年送紅包' },
  { id: 4, name: '集獎券送好禮' },
  { id: 'info', name: '注意事項' },
]
