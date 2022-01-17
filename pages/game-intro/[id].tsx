import GameIntro from '@/components/GameIntro'
import { useRouter } from 'next/dist/client/router'
import React from 'react'

export default function SingleIntroPage() {
  const router = useRouter()
  const gameId = +(router.query.id as string)
  return <GameIntro gameId={gameId} />
}
