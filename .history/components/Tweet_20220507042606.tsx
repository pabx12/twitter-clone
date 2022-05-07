import React from 'react'
import { Tweet } from '../typings'
export type Props = {
    tweet: Tweet
}
function Tweet({ tweet }: Props) {
  return (
    <div>
        <img src={tweet.tweetImage} alt='profile' className='rounded-full mr-5'/>
        <div>
            <div>
                <p> {tweet.username.name} </p>
                <p> {tweet.username.name.replace(/\$+/g, '').toLowerCase()} </p>
            </div>
        </div>
    </div>
  )
}

export default Tweet