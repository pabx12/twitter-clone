import { User} from './../../typings.d';
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { client } from '../../sanity';
import {groq} from 'next-sanity'


const feedQuery = (email:any) => {
    return email
}


type Data = {
//   user: User
    test: any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const user: User = await client.fetch(feedQuery(req.query.email))
  res.status(200).json({ test:"test" })
}
