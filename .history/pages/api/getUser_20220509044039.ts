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
  const user: User = await client.fetch(userQuery,{email: req.query.email})
  res.status(200).json(user)
}
