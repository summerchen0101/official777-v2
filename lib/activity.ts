interface Activity {
  id: number | string
  name: string
  bossName: string
  disable?: boolean
}

export const activityList: Activity[] = [
  { id: 1, name: '名車抽起來', bossName: '拿券抽金幣' },
  { id: 2, name: '衝等大挑戰', bossName: '衝等大挑戰' },
  { id: 3, name: '新年送紅包', bossName: '新年送紅包' },
  { id: 4, name: '集獎券送好禮', bossName: '集獎券送好禮' },
  { id: 'info', name: '注意事項', bossName: '注意事項' },
]
