import React from 'react'
import { Tweet } from '../typings'
export type Props = {
    tweet: Tweet
}
function Tweet({ tweet }: Props) {
  return (
    <div>
        <img src={tweet.tweetImage} alt='profile' className='rounded-full mr-5'/>
    </div>
  )
}

export default Tweet