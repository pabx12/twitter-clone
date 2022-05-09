import { Tweet} from './../../typings.d';
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { client } from '../../sanity';
import {groq} from 'next-sanity'


const feedQuery = groq`
*[_type == "tweet"]{ ..., author-> }{
  _id,
 "relatedComments": *[_type=='comment' && references(^._id)]{ 
  _id,
  comment,
  _createdAt,
  author->
 
},
  ...
} | order(_createdAt desc)`


type Data = {
  tweets: Tweet[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const tweets: Tweet[] = await client.fetch(feedQuery)
  res.status(200).json({ tweets })
}
