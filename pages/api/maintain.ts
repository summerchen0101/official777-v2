// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import fetch from 'node-fetch'

type Data = {
  isOpen: boolean
  content: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const response = await fetch(
    'https://web-alpha.ffglobaltech.com/json/billboard.json',
  )
  const data = (await response.json()) as Data
  res.status(200).json(data)
  // res.status(200).json({ isOpen: true, content: 'no' })
}
