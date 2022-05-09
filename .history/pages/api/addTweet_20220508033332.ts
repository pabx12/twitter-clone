// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { TweetBody } from '../../typings'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data : TweetBody = req.body
  const mutations = {
    mutations : [
        {
       "create" : {
          "_type" : 'tweet',
          "title" : data.title,
         "tweetImage" : data.tweetImage,
        //   "author" : data.author
        }
      }
    ]
  }
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + ` ${process.env.SANITY_API_TOKEN}`
    }
  const apiEndpoint = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/mutate/${process.env.NEXT_PUBLIC_SANITY_DATASET}`
  const result = await fetch(apiEndpoint, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(mutations)
    })
  const json = await result.json()
  res.status(200).json({ name: 'Tweet Added' })
}
