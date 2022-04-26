// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getAction } from '@/lib/common/rpc-api'
import { IRPCAction } from '@/lib/common/types'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { action, params } = req.query
  const data = await getAction({
    id: 1,
    method: action as IRPCAction,
    params
  })
  console.log('data', data, params)
  res.status(200).json(data)
}
