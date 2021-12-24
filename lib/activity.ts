interface Activity {
  id: number
  name: string
  date: string
}

export const activityList: Activity[] = [
  { id: 1, name: '名車抽起來', date: '1/14-2/12' },
  { id: 2, name: '新年送紅包', date: '1/14-2/12' },
  { id: 3, name: '道具碎片加倍送', date: '1/12-1/19' },
  { id: 4, name: '十連抽加碼送', date: '1/19-1/28' },
  { id: 5, name: '衝等大挑戰', date: '1/29-2/8' },
  { id: 6, name: '集獎券送好禮', date: '2/9-2/12' },
  // { id: 7, name: '注意事項' },
]
