import { User} from './../../typings.d';
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { client } from '../../sanity';
import {groq} from 'next-sanity'


const userQuery = groq`
*[_type == "user" && email == $email]
`


type Data = User

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const result = await client.fetch(userQuery,{email: req.query.email})
  const user: User=  result[0]
  res.status(200).json(user)
}
